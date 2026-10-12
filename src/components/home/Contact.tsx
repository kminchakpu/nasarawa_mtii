import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>LET&apos;S BUILD NASARAWA TOGETHER</p>

        <Link href="tel:+234XXXXXXXXXX" className={styles.phone}>
          +234 800 000 0000
        </Link>

        <div className={styles.divider}></div>

        <address className={styles.contactDetails}>
          <p>
            Nasarawa State Ministry of Trade, Industry and Investment
          </p>

          <p>
            Shendam Road, Lafia, Nasarawa State, Nigeria
          </p>

          <Link href="mailto:info@mtii.nasarawastate.gov.ng">
            info@mtii-nasarawa.com.ng
          </Link>
        </address>
      </div>
    </section>
  );
}