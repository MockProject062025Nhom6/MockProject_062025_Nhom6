import type { LayoutProps } from "@/types/route"
import React from "react"
import { Outlet } from "react-router-dom"

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">{children || <Outlet />}</div>
    </div>
  )
}

export default AuthLayout
