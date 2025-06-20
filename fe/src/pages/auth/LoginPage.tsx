import PromoSection from "@/components/ui/PromoSection"
import LoginForm from "@/components/ui/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <LoginForm />
      </div>
      <PromoSection />
    </div>
  );
};

export default LoginPage;