import LoginPage from "@/pages/admin/LoginPage"
import { createBrowserRouter } from "react-router-dom"

const AppRoutes = createBrowserRouter([
  {
    path: "admin",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
])

export default AppRoutes
