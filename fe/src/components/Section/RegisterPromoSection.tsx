import { Button } from "@/components/ui/button"
import bgImage from "@/assets/background-login.jpg"
import { Aperture } from "lucide-react"

const RegisterPromoSection = () => {
  return (
    <div
      className="flex-1 relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm z-0" />

      {/* Blurred Circles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      {/* Logo top-right */}
      <div className="absolute top-0 right-0 left-0 p-6 z-10 text-5xl">
        <div className="flex items-center gap-4">
          <Aperture size={60} />
          <img src="/logo.svg" alt="XCELTECH" className="w-32" />
        </div>
      </div>

      {/* Content center */}
      <div className="relative z-10 h-full flex flex-col justify-center p-10 max-w-3xl">
        <h2 className="text-5xl font-bold mb-3 leading-snug">
          HR Management Platform
        </h2>
        <div className="w-40 h-4 bg-white rounded-full mb-20" />

        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Manage all employees, payrolls, and other human resource operations.
        </p>

        <div className="flex gap-4">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 h-18 w-2xs text-2xl font-bold shadow-2xl">
            Learn More
          </Button>

          <Button
            variant="outline"
            className="border-white text-black hover:bg-white/10 hover:text-white w-2xs h-18 text-2xl shadow-2xl"
          >
            Our Features
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPromoSection
