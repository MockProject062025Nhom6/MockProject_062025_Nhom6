<<<<<<< HEAD
import img from '@/assets/images/image-login.jpg'

const LoginPage = () => {
  return (

    <div className="flex min-h-screen">

      <div className="w-1/2 flex items-center justify-center bg-white px-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Login</h2>
          <p className="mb-6 text-gray-500">Login to your account.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail Address</label>
              <input type="email" className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">Reset Password?</a>
            </div>

            <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">Sign in</button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account yet? <a href="#" className="text-blue-600 hover:underline">Join KRIS today.</a>
          </p>
        </div>
      </div>

      <div
        className="w-1/2 h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-75 flex flex-col justify-center items-start p-12">
          <div className="text-3xl font-semibold">
            <span className="text-white px-2 py-1 rounded ">Manage all</span>
            <span className="text-yellow-400 font-bold"> HR Operations </span>
            <span className="text-white px-2 py-1 rounded ">from the comfort of your home.</span>
          </div>

          <div className="absolute bottom-6 left-12 flex space-x-2">
            <div className="w-[78px] h-[17px] bg-[#FFC20E] rounded-[8px]"></div>
            <div className="w-[78px] h-[17px] bg-white rounded-[8px]"></div>
            <div className="w-[78px] h-[17px] bg-white rounded-[8px]"></div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default LoginPage
=======

const LoginPage = () => {
    return (
        <div>LoginPage</div>
    )
}

export default LoginPage
>>>>>>> 4cdbe3ae2ff38a37f2aba2fa423bde80e66a6fdc
