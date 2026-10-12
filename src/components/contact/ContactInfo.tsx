import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h2>Address</h2>
            <p>
              Shedam Road, 
              <br />
              Lafia, Nasarawa State, Nigeria
            </p>
          </div>

          <div className={styles.contactItem}>
            <h2>Phone</h2>

            <a href="tel:+2340000000000">
              +234 000 000 0000
            </a>

            <a href="tel:+2340000000001">
              +234 000 000 0001
            </a>
          </div>

          <div className={styles.contactItem}>
            <h2>E-mail</h2>

            <a href="mailto:info@mtiinasarawa.com.ng">
              info@mtiinasarawa.com.ng
            </a>
          </div>

          {/* Social Media */}
          <div className={styles.socialLinks}>
            <a
              href="#"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className={styles.socialLink}
            >
              ▶
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className={styles.mapWrapper}>
          <iframe
            title="Nasarawa State Ministry of Trade, Industry and Investment location"
            src="https://www.google.com/maps?q=Nasarawa%20State%20Ministry%20of%20Trade%2C%20Industry%20and%20Investment%2C%20Lafia%2C%20Nasarawa%20State%2C%20Nigeria&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
}