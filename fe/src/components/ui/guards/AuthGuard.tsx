import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "@/components/loading"
import { useAppSelector } from "@/store"
import { AppPaths } from "@/types/path"

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth)
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return <Navigate to={AppPaths.LOGIN} state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default AuthGuard
