import Link from "next/link";
import styles from "./BusinessPremisesRegistration.module.css";

export default function BusinessPremisesRegistration() {
  return (
    <div className={styles.businessPremisesRegistration}>
      {/* Introduction */}
      <div className={styles.intro}>
        <span className={styles.contentLabel}>REGISTRATION</span>

        <h2>Business Premises Registration</h2>

        <p>
          The Ministry of Trade, Industry, and Investment (MTII) Portal
          provides a convenient and user-friendly platform for registering
          business premises. The online service enables business owners to
          complete their registration securely and conveniently without the
          need for unnecessary visits to government offices.
        </p>

        <p>
          Business premises registration helps ensure that businesses operate
          within the appropriate regulatory framework and provides official
          recognition of the location from which business activities are
          conducted.
        </p>
      </div>

      {/* Key Features */}
      <div className={styles.contentBlock}>
        <h3>
          Key Features of Business Premises Registration on the MTII Portal
        </h3>

        <ul className={styles.contentList}>
          <li>
            <strong>Seamless Online Application Process:</strong> The MTII
            Portal provides an easy-to-use online registration process,
            enabling business owners to submit their business premises
            registration application securely and conveniently from any
            location, at any time.
          </li>

          <li>
            <strong>Verification of Premises Details:</strong> Applicants are
            required to provide specific details about their business
            location, such as the physical address, ownership status, and
            nature of the premises. The system ensures the authenticity of the
            provided information and verifies its compliance with regulatory
            standards.
          </li>

          <li>
            <strong>Document Submission and Approval:</strong> Business owners
            can upload all required documents, such as proof of ownership,
            lease agreements, business permits, and other supporting documents
            directly through the portal. Upon submission, the application is
            processed, and the documents are reviewed for completeness and
            accuracy.
          </li>

          <li>
            <strong>Instant Status Updates:</strong> Track the progress of your
            application in real-time. The MTII Portal provides regular updates
            on the status of your registration, ensuring transparency and
            minimizing uncertainty.
          </li>

          <li>
            <strong>Payment Integration:</strong> The portal offers multiple
            secure payment methods, allowing applicants to easily pay the
            required registration fees through online payment systems, such as
            credit/debit cards, mobile payments, and bank transfers.
          </li>

          <li>
            <strong>Official Registration Certificate:</strong> Once the
            registration is approved, business owners receive an official
            business premises registration certificate, which is downloadable
            from the portal. This certificate serves as legal proof of the
            premises&apos; registration and is essential for the continued
            operation of the business.
          </li>
        </ul>
      </div>

      {/* Benefits */}
      <div className={styles.contentBlock}>
        <h3>Benefits of Registering Business Premises Online</h3>

        <ul className={styles.contentList}>
          <li>
            <strong>Convenience:</strong> Register your business premises from
            the comfort of your home or office without the need to visit
            government offices in person. The online portal is available 24/7,
            making it easy to complete the registration process at any time.
          </li>

          <li>
            <strong>Efficiency:</strong> The online platform accelerates the
            registration process by eliminating unnecessary paperwork and
            reducing manual intervention. Applications are processed swiftly,
            and approvals are granted in a timely manner.
          </li>

          <li>
            <strong>Cost-Effectiveness:</strong> By registering online,
            business owners can save both time and money that would otherwise
            be spent on travel and in-person visits to government offices.
          </li>

          <li>
            <strong>Transparency and Real-Time Updates:</strong> The portal
            provides real-time tracking of your registration status. Business
            owners can monitor the progress of their application, ensuring
            complete transparency throughout the process.
          </li>

          <li>
            <strong>Legal Compliance:</strong> Registering your business
            premises ensures that your business operates within the legal
            framework set by the government. It provides you with the
            necessary permits to conduct business activities legally and
            access various government incentives and support.
          </li>
        </ul>
      </div>

      {/* Who Should Register */}
      <div className={styles.contentBlock}>
        <h3>Who Should Register?</h3>

        <p>Business premises registration is required for:</p>

        <ul className={styles.contentList}>
          <li>
            <strong>New Business Owners:</strong> Individuals starting new
            businesses need to register their premises to ensure compliance
            with zoning laws and other regulations.
          </li>

          <li>
            <strong>Existing Business Owners:</strong> Businesses that have
            relocated or changed premises must update their registration to
            reflect the new location.
          </li>

          <li>
            <strong>Leasing or Renting Commercial Space:</strong> Businesses
            operating from rented or leased commercial spaces need to register
            the premises with the MTII Portal to meet regulatory requirements.
          </li>
        </ul>
      </div>

      {/* Steps to Register */}
      <div className={styles.contentBlock}>
        <h3>Steps to Register Your Business Premises</h3>

        <ol className={styles.contentList}>
          <li>
            <strong>Create an Account on the MTII Portal:</strong> Register on
            the portal using your email address and a secure password. Once
            your account is created, you will have access to the online
            registration services.
          </li>

          <li>
            <strong>Initiate the Business Premises Registration Process:</strong>{" "}
            After logging in, select the &quot;Business Premises
            Registration&quot; option. Complete the online form with the
            required business premises details, such as the business address,
            nature of the premises, and business activity.
          </li>

          <li>
            <strong>Upload Supporting Documents:</strong> Attach all necessary
            documents, including proof of ownership or lease agreement,
            premises inspection reports (if required), and any other relevant
            paperwork that supports your application.
          </li>

          <li>
            <strong>Make the Registration Payment:</strong> Use the secure
            online payment system to pay the required registration fee.
            Payment options include credit/debit cards, bank transfers, or
            mobile payment platforms.
          </li>

          <li>
            <strong>Submit Your Application:</strong> Once you have filled out
            the form and uploaded the documents, review your submission for
            accuracy and click &quot;Submit&quot; to send the application to
            the MTII for processing.
          </li>

          <li>
            <strong>Track Your Application Status:</strong> Use the portal&apos;s
            tracking feature to monitor your application status. You will
            receive notifications for any updates or if additional information
            is required.
          </li>

          <li>
            <strong>Receive Your Official Registration Certificate:</strong>{" "}
            Upon successful approval of your registration, you will receive an
            official business premises registration certificate. You can
            download and print the certificate for your records.
          </li>
        </ol>

        <div className={styles.resourceButtons}>
          <a
            href="https://www.apps.mtiinasarawa.com.ng/register"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceButton}
          >
            Register Business Premises
            <span>→</span>
          </a>

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
        <h3>Need Assistance?</h3>

        <p>
          For any questions or support related to business premises
          registration, contact the MTII support team:
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
            href="http://www.mtiinasarawa.com.ng/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            MTII Help Center
          </a>{" "}
          for FAQs, video tutorials, and detailed guides to assist you in
          completing your business premises registration.
        </p>
      </div>
    </div>
  );
}