import {
  type IAuthResponse,
  type IAuthState,
  type ILoginCredentials,
  type IRegisterData,
} from "./../../types/auth"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { IUser } from "@/types/user"
import authService from "@/services/authService"
import { AxiosError } from "axios"

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

// Async thunks
export const loginUser = createAsyncThunk<IAuthResponse, ILoginCredentials>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials)
      localStorage.setItem("token", response.token)
      localStorage.setItem("refreshToken", response.refreshToken)
      return response
    } catch (error: unknown) {
      let errorMessage = "Login failed"

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage
      }

      return rejectWithValue(errorMessage)
    }
  }
)

export const registerUser = createAsyncThunk<IAuthResponse, IRegisterData>(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authService.register(userData)
      localStorage.setItem("token", response.token)
      localStorage.setItem("refreshToken", response.refreshToken)
      return response
    } catch (error: unknown) {
      let errorMessage = "Registration failed"

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage
      }

      return rejectWithValue(errorMessage)
    }
  }
)

export const getCurrentUser = createAsyncThunk<IUser>(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      return await authService.getCurrentUser()
    } catch (error: unknown) {
      let errorMessage = "Failed to get user"

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage
      }

      return rejectWithValue(errorMessage)
    }
  }
)

export const logoutUser = createAsyncThunk<void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout()
      localStorage.removeItem("token")
      localStorage.removeItem("refreshToken")
    } catch (error: unknown) {
      let errorMessage = "Logout failed"

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage
      }

      return rejectWithValue(errorMessage)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    updateUser: (state, action: PayloadAction<Partial<IUser>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        state.isAuthenticated = false
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        state.isAuthenticated = false
      })
      // Get current user
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null
        state.token = null
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
        state.error = null
      })
  },
})

export const { clearError, updateUser } = authSlice.actions
export default authSlice.reducer
