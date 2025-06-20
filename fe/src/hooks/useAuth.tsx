import { authService, tokenManager, userManager } from "@/api/auth"
import { LoginResponse } from "@/types"
import { useState, useEffect, createContext, useContext } from "react"

interface AuthContextType {
  user: LoginResponse["user"] | null
  login: (email: string, password: string, remember: boolean) => Promise<void>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LoginResponse["user"] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for existing user on mount
    const savedUser = userManager.getUser()
    if (savedUser) {
      setUser(savedUser)
    }
  }, [])

  const login = async (email: string, password: string, remember: boolean) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.login(email, password)
      tokenManager.setToken(response.access_token, remember)
      userManager.setUser(response.user)
      setUser(response.user)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    tokenManager.removeToken()
    userManager.removeUser()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  )
}
