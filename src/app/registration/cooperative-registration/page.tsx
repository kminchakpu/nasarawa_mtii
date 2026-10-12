import RegistrationTabs from "@/components/registration/RegistrationTabs";
import CooperativeRegistration from "@/components/registration/CooperativeRegistration";
import Footer from "@/components/layout/Footer";

export default function CooperativePage() {
  return (
    <>
    <RegistrationTabs>
      <CooperativeRegistration />
    </RegistrationTabs>

    <Footer />

    </>
  );
}