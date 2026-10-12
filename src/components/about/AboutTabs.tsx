"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AboutTabs.module.css";

type Tab = {
  id: string;
  label: string;
  href: string;
};

type AboutTabsProps = {
  children: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "about-mtii",
    label: "About MTII",
    href: "/about",
  },
  {
    id: "commissioner",
    label: "Meet the Commissioner",
    href: "/about/commissioner",
  },
  {
    id: "permanent-secretary",
    label: "The Permanent Secretary",
    href: "/about/permanent-secretary",
  },
  {
    id: "departments",
    label: "Departments",
    href: "/about/departments",
  },
  {
    id: "registration-fees",
    label: "Registration Fees",
    href: "/registration-fees",
  },
  {
    id: "registration",
    label: "Registration",
    href: "/registration",
  },
  {
    id: "contact",
    label: "Contact Us",
    href: "/about/contact",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname === "/about") {
    return "about-mtii";
  }

  if (pathname.startsWith("/about/commissioner")) {
    return "commissioner";
  }

  if (pathname.startsWith("/about/permanent-secretary")) {
    return "permanent-secretary";
  }

  if (pathname.startsWith("/about/departments")) {
    return "departments";
  }

  if (pathname.startsWith("/registration-fees")) {
    return "registration-fees";
  }

  if (pathname.startsWith("/registration")) {
    return "registration";
  }

  if (pathname.startsWith("/about/contact")) {
    return "contact";
  }

  return "about-mtii";
}

export default function AboutTabs({ children }: AboutTabsProps) {
  const pathname = usePathname();

  const activeTab = getActiveTab(pathname);

  return (
    <section className={styles.aboutTabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          {/* LEFT NAVIGATION */}
          <aside
            className={styles.tabNavigation}
            aria-label="About MTII navigation"
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