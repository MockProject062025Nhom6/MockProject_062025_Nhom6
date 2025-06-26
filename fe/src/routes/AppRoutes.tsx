import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import ListWarrantSearch from "@/pages/ListWarrantSearch"
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
        path: "/list-warrent-search",
        Component: ListWarrantSearch,
      },
    ],
  },
])

export default AppRoutes
