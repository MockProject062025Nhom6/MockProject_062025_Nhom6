import React, { useState } from "react"
import { useLogin } from "@/services/authService"
import { useNavigate } from "react-router-dom"

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const loginMutation = useLogin()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await loginMutation.mutateAsync(credentials)
      navigate("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, email: e.target.value }))
        }
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials((prev) => ({ ...prev, password: e.target.value }))
        }
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>

      {loginMutation.isError && (
        <p className="text-red-500">
          Login failed: {loginMutation.error?.message}
        </p>
      )}
    </form>
  )
}

export default LoginForm
