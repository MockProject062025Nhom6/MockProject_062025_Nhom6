import { ApiError, LoginResponse } from "@/types"

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const errorData: ApiError = await response.json()
      throw new Error(errorData.message || "Login failed")
    }

    return response.json()
  },
}

export const tokenManager = {
  setToken: (token: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem("access_token", token)
    } else {
      sessionStorage.setItem("access_token", token)
    }
  },

  getToken: () => {
    return (
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token")
    )
  },

  removeToken: () => {
    localStorage.removeItem("access_token")
    sessionStorage.removeItem("access_token")
  },
}

export const userManager = {
  setUser: (user: LoginResponse["user"]) => {
    localStorage.setItem("user", JSON.stringify(user))
  },

  getUser: () => {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  },

  removeUser: () => {
    localStorage.removeItem("user")
  },
}
