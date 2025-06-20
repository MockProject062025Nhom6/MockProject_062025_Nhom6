import RegisterPage from "@/pages/auth/RegisterPage"
import LoginPage from "../pages/auth/LoginPage"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
])

export default router
