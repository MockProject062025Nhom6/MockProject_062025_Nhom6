import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@radix-ui/react-label"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    receiveNewsletter: false,
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
      <div>
        <h1 className="text-5xl font-bold text-blue-900 mb-1">
          Welcome to XCELTECH
        </h1>
        <p className="text-gray-600 text-2xl">Register your account</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-blue-800 font-bold mb-1"
          >
            First Name
          </label>
          <Input
            id="firstName"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="h-12"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-blue-800 font-bold mb-1"
          >
            Last Name
          </label>
          <Input
            id="lastName"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="h-12"
          />
        </div>
        <div>
          <Label htmlFor="email" className="block text-blue-800 font-bold mb-1">
            E-mail Address
          </Label>
          <Input
            id="email"
            placeholder="E-mail Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="block text-blue-800 font-bold mb-1">
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12"
          />
        </div>
        <div>
          <Label
            htmlFor="password"
            className="block text-blue-800 font-bold mb-1"
          >
            Password
          </Label>
          <Input
            id="password"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="h-12"
          />
        </div>
        <div>
          <Label
            htmlFor="confirmPassword"
            className="block text-blue-800 font-bold mb-1"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="h-12"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.receiveNewsletter}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, receiveNewsletter: Boolean(checked) })
            }
          />
          <span className="text-sm">
            Yes, I want to receive KRIS newsletters
          </span>
        </Label>

        <Label className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeTerms}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, agreeTerms: Boolean(checked) })
            }
          />
          <span className="text-sm">
            I agree to all the{" "}
            <a href="#" className="text-blue-600 no-underline">
              Terms, Privacy Policy
            </a>
          </span>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-900 h-12 hover:bg-blue-700"
      >
        Create Account
      </Button>

      <p className="text-lg text-center text-gray-600">
        Already have an account?{" "}
        <a href="/" className="text-blue-600 hover:underline font-medium">
          Log In
        </a>
      </p>
    </form>
  )
}

export default RegisterForm
