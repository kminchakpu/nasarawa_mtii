import Link from "next/link";
import BusinessReformsTabs from "@/components/business-reforms/BusinessReformsTabs";
import styles from "@/components/business-reforms/BusinessReformsTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function LegalFrameworkPage() {
  return (
    <>
      <BusinessReformsTabs>
        <div className={styles.businessReformsContent}>
          <span className={styles.contentLabel}>
            BUSINESS ENABLING REFORMS
          </span>

          <h2>Legal Framework</h2>

          {/* Overview */}
          <div className={styles.contentBlock}>
            <h3>Overview</h3>

            <p>
              The Legal Framework provides the laws, regulations, policies,
              and institutional guidelines that govern the activities of the
              Nasarawa State Ministry of Trade, Industry and Investment
              (MTII). It establishes the legal foundation for promoting
              investment, regulating businesses, supporting industrial
              development, and ensuring compliance with applicable laws.
            </p>

            <p>
              The framework is designed to create a predictable, transparent,
              and business-friendly environment where investors, entrepreneurs,
              industries, and other stakeholders can operate with confidence.
            </p>
          </div>

          {/* Purpose of the Legal Framework */}
          <div className={styles.contentBlock}>
            <h3>Purpose of the Legal Framework</h3>

            <p>
              The legal framework provides the foundation for effective
              administration and regulation of trade, industry, investment,
              and related business activities within Nasarawa State. Its
              primary purposes include:
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Regulatory Compliance:</strong> Ensuring that
                businesses and organizations operate in accordance with
                applicable laws and regulations.
              </li>

              <li>
                <strong>Investment Protection:</strong> Providing legal
                certainty and protection for investors and their investments.
              </li>

              <li>
                <strong>Business Facilitation:</strong> Supporting policies
                and regulations that make it easier to establish and operate
                businesses.
              </li>

              <li>
                <strong>Fair Competition:</strong> Promoting a transparent
                and competitive business environment.
              </li>

              <li>
                <strong>Industrial Development:</strong> Providing legal
                support for sustainable industrialization and economic
                diversification.
              </li>
            </ul>
          </div>

          {/* Key Areas */}
          <div className={styles.contentBlock}>
            <h3>Key Areas Covered</h3>

            <p>
              The legal framework covers several areas that are essential to
              the development of a strong and sustainable business environment
              in Nasarawa State.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Business Registration and Licensing:</strong>{" "}
                Requirements and procedures for establishing and operating
                businesses.
              </li>

              <li>
                <strong>Investment Regulations:</strong> Policies and
                regulations governing local and foreign investments.
              </li>

              <li>
                <strong>Trade Regulations:</strong> Rules governing trade
                activities, market access, and commercial operations.
              </li>

              <li>
                <strong>Industrial Regulations:</strong> Legal provisions
                supporting industrial development and responsible business
                practices.
              </li>

              <li>
                <strong>Cooperative Societies:</strong> Laws and regulations
                governing the registration, supervision, and operation of
                cooperative societies.
              </li>

              <li>
                <strong>Environmental Compliance:</strong> Requirements for
                businesses and industries to operate in an environmentally
                responsible manner.
              </li>
            </ul>
          </div>

          {/* Regulatory Compliance */}
          <div className={styles.contentBlock}>
            <h3>Regulatory Compliance</h3>

            <p>
              Businesses operating within Nasarawa State are expected to
              comply with all applicable federal and state laws, regulations,
              standards, and administrative requirements. Compliance helps
              businesses operate legally while contributing to a stable and
              predictable investment environment.
            </p>

            <p>
              MTII works with relevant government agencies and regulatory
              institutions to promote compliance and provide guidance to
              businesses and investors.
            </p>
          </div>

          {/* Business and Investment Protection */}
          <div className={styles.contentBlock}>
            <h3>Business and Investment Protection</h3>

            <p>
              The legal framework supports the protection of legitimate
              business and investment interests by promoting transparency,
              accountability, fairness, and adherence to established legal
              procedures.
            </p>

            <p>
              Investors and businesses are encouraged to understand the
              applicable legal requirements before commencing operations and
              to seek appropriate guidance where necessary.
            </p>
          </div>

          {/* Government Agencies */}
          <div className={styles.contentBlock}>
            <h3>Relevant Laws and Regulatory Institutions</h3>

            <p>
              The implementation of the legal framework involves collaboration
              between MTII and relevant government ministries, departments,
              agencies, and regulatory institutions. These institutions
              contribute to the effective implementation and enforcement of
              applicable laws and standards.
            </p>

            <ul className={styles.contentList}>
              <li>
                <strong>Federal and State Government Ministries:</strong>{" "}
                Responsible for developing and implementing relevant policies
                and regulations.
              </li>

              <li>
                <strong>Regulatory Agencies:</strong> Responsible for
                enforcing applicable standards, regulations, and compliance
                requirements.
              </li>

              <li>
                <strong>Investment Promotion Institutions:</strong> Support
                investors and facilitate investment opportunities.
              </li>

              <li>
                <strong>Standards and Quality Institutions:</strong> Ensure
                that businesses and industries comply with applicable quality
                and safety standards.
              </li>
            </ul>
          </div>

          {/* Importance */}
          <div className={styles.contentBlock}>
            <h3>Importance to Businesses and Investors</h3>

            <p>
              A clear and predictable legal framework provides businesses and
              investors with the confidence needed to make long-term
              investment decisions. It reduces uncertainty, promotes
              transparency, protects legitimate interests, and supports
              sustainable economic development.
            </p>

            <p>
              Through continuous improvement of its regulatory environment,
              Nasarawa State remains committed to creating conditions that
              encourage entrepreneurship, investment, industrial development,
              and economic growth.
            </p>
          </div>

          {/* Resources */}
          <div className={styles.contentBlock}>
            <h3>Legal and Regulatory Resources</h3>

            <p>
              Businesses, investors, and other stakeholders can access
              relevant legal and regulatory information through the Ministry
              and other appropriate government institutions.
            </p>

            <div className={styles.resourceButtons}>
              <Link
                href="/business-enabling-reforms/application-guidelines"
                className={styles.resourceButton}
              >
                <span>Application Guidelines</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/business-enabling-reforms/investment-opportunities"
                className={styles.resourceButton}
              >
                <span>Investment Opportunities</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/business-enabling-reforms/faqs"
                className={styles.resourceButton}
              >
                <span>FAQs</span>
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