import Link from "next/link";
import BusinessReformsTabs from "@/components/business-reforms/BusinessReformsTabs";
import styles from "@/components/business-reforms/BusinessReformsTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function BusinessEnablingReformsPage() {
  return (
    <>
      <BusinessReformsTabs>
        <div className={styles.businessReformsContent}>
          {/* =========================================
              PAGE LABEL
          ========================================= */}
          <span className={styles.contentLabel}>
            BUSINESS ENABLING REFORMS
          </span>

          <p>
            Business-enabling reforms are policy and regulatory changes implemented by governments or organizations to create a more favourable environment for businesses to operate and thrive. These reforms aim to reduce barriers, streamline processes, and enhance efficiency, ultimately promoting economic growth, investment, and innovation.
          </p>

          {/* =========================================
              OVERVIEW
          ========================================= */}
          <div className={styles.contentBlock}>
            <h2>Overview</h2>

            <p>
              The <strong>Presidential Enabling Business Environment Council (PEBEC)</strong>{" "}
              is leading efforts to enhance Nigeria&apos;s business landscape by
              addressing key constraints faced by micro, small, and
              medium-sized enterprises (MSMEs).
            </p>

            <p>
              Through the{" "}
              <strong>
                State Action on Business Enabling Reforms (SABER)
              </strong>{" "}
              program, PEBEC collaborates with the{" "}
              <strong>World Bank Country Office</strong> to provide technical
              and financial incentives to states, fostering capacity building
              and promoting an enabling business environment.
            </p>
          </div>

          {/* =========================================
              ABOUT SABER
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>About the SABER Program</h3>

            <p>
              The <strong>SABER Program</strong> is a performance-based
              initiative jointly developed by the{" "}
              <strong>World Bank Technical Team</strong> and the{" "}
              <strong>PEBEC Secretariat</strong>. It aims to drive impactful
              business reforms across Nigeria by offering results-based
              financing to states.
            </p>

            <p>
              The program focuses on:
            </p>

            <ul className={styles.contentList}>
              <li>
                Providing structured incentives to accelerate key reforms.
              </li>

              <li>
                Strengthening institutional frameworks for sustainable
                improvements.
              </li>

              <li>
                Enhancing the ease of doing business to attract investments
                and spur economic growth.
              </li>
            </ul>
          </div>

          {/* =========================================
              NASARAWA STATE'S ROLE
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Nasarawa State&apos;s Role in SABER</h3>

            <p>
              Nasarawa State is actively contributing to the success of the
              SABER program. The state&apos;s Reform Champion,{" "}
              <strong>Ibrahim A. Abdullahi</strong>, MD/CEO of the{" "}
              <strong>Nasarawa Investment and Development Agency (NASIDA)</strong>,
              leads these efforts.
            </p>

            <p>
              Abdullahi also represents the North Central Region on the{" "}
              <strong>SABER Technical Working Group</strong>, collaborating
              with stakeholders to shape effective reform strategies.
            </p>

            <p>
              Additionally, <strong>NASIDA</strong> serves as the Secretariat
              of the <strong>Nasarawa Enabling Business Environment Council
              (NEBEC)</strong>, chaired by His Excellency, the Governor of
              Nasarawa State, <strong>Abdullahi A. Sule</strong>.
            </p>
          </div>

          {/* =========================================
              OBJECTIVES
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Objectives of Nasarawa State&apos;s Business Reforms</h3>

            <ul className={styles.contentList}>
              <li>
                Simplify business registration and licensing processes.
              </li>

              <li>
                Enhance infrastructure and regulatory frameworks to attract
                investments.
              </li>

              <li>
                Strengthen public-private partnerships to support MSME growth.
              </li>

              <li>
                Promote transparency, accountability, and efficiency in
                government operations.
              </li>
            </ul>
          </div>

          {/* =========================================
              WHY REFORMS MATTER
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>Why These Reforms Matter</h3>

            <p>
              By fostering an enabling business environment, Nasarawa State
              aims to:
            </p>

            <ul className={styles.contentList}>
              <li>
                Encourage economic diversification and reduce dependency on
                non-renewable resources.
              </li>

              <li>
                Create job opportunities and drive economic growth for its
                citizens.
              </li>

              <li>
                Position the state as a leading hub for investment and
                innovation within Nigeria.
              </li>
            </ul>
          </div>

          {/* =========================================
              ACTION PLAN
          ========================================= */}
          <div className={styles.contentBlock}>
            <h3>
              Download the Nasarawa State Business Enabling Reforms Action
              Plan
            </h3>

            <p>
              For a comprehensive overview of Nasarawa State&apos;s strategic
              action plan, click the link below:
            </p>

            <Link
              href="/documents/nasarawa-business-enabling-reforms-action-plan.pdf"
              className={styles.viewDetailsButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Action Plan</span>

              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </BusinessReformsTabs>

      <Footer />
    </>
  );
}