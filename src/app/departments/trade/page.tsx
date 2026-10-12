import Image from "next/image";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function TradePage() {
  return (
    <>
      <DepartmentTabs>
        <div className={styles.departmentContent}>
          <span className={styles.contentLabel}>
            DEPARTMENT
          </span>

          <h2>Trade</h2>

          {/* Director Profile */}
          <div className={styles.directorProfile}>
            <div className={styles.directorImage}>
              <Image
                src="/images/departments/director-trade.jpg"
                alt="Director of Trade"
                width={400}
                height={500}
                priority
              />
            </div>

            <div className={styles.directorInfo}>
              <span className={styles.directorLabel}>
                DIRECTOR
              </span>

              <h3>Director, Trade</h3>

              <p>
                The Department of Trade serves as a comprehensive business hub
                and a vital interface between the business community and the
                government. The department focuses on addressing sectoral needs
                while promoting trade development as a catalyst for economic
                growth, competitiveness, and sustainable productivity in
                Nasarawa State.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <p>
            The Department of Trade serves as a comprehensive business hub and
            a vital interface between the business community and the
            government. Its primary focus is addressing specific sectoral needs
            while promoting trade development as a catalyst for economic
            growth.
          </p>

          <p>
            The overarching goal of the department is to enhance the
            competitiveness and scientific excellence of local industries and
            businesses, fostering higher levels of sustainable growth and
            productivity in Nasarawa State&apos;s evolving modern economy.
          </p>

          {/* Role of the Department */}
          <div className={styles.departmentDetails}>
            <h3>Role of the Department of Trade</h3>

            <p>
              As Nasarawa State transitions into a vibrant, knowledge-based
              economy, the Department of Trade remains committed to
              continuously innovating and delivering value to the business
              sector.
            </p>

            <p>
              In an increasingly export-driven global landscape, the department
              aspires to position Nasarawa State as a critical gateway for
              international trade, bridging Nigeria with global markets.
            </p>
          </div>

          {/* Services and Support */}
          <div className={styles.departmentDetails}>
            <h3>Services and Support</h3>

            <p>
              The Department of Trade provides a broad spectrum of trade
              services and practical support to businesses, entrepreneurs, and
              start-ups within Nasarawa State and beyond. Leveraging an
              extensive network of specialists across the state&apos;s 13 Local
              Government Areas and partnerships with sister ministries
              nationwide, the department offers:
            </p>

            <ul className={styles.responsibilitiesList}>
              <li>
                Expert guidance and business consultation.
              </li>

              <li>
                Networking opportunities with key stakeholders in various
                industries.
              </li>

              <li>
                Support programs focused on education, training, finance, and
                capacity building.
              </li>
            </ul>

            <p>
              Through these initiatives, the department is dedicated to
              empowering businesses to thrive in Nasarawa State&apos;s dynamic
              economic environment.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.departmentDetails}>
            <h3>Mission</h3>

            <p>
              The mission of the Department of Trade is to facilitate the
              development and growth of businesses in Nasarawa State by
              creating an enabling environment that unlocks their full
              potential. This is achieved through:
            </p>

            <ul className={styles.responsibilitiesList}>
              <li>
                Designing and managing programs that deliver vital information,
                education, and training.
              </li>

              <li>
                Providing financial resources and other critical assistance to
                businesses.
              </li>

              <li>
                Enhancing the competitiveness of the local business landscape
                to drive sustainable growth and productivity.
              </li>
            </ul>
          </div>

          {/* Commitment to Excellence */}
          <div className={styles.departmentDetails}>
            <h3>Commitment to Excellence</h3>

            <p>
              Aligned with the broader mission and vision of the Ministry of
              Trade, Industry, and Investment (MTII), the Department of Trade
              is steadfast in its commitment to service excellence. Core
              principles guiding our operations include:
            </p>

            <ul className={styles.responsibilitiesList}>
              <li>
                <strong>Professionalism and Courtesy:</strong> Upholding the
                highest standards of professionalism in all interactions.
              </li>

              <li>
                <strong>Confidentiality:</strong> Ensuring the utmost privacy
                and protection of sensitive information.
              </li>

              <li>
                <strong>Efficiency:</strong> Delivering prompt and effective
                services to stakeholders.
              </li>

              <li>
                <strong>Integrity:</strong> Providing honest, reliable, and
                transparent support at all times.
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={styles.departmentDetails}>
            <p>
              The Department of Trade remains a cornerstone in driving
              economic prosperity, fostering an ecosystem where businesses can
              flourish, and contributing to Nasarawa State&apos;s emergence as
              a leader in global trade and commerce.
            </p>
          </div>
        </div>
      </DepartmentTabs>

      <Footer />
    </>
  );
}