import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import PersonalInforPage from "@/pages/auth/PersonalInforPage"
import { createBrowserRouter } from "react-router-dom"

const AppRoutes = createBrowserRouter([
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
      {
        path: "/personal",
        element: <PersonalInforPage />,
      },
    ],
  },
])

export default AppRoutes
