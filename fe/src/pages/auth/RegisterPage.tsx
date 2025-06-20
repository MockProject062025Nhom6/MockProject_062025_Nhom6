import PromoSection from "@/components/Section/RegisterPromoSection";
import RegisterForm from "@/components/Form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
      <PromoSection />
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;