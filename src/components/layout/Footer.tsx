"use client";

import styles from "./Footer.module.css";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.8 21v-8h2.7l.4-3.1h-3.1V7.92c0-.9.25-1.52 1.55-1.52H16.9V3.62c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.92V9.9H8.25V13h2.57v8h2.98Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" className={styles.iconFill} />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      className={styles.iconFill}
      d="M21.2 7.1c-.65.29-1.35.49-2.08.58a3.63 3.63 0 0 0 1.6-2c-.7.42-1.48.72-2.3.88A3.61 3.61 0 0 0 12.16 9.9a10.25 10.25 0 0 1-7.44-3.77 3.61 3.61 0 0 0 1.12 4.82c-.58-.02-1.12-.18-1.6-.44v.04c0 1.75 1.25 3.22 2.9 3.55-.3.08-.63.12-.96.12-.23 0-.46-.02-.68-.06a3.62 3.62 0 0 0 3.37 2.5 7.25 7.25 0 0 1-4.49 1.55c-.29 0-.58-.02-.86-.05A10.2 10.2 0 0 0 9.05 19.8c6.63 0 10.26-5.49 10.26-10.26 0-.16 0-.31-.01-.47.7-.51 1.31-1.15 1.9-1.97Z"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      className={styles.iconFill}
      d="M21.6 7.1a2.86 2.86 0 0 0-2-2C17.85 4.6 12 4.6 12 4.6s-5.85 0-7.6.5a2.86 2.86 0 0 0-2 2A29.6 29.6 0 0 0 2 12a29.6 29.6 0 0 0 .4 4.9 2.86 2.86 0 0 0 2 2c1.75.5 7.6.5 7.6.5s5.85 0 7.6-.5a2.86 2.86 0 0 0 2-2A29.6 29.6 0 0 0 22 12a29.6 29.6 0 0 0-.4-4.9ZM10 15.6V8.4l6 3.6-6 3.6Z"
    />
  </svg>
);

export default function Footer() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add your newsletter subscription logic here
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Company Information */}
          <div className={styles.companyInfo}>
            <div className={styles.logoWrapper}>
              <div>
                <h2 className={styles.logoTitle}>MTII</h2>
                <p className={styles.logoSubtitle}>Nasarawa State</p>
              </div>
            </div>

            <p className={styles.description}>
              We offer residential and commercial construction services, as
              well all kinds of additional services throughout the USA.
            </p>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <FacebookIcon />
              </a>

              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <InstagramIcon />
              </a>

              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <TwitterIcon />
              </a>

              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.linkColumn}>
            <h3>Company</h3>
            <div className={styles.headingLine} />

            <ul>
              <li>
                <a href="#sectors">Sectors</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className={styles.linkColumn}>
            <h3>Services</h3>
            <div className={styles.headingLine} />

            <ul>
              <li>
                <a href="#project-management">Business Name Registration</a>
              </li>
              <li>
                <a href="#design-build">Co-operative Societies Registration</a>
              </li>
              <li>
                <a href="#remodeling">NGO/CBO Registration</a>
              </li>
              <li>
                <a href="#construction">Rent/ Leasing / Haulage</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <div className={styles.headingLine} />

            <p>Subscribe to get the latest news from us.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                aria-label="Email address"
                required
              />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p> Design & Develop by: <a href="https://www.linkedin.com/in/kevin-cross-minchakpu-7897379a" target="_blank" rel="noopener noreferrer"><span>Kevin Cross Minchakpu</span></a></p>
          <p>&copy; {new Date().getFullYear()}. MTII. All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}