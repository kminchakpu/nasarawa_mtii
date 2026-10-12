import Link from "next/link";
import BusinessReformsTabs from "@/components/business-reforms/BusinessReformsTabs";
import styles from "@/components/business-reforms/BusinessReformsTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function ApplicationGuidelinesPage() {
  return (
    <>
      <BusinessReformsTabs>
        <div className={styles.businessReformsContent}>
          {/* =========================================
              PAGE LABEL
          ========================================= */}
          <span className={styles.contentLabel}>
            APPLICATION GUIDELINES
          </span>

          {/* =========================================
              SCOPE OF THE GUIDELINES
          ========================================= */}
          <div className={styles.contentBlock}>
            <h2>Scope of the Guidelines</h2>

            <p>
              The MTII Application Guidelines are designed to:
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Simplify Application Procedures:</strong>{" "}
                Provide step-by-step instructions to ensure seamless
                registration.
              </li>

              <li>
                <strong>Enhance Transparency:</strong>{" "}
                Clearly outline eligibility criteria, required documentation,
                and the evaluation process.
              </li>

              <li>
                <strong>Ensure Compliance:</strong>{" "}
                Help applicants meet legal and regulatory requirements for
                business operations.
              </li>

              <li>
                <strong>Promote Fairness:</strong>{" "}
                Detail the appeals process for applicants seeking to contest a
                decision.
              </li>
            </ul>
          </div>

          {/* =========================================
              KEY SECTIONS
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Key Sections of the Guidelines</h3>

            {/* Eligibility */}
            <div className={styles.contentBlock}>
              <h3>Eligibility Requirements</h3>

              <p>
                Applicants must meet specific criteria, including:
              </p>

              <ul className={styles.contentList}>
                <li>
                  Legal age for business registration (where applicable).
                </li>

                <li>
                  Compliance with industry regulations.
                </li>

                <li>
                  Submission of all required documents, such as identification,
                  proof of address, and business details.
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div className={styles.contentBlock}>
              <h3>Documentation Checklist</h3>

              <p>
                The guidelines include a comprehensive list of documents needed
                for each type of application, ensuring that applicants are
                fully prepared before submission.
              </p>
            </div>

            {/* Application Submission */}
            <div className={styles.contentBlock}>
              <h3>Application Submission</h3>

              <p>
                Applications can be submitted online through the MTII portal or
                in person at designated Ministry offices.{" "}
                <Link
                  href="/registration"
                  className={styles.inlineLink}
                >
                  Online Registration
                </Link>{" "}
                are encouraged for their convenience and faster processing
                times.
              </p>
            </div>

            {/* Review */}
            <div className={styles.contentBlock}>
              <h3>Review and Evaluation</h3>

              <p>
                Applications are reviewed based on compliance with eligibility
                and documentation requirements. Evaluation timelines are
                specified, with typical processing durations for each type of
                application.
              </p>
            </div>

            {/* Approval */}
            <div className={styles.contentBlock}>
              <h3>Approval and Issuance</h3>

              <p>
                Successful applicants receive official documentation confirming
                their registration or approval. Notifications are sent via
                email or SMS for online submissions.
              </p>
            </div>

            {/* Appeals */}
            <div className={styles.contentBlock}>
              <h3>Appeals and Reconsideration</h3>

              <p>
                Applicants whose submissions are denied may appeal the
                decision. The guidelines outline the appeals process, including
                timelines and required documentation for reconsideration.
              </p>
            </div>
          </div>

          {/* =========================================
              ACCESSING THE GUIDELINES
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Accessing the Guidelines</h3>

            <p>
              The MTII Application Guidelines are available in both print and
              digital formats:
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Print Copies:</strong>{" "}
                Available at MTII regional offices.
              </li>

              <li>
                <strong>Digital Copies:</strong>{" "}
                Available for download from the MTII official website for easy
                access.
              </li>

              <li>
                <strong>Read Online:</strong>{" "}
                Read the online version on the MTII official website.
              </li>
            </ul>

            <div className={styles.resourceButtons}>
              <Link
                href="/publications"
                className={styles.resourceButton}
              >
                <span>Download Guidelines</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/how-to-register"
                className={styles.resourceButton}
              >
                <span>Read Online</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* =========================================
              SUPPORT AND ASSISTANCE
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Support and Assistance</h3>

            <p>
              The Ministry offers dedicated support to assist applicants at any
              stage of the process. For inquiries or additional information,
              contact the MTII Helpdesk via:
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@mtiinasarawa.com.ng"
                  className={styles.inlineLink}
                >
                  support@mtiinasarawa.com.ng
                </a>
              </li>

              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+234 803 821 3845"
                  className={styles.inlineLink}
                >
                  +234 803 821 3845
                </a>
              </li>

              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.mtiinasarawa.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  www.mtiinasarawa.com.ng
                </a>
              </li>
            </ul>
          </div>

          {/* =========================================
              REGISTRATION BUTTON
          ========================================= */}
          <Link
            href="/registration"
            className={styles.viewDetailsButton}
          >
            <span>Start Online Registration</span>

            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </BusinessReformsTabs>

      <Footer />
    </>
  );
}