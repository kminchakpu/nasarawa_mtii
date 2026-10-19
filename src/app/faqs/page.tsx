
import FAQAccordion from "@/components/faqs/FAQAccordion";
import Footer from "@/components/layout/Footer";
import styles from "./FAQsPage.module.css";

export const metadata = {
  title: "Frequently Asked Questions | MTII Nasarawa State",
  description:
    "Find answers to frequently asked questions about the Ministry of Trade, Industry and Investment, Nasarawa State, including its Grievance Redress Mechanism.",
};

export default function FAQsPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.pageTitle}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>HELP & INFORMATION</span>

            <h1>
              Frequently Asked <span>Questions</span>
            </h1>

            <p>
              Find answers to common questions about the Ministry of Trade,
              Industry and Investment, our services, and the Grievance Redress
              Mechanism for addressing complaints and concerns.
            </p>

            <div className={styles.breadcrumb}>
              <span>Home</span>
              <span aria-hidden="true">/</span>
              <span>FAQs</span>
            </div>
          </div>
        </section>

        <section className={styles.faqContent}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                HOW CAN WE HELP?
              </span>

              <h2>
                Get the <span>information</span> you need
              </h2>

              <p>
                Browse our frequently asked questions or search for a specific
                topic. Most questions address the Grievance Redress Mechanism
                and how stakeholders can raise concerns.
              </p>
            </div>

            <FAQAccordion />

            <section className={styles.grievanceCallout}>
              <div className={styles.calloutContent}>
                <span className={styles.calloutEyebrow}>
                  GRIEVANCE REDRESS MECHANISM
                </span>

                <h2>Have a complaint or concern?</h2>

                <p>
                  If your question is not answered here, use the Ministry&apos;s
                  officially designated grievance reporting channel to raise
                  your concern and request assistance.
                </p>
              </div>

              <div className={styles.calloutActions}>
                <a href="/contact" className={styles.primaryButton}>
                  Contact the Ministry
                  <span aria-hidden="true"> &rarr;</span>
                </a>

                <a href="/services" className={styles.secondaryButton}>
                  Explore Our Services
                </a>
              </div>
            </section>

            <p className={styles.disclaimer}>
              Note: Information on complaint submission procedures, timelines,
              anonymity, confidentiality, and appeals should be confirmed
              against MTII&apos;s officially approved GRM policy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
