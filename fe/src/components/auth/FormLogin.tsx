import { useState } from "react"
import { Input } from "@/components/ui/input"

const FormLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    return (
        <div className="w-full">
            <div className="pl-1 pr-23">
                <h1 className="text-[56px] font-bold text-primary mb-6.75">Login</h1>
                <h3 className="font-normal text-[30px]">
                    Login to your account.
                </h3>
                <form action="" method="post">
                    <div className="mt-9.5 w-full">
                        <label htmlFor="email">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">E-mail Address</p>
                            <div className="mt-3">
                                <Input onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }} id="email" value={email}
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="email" />
                            </div>
                        </label>
                    </div>
                    <div className="mt-9.5 w-full">
                        <label htmlFor="password">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">Password</p>
                            <div className="mt-3">
                                <Input onChange={(e) => {
                                    setPassword(e.currentTarget.value)
                                }} id="password"
                                    value={password}
                                    className="w-full h-15.25 rounded-[6px] border-2 border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="password" />
                            </div>
                        </label>
                    </div>
                    <div className="mt-9.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="re">
                                <div className="flex items-center">
                                    <Input type="checkbox" id="re" onChange={() => {
                                        setRememberMe(!rememberMe)
                                    }} checked={rememberMe} 
                                    className="w-7.5 h-6.5 mr-2.75 border-2 border-black" />
                                    <span className="text-[20px] leading-5 font-normal">Remember me</span>
                                </div>
                            </label>
                            <div>
                                <a href="#" className="text-primary font-bold text-[20px]"> Reset Password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-9.5">
                        <button className="w-full cursor-pointer bg-primary text-center py-4.25 text-white rounded-[6px]">
                            <span className="text-[20px] font-normal"> Sign In</span>
                        </button>
                    </div>
                </form>
                <div className="mt-9.5 text-center">
                    <a href="/register" className="text-[20px]">Don’t have an account yet? <strong>Join KRIS today</strong>.</a>
                </div>
            </div>
        </div>
    )
}

export default FormLogin