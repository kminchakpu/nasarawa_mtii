
import type { Metadata } from "next";
import Link from "next/link";
import GRMApplicationForm from "@/components/grievance-redress/GRMApplicationForm";
import Footer from "@/components/layout/Footer";
import styles from "./GrievanceRedressPage.module.css";

export const metadata: Metadata = {
  title: "Online Grievance Redress | MTII Nasarawa State",
  description:
    "Submit a grievance or complaint relating to the Ministry of Trade, Industry and Investment, Nasarawa State.",
};

export default function GrievanceRedressPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroPattern} aria-hidden="true" />

          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Grievance Redress</span>
            </nav>

            <p className={styles.eyebrow}>
              MINISTRY OF TRADE, INDUSTRY AND INVESTMENT
            </p>

            <h1>
              Grievance Redress
              <span>Mechanism</span>
            </h1>

            <p className={styles.heroDescription}>
              We welcome complaints and feedback concerning ministry
              services. Use this application form to describe your
              concern and the resolution you are seeking.
            </p>

            <a href="#grm-application" className={styles.heroButton}>
              Start your complaint <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.contentInner}>
            <div className={styles.intro}>
              <div>
                <p className={styles.sectionEyebrow}>WE ARE HERE TO LISTEN</p>
                <h2>Tell us about your concern</h2>
              </div>

              <p>
                Please provide accurate details about the incident,
                relevant ministry, department or agency, and the action
                you would like taken. Supporting documents can help
                explain your complaint.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <article className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  01
                </span>
                <h3>Provide details</h3>
                <p>
                  Describe what happened and include the relevant dates,
                  people or offices involved, and any supporting evidence.
                </p>
              </article>

              <article className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  02
                </span>
                <h3>Explain your concern</h3>
                <p>
                  Identify the complaint category and state the redress or
                  resolution you are requesting.
                </p>
              </article>

              <article className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  03
                </span>
                <h3>Review your application</h3>
                <p>
                  Check your information before completing the form.
                  The official receiving process will be handled through
                  the ministry&apos;s approved system.
                </p>
              </article>
            </div>

            <div id="grm-application" className={styles.applicationSection}>
              <GRMApplicationForm />
            </div>

            <section className={styles.contactPanel}>
              <div>
                <p className={styles.sectionEyebrow}>MINISTRY CONTACT</p>
                <h2>Need assistance?</h2>
                <p>
                  Contact the ministry using the details listed on its
                  grievance redress form.
                </p>
              </div>

              <address>
                <p>
                  <strong>Address</strong>
                  <span>
                    Jos Road, adjacent to St. William&apos;s Catholic
                    Cathedral, Nasarawa State
                  </span>
                </p>
                <p>
                  <strong>Telephone</strong>
                  <a href="tel:+2348038213845">08038213845</a>
                </p>
                <p>
                  <strong>Email</strong>
                  <a href="mailto:nasarawamtii@gmail.com">
                    nasarawamtii@gmail.com
                  </a>
                </p>
              </address>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
