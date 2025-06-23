import React, { createContext, useContext } from "react"
import { useCurrentUser } from "@/services/authService"
import { type IUser } from "@/types/user"

interface AuthContextType {
  user: IUser | null
  isLoading: boolean
  isAuthenticated: boolean
  error: Error | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: user, isLoading, error } = useCurrentUser()

  const value = {
    user: user || null,
    isLoading,
    isAuthenticated: !!user,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
