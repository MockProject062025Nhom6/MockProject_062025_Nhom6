import React, { useState } from "react"
import PasswordInput from "@/components/ui/PasswordInput"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card"
import { Input } from "./input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "./button"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password, rememberMe })
  }

  return (
    <Card className="w-full max-w-md border-0 shadow-none">
      <CardHeader className="space-y-1 px-0">
        <CardTitle className="text-5xl font-bold text-blue-800">Login</CardTitle>
        <CardDescription className="text-lg">
          Login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-900 font-bold">E-mail Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-12"
              required
            />
          </div>

          <PasswordInput password={password} setPassword={setPassword} />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />

              <Label htmlFor="remember" className="text-sm font-normal text-gray-700">
                Remember me
              </Label>
            </div>
            <Button variant="link" className="px-0 text-m font-medium text-blue-900">
              Reset Password?
            </Button>
          </div>

          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-600 h-12">
            Sign In
          </Button>
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Don't have an account yet?{" "}
          <Button variant="link" className="px-0 font-bold text-blue-900">
            Join KRIS today.
          </Button>
        </p>
      </CardContent>
    </Card>
  )
}
export default LoginForm
