import Link from "next/link";
import styles from "./CooperativeRegistration.module.css";

export default function CooperativeRegistration() {
  return (
    <div className={styles.cooperativeRegistration}>
      {/* Introduction */}
      <div className={styles.intro}>
        <span className={styles.contentLabel}>REGISTRATION</span>

        <h2>Cooperative Society Registration</h2>

        <p>
          A cooperative society is a voluntary and autonomous group of
          individuals united by a shared interest. Members collaborate to
          achieve common economic, social, and cultural goals through a jointly
          owned and democratically managed organization.
        </p>

        <p>
          Cooperatives play a crucial role in promoting economic development,
          fostering community ties, and addressing shared needs.
        </p>
      </div>

      {/* Overview */}
      <div className={styles.contentBlock}>
        <h3>Overview</h3>

        <p>
          Registering a cooperative society in Nigeria requires strict
          compliance with the Nigerian Cooperative Societies Act, which
          regulates the formation, registration, and operations of cooperative
          societies across the country.
        </p>

        <p>
          Each state has a designated authority responsible for overseeing the
          registration process. In Nasarawa State, the registration is managed
          by the <strong>Department of Cooperatives</strong> under the{" "}
          <strong>Ministry of Trade, Industry, and Investment</strong>. This
          ensures the society operates in accordance with the relevant legal
          framework and serves its members&apos; interests effectively.
        </p>
      </div>

      {/* Legal Framework */}
      <div className={styles.contentBlock}>
        <h3>Legal Framework and Dual Registration</h3>

        <p>
          Furthermore, a cooperative society can also be registered with the{" "}
          <a
            href="https://www.cac.gov.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Corporate Affairs Commission (CAC)
          </a>
          , as stipulated in Section 19 of the{" "}
          <strong>
            Companies and Allied Matters Act (CAMA) 2020
          </strong>
          .
        </p>

        <p>
          Registration with the CAC provides additional legal recognition,
          allowing the cooperative to operate with broader credibility and
          ensuring compliance with national regulations. This dual registration
          option offers cooperatives flexibility in structuring their legal and
          operational frameworks.
        </p>
      </div>

      {/* Procedures */}
      <div className={styles.contentBlock}>
        <h3>Procedures for Registering a Co-operative Society</h3>

        <p>
          Registering a co-operative society involves several key steps,
          including defining the society&apos;s objectives, drafting a
          constitution, and securing approval from the relevant state
          department or authority.
        </p>

        <p>
          Applicants must submit required documentation, including membership
          lists, meeting minutes, and financial plans, to the designated
          ministry or department, such as the Department of Cooperatives.
          Additional registration with the{" "}
          <strong>Corporate Affairs Commission (CAC)</strong> under{" "}
          <strong>CAMA 2020</strong> may also be necessary for broader legal
          recognition.
        </p>

        <p>
          The process ensures compliance with legal requirements and establishes
          the society as a legitimate entity capable of achieving its goals.
        </p>
      </div>

      {/* Fees Introduction */}
      <div className={styles.contentBlock}>
        <h3>
          Fees for Registration, Re-certification, and Legal Search
        </h3>

        <p>
          This outlines the costs associated with registering, re-certifying,
          and conducting legal searches for Cooperatives, Non-Governmental
          Organizations (NGOs), Community-Based Organizations (CBOs), and
          Faith-Based Organizations (FBOs).
        </p>

        <p>
          These fees vary depending on the type and scope of the organization,
          ensuring compliance with legal requirements and providing official
          recognition for operational legitimacy.
        </p>
      </div>

      {/* Cooperative Fees */}
      <div className={styles.contentBlock}>
        <h3>Cooperative Societies Fees</h3>

        <div className={styles.tableWrapper}>
          <table className={styles.feeTable}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Fee (₦)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>New Registration</td>
                <td>₦10,000</td>
              </tr>

              <tr>
                <td>Recertification of Registered Cooperative</td>
                <td>₦5,000</td>
              </tr>

              <tr>
                <td>Replacement of Lost/Damaged Certificate</td>
                <td>₦5,000</td>
              </tr>

              <tr>
                <td>Legal Search for Cooperative</td>
                <td>₦3,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NGO & CBO Fees */}
      <div className={styles.contentBlock}>
        <h3>NGOs &amp; CBOs Registration Fees</h3>

        <div className={styles.tableWrapper}>
          <table className={styles.feeTable}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Fee (₦)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>New Registration</td>
                <td>₦10,000</td>
              </tr>

              <tr>
                <td>Recertification of Registered NGOs/CBOs</td>
                <td>₦5,000</td>
              </tr>

              <tr>
                <td>Replacement of Lost/Damaged Certificate</td>
                <td>₦5,000</td>
              </tr>

              <tr>
                <td>Legal Search for NGOs/CBOs</td>
                <td>₦3,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Buttons */}
      <div className={styles.resourceButtons}>
        <a
          href="https://www.apps.mtiinasarawa.com.ng/register"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resourceButton}
        >
          Register a Cooperative Society
          <span>→</span>
        </a>

        <Link
          href="/registration"
          className={styles.resourceButton}
        >
          How to Register
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}