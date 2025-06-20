import AuthLayout from "@/layouts/AuthLayout"
import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: LoginPage },
      { index: true, path: "register", Component: RegisterPage },
    ],
  },
])

export default router
