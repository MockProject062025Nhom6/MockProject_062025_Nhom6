import loginImage from "./../../assets/images/image 10.png"

const LoginPage = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <main className="flex flex-row items-center justify-center gap-[92px] p-8 h-screen">
        <div className="hidden lg:block">
          <img
            src={loginImage}
            alt="Login page image"
            className="object-contain max-h-[650px] "
          />
        </div>
        <div className="w-[35%] max-w-[400px] h-fit flex-auto flex flex-col gap-4">
          <h1 className="font-bold text-3xl">Welcome back, Yash</h1>
          <p>Welcome back!Please enter your details.</p>
          <form className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="border-b border-gray-400 p-2 w-full focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="border-b border-gray-400 p-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="term-and-condition"
                  className="cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="term-and-condition"
                  className="text-[14px] cursor-pointer"
                >
                  Term & Conditions
                </label>
              </div>
              <a href="http://example.com" className="underline text-[14px]">
                Forgot Password
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full max-w-[500px] px-6 py-2 bg-gray-900 text-white rounded-md cursor-pointer mt-2 hover:bg-gray-800 transition-colors duration-200"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-[14px]">
            Don't have an account?{" "}
            <a href="http://example.com" className="font-bold underline">
              Sign up for free
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
