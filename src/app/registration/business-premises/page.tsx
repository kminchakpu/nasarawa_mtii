import RegistrationTabs from "@/components/registration/RegistrationTabs";
import BusinessPremisesRegistration from "@/components/registration/BusinessPremisesRegistration";

export default function BusinessPremisesPage() {
  return (
    <RegistrationTabs>
      <BusinessPremisesRegistration />
    </RegistrationTabs>
  );
}