import AuthInfoPanel from "./components/AuthInfoPanel"
import LoginForm from "./components/LoginForm"

const LoginPage = () => {
  return (
    <div className="flex with-full h-screen items-center justify-center">
      <div className="w-5/12">
        <LoginForm />
      </div>
      <div className="w-7/12">
        <AuthInfoPanel />
      </div>
    </div>
  )
}

export default LoginPage
