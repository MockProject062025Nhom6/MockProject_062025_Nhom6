export interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

export interface LoginResponse {
  access_token: string
  user: {
    id: number
    email: string
    username: string
  }
}

export interface ApiError {
  message: string
  error?: string
  statusCode?: number
}
