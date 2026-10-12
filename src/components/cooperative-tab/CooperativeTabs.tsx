"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CooperativeTabs.module.css";

type Tab = {
  id: string;
  label: string;
  href: string;
};

type CooperativeTabsProps = {
  children: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "business-premises",
    label: "Business Premises Registration",
    href: "/registration/business-premises",
  },
  {
    id: "business-name",
    label: "Business Name Registration",
    href: "/registration/business-name",
  },
  {
    id: "ngos-cbos",
    label: "NGOs & CBOs Registration",
    href: "/registration/ngos-cbos",
  },
  {
    id: "fbo-registration",
    label: "FBOs Registration",
    href: "/registration/fbo-registration",
  },
  {
    id: "cooperative-registration",
    label: "Cooperative Society Registration",
    href: "/registration/cooperative-registration",
  },
  {
    id: "haulage-rent",
    label: "Haulage & Rent Services",
    href: "/registration/haulage-rent",
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
    id: "business-enabling-reforms",
    label: "Business Enabling Reforms",
    href: "/business-enabling-reforms",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname.startsWith("/registration/business-premises")) {
    return "business-premises";
  }

  if (pathname.startsWith("/registration/business-name")) {
    return "business-name";
  }

  if (pathname.startsWith("/registration/ngos-cbos")) {
    return "ngos-cbos";
  }

  if (pathname.startsWith("/registration/fbo-registration")) {
    return "fbo-registration";
  }

  if (pathname.startsWith("/registration/cooperative-society")) {
    return "cooperative-society";
  }

  if (pathname.startsWith("/registration/haulage-rent")) {
    return "haulage-rent";
  }

  if (pathname.startsWith("/about/departments")) {
    return "departments";
  }

  if (pathname === "/about") {
    return "about-mtii";
  }

  if (pathname.startsWith("/business-reforms")) {
    return "business-reforms";
  }

  return "cooperative-society";
}

export default function CooperativeTabs({
  children,
}: CooperativeTabsProps) {
  const pathname = usePathname();

  const activeTab = getActiveTab(pathname);

  return (
    <section className={styles.cooperativeTabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsWrapper}>
          <aside
            className={styles.tabNavigation}
            aria-label="Cooperative navigation"
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

          <div className={styles.tabContent}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}