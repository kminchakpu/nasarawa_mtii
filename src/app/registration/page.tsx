import RegistrationTabs from "@/components/registration/RegistrationTabs";
import Footer from "@/components/layout/Footer";
import HowToRegister from "@/components/registration/HowToRegister";

export default function RegistrationPage() {
  return (
    <>
      <RegistrationTabs>
        <HowToRegister />
      </RegistrationTabs>

      <Footer />
    </>
  );
}