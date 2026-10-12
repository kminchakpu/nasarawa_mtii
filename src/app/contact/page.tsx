import ContactBanner from "@/components/contact/ContactBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  );
}