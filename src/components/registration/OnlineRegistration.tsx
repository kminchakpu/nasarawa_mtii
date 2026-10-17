import Link from "next/link";
import styles from "./OnlineRegistration.module.css";

export default function OnlineRegistration() {
  return (
    <div className={styles.onlineRegistration}>
      {/* Introduction */}
      <div className={styles.intro}>
        <span className={styles.contentLabel}>REGISTRATION</span>

        <h2>Online Business and Organization Registration</h2>

        <p>
          The Ministry of Trade, Industry, and Investment is proud to introduce
          an efficient and user-friendly online platform for the registration
          of Business Premises (with the Department of Trade),
          as well as Non-Governmental Organizations (NGOs), Community-Based
          Organizations (CBOs), Faith-Based Organizations (FBOs), and
          Cooperative Societies (with the Department of Cooperative).
        </p>

        <p>
          This initiative is designed to streamline the registration process,
          making it easier and more convenient for our clients to formalize
          their operations without the need to travel to Lafia.
        </p>

        <p>
          With our online registration system, you can complete your
          application, receive approval, and obtain your registration
          certificates seamlessly from the comfort of your home or office.
          This step reflects our commitment to fostering a business-friendly
          environment where enterprises and organizations can thrive with
          minimal hassle.
        </p>
      </div>

      {/* Steps to Successfully Register */}
      <div className={styles.contentBlock}>
        <h3>Steps to Successfully Register</h3>

        <ol className={styles.contentList}>
          <li>
            <strong>Identify Your Zone:</strong> Determine the geographical
            zone your business or organization belongs to within the state.
          </li>

          <li>
            <strong>Categorize Your Business:</strong> Understand the specific
            category under which your business or organization falls for
            accurate classification.
          </li>

          <li>
            <strong>Know Applicable Fees:</strong> Review the required payment
            for both new registrations and renewals to ensure compliance with
            the necessary financial obligations.
          </li>
        </ol>

        <Link
          href="/registration"
          className={styles.viewDetailsButton}
        >
          Read All Here
          <span>→</span>
        </Link>
      </div>

      {/* Available Online Services */}
      <div className={styles.contentBlock}>
        <h3>Available Online Services</h3>

        <p>
          The MTII online portal supports the following services:
        </p>

        <ul className={styles.contentList}>
          <li>
            <strong>Business Name Registration:</strong> Secure your business
            identity and check name availability in real-time.
          </li>

          <li>
            <strong>Business Premises Registration:</strong> Obtain permits to
            operate legally and upload documentation directly.
          </li>

          <li>
            <strong>Cooperative Society Registration:</strong> Formalize
            cooperative societies with governance structures and by-laws.
          </li>

          <li>
            <strong>Licenses and Permits:</strong> Apply for and renew
            industry-related licenses and permits.
          </li>

          <li>
            <strong>Document Submission and Verification:</strong> Upload,
            submit, and verify necessary documents electronically.
          </li>

          <li>
            <strong>Appeals and Reconsiderations:</strong> File appeals and
            submit supporting documents for denied applications.
          </li>
        </ul>
      </div>

      {/* Benefits */}
      <div className={styles.contentBlock}>
        <h3>Benefits of Online Registration</h3>

        <p>
          The MTII online system offers the following advantages:
        </p>

        <ul className={styles.contentList}>
          <li>
            <strong>Convenience:</strong> Access services 24/7 from any
            location.
          </li>

          <li>
            <strong>Efficiency:</strong> Faster processing times and reduced
            paperwork.
          </li>

          <li>
            <strong>Transparency:</strong> Monitor application status and
            timelines in real-time.
          </li>

          <li>
            <strong>Cost-Effectiveness:</strong> Save time and resources by
            avoiding in-person visits.
          </li>

          <li>
            <strong>Secure Transactions:</strong> Ensure data privacy through
            encrypted systems.
          </li>
        </ul>
      </div>

      {/* Steps to Register Online */}
      <div className={styles.contentBlock}>
        <h3>Steps to Register Online</h3>

        <ol className={styles.contentList}>
          <li>
            <strong>Create an Account:</strong> Visit the official MTII
            registration portal and register with your email address.
          </li>

          <li>
            <strong>Log In to the Portal:</strong> Use your credentials to
            access the online services dashboard.
          </li>

          <li>
            <strong>Choose the Desired Service:</strong> Select the specific
            service, such as business name registration.
          </li>

          <li>
            <strong>Complete the Online Form:</strong> Fill in all mandatory
            fields accurately.
          </li>

          <li>
            <strong>Upload Supporting Documents:</strong> Attach scanned
            copies of required documents.
          </li>

          <li>
            <strong>Submit Your Application:</strong> Review the form, submit
            it, and pay applicable fees securely.
          </li>

          <li>
            <strong>Track Application Status:</strong> Monitor the progress of
            your application online.
          </li>

          <li>
            <strong>Receive Confirmation:</strong> Download your certificate or
            permit upon approval.
          </li>
        </ol>

        <div className={styles.resourceButtons}>
          <a
            href="https://www.apps.mtiinasarawa.com.ng/register"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceButton}
          >
            Start Online Registration
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
        <h3>Support and Assistance</h3>

        <p>
          For inquiries or assistance with the online registration process,
          please contact:
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
            Online Services Help Center
          </a>{" "}
          for video tutorials, FAQs, and detailed guides.
        </p>
      </div>
    </div>
  );
}