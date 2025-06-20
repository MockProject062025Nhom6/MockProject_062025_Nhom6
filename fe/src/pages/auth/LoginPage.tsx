import React, { useState } from "react"
import loginImage from "../../assets/login.jpg" // ✅ Đường dẫn đúng

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`Email: ${email}\nPassword: ${password}`)
    // TODO: Gọi API login bằng axios ở đây
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div className="flex min-h-screen">
      {/* Left: Login Form */}
      <div className="w-full md:w-2/5 lg:w-[40%] px-10 py-16 bg-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Login</h2>
        <p className="text-gray-500 mb-6">Login to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-bold text-blue-900">
              E-mail Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div>
            <label className="text-sm  font-bold text-blue-900">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-700 hover:underline">
              Reset Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account yet?{" "}
          <a href="#" className="text-blue-700 font-medium hover:underline">
            Join KRIS today.
          </a>
        </p>
      </div>

      {/* Right: Banner Image */}
      <div
        className="relative hidden md:block md:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="absolute inset-0 bg-[#253D90] opacity-80"></div>
        <div className="relative flex items-center h-full text-white px-4 sm:px-6 lg:px-10 mt-20 sm:mt-24 lg:mt-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug sm:leading-snug lg:leading-tight text-center md:text-left max-w-3xl mx-auto md:mx-0">
            Manage all{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 me-2">
              HR Operations
            </span>
            from <br className="hidden sm:block" /> the comfort of your home.
          </h2>
        </div>

        <div className="absolute bottom-0 w-full p-4 flex ">
          <div className="flex space-x-2 px-10">
            <span className="w-15 h-3 bg-yellow-600 rounded-full"></span>
            <span className="w-15 h-3 bg-white rounded-full"></span>
            <span className="w-15 h-3 bg-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
