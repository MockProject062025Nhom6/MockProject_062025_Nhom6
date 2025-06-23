import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL || "http://localhost:3000/api",
  timeout: 10000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export default api
