import AboutBanner from "@/components/about/AboutBanner";
import AboutContent from "@/components/about/AboutContent";
import AboutTabs from "@/components/about/AboutTabs";
import Footer from "@/components/layout/Footer";
import QuickLinks from "@/components/QuickLinks/QuickLinks";


export default function AboutPage() {
  return (
    <>
      <AboutBanner />

      <AboutTabs>
        <AboutContent />
      </AboutTabs>
      <QuickLinks />
      <Footer />
    </>
  );
}