"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((current) => (current === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link
          href="/"
          className={styles.siteLogo}
          onClick={closeMobileMenu}
          aria-label="Nasarawa State Ministry of Trade, Industry and Investment"
        >
          <Image
            src="/images/logo.png"
            alt="Nasarawa State Ministry of Trade, Industry and Investment"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => {
            setMobileMenuOpen((current) => !current);
            setOpenDropdown(null);
          }}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          className={`${styles.mainNav} ${
            mobileMenuOpen ? styles.mobileOpen : ""
          }`}
          aria-label="Main navigation"
        >
          <ul>
            {/* Home */}
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* About */}
            <li
              className={`${styles.dropdown} ${
                openDropdown === "about" ? styles.dropdownOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
              >
                <span>About</span>
                <span
                  className={styles.chevron}
                  aria-hidden="true"
                ></span>
              </button>

              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/about" onClick={closeMobileMenu}>
                    About MTII
                  </Link>
                </li>
                <li>
                  <Link href="/about/leadership" onClick={closeMobileMenu}>
                    MTII Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/about/commissioner" onClick={closeMobileMenu}>
                    The Commissioner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/permanent-secretary"
                    onClick={closeMobileMenu}
                  >
                    The Permanent Secretary
                  </Link>
                </li>
                <li>
                  <Link href="/about/directors" onClick={closeMobileMenu}>
                    Our Directors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Our Contact
                  </Link>
                </li>
              </ul>
            </li>

            {/* Business Enabling Reforms */}
            <li
              className={`${styles.dropdown} ${
                openDropdown === "reforms" ? styles.dropdownOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("reforms")}
                aria-expanded={openDropdown === "reforms"}
              >
                <span>Business Enabling Reforms</span>
                <span
                  className={styles.chevron}
                  aria-hidden="true"
                ></span>
              </button>

              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/business-enabling-reforms"
                    onClick={closeMobileMenu}
                  >
                    Business Enabling Action Plan
                  </Link>
                </li>
                <li>
                  <Link href="/business-enabling-reforms/grievance-redress" onClick={closeMobileMenu}>
                    Grievance Redress Mechanism
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-enabling-reforms/application-guidelines"
                    onClick={closeMobileMenu}
                  >
                    Application Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-enabling-reforms/legal-framework"
                    onClick={closeMobileMenu}
                  >
                    Legal Framework
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-enabling-reforms/investment-opportunities"
                    onClick={closeMobileMenu}
                  >
                    Investment Opportunities
                  </Link>
                </li>
              </ul>
            </li>

            {/* Departments */}
            <li
              className={`${styles.dropdown} ${
                openDropdown === "departments" ? styles.dropdownOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("departments")}
                aria-expanded={openDropdown === "departments"}
              >
                <span>Departments</span>
                <span
                  className={styles.chevron}
                  aria-hidden="true"
                ></span>
              </button>

              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/departments/human-resource"
                    onClick={closeMobileMenu}
                  >
                    Human Resource
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/cooperative"
                    onClick={closeMobileMenu}
                  >
                    Cooperative &amp; Thrift
                  </Link>
                </li>
                <li>
                  <Link href="/departments/finance" onClick={closeMobileMenu}>
                    Finance &amp; Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/departments/industry-investment"
                    onClick={closeMobileMenu}
                  >
                    Industry &amp; Investment
                  </Link>
                </li>
                <li>
                  <Link href="/departments/planning" onClick={closeMobileMenu}>
                    Planning/Research/Statistics
                  </Link>
                </li>
                <li>
                  <Link href="/departments/trade" onClick={closeMobileMenu}>
                    Trade
                  </Link>
                </li>
              </ul>
            </li>

            {/* Projects */}
                   
            <li>
              <Link href="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            {/* Registration */}
            <li
              className={`${styles.dropdown} ${
                openDropdown === "registration" ? styles.dropdownOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("registration")}
                aria-expanded={openDropdown === "registration"}
              >
                <span>Registration</span>
                <span
                  className={styles.chevron}
                  aria-hidden="true"
                ></span>
              </button>

              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/registration/"
                    onClick={closeMobileMenu}
                  >
                    How To Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration-fees"
                    onClick={closeMobileMenu}
                  >
                    Registration Fees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration/online-registration"
                    onClick={closeMobileMenu}
                  >
                    Online Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration/business-premises"
                    onClick={closeMobileMenu}
                  >
                    Business Premises Registration
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" onClick={closeMobileMenu}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}