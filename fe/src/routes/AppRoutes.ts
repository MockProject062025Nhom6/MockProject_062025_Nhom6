import LoginPage from "@/pages/auth/LoginPage"
import HomePage from "@/pages/home/HomePage"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    index: true,
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage
  }
])

export default router
