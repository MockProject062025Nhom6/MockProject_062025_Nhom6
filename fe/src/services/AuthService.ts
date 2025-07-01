import http from "@/lib/http"

interface LoginPayload {
  email: string
  password: string
}

export const login = (payload: LoginPayload) => {
  return http.post("/auth/login", payload)
}
