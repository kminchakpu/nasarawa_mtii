import Image from "next/image";
import Link from "next/link";
import styles from "./InvestmentCards.module.css";

type InvestmentCard = {
  id: string;
  title: string;
  image: string;
  description: string;
  href: string;
};

const investmentCards: InvestmentCard[] = [
  {
    id: "leasing",
    title: "Leasing",
    image: "/images/lease.jpg",
    description:
      "A lease is a formal contractual agreement that allows a lessee to utilize an asset owned by MTII in exchange for regular payments. MTII offers leases on a variety of assets, including properties, vehicles, buildings, and industrial or business equipment.",
    href: "/leasing",
  },
  {
    id: "rent",
    title: "Rental Opportunities",
    image: "/images/rent.jpg",
    description:
      "The Nasarawa State Ministry of Trade, Industry, and Investment is committed to fostering a business-friendly environment. We offer properties and equipment for rent to support business operations, including warehouses and the Sesame Cleaning Plant in Doma.",
    href: "/renting",
  },
  {
    id: "haulage",
    title: "Haulage",
    image: "/images/haulage.jpg",
    description:
      "The demand for haulage services in Nigeria continues to grow, driven by the increasing need for efficient logistics solutions to transport goods from producers to consumers or sellers to buyers. MTII is committed to supporting the growth of the haulage business within the State.",
    href: "/haulage",
  },
];

export default function InvestmentCards() {
  return (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            INVESTMENT & BUSINESS OPPORTUNITIES
          </span>

          <h2 className={styles.sectionTitle}>
            Explore Our Opportunities
          </h2>

          <p className={styles.sectionDescription}>
            Discover leasing, rental, and haulage opportunities available
            through the Nasarawa State Ministry of Trade, Industry, and
            Investment.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {investmentCards.map((card) => (
            <article key={card.id} className={styles.card}>
              {/* Card Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.cardImage}
                />
              </div>

              {/* Card Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>

                <p className={styles.cardDescription}>
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className={styles.cardButton}
                >
                  <span>More Details</span>

                  <span
                    className={styles.buttonArrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}