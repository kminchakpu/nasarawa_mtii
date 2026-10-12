import Link from "next/link";
import styles from "@/components/opportunities/Haulage.module.css";
import Footer from "@/components/layout/Footer";

export default function HaulagePage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Page Header */}
          <header className={styles.pageHeader}>
            <span className={styles.label}>BUSINESS OPPORTUNITIES</span>

            <h1>Haulage</h1>

            <p>
              Supporting the growth of efficient haulage and logistics
              services across Nasarawa State.
            </p>
          </header>

          <section className={styles.content}>
            <div className={styles.contentBlock}>
              <h2>Haulage Services</h2>

              <p>
                The demand for haulage services in Nigeria continues to grow,
                driven by the increasing need for efficient logistics
                solutions to transport goods from producers to consumers or
                sellers to buyers.
              </p>

              <p>
                Unlike in the past, when customers often experienced delays of
                days, weeks, or even months for the delivery of their goods,
                the industry has evolved significantly. Today, the importance
                and efficiency of haulage services are increasingly
                recognized and appreciated.
              </p>
            </div>

            <div className={styles.contentBlock}>
              <h2>Supporting Haulage Development</h2>

              <p>
                At our organization, we are dedicated to fostering an
                environment that supports and enables the haulage business to
                flourish within the state. We invite you to partner with us
                and leverage our expertise to create the ideal conditions for
                your business to thrive and succeed in this dynamic industry.
              </p>
            </div>

            {/* Payment */}
            <div className={styles.actionBox}>
              <h2>Haulage Payment</h2>

              <p>
                To learn how to make payments for haulage-related services,
                click the button below.
              </p>

              <Link
                href="/how-to-make-payment"
                className={styles.paymentButton}
              >
                How to Make Payment
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}