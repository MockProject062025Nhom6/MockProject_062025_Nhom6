import React from "react"
import { Outlet } from "react-router-dom"
import type { LayoutProps } from "../types/route"

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">{children || <Outlet />}</div>
      </main>
    </div>
  )
}

export default DefaultLayout
