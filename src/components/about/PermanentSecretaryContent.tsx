import Image from "next/image";
import styles from "./PermanentSecretaryContent.module.css";

export default function PermanentSecretaryContent() {
  return (
    <div className={styles.permanentSecretaryContent}>
      <div className={styles.profileGrid}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/leadership/permanent-secretary.jpg"
            alt="Permanent Secretary, Nasarawa State Ministry of Trade, Industry and Investment"
            width={500}
            height={600}
            className={styles.profileImage}
          />
        </div>

        {/* Content */}
        <div className={styles.profileText}>
          <h1>The Permanent Secretary</h1>

          <p>
            The Office of the Permanent Secretary in the Ministry of Trade, Industry, and Investment (MTII) is responsible for overseeing the day-to-day operations and administration of the Ministry. As the chief administrative officer, the Permanent Secretary ensures that policies are effectively implemented, resources are managed efficiently, and the Ministry’s objectives are achieved. The office plays a crucial role in coordinating between various departments, government agencies, and stakeholders to drive economic development, facilitate trade, and support entrepreneurship. The Permanent Secretary also serves as the principal advisor to the Commissioner, providing leadership and strategic direction to ensure that the Ministry meets its goals and serves the public effectively.
          </p>
          </div>
      </div>

      {/* Role and Responsibilities */}
      <section className={styles.contentSection}>
               <h2>Role and Responsibilities</h2>
        
        <p>
            As the Permanent Secretary and Chief Accounting Officer of the Ministry of Trade, Industry, and Investment (MTII), Khadijat Nuhu Oshafu plays a pivotal role in leading the Ministry to fulfill its mission of fostering an enabling environment for business growth and supporting the success of startups, entrepreneurs, and organizations.
          </p>

        <p>
          Her leadership is characterized by a deep commitment to strategic partnerships and a culture of service that empowers the Ministry to create tangible impact across Nasarawa State. Honourable Khadijat also oversees the Department of Planning, Research, and Statistics, where her expertise in policy development and data-driven decision-making is crucial to shaping the Ministry&apos;s initiatives.
        </p>

        <p>
         With a distinguished career spanning many years in the civil service, Honourable Khadijat’s extensive experience in MTII has provided her with a unique insight into the challenges and opportunities in the state’s economic landscape. Her work has focused on tackling systemic issues, including revenue leakage, and implementing financial controls to safeguard resources. Having served under multiple Commissioners and Permanent Secretaries since the creation of the State and the Ministry, she has consistently demonstrated a commitment to improving the Ministry’s operations, enhancing its accountability, and driving sustainable development in the region. Her leadership continues to influence the growth and modernization of Nasarawa State’s trade, industry, and investment sectors.
        </p>

      </section>
    </div>
  );
}