"use client";

import { useState } from "react";
import Link from "next/link";
import TradeAccordion from "./TradeAccordion";
import styles from "./BusinessResources.module.css";

type Tab = {
  id: string;
  label: string;
  title: string;
  description: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: "trades",
    label: "Trades",
    title: "Trades",
    description:
      "Explore trade-related services, information, and opportunities designed to support businesses, traders, and entrepreneurs across Nasarawa State.",
  },
  {
  id: "application-guidelines",
  label: "Application Guidelines",
  title: "Application Guidelines",
  description: (
    <>
      <p>
        This document provides comprehensive information on the application
        and registration process for business names, business premises, and
        cooperative societies. It outlines the eligibility criteria, the
        review process for evaluating and approving applications, associated
        timelines, and details on the appeal procedure.
      </p>

      <p>
        Available in both print and electronic formats, the MTII guidelines
        can be accessed through the Ministry&apos;s official website.{" "}
        <Link href="/business-enabling-reforms/application-guidelines">
          Click here to view the guidelines online.
        </Link>{" "}
        To download a copy of the guidelines, go to our{" "}
        <Link href="/downloads">downloads page</Link>.
      </p>
    </>
  ),
},
 {
  id: "business-enabling-reforms",
  label: "Business Enabling Reforms",
  title: "Business Enabling Reforms",
  description: (
    <>
      <p>
        The World Bank&apos;s <a
    href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099325109122238979"
    target="_blank"
    rel="noopener noreferrer"
  >
    State Action on Business Enabling Reforms (SABER)
  </a> {" "}
        Programme supports participating states in strengthening the business
        environment by improving the efficiency of land administration,
        enhancing the regulatory framework for private investment in
        fibre-optic infrastructure, strengthening the services of investment
        promotion agencies and public-private partnership units, and improving
        the efficiency and transparency of government-to-business services.
      </p>

      <p>
        In line with these objectives, the Nasarawa State Ministry of Trade,
        Industry and Investment has developed a comprehensive Business Reform
        Plan to improve the ease of doing business, promote private sector
        growth, and attract sustainable investment across the state.{" "}
        <Link href="/business-enabling-reforms">
          Click here to view the Business Reform Plan online.
        </Link>{" "}
        To download a copy of the document, visit our{" "}
        <Link href="/downloads">downloads page</Link>.
      </p>
    </>
  ),
},
  {
  id: "investment-opportunities",
  label: "Investment Opportunities",
  title: "Investment Opportunities",
  description: (
    <>
      <p>
        Nasarawa State offers a wide range of investment opportunities driven by
        its strategic location, abundant natural resources, and business-friendly
        policies. The state is endowed with vast arable land suitable for
        commercial agriculture, livestock production, and agro-processing, while
        its rich deposits of lithium, limestone, granite, gold, marble, and
        other solid minerals provide significant opportunities in mining and
        mineral processing.
      </p>

      <p>
        In addition to agriculture and mining, Nasarawa State presents strong
        investment prospects in manufacturing, real estate, construction,
        tourism, hospitality, education, healthcare, and renewable energy.
        Supported by ongoing infrastructure development, a growing skilled
        workforce, and investor-friendly reforms, the state provides an enabling
        environment for sustainable business growth.{" "}
        <Link href="/investment-opportunities">
          Click here to explore investment opportunities in Nasarawa State.
        </Link>{" "}
        To download the investment profile and related publications, visit our{" "}
        <Link href="/downloads">downloads page</Link>.
      </p>
    </>
  ),
},
];

export default function BusinessResources() {
  const [activeTab, setActiveTab] = useState("trades");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className={styles.businessResources}>
      <div className={styles.container}>
        <div className={styles.tabsContainer}>
          {/* Vertical Navigation */}
          <div
            className={styles.tabNavigation}
            role="tablist"
            aria-orientation="vertical"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={activeTab === tab.id}
                className={`${styles.navPill} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            {activeContent && (
              <div
                key={activeContent.id}
                id={`panel-${activeContent.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeContent.id}`}
                tabIndex={0}
                className={styles.tabPanel}
              >
                <span className={styles.panelNumber}>
                  {String(
                    tabs.findIndex((tab) => tab.id === activeContent.id) + 1
                  ).padStart(2, "0")}
                </span>

                <h2>{activeContent.title}</h2>

                {activeContent.id === "trades" ? (
                  <TradeAccordion />
                ) : (
                  <div className={styles.description}>
                    {activeContent.description}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}