import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row mx-auto min-h-screen w-full lg:w-full" >
      <div className="relative w-full lg:w-[50%] bg-[url('/BackgroundLogin.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#253D90]/90 z-10"></div>
        <div className="relative z-20 flex flex-col gap-6 lg:gap-3 px-6 py-3 lg:p-8">
          <img src="/Logo.png" alt="Logo" className="w-[120px] lg:w-[162px] h-auto mt-2 lg:mt-0" />
          <h1 className="font-bold text-white text-[28px] lg:text-[56px] text-left pt-3 lg:pt-32 pl-0 lg:pl-6">
            Criminal Investigation Management Software in the U.S.
          </h1>
          <span className="w-[50px] lg:w-[200px] h-[6px] lg:h-[8px] rounded-md bg-white ml-0 lg:ml-6 lg:mb-6"></span>
          <p className="font-normal text-[20px] lg:text-[32px] text-white text-left pl-0 lg:pl-6">
            Manage all employees, payrolls, and other human resource operations.
          </p>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 pl-0 lg:p-6">
            <Button className="w-full lg:w-[272px] h-[50px] lg:h-[76px] rounded-lg text-[16px] lg:text-[20px] font-bold bg-[#FFC20E] text-black hover:bg-[#FFC20E]/85 cursor-pointer">
              Learn More
            </Button>
            <Button className="w-full lg:w-[272px] h-[50px] lg:h-[76px] rounded-lg text-[16px] lg:text-[20px] font-bold border-2 bg-transparent border-white text-white hover:bg-[#253D90] cursor-pointer">
              Our Features
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-items-start items-start p-6 lg:p-16 bg-white shadow-lg">
        <h1 className="font-bold text-[#253D90] text-[30px] lg:text-[56px] py-3 lg:py-5 text-start">Welcome to XCELTECH</h1>
        <p className="text-[#969696] text-[20px] lg:text-[30px] mb-3 lg:mb-8">Register your account</p>
        <form className="w-full flex flex-col gap-2 lg:gap-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="firstName" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">First Name</Label>
              <Input type="text" id="firstName" name="firstName" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="lastName" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">Last Name</Label>
              <Input type="text" id="lastName" name="lastName" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="email" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">E-mail Address</Label>
              <Input type="email" id="email" name="email" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="phone" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">Phone Number</Label>
              <Input type="tel" id="phone" name="phone" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="password" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">Password</Label>
              <Input type="password" id="password" name="password" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <Label htmlFor="confirmPassword" className="text-[#253D90] text-[16px] lg:text-[20px] font-bold">Confirm Password</Label>
              <Input type="password" id="confirmPassword" name="confirmPassword" className="rounded-md border-2 w-full h-[36px] lg:h-[61px] border-[#CBB4B4] shadow-lg" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-3 pt-2 lg:pt-6">
            <div className="flex items-center gap-2 lg:gap-3">
              <Checkbox id="terms" className="rounded-md border-2 w-[16px] lg:w-[30px] h-[16px] lg:h-[26px] border-[#CBB4B4] cursor-pointer" checked={formData.agreeToTerms} onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)} />
              <Label htmlFor="terms" className="font-normal text-[12px] lg:text-black lg:text-[20px]">Yes, I agree to receive emails about newsletters</Label>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Checkbox id="toggle" className="rounded-md border-2 w-[16px] lg:w-[30px] h-[16px] lg:h-[26px] border-[#CBB4B4] cursor-pointer" checked={formData.agreeToPrivacy} onCheckedChange={(checked) => handleCheckboxChange("agreeToPrivacy", checked as boolean)} />
              <Label htmlFor="toggle" className="font-normal text-black lg:text-[20px] text-[12px]">
                I agree to all the<span className="text-[#253D90]">Terms, Privacy Policy</span>
              </Label>
            </div>
          </div>
          <Button className="w-full lg:w-[312px] h-[40px] lg:h-[61px] rounded-lg text-[16px] lg:text-[20px] font-normal bg-[#253D90] text-white hover:bg-[#253D90]/85 cursor-pointer mt-2 lg:mt-6">
            Create Account
          </Button>
          <div className="text-[12px] lg:text-[20px] font-normal">
            Already have an account? <Link to="/auth/login" className="font-bold text-[#253D90]">Login</Link>
          </div>
        </form>
      </div>
    </div >
  );
};

export default RegisterPage;