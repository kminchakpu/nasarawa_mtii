import styles from "./CommissionerContent.module.css";
import Image from "next/image";

export default function CommissionerContent() {
  return (
    <article className={styles.content}>
      <div className={styles.header}>
        <span className={styles.number}>02</span>

        <h1>Meet the Commissioner</h1>

        <div className={styles.line}></div>
      </div>

      <div className={styles.profile}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/team/commissioner.jpg"
            alt="Commissioner, Nasarawa State Ministry of Trade, Industry and Investment"
            className={styles.image}
            width={600}
            height={600}
          />
        </div>

        <div className={styles.details}>
          <h2>Commissioner for Trade, Industry and Investment</h2>

          <p>
            Welcome to the Nasarawa State Ministry of Trade, Industry and
            Investment. The Ministry is committed to creating an enabling
            environment for businesses, investors, entrepreneurs, and
            industries to thrive across Nasarawa State.
          </p>

          <p>
            Through strategic policies, partnerships, investment promotion,
            trade development, and support for businesses, the Ministry works
            to strengthen the state&apos;s economy and create sustainable
            opportunities for its people.
          </p>

          <p>
            The Commissioner provides strategic leadership and direction to
            ensure that the Ministry achieves its mandate of promoting trade,
            industrial development, investment, and economic growth throughout
            Nasarawa State.
          </p>
        </div>
      </div>

      <section className={styles.message}>
        <h2>Message from the Commissioner</h2>

        <p>
          I am xxxxxxxx, the Honourable Commissioner of the Ministry of Trade, Industry, and Investment (MTII), a role I have been privileged to hold for over 12 months. During this time, I have developed a deep passion for our mission to foster economic growth and create opportunities for businesses to thrive. His Excellency, the Executive Governor of Nasarawa State, Abdullahi A. Sule, entrusted me with the responsibility of leading this vital Ministry, and it has been an honour to contribute to its vision and mission.
        </p>

        <p>
          As the Chief Executive Officer of MTII, I have witnessed firsthand the Ministry’s global impact and its unwavering commitment to creating an enabling environment for businesses. MTII strikes the perfect balance between professionalism and relational engagement, enabling businesses to flourish through strategic support and collaborative efforts.
        </p>

        <p>
          With over 26 years of experience, MTII has worked alongside communities, donors, partners, entrepreneurs, and business professionals across all 13 Local Government Areas in Nasarawa State. Our efforts are driven by a grassroots approach, ensuring we understand the unique challenges and potential of each business we support. Our team, comprising more than 50 dedicated professionals, includes leading experts in microfinance, agriculture, and education, all working tirelessly to create opportunities for better futures, even in the most remote locations.
        </p>

        <p>
          Our commitment is to foster a conducive business environment free of unnecessary government intervention, empowering entrepreneurs to succeed and driving economic development across the state. MTII serves people of all backgrounds—regardless of religion, race, ethnicity, or gender—demonstrating our inclusive and equitable approach.
        </p>

        <p>
          To those considering business opportunities in Nasarawa State, I encourage you to join us in this journey of meaningful change. Together, we can build a thriving economy that brings hope, prosperity, and equity to all. Welcome to Nasarawa State—I wish your business unparalleled success in this vibrant and promising environment.
        </p>
        <p>
          Sincerely,
          <br />
          <span className={styles.name}>John Doe</span>
          <br />
          Honourable Commissioner
        </p>
      </section>
    </article>
  );
}