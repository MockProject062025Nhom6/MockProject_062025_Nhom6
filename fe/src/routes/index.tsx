import RegisterPage from "@/pages/auth/RegisterPage"
import LoginPage from "../pages/auth/LoginPage"
import { createBrowserRouter } from "react-router-dom"
import ReportIncidentPage from "@/pages/reports/ReportIncidentPage"

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
      {
        path: "/report-incident",
        element: <ReportIncidentPage />,
      },
    ],
  },
])

export default router
