import Link from "next/link";
import RegistrationTabs from "@/components/registration/RegistrationTabs";
import styles from "./ZoneA.module.css";
import Footer from "@/components/layout/Footer";

type Fee = {
  type: string;
  newRegistration: string;
  renewal: string;
};

type FeeSection = {
  title: string;
  fees: Fee[];
};

const feeSections: FeeSection[] = [
  {
    title: "Medicals and Hospitality Business",
    fees: [
      {
        type: "Private Hospitals",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Dispensary, Maternity Home, Nursing Clinics, Optical/Pathology and Ex-Ray, Medical Lab",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Health Firms/Fitness Centre",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Embalming Centres",
        newRegistration: "₦14,000",
        renewal: "₦7,000",
      },
      {
        type: "Physiotherapy & Gyms",
        newRegistration: "₦14,000",
        renewal: "₦7,000",
      },
      {
        type: "Acupuncture Clinics (inpatients)",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Nutritional and Food Supplement",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Pharmacy Shops",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Patent/Proprietary Medicine Vendor License",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
    ],
  },

  {
    title: "Hospitality",
    fees: [
      {
        type: "Hotels with 1-20 Rooms",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Hotels with 21-50 Rooms",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Hotels with 51 Rooms and above",
        newRegistration: "₦120,000",
        renewal: "₦60,000",
      },
      {
        type: "Five Star Hotels",
        newRegistration: "₦300,000",
        renewal: "₦150,000",
      },
      {
        type: "Pool Centre/Game of Chance",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Restaurants (Big)",
        newRegistration: "₦48,000",
        renewal: "₦24,000",
      },
      {
        type: "Restaurant (Small)",
        newRegistration: "₦24,000",
        renewal: "₦12,000",
      },
      {
        type: "Fast Food/Confectionaries (Big)",
        newRegistration: "₦24,000",
        renewal: "₦12,000",
      },
      {
        type: "Restaurant/Confectionaries (Small)",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Bakery",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Interior Decoration Biz",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Beer/Spirit Sales (Big)",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Beer/Spirit Sales (Small)",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Cinema (Big)",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Cinema (Medium)",
        newRegistration: "₦15,000",
        renewal: "₦7,000",
      },
      {
        type: "Cinema (Small)",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Record stores, Video & Club Photo",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Vocational Centres/Skill Acquisition Institutes",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
    ],
  },

  {
    title: "Energy, Oil and Gas",
    fees: [
      {
        type: "Petrol station with 1-2 fuel dispensers",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Petrol station with 1-4 fuel dispensers",
        newRegistration: "₦50,000",
        renewal: "₦25,000",
      },
      {
        type: "Petrol station with 1-5 fuel dispensers",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Petrol station with 6 fuel dispensers & above",
        newRegistration: "₦140,000",
        renewal: "₦70,000",
      },
      {
        type: "Surface Tank Kerosene Dealers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Gas Station",
        newRegistration: "₦500,000",
        renewal: "₦250,000",
      },
      {
        type: "Electricity Company",
        newRegistration: "₦5,000,000",
        renewal: "₦2,500,000",
      },
      {
        type: "Electronic shops/sellers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
    ],
  },

  {
    title: "Building Materials",
    fees: [
      {
        type: "Sales of Aluminium Material",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Bench Saw Millers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Plank Sellers/Dealers",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Aluminium Smelting Company",
        newRegistration: "₦500,000",
        renewal: "₦250,000",
      },
      {
        type: "Ceramic Company",
        newRegistration: "₦5,000,000",
        renewal: "₦2,500,000",
      },
      {
        type: "Steel Smelting Company",
        newRegistration: "₦5,000,000",
        renewal: "₦2,500,000",
      },
      {
        type: "Building Material Dealers/Sellers",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Cement Manufacturing Company",
        newRegistration: "₦12,000,000",
        renewal: "₦6,000,000",
      },
      {
        type: "Cement Dealer/Seller",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Block Industry",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Welding/Fabricator",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Construction Company",
        newRegistration: "₦5,000,000",
        renewal: "₦2,500,000",
      },
      {
        type: "Biochemical Company",
        newRegistration: "₦300,000",
        renewal: "₦150,000",
      },
      {
        type: "GSM Phone Accessories",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Block Industry",
        newRegistration: "₦4,000",
        renewal: "₦2,000",
      },
      {
        type: "Telecommunication Mast Location",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Network Service Provider Office",
        newRegistration: "₦500,000",
        renewal: "₦250,000",
      },
    ],
  },

  {
    title: "Automobile",
    fees: [
      {
        type: "Motor Spare Parts Dealer",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Motor Dealer/Seller",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Motorcycle Dealers/Sellers",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Travelling Agencies",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Heavy Duty Generator Seller",
        newRegistration: "₦500,000",
        renewal: "₦250,000",
      },
      {
        type: "Motorcycle Spare Parts Seller",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
    ],
  },

  {
    title: "Educational Institutions",
    fees: [
      {
        type: "Private Nursery/Primary Schools",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Private Secondary Schools",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Vocational Centre / Secretariat Institute",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Private Higher Institutions",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
    ],
  },

  {
    title: "Financial Institutions",
    fees: [
      {
        type: "Commercial Banks",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Micro Finance Bank",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
      {
        type: "Insurance Company",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
    ],
  },

  {
    title: "Any other Business",
    fees: [
      {
        type: "Bookshops/Stationery Stores",
        newRegistration: "₦14,000",
        renewal: "₦7,000",
      },
      {
        type: "Supermarkets",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
      {
        type: "Distributorship",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Small Retail Shops",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Clearing Agents",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Warehouse",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
    ],
  },
];

export default function ZoneARegistrationFeesPage() {
  return (
    <>
      <RegistrationTabs>
        <div className={styles.registrationContent}>
          <span className={styles.contentLabel}>
            REGISTRATION
          </span>

          <h1>Zone A Registration Fees</h1>

          <div className={styles.contentBlock}>
            <h2>Overview</h2>

            <p>
              The{" "}
              <strong>
                Zone A Business Name and Business Premises Registration Fee
              </strong>{" "}
              is a statutory requirement for businesses operating within the
              designated Zone A region. This zone encompasses the following
              areas:
            </p>

            <ul className={styles.contentList}>
              <li>Lafia</li>
              <li>Mararaba Gurku</li>
              <li>One Man Village</li>
              <li>Nyanya Gwandara</li>
              <li>Masaka</li>
              <li>Keffi</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h2>Purpose</h2>

            <p>
              The registration fee applies to both new businesses seeking to
              establish their presence and existing businesses renewing their
              registration annually. This process is critical for ensuring
              that businesses operate within the bounds of legal and
              regulatory frameworks. It provides official recognition of the
              business name and premises, granting legal rights and protection
              to business owners.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Benefits</h2>

            <p>
              Compliance with this requirement fosters a conducive business
              environment by promoting accountability and enabling local
              authorities to maintain accurate records of enterprises within
              their jurisdiction. Additionally, the funds collected through
              registration fees support the provision of essential
              infrastructure, services, and regulatory oversight, which are
              vital for sustainable economic growth in the Zone A region.
            </p>

            <p>
              By adhering to the registration requirements, businesses not
              only avoid legal penalties but also enhance their credibility
              and operational legitimacy. This can lead to increased customer
              trust and opportunities for partnerships. The process underscores
              the importance of aligning business operations with local
              government policies to drive development and foster a thriving
              commercial ecosystem.
            </p>
          </div>

          <div className={styles.feesSection}>
            <h2>Registration Fees</h2>

            <div className={styles.sectionLine}></div>

            {feeSections.map((section) => (
              <div
                key={section.title}
                className={styles.feeCategory}
              >
                <h2>{section.title}</h2>

                <div className={styles.tableWrapper}>
                  <table className={styles.feeTable}>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>New Registration (₦)</th>
                        <th>Renewal (₦)</th>
                      </tr>
                    </thead>

                    <tbody>
                      {section.fees.map((fee, index) => (
                        <tr key={`${fee.type}-${index}`}>
                          <td>{fee.type}</td>
                          <td>{fee.newRegistration}</td>
                          <td>{fee.renewal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actionButtons}>
            <Link
              href="/registration"
              className={styles.actionButton}
            >
              How To Register
              <span>→</span>
            </Link>

            <Link
              href="/registration/online-registration"
              className={styles.actionButton}
            >
              Register
              <span>→</span>
            </Link>
          </div>
        </div>
      </RegistrationTabs>

      <Footer />
    </>
  );
}