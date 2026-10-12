import Link from "next/link";
import styles from "./QuickLinks.module.css";

interface QuickLink {
  label: string;
  href: string;
}

const quickLinks: QuickLink[][] = [
  [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Meet the Commissioner", href: "/commissioner" },
    { label: "Meet the Permanent Secretary", href: "/permanent-secretary" },
    { label: "Departments", href: "/departments" },
    { label: "Strategic Plan", href: "/strategic-plan" },
    { label: "Our History", href: "/history" },
    { label: "Our Policies", href: "/policies" },
    { label: "Contact Us", href: "/contact" },
  ],
  [
    { label: "How to Register", href: "/how-to-register" },
    { label: "Register", href: "/register" },
    { label: "Register Business Name", href: "/register-business-name" },
    { label: "Register Business Premises", href: "/register-business-premises" },
    { label: "Register Cooperative", href: "/register-cooperative" },
    { label: "Register NGO/CBO", href: "/register-ngo-cbo" },
    { label: "Register FBO", href: "/register-fbo" },
    { label: "Haulage", href: "/haulage" },
    { label: "NAS Spring Waters", href: "/nas-spring-waters" },
  ],
  [
    { label: "Business Enabling Reforms", href: "/business-enabling-reforms" },
    { label: "Grievance Redress Mechanism", href: "/grievance-redress" },
    { label: "Application Guidelines", href: "/application-guidelines" },
    { label: "Legal Framework", href: "/legal-framework" },
    { label: "Investment Opportunities", href: "/investment-opportunities" },
    { label: "Completed Projects", href: "/completed-projects" },
    { label: "Ongoing Projects", href: "/ongoing-projects" },
    { label: "Proposed Projects", href: "/proposed-projects" },
  ],
];

export default function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quick Links</h2>

        <div className={styles.linksGrid}>
          {quickLinks.map((column, columnIndex) => (
            <ul className={styles.linksList} key={columnIndex}>
              {column.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}