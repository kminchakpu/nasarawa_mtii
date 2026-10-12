import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Business Partner"
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Hero Content */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            NASARAWA STATE MINISTRY OF <span>TRADE, INDUSTRY AND INVESTMENT </span>
          </p>

          <h1>
            Driving Trade, Industry
            <br />
            <span>and Investment Growth.</span>
          </h1>

          <p className={styles.description}>
            Creating opportunities, supporting businesses, attracting
            investment, and driving sustainable economic development
            across Nasarawa State.
          </p>

          <div className={styles.heroActions}>
            <Link href="/investment/opportunities" className={styles.primaryButton}>
              Explore Opportunities
            </Link>

            <Link href="/about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}