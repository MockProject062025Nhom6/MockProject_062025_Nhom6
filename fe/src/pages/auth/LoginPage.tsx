import loginImage from "./../../assets/images/image 10.png";

const LoginPage = () => {
  return (
    <div className="relative flex flex-row top-[118px] h-screen">
      <img src={loginImage} className="w-[736px] h-[865px] p-[21px]" />
      <div className="flex flex-1 justify-center items-center">
        <div className="relative">
          <h1 className="text-3xl font-extrabold mb-4 ">Welcome back</h1>
          <p className="mb-4">Welcome back! Please enter your details.</p>
          <input className="w-full py-2 px-0 border-b border-black focus:outline-none" placeholder="Email" />
          <input type="password" className="w-full py-2 px-0 border-b border-black focus:outline-none" placeholder="Password" />
          <div className="flex items-center justify-between mt-[20px] mb-[20px]">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Terms & Conditions
              </label>
            </div>
            <div className="text-sm underline cursor-pointer">
              Forgot password?
            </div>
          </div>
          <button className="bg-black text-white px-4 py-4 rounded w-full">Log in</button>
          <div className='mt-[20px] text-center'>don't have account? {' '}
            <span className="underline cursor-pointer">Sign up for free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
