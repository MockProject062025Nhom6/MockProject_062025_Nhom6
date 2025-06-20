import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, rememberMe: checked }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login data:", formData)
    }
    
    return (
        <div className="grid lg:grid-cols-2 gap-8 px-16 py-20">
            <Card className="w-full">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                        Login
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                        Login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="loginEmail">E-mail Address</Label>
                            <Input
                                id="loginEmail"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>


                        <div className="space-y-2">
                            <Label htmlFor="loginPassword">Password</Label>
                            <Input
                                id="loginPassword"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="rememberMe"
                                    checked={formData.rememberMe}
                                    onCheckedChange={handleCheckboxChange}
                                />
                                <Label htmlFor="rememberMe" className="text-sm">
                                    Remember me
                                </Label>
                            </div>
                            <button
                                type="button"
                                className="text-sm text-blue-700 hover:underline"
                            >
                                Reset Password?
                            </button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3"
                        >
                            Login
                        </Button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account yet?{" "}
                                <button
                                    type="button"
                                    className="text-blue-700 hover:underline font-medium"
                                >
                                    Join free today
                                </button>
                            </p>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-8 text-white flex flex-col justify-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">
                        Manage all <span className="text-yellow-400">HR Operations</span>{" "}
                        from the comfort of your home.
                    </h2>

                    <div className="flex space-x-2">
                        <div className="w-8 h-2 bg-yellow-400 rounded"></div>
                        <div className="w-8 h-2 bg-white rounded"></div>
                        <div className="w-8 h-2 bg-white rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage