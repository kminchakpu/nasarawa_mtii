"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./RegistrationTabs.module.css";

type Tab = {
  id: string;
  label: string;
  href: string;
};

type RegistrationTabsProps = {
  children: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "how-to-register",
    label: "How to Register",
    href: "/registration",
  },
  {
    id: "online-registration",
    label: "Online Registration",
    href: "/registration/online-registration",
  },
  {
    id: "business-name",
    label: "Register Business Name",
    href: "/registration/business-name",
  },
  {
    id: "business-premises",
    label: "Register Business Premises",
    href: "/registration/business-premises",
  },
  {
    id: "cooperative",
    label: "Register Cooperative",
    href: "/registration/cooperative-registration",
  },
  {
    id: "ngo-cbo",
    label: "Register NGO/CBO",
    href: "/registration/ngo-cbo",
  },
  {
    id: "fbo",
    label: "Register FBO",
    href: "/registration/fbo-registration",
  },
  {
    id: "haulage",
    label: "Haulage",
    href: "/registration/haulage",
  },
  {
    id: "nas-spring-waters",
    label: "NAS Spring Waters",
    href: "/registration/nas-spring-waters",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname === "/registration") {
    return "how-to-register";
  }

  if (pathname.startsWith("/registration/online-registration")) {
    return "online-registration";
  }

  if (pathname.startsWith("/registration/business-name")) {
    return "business-name";
  }

  if (pathname.startsWith("/registration/business-premises")) {
    return "business-premises";
  }

  if (pathname.startsWith("/registration/cooperative")) {
    return "cooperative";
  }

  if (pathname.startsWith("/registration/ngo-cbo")) {
    return "ngo-cbo";
  }

  if (pathname.startsWith("/registration/fbo")) {
    return "fbo";
  }

  if (pathname.startsWith("/registration/haulage")) {
    return "haulage";
  }

  if (pathname.startsWith("/registration/nas-spring-waters")) {
    return "nas-spring-waters";
  }

  return "how-to-register";
}

export default function RegistrationTabs({
  children,
}: RegistrationTabsProps) {
  const pathname = usePathname();

  const activeTab = getActiveTab(pathname);

  return (
    <section className={styles.registrationTabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>

          {/* LEFT NAVIGATION */}
          <aside
            className={styles.tabNavigation}
            aria-label="Registration navigation"
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