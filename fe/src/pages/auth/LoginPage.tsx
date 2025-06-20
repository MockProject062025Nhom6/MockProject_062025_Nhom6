import loginImage from '../../assets/images/login.jpg';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-2/5 flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold mb-2 text-[#253D90] ">Login</h2>
            <p className="font-medium mb-6 text-[#969696]">Login to your account</p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-[#253D90]" htmlFor="email">
                  E-mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-[#253D90]" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-sm text-[#969696]">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#253D90] hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#253D90] text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 "
              > 
                Sign in
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-[#969696]">
                Don't have an account yet?{' '}
                <a href="#" className="text-[#253D90] hover:underline">
                  Sign up
                </a>
              </p>
          </div>
        </div>
      </div>
      <div className="relative hidden md:block md:w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${loginImage})` }}>
      <div className="absolute inset-0 bg-[#253D90] opacity-80"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Manage all HR Operations from
        </h2>
        <p className="text-3xl font-semibold">the comfort of your home.</p>
      </div>
      <div className="absolute bottom-0 w-full p-4 flex ">
        <div className="flex space-x-2 ">
          <span className="w-15 h-3 bg-yellow-600 rounded-full"></span>
          <span className="w-15 h-3 bg-white rounded-full"></span>
          <span className="w-15 h-3 bg-white rounded-full"></span>
        </div>        
      </div>
    </div>
    </div>
  );
}

export default LoginPage
