import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import ListSuspectPage from "@/pages/list-suspect/ListSuspectPage"
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
        path: "/list-suspect",
        element: <ListSuspectPage />,
      },
    ],
  },
])

export default AppRoutes
