import LoginForm from "./components/LoginForm"
import loginBg from "@/assets/images/login_bg.png"

const LoginPage = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center before:bg-black/65 before:absolute before:w-full before:h-full before:top-0 before:left-0 relative z-20"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-lg bg-white/90 rounded-lg z-20 overflow-hidden">
        <h2 className="uppercase font-bold text-center mb-8 mt-16">
          PD System
        </h2>
        <div className="lg:px-16">
          <LoginForm />
        </div>
        <div className="mt-36 bg-white w-full p-4 text-center">
          English (United States)
        </div>
      </div>
    </div>
  )
}

export default LoginPage
