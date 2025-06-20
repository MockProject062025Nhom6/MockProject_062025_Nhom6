import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    index: true,
    Component: LoginPage,
  },
  {
    path: "/Register",
    Component: RegisterPage
  }
])

export default router
