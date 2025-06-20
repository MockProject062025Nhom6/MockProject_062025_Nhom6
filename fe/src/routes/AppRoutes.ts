import LoginPage from "@/pages/auth/LoginPage"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    index: true,
    Component: LoginPage,
  },
])

export default router
