import styles from "./ContactBanner.module.css";

export default function ContactBanner() {
  return (
    <section className={styles.contactBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <span className={styles.accent}></span>

            <h1>Contacts</h1>
          </div>

          <p>
            The Contact Us page is your direct link to the Ministry of Trade, Industry, and Investment. Please use the provided form to submit inquiries, feedback, or requests for assistance. Ensure you fill in your name, email address, and a detailed message so we can respond promptly and accurately. For urgent matters, you can also reach us via the listed phone numbers or visit our office at the provided address during business hours. We value your engagement and are here to assist you.
          </p>
        </div>
      </div>
    </section>
  );
}