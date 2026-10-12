import CooperativeTabs from "@/components/cooperative-tab/CooperativeTabs";
import styles from "@/components/cooperative-tab/CooperativeTabs.module.css";

export default function FBORegistrationPage() {
  return (
    <CooperativeTabs>
      <div className={styles.tabPanel}>
        <div className={styles.contentBlock}>
          <span className={styles.contentLabel}>
            REGISTRATION
          </span>

          <h1>Faith-Based Organisation Registration</h1>

          <p>
            Faith-Based Organization (FBO) registration under the Ministry
            of Trade, Industry, and Investment (MTII) is a streamlined
            process designed to provide legal recognition and operational
            support to organizations driven by faith-centered missions.
            By registering, FBOs gain the ability to operate within a
            structured legal framework, ensuring compliance with national
            regulations while unlocking opportunities for collaboration,
            funding, and capacity building.
          </p>

          <p>
            MTII empowers FBOs to focus on their core activities—advocacy,
            community engagement, and service delivery—while advancing
            shared priorities for societal impact and development.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2>Faith-Based Organization (FBO) Registration</h2>

          <p>
            Faith-Based Organization (FBO) registration with the Ministry
            of Trade, Industry, and Investment (MTII) is a formal process
            that provides legal recognition and operational support to
            organizations rooted in faith-driven missions. This
            registration ensures compliance with national laws, promotes
            accountability, and opens doors for partnerships, funding
            opportunities, and other resources necessary for advancing
            societal impact.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2>Benefits of Registration</h2>

          <ul className={styles.contentList}>
            <li>
              <strong>Legal Recognition:</strong> Operate as a recognized
              entity under the law, ensuring credibility and legitimacy.
            </li>

            <li>
              <strong>Access to Funding:</strong> Eligibility to apply for
              grants, government subsidies, and other funding sources.
            </li>

            <li>
              <strong>Partnership Opportunities:</strong> Collaborate with
              national and international organizations for shared goals.
            </li>

            <li>
              <strong>Tax Benefits:</strong> Possible exemptions and tax
              relief based on organizational activities.
            </li>

            <li>
              <strong>Capacity Building:</strong> Access to training,
              resources, and advisory services provided by MTII.
            </li>

            <li>
              <strong>Operational Support:</strong> Guidance in structuring
              operations and aligning with national development priorities.
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h2>Procedures for Registration</h2>

          <ol className={styles.contentList}>
            <li>
              <strong>Application Submission:</strong> Complete and submit
              the FBO registration form available at MTII offices or
              online.
            </li>

            <li>
              <strong>Required Documentation:</strong> Provide necessary
              documents, including:

              <ul className={styles.contentList}>
                <li>Constitution or bylaws of the organization.</li>

                <li>
                  Mission and vision statements.
                </li>

                <li>
                  Details of the leadership team, including identification
                  and qualifications.
                </li>

                <li>
                  Proof of address and location of operations.
                </li>

                <li>
                  Financial plan or budget for activities.
                </li>
              </ul>
            </li>

            <li>
              <strong>Verification:</strong> MTII conducts a review of the
              submitted documents to ensure compliance with registration
              requirements.
            </li>

            <li>
              <strong>Inspection:</strong> On-site verification of the
              organization&apos;s location and operations may be conducted.
            </li>

            <li>
              <strong>Approval:</strong> Upon successful completion of the
              review, the organization will receive a certificate of
              registration.
            </li>

            <li>
              <strong>Renewal:</strong> Registrations are subject to
              periodic renewals as stipulated by MTII regulations.
            </li>
          </ol>
        </div>

        <div className={styles.contentBlock}>
          <h2>Key Requirements</h2>

          <ul className={styles.contentList}>
            <li>
              The organization must demonstrate alignment with faith-based
              principles and objectives.
            </li>

            <li>
              Activities must focus on advocacy, community service, and
              societal development.
            </li>

            <li>
              Compliance with all national laws and MTII guidelines is
              mandatory.
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h2>Additional Information</h2>

          <ul className={styles.contentList}>
            <li>
              Registration fees apply and must be paid during the
              application process.
            </li>

            <li>
              MTII offers consultation services to assist organizations
              throughout the registration process.
            </li>

            <li>
              Organizations can update their registration information as
              needed to reflect changes in leadership or activities.
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <p>
            Registering your FBO under MTII ensures a strong foundation for
            achieving your mission while fostering trust, collaboration,
            and sustainable growth.
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="/registration"
              className={styles.viewDetailsButton}
            >
              Read How to Register
              <span>→</span>
            </a>

            <a
              href="https://app.mtiinasarawa.com.ng/register"
              className={styles.viewDetailsButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register the FBO
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </CooperativeTabs>
  );
}