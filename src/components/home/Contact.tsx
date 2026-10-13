import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>LET&apos;S BUILD NASARAWA TOGETHER</p>

        <Link href="tel:+2348038213845" className={styles.phone}>
          +234 803 821 3845
        </Link>

        <div className={styles.divider}></div>

        <address className={styles.contactDetails}>
          <p>
            Nasarawa State Ministry of Trade, Industry and Investment
          </p>

          <p>
            Shendam Road, Lafia, Nasarawa State, Nigeria
          </p>

          <Link href="mailto:mtiinasarawa@gmail.com">
            mtiinasarawa@gmail.com
          </Link>
        </address>
      </div>
    </section>
  );
}