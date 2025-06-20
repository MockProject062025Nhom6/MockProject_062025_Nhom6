import FormRegster from "@/components/auth/FormRegster"

const RegisterPage = () => {
  return (
    <div className="flex ">
      <div className="flex-1 ">
        <div style={{ backgroundImage: "linear-gradient(#253d90e3,#253d90e3),url('/register.jpg')" }}
          className="h-279.25 w-full flex items-start bg-cover bg-center ">
          <div className=" pt-50 text-white pl-14.5">
            <h1 className="text-[48px] leading-14  font-bold tracking-normal">
              HR Management Platform
            </h1>
            <div className="w-35.25 h-4 mt-4.25 rounded-full bg-white">

            </div>
            <div className="mt-8.75">
              <p className="text-[30px] font-normal tracking-tight">
                Manage all employees, payrolls, and other human resource operations.
              </p>
            </div>

            <div className="mt-4.25 flex space-x-5">
              <button type="button" className="bg-[#FFC20E] shadow-2xl rounded-2xl py-5.5 px-15 text-center">
                <p className="text-[25px] font-bold text-black">Learn More</p>
              </button>
              <button type="button" className="border-4 shadow-2xl border-white rounded-2xl py-5.5 px-15 text-center">
                <p className="text-[25px] font-bold ">Our Features</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-52/100 shrink-0 grow-0 flex items-center">
        <div className="w-full">
          <FormRegster />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
