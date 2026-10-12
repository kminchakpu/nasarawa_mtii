import Footer from "@/components/layout/Footer";
import LeadershipBanner from "@/components/leadership/LeadershipBanner";
import MTIILeadTeam from "@/components/leadership/MTIILeadTeam";
import ReformsSection from "@/components/leadership/ReformsSection";

export default function BusinessReformsPage() {
  return (
    <>
      <LeadershipBanner />
      <ReformsSection />
      <MTIILeadTeam />

      <Footer />
    </>
  );
}