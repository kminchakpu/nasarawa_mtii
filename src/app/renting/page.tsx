import Link from "next/link";
import styles from "@/components/opportunities/Renting.module.css";
import Footer from "@/components/layout/Footer";

export default function RentingPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Page Header */}
          <header className={styles.pageHeader}>
            <span className={styles.label}>BUSINESS OPPORTUNITIES</span>

            <h1>Rental Opportunities</h1>

            <p>
              Access properties and equipment available for rent through the
              Nasarawa State Ministry of Trade, Industry, and Investment.
            </p>
          </header>

          <section className={styles.content}>
            {/* Introduction */}
            <div className={styles.contentBlock}>
              <h2>Rental Opportunities</h2>

              <p>
                The Nasarawa State Ministry of Trade, Industry, and Investment
                (MTII) is committed to fostering a business-friendly
                environment to help our clients succeed. As part of this
                mission, we offer properties and equipment for rent to support
                your business operations.
              </p>
            </div>

            {/* Benefits */}
            <div className={styles.contentBlock}>
              <h2>Benefits of Renting with MTII</h2>

              <div className={styles.benefit}>
                <h3>Cost Efficiency</h3>

                <p>
                  Avoid the upfront expense of purchasing assets, preserving
                  your cash flow and reducing the need for loans.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>Access to Premium Resources</h3>

                <p>
                  Utilize high-quality equipment and facilities that may
                  otherwise be cost-prohibitive to acquire outright.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>Predictable Budgeting</h3>

                <p>
                  Rental payments are fixed over the lease period, allowing
                  for better financial planning and easier cash flow
                  forecasting.
                </p>
              </div>
            </div>

            {/* Available Properties */}
            <div className={styles.contentBlock}>
              <h2>Available Properties for Rent</h2>

              <ul className={styles.propertyList}>
                <li>Warehouses</li>
                <li>Sesame Cleaning Plant, Doma</li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.contentBlock}>
              <h2>Contact Us</h2>

              <p>
                If you are interested in any of the listed properties, please{" "}
                <a
                  href="mailto:info@mtiinasarawa.com.ng"
                  className={styles.emailLink}
                >
                  contact us
                </a>{" "}
                for more details. We look forward to supporting your business
                growth!
              </p>
            </div>

            {/* Payment */}
            <div className={styles.actionBox}>
              <h2>Pay Your Rent</h2>

              <p>
                To pay the Rent fee, click the button below to learn how to
                make your payment.
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