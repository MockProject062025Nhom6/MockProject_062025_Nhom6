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

export interface RegisterResponse {
  id: number
  email: string
  username: string
  createdAt: string
  updatedAt: string
}
export interface RegisterFormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
  smsNotifications: boolean
  agreeToTerms: boolean
}
