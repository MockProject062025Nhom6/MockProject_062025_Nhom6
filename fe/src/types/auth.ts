import type { IUser } from "./user"

export interface IAuthState {
  user: IUser | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface ILoginCredentials {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  password: string
}

export interface IAuthResponse {
  user: IUser
  token: string
  refreshToken: string
}
