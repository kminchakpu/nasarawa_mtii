"use client";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <span className={styles.label}>CONTACT US</span>

          <h2>Send Us a Message</h2>

          <p>
            Have a question or enquiry? Fill out the form below and send us a
            message.
          </p>
        </div>

        <form className={styles.contactForm}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Enter your message"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Send Message
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}