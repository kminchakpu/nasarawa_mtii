"use client";

import Link from "next/link";
import styles from "./Services.module.css";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Business Premises Registration",
    description:
      "To enhance the ease of doing business in Nasarawa State, the business premises registration enables businesses to officially register their operations.",
    href: "/registration/business-premises",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M8 56h48M12 56V24h40v32M8 24h48M16 24l4-12h24l4 12M20 32h8v8h-8zM36 32h8v8h-8zM20 44h8v8h-8zM36 44h8v8h-8z" />
      </svg>
    ),
  },

  {
    title: "Co-operative Societies Registration",
    description:
      "Register your Co-operative Society today. We believe in the power of individuals coming together voluntarily, united by a common bond, to achieve their economic goals for mutual benefit.",
    href: "/registration/cooperative-registration",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <circle cx="32" cy="16" r="7" />
        <circle cx="15" cy="27" r="7" />
        <circle cx="49" cy="27" r="7" />
        <path d="M20 48c0-8 5-14 12-14s12 6 12 14M4 48c0-7 4-12 11-12M60 48c0-7-4-12-11-12" />
      </svg>
    ),
  },

  {
    title: "NGO/CBO Registration",
    description:
      "All NGOs and CBOs wishing to seek recognition or any form of collaboration within the state must register with the Ministry before their requests will be considered.",
    href: "/registration/ngo-cbo",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <circle cx="32" cy="18" r="8" />
        <path d="M18 54c0-10 6-17 14-17s14 7 14 17M8 54c0-7 4-12 10-12M56 54c0-7-4-12-10-12" />
      </svg>
    ),
  },

  {
    title: "Leasing / Haulage",
    description:
      "MTII offers long-term rental services to companies in Nasarawa State, supported by highly experienced personnel adhering to international standards.",
    href: "/leasing",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M6 40h34V20H6zM40 28h10l8 10v12H40z" />
        <circle cx="17" cy="51" r="6" />
        <circle cx="48" cy="51" r="6" />
        <path d="M46 28v-8h8" />
      </svg>
    ),
  },

  {
    title: "Faith Based Organisation Registration",
    description:
      "MTII facilitates the registration of your FBO, enabling you to focus on advocacy, relationship building, evidence development, and operations to advance shared priorities.",
    href: "/registration/fbo-registration",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M32 8v48M22 18h20M18 24h28M12 56h40" />
        <path d="M20 24v32M44 24v32" />
      </svg>
    ),
  },

  {
    title: "Rent",
    description:
      "We offer a diverse range of industries and business facilities for rent at affordable prices, tailored to meet the needs of various businesses. Our flexible terms help companies access quality spaces for operations, production, and storage.",
    href: "/services/rent",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M8 56h48M12 56V27l20-15 20 15v29" />
        <path d="M24 56V40h16v16M22 31h8v7h-8zM34 31h8v7h-8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleWrapper}>
            <span className={styles.titleLine}></span>

            <h2>
              We Deliver the Best Services in{" "}
              <span>Different Sectors.</span>
            </h2>
          </div>

          <div className={styles.headerBottom}>
            <p>
              We provide essential business, registration, investment,
              and support services to individuals and organizations
              across Nasarawa State.
            </p>

            <Link href="/services" className={styles.viewAll}>
              VIEW ALL SERVICES
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>

              {/* Icon */}
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>

              {/* Title */}
              <h3>{service.title}</h3>

              {/* Description */}
              <p>{service.description}</p>

              {/* Link */}
              <Link
                href={service.href}
                className={styles.learnMore}
              >
                LEARN MORE
                <span>→</span>
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}