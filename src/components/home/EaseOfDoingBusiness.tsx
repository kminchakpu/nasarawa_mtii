import styles from "./EaseOfDoingBusiness.module.css";

export default function EaseOfDoingBusiness() {
  return (
    <section className={styles.easeOfBusiness}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.intro}>
            <span className={styles.eyebrow}>World Bank Inspired</span>

            <h2>
              Ease of Doing
              <span> Business</span>
            </h2>

            <p className={styles.lead}>
              The Nasarawa State Ministry of Trade, Industry and Investment is
              committed to creating an enabling environment where businesses
              can start, operate, grow, and thrive.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.description}>
            <p>
              Through strategic policies, business registration services,
              investment facilitation, and institutional reforms, MTII works
              to simplify business processes and reduce barriers to
              investment across Nasarawa State.
            </p>

            <p>
              We support entrepreneurs, investors, cooperatives, businesses,
              NGOs, and other organizations by providing accessible services
              and information that promote sustainable economic growth,
              encourage private-sector participation, and create opportunities
              for employment and investment.
            </p>

            <p>
                Our goal is to make Nasarawa State a preferred destination for
                business and investment, fostering a vibrant and competitive
                business environment that benefits both local and international
                stakeholders. To learn more about our initiatives and how we can assist your business, 
                please explore the sections below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}