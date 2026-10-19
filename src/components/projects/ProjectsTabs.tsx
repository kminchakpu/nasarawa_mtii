
"use client";

import { useState } from "react";
import styles from "./ProjectsTabs.module.css";

type ProjectCategory = "proposed" | "ongoing" | "completed";

type ProjectsTabsProps = {
  children: {
    proposed: React.ReactNode;
    ongoing: React.ReactNode;
    completed: React.ReactNode;
  };
};

const tabs: { id: ProjectCategory; label: string }[] = [
  { id: "proposed", label: "Proposed Projects" },
  { id: "ongoing", label: "Ongoing Projects" },
  { id: "completed", label: "Completed Projects" },
];

export default function ProjectsTabs({ children }: ProjectsTabsProps) {
  const [activeTab, setActiveTab] =
    useState<ProjectCategory>("proposed");

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsLayout}>
        <aside className={styles.sidebar}>
          <span className={styles.sidebarLabel}>PROJECTS</span>

          <nav
            className={styles.verticalMenu}
            aria-label="Project categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                <span>{tab.label}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <div className={styles.contentColumn}>
          <div className={styles.projectContent}>
            {children[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
}
