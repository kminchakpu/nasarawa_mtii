import AboutBanner from "@/components/about/AboutBanner";
import AboutTabs from "@/components/about/AboutTabs";
import PermanentSecretaryContent from "@/components/about/PermanentSecretaryContent";
import Footer from "@/components/layout/Footer";

export default function PermanentSecretaryPage() {
  return (
    <>
      <AboutTabs>
        <PermanentSecretaryContent />
      </AboutTabs>

      <Footer />
    </>
  );
}