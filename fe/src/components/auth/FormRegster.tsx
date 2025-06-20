import { useState } from "react"
import { Input } from "@/components/ui/input"

const FormRegster = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [phone, setPhone] = useState("")

    const [agree, setAgree] = useState(false)
    const [receive, setReceive] = useState(false)
    return (
        <div className="pl-13.75 pr-5">
            <h1 className="text-[56px] font-bold text-primary mb-9.5">Welcome to XCELTECH</h1>
            <h3 className="font-normal text-[#969696] text-[30px]">
                Register your account
            </h3>
            <form action="" method="post">
                <div className="mt-9.5 w-full">
                    <div className="flex space-x-4.75">
                        <label htmlFor="FirstName" className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">First Name</p>
                            <div className="mt-3">
                                <Input id="FirstName"
                                    onChange={(e) => {
                                        setFirstName(e.currentTarget.value)
                                    }}
                                    value={firstName}
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="email" />
                            </div>
                        </label>
                        <label htmlFor="LastName" className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">Last Name</p>
                            <div className="mt-3">
                                <Input
                                    onChange={(e) => {
                                        setLastName(e.currentTarget.value)
                                    }}
                                    value={lastName}
                                    id="LastName"
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="email" />
                            </div>
                        </label>
                    </div>
                </div>

                <div className="mt-9.5 w-full">
                    <div className="flex space-x-4.75">
                        <label htmlFor="email"
                            className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">E-mail Address</p>
                            <div className="mt-3">
                                <Input id="email"
                                    onChange={(e) => {
                                        setEmail(e.currentTarget.value)
                                    }}
                                    value={email}
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="email" />
                            </div>
                        </label>
                        <label htmlFor="phone"
                            className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">Phone Number</p>
                            <div className="mt-3">
                                <Input
                                    id="phone"
                                    onChange={(e) => {
                                        setPhone(e.currentTarget.value)
                                    }}
                                    value={phone}
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="email" />
                            </div>
                        </label>
                    </div>
                </div>

                <div className="mt-9.5 w-full">
                    <div className="flex space-x-4.75">
                        <label htmlFor="Password" className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">Password</p>
                            <div className="mt-3">
                                <Input
                                    onChange={(e) => {
                                        setPassword(e.currentTarget.value)
                                    }}
                                    value={password}
                                    id="Password"
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="Password" />
                            </div>
                        </label>
                        <label htmlFor="ConfirmPassword" className="flex-1">
                            <p className="text-[20px] leading-6.75 font-bold text-primary">Confirm Password</p>
                            <div className="mt-3">
                                <Input
                                    onChange={(e) => {
                                        setConfirmPassword(e.currentTarget.value)
                                    }}
                                    value={confirmPassword}
                                    id="ConfirmPassword"
                                    className="w-full h-15.25 border-2 rounded-[6px] border-[#CBB4B4] px-3.75 text-[20px]"
                                    type="password" />
                            </div>
                        </label>
                    </div>
                </div>

                <div className="mt-12.25">
                    <div onClick={() => {
                        setReceive(!receive)
                    }} className="flex items-center cursor-pointer w-max">
                        <Input type="checkbox" id="re"
                            checked={receive}
                            className="w-7.5 h-6.5 mr-2.75 border-2 border-black" />
                        <span className="text-[20px] text-[#8F8F8F] leading-5 font-normal">Yes, I want to receive KRIS newsletters</span>
                    </div>
                    <div onClick={() => {
                        setAgree(!agree)
                    }}
                        className="flex items-center cursor-pointer w-max mt-6.5">
                        <Input type="checkbox" id="re"
                            checked={agree}
                            className="w-7.5 h-6.5 mr-2.75 border-2 border-black" />
                        <span className="text-[20px] text-[#8F8F8F] leading-5 font-normal">I agree to all the Terms, <span className="text-primary">Privacy Policy</span></span>
                    </div>
                </div>
                <div className="mt-9.5 w-1/2">
                    <button className="w-78 cursor-pointer bg-primary text-center py-4.25 text-white rounded-[6px]">
                        <span className="text-[20px] font-normal"> Create Account</span>
                    </button>
                </div>
                <div className="mt-9.5 text-left">
                    <span className="text-[20px] font-bold text-black">Already have an account ? <a className="text-primary" href="/">Log In</a></span>
                </div>
            </form>
        </div>
    )
}

export default FormRegster