import FormLogin from "@/components/auth/FormLogin"

const LoginPage = () => {

  return (
    <div className="flex ">
      <div className="basis-49/100 shrink-0 grow-0 flex items-center">
        <FormLogin></FormLogin>
      </div>
      <div className="flex-1 ">
        <div style={{ backgroundImage: "linear-gradient(#253d90e3,#253d90e3),url('/login.jpg')" }}
          className="h-279.25 w-full flex items-end bg-cover bg-center ">
          <div className="pl-13 pb-13.75">
            <div className="flex space-y-58.75 flex-col">
              <div>
                <h1 className="text-[45px] leading-14 font-bold text-white">
                  Manage all <span className="text-[#FFC20E]">HR Operations</span> from the comfort of your home.
                </h1>
              </div>
              <div className="flex space-x-3.5">
                <div className="w-19.5 h-4.25 bg-[#FFC20E] rounded-full"></div>
                <div className="w-19.5 h-4.25 bg-white rounded-full"></div>
                <div className="w-19.5 h-4.25 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage
