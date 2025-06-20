import img from '@/assets//images/image-login.jpg'

const LoginPage = () => {
  return (

    <div className="container relative p-0 m-0">
      {/* left side */}
      <div>
        <p className="absolute w-[459px] h-[56px] top-[290px] left-[55px] font-[700] text-[56px] leading-[100%] tracking-[0%] text-[#253D90]">Login</p>
        <p className="absolute w-[312px] h-[37px] top-[384px] left-[55px] font-[400] text-[30px] leading-[100%] tracking-[0%] text-[#969696]">Login to your account</p>
        <form action="">

          <div>
            <label className="absolute w-[174px] h-[27px] top-[470px] left-[55px] font-[700] text-[20px] leading-[100%] tracking-[0%] text-[#253D90]">E-mail Address</label>
            <input type="email" className="absolute w-[613px] h-[61px] top-[509px] left-[55px] rounded-[6px] border-[2px] bg-[#FFFFFF] border-[#CBB4B4] shadow-sm" />
          </div>
          <div>
            <label className="absolute w-[174px] h-[27px] top-[608px] left-[55px] font-[700] text-[20px] leading-[100%] tracking-[0%] text-[#253D90]">Password</label>
            <input type="password" className="absolute w-[613px] h-[61px] top-[647px] left-[55px] rounded-[6px] border-[2px] bg-[#FFFFFF] border-[#CBB4B4] shadow-sm" />
          </div>

          <div>
            <input
              type="checkbox"
              className="absolute w-[30px] h-[26px] top-[746px] left-[55px] 
             appearance-none rounded-[6px] border-2 border-[#CBB4B4] shadow-sm"
            />
            <label className="absolute w-[133px] h-[27px] top-[746px] left-[96px] font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#8F8F8F] ">Remember me</label>
          </div>
          <div className="absolute w-[159px] h-[27px] top-[746px] left-[509px] font-[700] text-[20px] leading-[100%] tracking-[0%] text-[#253D90]">
            Reset Password?
          </div>

          <div>
            <button className="absolute w-[613px] h-[61px] top-[813px] left-[55px] rounded-[6px] border-[2px] bg-[#253D90] border-[#253D90] text-white">Sign In</button>
          </div>
        </form>

        <div>
          <p className="absolute w-[613px] h-[27px] top-[914px] left-[55px] font-[400] text-[20px] leading-[100%] tracking-[0%] text-center text-[#8F8F8F]"> Don't have an account yet? <span className="text-[#253D90]">Join KRIS today.</span></p>
        </div>
      </div>
      {/* right side */}
      <div>
        <img className="absolute w-[962px] h-[1117px] left-[766px] bg-blend-multiply" src={img} />
        <div className="absolute w-[962px] h-[1117px] left-[766px] inset-0 bg-[#253D90] opacity-80 rounded"></div>
      </div>

      <div>
        <p className='absolute w-[741px] h-[56px] top-[690px] left-[812px] font-[700] text-[45px] leading-[100%] tracking-[0%] text-[#FFFFFF]'>Manage all <span className='text-[#FFC20E]'>HR Operations</span> from the comfort of your home.</p>
      </div>

      <div className='absolute w-[78px] h-[17px] top-[1037px] left-[812px] bg-[#FFC20E] rounded-[8px]' />
      <div className='absolute w-[77px] h-[17px] top-[1037px] left-[904px] bg-[#FFFFFF] rounded-[8px]' />
      <div className='absolute w-[78px] h-[17px] top-[1037px] left-[995px] bg-[#FFFFFF] rounded-[8px]' />




    </div>

  )
}

export default LoginPage
