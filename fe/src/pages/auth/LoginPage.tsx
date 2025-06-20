import loginImage from "./../../assets/images/login-image.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 flex flex-col md:flex-row items-center justify-center p-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2 max-w-[600px] hidden md:block">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Sign in to continue your journey
        </p>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
              Forgot Password?
            </a>
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Sign In
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;