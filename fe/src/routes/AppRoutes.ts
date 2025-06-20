import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: LoginPage,
  },
  {
    path: "/register",
    index: true,
    Component: RegisterPage,
  },
])


export default router
