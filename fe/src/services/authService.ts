import type {
  IAuthResponse,
  ILoginCredentials,
  IRegisterData,
} from "@/types/auth"
import api from "./api"
import type { IUser } from "@/types/user"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

export const authApi = {
  login: async (credentials: ILoginCredentials): Promise<IAuthResponse> => {
    const response = await api.post("/auth/login", credentials)
    return response.data
  },

  register: async (data: IRegisterData): Promise<IAuthResponse> => {
    const response = await api.post("/auth/register", data)
    return response.data
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/logout")
  },

  refreshToken: async (): Promise<IAuthResponse> => {
    const response = await api.post("/auth/refresh")
    return response.data
  },

  getCurrentUser: async (): Promise<IUser> => {
    const response = await api.get("/auth/me")
    return response.data
  },

  updateProfile: async (data: Partial<IUser>): Promise<IUser> => {
    const response = await api.put("/auth/profile", data)
    return response.data
  },
}

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  profile: () => [...authKeys.all, "profile"] as const,
}

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Store token
      localStorage.setItem("token", data.token)
      if (data.refreshToken) {
        localStorage.setItem("refreshToken", data.refreshToken)
      }

      // Update user data in cache
      queryClient.setQueryData(authKeys.user(), data.user)

      // Invalidate and refetch user-related queries
      queryClient.invalidateQueries({ queryKey: authKeys.all })
    },
    onError: (error) => {
      console.error("Login failed:", error)
      // Clear any existing auth data
      localStorage.removeItem("token")
      localStorage.removeItem("refreshToken")
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
      if (data.refreshToken) {
        localStorage.setItem("refreshToken", data.refreshToken)
      }
      queryClient.setQueryData(authKeys.user(), data.user)
      queryClient.invalidateQueries({ queryKey: authKeys.all })
    },
  })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear tokens
      localStorage.removeItem("token")
      localStorage.removeItem("refreshToken")

      // Clear all cached data
      queryClient.clear()

      // Redirect to login page
      window.location.href = "/login"
    },
    onError: () => {
      // Even if logout fails on server, clear local data
      localStorage.removeItem("token")
      localStorage.removeItem("refreshToken")
      queryClient.clear()
      window.location.href = "/login"
    },
  })
}

export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.user(),
    queryFn: authApi.getCurrentUser,
    enabled: !!localStorage.getItem("token"),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: (failureCount, error: unknown) => {
      // Don't retry if unauthorized
      if (error instanceof AxiosError && error?.response?.status === 401) {
        return false
      }
      return failureCount < 3
    },
  })
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: authApi.updateProfile,
    onSuccess: (updatedUser) => {
      // Update user data in cache
      queryClient.setQueryData(authKeys.user(), updatedUser)

      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: authKeys.profile() })
    },
  })
}

class AuthService {
  async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    const response = await api.post("/auth/login", credentials)
    return response.data
  }

  async register(userData: IRegisterData): Promise<IAuthResponse> {
    const response = await api.post("/auth/register", userData)
    return response.data
  }

  async getCurrentUser(): Promise<IUser> {
    const response = await api.get("/auth/me")
    return response.data
  }

  async logout(): Promise<void> {
    await api.post("/auth/logout")
  }

  async refreshToken(): Promise<{ token: string }> {
    const refreshToken = localStorage.getItem("refreshToken")
    const response = await api.post("/auth/refresh", { refreshToken })
    return response.data
  }

  async forgotPassword(email: string): Promise<void> {
    await api.post("/auth/forgot-password", { email })
  }

  async resetPassword(token: string, password: string): Promise<void> {
    await api.post("/auth/reset-password", { token, password })
  }
}

export default new AuthService()
