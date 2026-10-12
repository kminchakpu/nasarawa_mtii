import Link from "next/link";
import styles from "@/components/opportunities/Leasing.module.css";
import Footer from "@/components/layout/Footer";

export default function LeasingPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Page Header */}
          <header className={styles.pageHeader}>
            <span className={styles.label}>BUSINESS OPPORTUNITIES</span>

            <h1>Leasing</h1>

            <p>
              Explore leasing opportunities available through the Nasarawa
              State Ministry of Trade, Industry, and Investment.
            </p>
          </header>

          {/* Content */}
          <section className={styles.content}>
            <div className={styles.contentBlock}>
              <h2>Leasing Opportunities</h2>

              <p>
                A lease is a formal contractual agreement that allows a
                lessee (in this case, you) to utilize an asset owned by the
                lessor (MTII) in exchange for regular payments. At MTII, we
                offer leases on a variety of assets, including properties,
                vehicles, buildings, and industrial or business equipment.
              </p>

              <p>
                Our leasing agreements are structured for fixed monthly or
                yearly repayments, providing clarity and consistency
                throughout the contract term. Under this arrangement, MTII,
                as the lessor, grants you, the lessee, possession and use of
                the asset for the agreed-upon duration, provided the terms of
                the lease are upheld.
              </p>

              <p>
                We are committed to honoring the conditions outlined in the
                lease agreement and will not make changes or modifications to
                the terms during the contractual period, ensuring a stable
                and reliable partnership.
              </p>
            </div>

            {/* Payment */}
            <div className={styles.actionBox}>
              <h2>Ready to Proceed?</h2>

              <p>
                To learn how to make payments for your leasing arrangement,
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