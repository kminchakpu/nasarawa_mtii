import styles from "./AboutBanner.module.css";

export default function AboutBanner() {
  return (
    <section className={styles.aboutBanner}>
      <div className={styles.container}>
        <span className={styles.label}>About MTII</span>

        <h1 className={styles.title}>
          Driving Trade, Industry
          <br />
          <span>and Investment Growth</span>
        </h1>

        <p className={styles.description}>
          The Nasarawa State Ministry of Trade, Industry and Investment is
          committed to creating an enabling environment for businesses,
          promoting investment, strengthening trade, and supporting sustainable
          industrial development across the State.
        </p>
      </div>
    </section>
  );
}