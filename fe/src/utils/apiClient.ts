import { tokenManager } from "@/api/auth"
import { LoginResponse } from "@/types"

export class ApiClient {
  private baseURL: string

  constructor(baseURL: string = "http://localhost:3000") {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const token = tokenManager.getToken()

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      )
    }

    return response.json()
  }

  // Auth endpoints
  auth = {
    login: (email: string, password: string) =>
      this.request<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),

    register: (email: string, password: string, username: string) =>
      this.request("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
      }),

    getProfile: () =>
      this.request("/auth/profile", {
        method: "POST",
      }),
  }
}
