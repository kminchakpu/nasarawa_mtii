import RegistrationTabs from "@/components/registration/RegistrationTabs";
import OnlineRegistration from "@/components/registration/OnlineRegistration";
import Footer from "@/components/layout/Footer";

export default function OnlineRegistrationPage() {
  return (
    <>
      <RegistrationTabs>
        <OnlineRegistration />
      </RegistrationTabs>

      <Footer />
    </>
  );
}