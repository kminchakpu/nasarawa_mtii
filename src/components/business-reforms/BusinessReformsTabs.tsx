"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BusinessReformsTabs.module.css";

type Tab = {
  id: string;
  label: string;
  href: string;
};

type BusinessReformsTabsProps = {
  children: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "business-enabling-reforms",
    label: "Business Enabling Reforms",
    href: "/business-enabling-reforms",
  },
  {
    id: "grievance-redress",
    label: "Grievance Redress",
    href: "/business-enabling-reforms/grievance-redress",
  },
  {
    id: "application-guidelines",
    label: "Application Guidelines",
    href: "/business-enabling-reforms/application-guidelines",
  },
  {
    id: "legal-framework",
    label: "Legal Framework",
    href: "/business-enabling-reforms/legal-framework",
  },
  {
    id: "investment-opportunities",
    label: "Investment Opportunities",
    href: "/business-enabling-reforms/investment-opportunities",
  },
  {
    id: "faqs",
    label: "FAQs",
    href: "/business-enabling-reforms/faqs",
  },
  {
    id: "about-mtii",
    label: "About MTII",
    href: "/about",
  },
  {
    id: "departments",
    label: "Departments",
    href: "/about/departments",
  },
  {
    id: "about-saber",
    label: "About SABER",
    href: "/business-enabling-reforms/about-saber",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname === "/business-enabling-reforms") {
    return "business-enabling-reforms";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/grievance-redress"
    )
  ) {
    return "grievance-redress";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/application-guidelines"
    )
  ) {
    return "application-guidelines";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/legal-framework"
    )
  ) {
    return "legal-framework";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/investment-opportunities"
    )
  ) {
    return "investment-opportunities";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/faqs"
    )
  ) {
    return "faqs";
  }

  if (
    pathname === "/about" ||
    pathname.startsWith("/about/")
  ) {
    return pathname.startsWith("/about/departments")
      ? "departments"
      : "about-mtii";
  }

  if (
    pathname.startsWith(
      "/business-enabling-reforms/about-saber"
    )
  ) {
    return "about-saber";
  }

  return "business-enabling-reforms";
}

export default function BusinessReformsTabs({
  children,
}: BusinessReformsTabsProps) {
  const pathname = usePathname();

  const activeTab = getActiveTab(pathname);

  return (
    <section className={styles.businessReformsTabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          {/* LEFT NAVIGATION */}
          <aside
            className={styles.tabNavigation}
            aria-label="Business Enabling Reforms navigation"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`${styles.navPill} ${
                    isActive ? styles.active : ""
                  }`}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                >
                  <span>{tab.label}</span>

                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </aside>

          {/* RIGHT PAGE CONTENT */}
          <div className={styles.tabContent}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}