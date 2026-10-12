import Image from "next/image";
import styles from "./LeadershipBanner.module.css";

export default function LeadershipBanner() {
  return (
    <header className={styles.leadershipBanner}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contentColumn}>
            <div className={styles.content}>
              <h1>
                MTII & <br />
                Engr. Abdullahi A. Sule&apos;s <br />
                Business Reforms
              </h1>

              <p>
                The Ministry of Trade, Industry, and Investment in Nasarawa
                State operates under the direct supervision of the Executive
                Governor, His Excellency Governor Abdullahi A. Sule. His
                dynamic leadership has been instrumental in enabling the
                Ministry to carry out its mission and objectives effectively.
                Governor Sule&apos;s forward-thinking vision for economic
                growth and development has created an environment where trade,
                industry, and investment are prioritized for the state&apos;s
                prosperity.
              </p>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <Image
              src="/images/team/aa-sule.jpg"
              alt="Engr. Abdullahi A. Sule, Executive Governor of Nasarawa State"
              width={700}
              height={700}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}