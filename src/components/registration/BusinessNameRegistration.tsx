import Link from "next/link";
import styles from "./BusinessNameRegistration.module.css";

export default function BusinessNameRegistration() {
  return (
    <div className={styles.businessNameRegistration}>
      {/* Introduction */}
      <div className={styles.intro}>
        <span className={styles.contentLabel}>REGISTRATION</span>

        <h2>Business Name Registration</h2>

        <p>
          The Ministry of Trade, Industry, and Investment (MTII) Portal offers
          a comprehensive and user-friendly platform for registering business
          names, making it easier than ever for entrepreneurs and organizations
          to establish a legal identity for their ventures.
        </p>

        <p>
          This streamlined service is a critical first step in starting a
          business and ensures compliance with national trade and commerce
          regulations.
        </p>
      </div>

      {/* Key Features */}
      <div className={styles.contentBlock}>
        <h3>
          Key Features of Business Name Registration on the MTII Portal
        </h3>

        <ul className={styles.contentList}>
          <li>
            <strong>Real-Time Name Availability Check:</strong> Instantly
            search and verify the availability of your desired business name
            to ensure uniqueness and compliance with regulatory standards.
          </li>

          <li>
            <strong>Secure Online Application:</strong> Submit your business
            name registration application electronically through a secure and
            encrypted system, safeguarding your sensitive information.
          </li>

          <li>
            <strong>Document Upload and Verification:</strong> Upload required
            documents, such as identification, proof of address, and business
            details, directly to the portal. Receive instant confirmation and
            feedback on submitted materials to prevent delays.
          </li>

          <li>
            <strong>Digital Certificate Issuance:</strong> Upon successful
            approval, applicants receive an official certificate of
            registration, which can be downloaded and printed for
            record-keeping.
          </li>

          <li>
            <strong>Seamless Payment Integration:</strong> Make payments
            securely via multiple options, including credit/debit cards, bank
            transfers, and mobile payment systems.
          </li>

          <li>
            <strong>Application Status Tracking:</strong> Monitor the progress
            of your application in real-time through your personalized
            dashboard, ensuring transparency and efficiency.
          </li>
        </ul>
      </div>

      {/* Benefits */}
      <div className={styles.contentBlock}>
        <h3>Benefits of Registering a Business Name Online</h3>

        <ul className={styles.contentList}>
          <li>
            <strong>Convenience:</strong> Access the registration portal from
            anywhere at any time, eliminating the need for physical visits to
            government offices.
          </li>

          <li>
            <strong>Efficiency:</strong> The entire process, from application
            to approval, is expedited, reducing the time traditionally
            required for registration.
          </li>

          <li>
            <strong>Transparency:</strong> Clear guidelines and real-time
            updates keep applicants informed about their application status.
          </li>

          <li>
            <strong>Cost-Effectiveness:</strong> Save resources by minimizing
            paperwork and travel expenses associated with manual registration
            processes.
          </li>

          <li>
            <strong>Legal Compliance:</strong> Ensure your business operates
            within the law, gaining credibility and access to various legal
            and financial benefits.
          </li>
        </ul>
      </div>

      {/* Who Should Register */}
      <div className={styles.contentBlock}>
        <h3>Who Should Register?</h3>

        <p>Business name registration is essential for:</p>

        <ul className={styles.contentList}>
          <li>
            Sole proprietors and entrepreneurs seeking to establish a unique
            identity.
          </li>

          <li>
            Small and medium-sized enterprises (SMEs) looking to formalize
            their operations.
          </li>

          <li>
            Partnerships and other business entities intending to operate
            legally within the jurisdiction.
          </li>
        </ul>
      </div>

      {/* Steps to Register */}
      <div className={styles.contentBlock}>
        <h3>Steps to Register Your Business Name</h3>

        <ol className={styles.contentList}>
          <li>
            <strong>Create an Account on the MTII Portal:</strong> Sign up
            using your email address and a secure password to access the
            services dashboard.
          </li>

          <li>
            <strong>Initiate the Registration Process:</strong> Select the
            &quot;Business Name Registration&quot; option and complete the
            online application form.
          </li>

          <li>
            <strong>Upload Required Documents:</strong> Attach all necessary
            documentation, including valid identification and proof of
            address.
          </li>

          <li>
            <strong>Pay the Registration Fee:</strong> Use the integrated
            payment system to complete the transaction securely.
          </li>

          <li>
            <strong>Track Your Application:</strong> Stay updated on the
            progress of your submission via the portal&apos;s tracking feature.
          </li>

          <li>
            <strong>Receive Your Certificate:</strong> Once approved, download
            your official certificate of registration from the portal.
          </li>
        </ol>

        <div className={styles.resourceButtons}>
          <Link
            href="/registration"
            className={styles.resourceButton}
          >
            How to Register Business Name
            <span>→</span>
          </Link>

          <Link
            href="/registration"
            className={styles.resourceButton}
          >
            How to Register in Detail
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Support and Assistance */}
      <div className={styles.contentBlock}>
        <h3>Need Help?</h3>

        <p>
          For assistance with business name registration, contact the MTII
          support team:
        </p>

        <ul className={styles.contentList}>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@mtiinasarawa.com.ng">
              support@mtiinasarawa.com.ng
            </a>
          </li>

          <li>
            <strong>Phone:</strong> +234 803 821 3845
          </li>

          <li>
            <strong>Live Chat:</strong> Available on the MTII website during
            business hours.
          </li>
        </ul>

        <p>
          Visit the{" "}
          <a
            href="http://mtiinasarawa.com.ng/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            MTII Help Center
          </a>{" "}
          for FAQs, video tutorials, and live chat support.
        </p>

        <div className={styles.resourceButtons}>
          <a
            href="https://www.apps.mtiinasarawa.com.ng/register"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceButton}
          >
            Register Your Business Name
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}