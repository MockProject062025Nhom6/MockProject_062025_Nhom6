import http from "@/lib/http"

interface LoginPayload {
  username: string
  password: string
}

export const login = (payload: LoginPayload) => {
  return http.post("/auth/login", payload)
}
