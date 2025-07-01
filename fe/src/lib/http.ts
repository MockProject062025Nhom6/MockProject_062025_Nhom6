import axios from "axios"

// Tạo instance
const http = axios.create({
  baseURL: "http://localhost:3000/api", // Thay bằng API thực tế của bạn
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default http
