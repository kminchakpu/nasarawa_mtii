import About from "@/components/home/About";
import BusinessResources from "@/components/home/BusinessResources";
import Contact from "@/components/home/Contact";
import EaseOfDoingBusiness from "@/components/home/EaseOfDoingBusiness";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import VideoSection from "@/components/home/VideoSection";
import Footer from "@/components/layout/Footer";
import Testimonial from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
       <Services />
       <EaseOfDoingBusiness />
        <BusinessResources />
        <VideoSection />
        <Testimonial />
        <Team />
        <Contact />

      <Footer />
    </main>
  );
}
