import Link from "next/link";
import BusinessReformsTabs from "@/components/business-reforms/BusinessReformsTabs";
import styles from "@/components/business-reforms/BusinessReformsTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function GrievanceRedressPage() {
  return (
    <>
      <BusinessReformsTabs>
        <div className={styles.businessReformsContent}>
          <span className={styles.contentLabel}>
            BUSINESS ENABLING REFORMS
          </span>

          <h2>Grievance Redress</h2>

          {/* Overview */}
          <div className={styles.contentBlock}>
            <h3>Overview</h3>

            <p>
              The Grievance Redress Mechanism (GRM) provides a structured and
              accessible process through which individuals, businesses,
              traders, investors, and other stakeholders can submit complaints
              and seek resolution when they experience challenges in their
              dealings with government institutions.
            </p>

            <p>
              The Nasarawa State Ministry of Trade, Industry and Investment
              (MTII) is committed to ensuring that grievances relating to
              trade, business registration, investment, regulation, and other
              services provided by the Ministry are addressed fairly,
              transparently, and within a reasonable timeframe.
            </p>
          </div>

          {/* Purpose */}
          <div className={styles.contentBlock}>
            <h3>Purpose of the Grievance Redress Mechanism</h3>

            <p>
              The GRM is designed to strengthen accountability and improve the
              quality of services provided by the Ministry. It provides
              stakeholders with a reliable channel for raising concerns and
              ensures that complaints are properly documented, reviewed, and
              resolved.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Promote Accountability:</strong> Ensure that concerns
                relating to Ministry services and processes are properly
                addressed.
              </li>

              <li>
                <strong>Improve Service Delivery:</strong> Identify recurring
                challenges and use feedback to improve government services.
              </li>

              <li>
                <strong>Ensure Transparency:</strong> Provide a clear and
                transparent process for submitting and resolving grievances.
              </li>

              <li>
                <strong>Protect Stakeholder Interests:</strong> Provide
                businesses, traders, investors, and other stakeholders with an
                avenue to seek redress.
              </li>
            </ul>
          </div>

          {/* Who Can Submit */}
          <div className={styles.contentBlock}>
            <h3>Who Can Submit a Grievance?</h3>

            <p>
              The grievance redress mechanism is available to individuals,
              businesses, organizations, investors, traders, transporters,
              and other stakeholders who have experienced difficulties or
              concerns relating to services provided by MTII.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Businesses and Entrepreneurs:</strong> Businesses
                experiencing challenges with registration, licensing,
                approvals, or other Ministry services.
              </li>

              <li>
                <strong>Traders:</strong> Traders experiencing challenges
                relating to trade activities and government processes.
              </li>

              <li>
                <strong>Investors:</strong> Local and foreign investors who
                experience challenges relating to investment facilitation or
                government processes.
              </li>

              <li>
                <strong>Truckers and Transporters:</strong> Transporters
                experiencing challenges relating to haulage and related
                Ministry services.
              </li>

              <li>
                <strong>Other Stakeholders:</strong> Individuals,
                organizations, and groups affected by the services or
                activities of the Ministry.
              </li>
            </ul>
          </div>

          {/* Submission */}
          <div className={styles.contentBlock}>
            <h3>Submission of Trade Grievances</h3>

            <p>
              Stakeholders who have a grievance are encouraged to provide
              accurate and sufficient information to enable the Ministry to
              properly understand and investigate the issue. Complaints should
              clearly describe the problem, the service involved, and the
              outcome being requested.
            </p>

            <p>
              Where applicable, complainants should provide supporting
              documents, transaction details, registration information, or
              other evidence that may assist in the review and resolution of
              the grievance.
            </p>
          </div>

          {/* Information Required */}
          <div className={styles.contentBlock}>
            <h3>Information Required</h3>

            <p>
              To facilitate an effective investigation, the following
              information may be required when submitting a grievance:
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Full Name:</strong> Name of the individual submitting
                the grievance.
              </li>

              <li>
                <strong>Contact Information:</strong> Telephone number and
                email address where the complainant can be reached.
              </li>

              <li>
                <strong>Business or Organization:</strong> Name of the
                business or organization involved, where applicable.
              </li>

              <li>
                <strong>Nature of the Complaint:</strong> A clear description
                of the issue or challenge being reported.
              </li>

              <li>
                <strong>Supporting Documents:</strong> Copies of relevant
                receipts, applications, correspondence, permits, or other
                supporting evidence.
              </li>

              <li>
                <strong>Expected Resolution:</strong> An indication of the
                action or resolution being requested.
              </li>
            </ul>
          </div>

          {/* Review and Resolution */}
          <div className={styles.contentBlock}>
            <h3>Review and Resolution Process</h3>

            <p>
              Once a grievance is received, it is reviewed to determine the
              nature of the complaint and the appropriate department or
              authority responsible for addressing it.
            </p>

            <p>
              The Ministry may contact the complainant for additional
              information where necessary. The relevant department will
              investigate the matter and take appropriate action based on the
              facts and applicable laws, policies, and regulations.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Step 1 – Submission:</strong> The complainant submits
                the grievance through the appropriate channel.
              </li>

              <li>
                <strong>Step 2 – Acknowledgement:</strong> The grievance is
                received and acknowledged by the responsible office.
              </li>

              <li>
                <strong>Step 3 – Review:</strong> The complaint and supporting
                information are reviewed and investigated.
              </li>

              <li>
                <strong>Step 4 – Resolution:</strong> Appropriate action is
                taken to resolve the grievance.
              </li>

              <li>
                <strong>Step 5 – Feedback:</strong> The complainant is
                informed of the outcome where appropriate.
              </li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className={styles.contentBlock}>
            <h3>Confidentiality and Fairness</h3>

            <p>
              The Ministry is committed to handling grievances fairly and
              responsibly. Information provided by complainants will be
              handled appropriately and used for the purpose of reviewing and
              resolving the reported issue.
            </p>

            <p>
              All grievances will be considered objectively, without
              discrimination, and in accordance with applicable laws,
              regulations, and government procedures.
            </p>
          </div>

          {/* Expected Outcomes */}
          <div className={styles.contentBlock}>
            <h3>Expected Outcomes</h3>

            <p>
              The grievance redress process is intended to provide practical
              solutions to stakeholder concerns while also helping the
              Ministry identify areas where its services and processes can be
              improved.
            </p>

            <ul className={styles.contentList}>
              <li>
                Timely resolution of legitimate complaints.
              </li>

              <li>
                Improved transparency and accountability.
              </li>

              <li>
                Better communication between the Ministry and stakeholders.
              </li>

              <li>
                Improved efficiency and quality of government services.
              </li>

              <li>
                Increased confidence in the state&apos;s business environment.
              </li>
            </ul>
          </div>

          {/* Submit Grievance */}
          <div className={styles.contentBlock}>
            <h3>Submit a Grievance</h3>

            <p>
              If you have experienced a challenge with a service provided by
              the Ministry of Trade, Industry and Investment, you are
              encouraged to submit your grievance through the appropriate
              channel.
            </p>

            <p>
              Please provide clear and accurate information so that the
              Ministry can properly review your concern and provide an
              appropriate response.
            </p>

            <div className={styles.resourceButtons}>
              <Link
                href="/grievance-redress"
                className={styles.resourceButton}
              >
                <span>Submit a Grievance</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/faqs"
                className={styles.resourceButton}
              >
                <span>View FAQs</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className={styles.resourceButton}
              >
                <span>Contact MTII</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </BusinessReformsTabs>

      <Footer />
    </>
  );
}