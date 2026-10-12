"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DepartmentTabs.module.css";

type Tab = {
  id: string;
  label: string;
  href: string;
};

type DepartmentTabsProps = {
  children: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "industry-investment",
    label: "Industry & Investment",
    href: "/departments/industry-investment",
  },
  {
    id: "admin-supply",
    label: "Admin. & Supply",
    href: "/departments/administration",
  },
  {
    id: "cooperative",
    label: "Cooperative",
    href: "/departments/cooperative",
  },
  {
    id: "finance",
    label: "Finance & Account",
    href: "/departments/finance",
  },
  {
    id: "planning",
    label: "Planning & Research",
    href: "/departments/planning",
  },
  {
    id: "trade",
    label: "Trade",
    href: "/departments/trade",
  },
  {
    id: "about-mtii",
    label: "About MTII",
    href: "/about",
  },
  {
    id: "online-registration",
    label: "Online Registration",
    href: "/registration",
  },
  {
    id: "business-enabling-reforms",
    label: "Business Enabling Reforms",
    href: "/business-enabling-reforms",
  },
  {
    id: "contact",
    label: "Contact Us",
    href: "/contact",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname.startsWith("/departments/industry-investment")) {
    return "industry-investment";
  }

  if (pathname.startsWith("/departments/administration")) {
    return "admin-supply";
  }

  if (pathname.startsWith("/departments/cooperative")) {
    return "cooperative";
  }

  if (pathname.startsWith("/departments/finance")) {
    return "finance";
  }

  if (pathname.startsWith("/departments/planning")) {
    return "planning";
  }

  if (pathname.startsWith("/departments/trade")) {
    return "trade";
  }

  if (pathname === "/about" || pathname.startsWith("/about/")) {
    return "about-mtii";
  }

  if (pathname.startsWith("/registration")) {
    return "online-registration";
  }

  if (pathname.startsWith("/business-enabling-reforms")) {
    return "business-enabling-reforms";
  }

  if (pathname.startsWith("/contact")) {
    return "contact";
  }

  return "industry-investment";
}

export default function DepartmentTabs({
  children,
}: DepartmentTabsProps) {
  const pathname = usePathname();

  const activeTab = getActiveTab(pathname);

  return (
    <section className={styles.departmentTabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>

          {/* LEFT NAVIGATION */}
          <aside
            className={styles.tabNavigation}
            aria-label="Departments navigation"
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
                  aria-current={isActive ? "page" : undefined}
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