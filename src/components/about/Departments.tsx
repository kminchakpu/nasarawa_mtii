"use client";

import Link from "next/link";
import styles from "./Departments.module.css";

interface Department {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const departments: Department[] = [
  {
    title: "Human Resource",
    description:
      "The Human Resource & Administration Department oversees the daily operations of the Ministry, including the management of staff, public relations, legal affairs, and human resources (HR) needs. This department is responsible for monitoring the Ministry's performance and making strategic decisions to guide future initiatives and ensure organizational success.",
    href: "/departments/human-resource",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M10 56h44M14 56V22h36v34M10 22h44M20 22l4-10h16l4 10" />
        <path d="M20 32h8v8h-8zM36 32h8v8h-8zM20 44h8v8h-8zM36 44h8v8h-8z" />
      </svg>
    ),
  },

  {
    title: "Cooperative",
    description:
      "The Department of Cooperative Societies is responsible for the registration, post-registration supervision, and auditing of cooperative societies in accordance with the provisions of the Cooperative Societies Act of 1999. The primary functions of the department include ensuring compliance with regulatory standards and providing guidance to cooperative societies.",
    href: "/departments/cooperative",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <circle cx="32" cy="15" r="7" />
        <circle cx="15" cy="27" r="7" />
        <circle cx="49" cy="27" r="7" />
        <path d="M20 50c0-9 5-15 12-15s12 6 12 15" />
        <path d="M4 50c0-7 4-12 11-12M60 50c0-7-4-12-11-12" />
      </svg>
    ),
  },

  {
    title: "Finance",
    description:
      "The Department of Finance and Accounts is a key service department within the Ministry. It is responsible for the receipt, recording, custody, and disbursement of the Ministry's funds, as well as the maintenance of accurate financial records and the preparation of the Ministry's budget. The department also ensures compliance with financial regulations.",
    href: "/departments/finance",
    icon: (
  <svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    className={styles.icon}
  >
    <circle cx="32" cy="32" r="24" />
    <path d="M22 18v28" />
    <path d="M42 18v28" />
    <path d="M22 18l20 28" />
    <path d="M16 28h32" />
    <path d="M16 36h32" />
  </svg>
),
  },

  {
    title: "Industry & Investment",
    description:
      "The Department of Industry and Investment is responsible for generating wealth, creating employment, reducing poverty, and stimulating economic diversification. The department formulates policies and strategies to support micro, small, and medium industries in the state, while also identifying productive business opportunities that can enhance government revenue.",
    href: "/departments/industry-investment",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M8 56h48M12 56V30l12-10v10l12-10v10l16-12v38" />
        <path d="M20 38h8v8h-8zM36 38h8v8h-8z" />
        <path d="M44 14l5-5M49 9h6v6" />
      </svg>
    ),
  },

  {
    title: "Planning, Research & Statistics",
    description:
      "The Directorate of Planning, Research, and Statistics, led by a Director, serves as the central hub of the organization. It coordinates the activities of other departments by formulating and implementing policies and programs designed to achieve the organization's mandate. The Directorate focuses on the overall development of standardization and quality assurance in Nasarawa State through a systematic, integrated, and coordinated approach.",
    href: "/departments/planning-research-statistics",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M10 54h44M14 54V10h36v44" />
        <path d="M22 20h20M22 28h20M22 36h12" />
        <path d="M38 44l5-5 5 5" />
      </svg>
    ),
  },

  {
    title: "Trade",
    description:
      "The Department of Trade serves as a comprehensive business hub and acts as a vital interface between the business community and government. Its primary focus is on addressing the specific needs of various sectors while fostering trade development to drive economic growth. The department works closely with industry stakeholders, policymakers, and global trade organizations to create a conducive environment for business expansion and market access.",
    href: "/departments/trade",
    icon: (
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M8 22h48l-4-10H12z" />
        <path d="M12 22v30h40V22" />
        <path d="M22 52V38h20v14" />
        <path d="M20 30h8M36 30h8" />
        <path d="M32 8v12" />
      </svg>
    ),
  },
];

export default function Departments() {
  return (
    <section className={styles.departments} id="departments">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleWrapper}>
            <span className={styles.titleLine}></span>

            <h2>
              Our Departments Drive{" "}
              <span>Economic Growth.</span>
            </h2>
          </div>

          <div className={styles.headerBottom}>
            <p>
              To drive the development and growth of Nasarawa State&apos;s business environment and help businesses achieve their full potential, the Ministry of Trade, Industry, and Investment implements and oversees programs and networks that offer vital resources such as information, education, training, financing, and other forms of support. These initiatives are designed to promote sustainable economic development across the State. In pursuit of our mission and vision, the Ministry is supported by six dedicated Departments, each working diligently to bring this vision to fruition.
            </p>
          </div>
        </div>

        {/* Departments Grid */}
        <div className={styles.departmentsGrid}>
          {departments.map((department) => (
            <article
              className={styles.card}
              key={department.title}
            >

              {/* Icon */}
              <div className={styles.iconWrapper}>
                {department.icon}
              </div>

              {/* Title */}
              <h3>{department.title}</h3>

              {/* Description */}
              <p>{department.description}</p>

              {/* Link */}
              <Link
                href={department.href}
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