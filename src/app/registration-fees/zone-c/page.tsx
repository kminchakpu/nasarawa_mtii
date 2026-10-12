import Link from "next/link";
import RegistrationTabs from "@/components/registration/RegistrationTabs";
import styles from "./ZoneC.module.css";
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
    title: "Medicals",
    fees: [
      {
        type: "Private Hospitals",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Dispensary, Maternity Home, Nursing Clinics, Optical/ Pathology and Ex-Ray, Medical Lab",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Health Firms/Fitness Centre",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Embalmment Centres",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Physiotherapy & Gyms",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Acupuncture Clinics (inpatients)",
        newRegistration: "₦5,000",
        renewal: "₦3,000",
      },
      {
        type: "Nutritional and Food Supplement",
        newRegistration: "₦10,000",
        renewal: "₦5,500",
      },
      {
        type: "Pharmacy Shops",
        newRegistration: "₦12,000",
        renewal: "₦6,000",
      },
      {
        type: "Patent/Proprietary Medicine Vendor License",
        newRegistration: "₦5,000",
        renewal: "₦3,000",
      },
    ],
  },

  {
    title: "Hospitality",
    fees: [
      {
        type: "Hotels with 1-20 Rooms",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Hotels with 21-50 Rooms",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Hotels with 51 Rooms and above",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Five Star Hotels",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Pool Centre/Game of Chance",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Restaurants (Big)",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Restaurant (Small)",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Fast Food/Confectionaries (Big)",
        newRegistration: "₦10,000",
        renewal: "₦5,500",
      },
      {
        type: "Restaurant/Confectionaries (Small)",
        newRegistration: "₦6,000",
        renewal: "₦3,000",
      },
      {
        type: "Bakery",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Interior Decoration Biz",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Beer/Spirit Sales (Big)",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Beer/Spirit Sales (Small)",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Cinema (Big)",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Cinema (Medium)",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Cinema (Small)",
        newRegistration: "₦6,000",
        renewal: "₦3,000",
      },
      {
        type: "Record stores, Video & Club Photo",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Vocational Centres/ Skill Acquisition Institutes",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
    ],
  },

  {
    title: "Energy, Oil, and Gas",
    fees: [
      {
        type: "Petrol station with 1-2 fuel dispensers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Petrol station 1-4 fuel dispensers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Petrol station with 1-5 fuel dispensers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Petrol station with 6 fuel dispensers & above",
        newRegistration: "₦50,000",
        renewal: "₦25,000",
      },
      {
        type: "Surface Tank Kerosene Dealers",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Gas Station",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Electricity Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Electronic shops/sellers",
        newRegistration: "₦5,000",
        renewal: "₦3,000",
      },
    ],
  },

  {
    title: "Building Materials",
    fees: [
      {
        type: "Sales of Aluminium material",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Bench Saw Millers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Plank Sellers/Dealers",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Aluminium smelting Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Ceramic Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Steel smelting Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Building Material Dealers/Sellers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Cement Manufacturing Company",
        newRegistration: "₦5,000,000",
        renewal: "₦2,500,000",
      },
      {
        type: "Cement dealer/Seller",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Block Industry",
        newRegistration: "₦10,000",
        renewal: "₦5,500",
      },
      {
        type: "Welding/Fabricator",
        newRegistration: "₦6,000",
        renewal: "₦3,000",
      },
      {
        type: "Construction Company",
        newRegistration: "₦2,000,000",
        renewal: "₦1,000,000",
      },
      {
        type: "Borehole Company",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Aluminium Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
    ],
  },

  {
    title: "Automobile",
    fees: [
      {
        type: "Motor Spare parts Dealer",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Motor Dealer/Seller",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
      {
        type: "Motorcycle Dealers/Sellers",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Travelling Agencies",
        newRegistration: "₦6,000",
        renewal: "₦3,000",
      },
      {
        type: "Heavy Duty Generator Seller",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Motor Cycle Spare Parts Seller",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "GSM Phone Accessories",
        newRegistration: "₦3,000",
        renewal: "₦2,000",
      },
    ],
  },

  {
    title: "Academic Institutions",
    fees: [
      {
        type: "Private Nursery/Primary Schools",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Private Secondary Schools",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Vocational Centre / Secretariat Institute",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Private Higher Institutions",
        newRegistration: "₦50,000",
        renewal: "₦25,000",
      },
    ],
  },

  {
    title: "Financial Institutions",
    fees: [
      {
        type: "Commercial Banks",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Micro Finance Bank",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Insurance Company",
        newRegistration: "₦50,000",
        renewal: "₦25,000",
      },
    ],
  },
];

export default function ZoneCRegistrationFeesPage() {
  return (
    <>
      <RegistrationTabs>
        <div className={styles.registrationContent}>
          <span className={styles.contentLabel}>
            REGISTRATION
          </span>

          <h1>Zone C Registration Fees</h1>

          <div className={styles.contentBlock}>
            <h2>Overview</h2>

            <p>
              The{" "}
              <strong>
                Zone C Business Name and Business Premises Registration Fee
              </strong>{" "}
              is a mandatory charge for businesses operating within the
              designated Zone C region. Zone C includes areas that are not
              covered by Zones A and B, encompassing various Local Government
              Councils. This fee applies to both newly registered businesses
              and those renewing their registration annually.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Purpose</h2>

            <p>
              The registration process ensures businesses comply with local
              laws and regulations, providing official recognition for
              business names and premises. This process also grants business
              owners legal rights and protection, which are essential for
              conducting legitimate operations in the market. By paying the
              registration fee, businesses help local authorities maintain
              accurate records and promote transparency in the business
              ecosystem.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Benefits</h2>

            <p>
              The funds generated from registration fees are utilized to
              enhance infrastructure, improve service delivery, and strengthen
              regulatory oversight within Zone C. Registered businesses benefit
              from greater legitimacy, customer trust, and the opportunity for
              growth within the region. Compliance with these requirements also
              helps businesses avoid potential legal penalties and contributes
              to the broader economic development of Zone C.
            </p>

            <p>
              By fulfilling these obligations, businesses not only protect
              their operations but also play a vital role in fostering a
              dynamic, legally compliant, and prosperous business environment
              in Zone C.
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