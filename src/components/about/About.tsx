
import styles from "./About.module.css";

export function AboutMTIIContent() {
  return (
    <div className={styles.defaultContent}>
      <span className={styles.panelNumber}>01</span>

      <h2>About MTII</h2>

      <p>
        The Ministry of Trade, Industry & Investment is dedicated to fostering
        economic growth and creating opportunities for all communities within
        Nasarawa State. With its specialized departments, the Ministry works
        to enhance the state&apos;s economic competitiveness, strengthen
        domestic industry, and promote the creation of quality jobs across
        all regions of the state.
      </p>

      <p>
        The Ministry serves as the primary advocate for businesses within the
        state and at the federal level. It supports entrepreneurs, investors,
        industries, and other stakeholders while promoting innovation and the
        development of key sectors such as agriculture, solid minerals, and
        tourism.
      </p>

      <div className={styles.panelLine}></div>
    </div>
  );
}
