import Link from "next/link";
import RegistrationTabs from "@/components/registration/RegistrationTabs";
import styles from "./ZoneB.module.css";
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
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Dispensary, Maternity Home, Nursing Clinics, Optical/Pathology, X-Ray, Medical Lab",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Health Firms/Fitness Centre",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Embalmment Centres",
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
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Hotels with 21-50 Rooms",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Hotels with 51 Rooms and above",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Five Star Hotels",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Pool Centre/Game of Chance",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Restaurants (Big)",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Restaurant (Small)",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Fast Food/Confectionaries (Big)",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Restaurant/Confectionaries (Small)",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Bakery",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Interior Decoration Biz",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Beer/Spirit Sales (Big)",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Beer/Spirit Sales (Small)",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Cinema (Big)",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Cinema (Medium)",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Cinema (Small)",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Record Stores, Video & Club Photo",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Vocational Centres/Skill Acquisition Institutes",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
    ],
  },

  {
    title: "Energy, Oil and Gas",
    fees: [
      {
        type: "Petrol station with 1-2 fuel dispensers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Petrol station 1-4 fuel dispensers",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Petrol station with 1-5 fuel dispensers",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Petrol station with 6 fuel dispensers & above",
        newRegistration: "₦100,000",
        renewal: "₦50,000",
      },
      {
        type: "Surface Tank Kerosene Dealers",
        newRegistration: "₦20,000",
        renewal: "₦10,000",
      },
      {
        type: "Gas Station",
        newRegistration: "₦400,000",
        renewal: "₦200,000",
      },
      {
        type: "Electricity Company",
        newRegistration: "₦4,000,000",
        renewal: "₦2,000,000",
      },
      {
        type: "Electronic shops/sellers",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
    ],
  },

  {
    title: "Building Materials",
    fees: [
      {
        type: "Sales of Aluminium material",
        newRegistration: "₦12,000",
        renewal: "₦6,000",
      },
      {
        type: "Bench Saw Millers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Plank Sellers/Dealers",
        newRegistration: "₦10,000",
        renewal: "₦5,500",
      },
      {
        type: "Aluminium smelting Company",
        newRegistration: "₦400,000",
        renewal: "₦200,000",
      },
      {
        type: "Ceramic Company",
        newRegistration: "₦400,000",
        renewal: "₦200,000",
      },
      {
        type: "Steel smelting Company",
        newRegistration: "₦400,000",
        renewal: "₦200,000",
      },
      {
        type: "Building Material Dealers/Sellers",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Cement Manufacturing Company",
        newRegistration: "₦10,000,000",
        renewal: "₦5,000,000",
      },
      {
        type: "Cement dealer/Seller",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Block Industry",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Welding/Fabricator",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Construction Company",
        newRegistration: "₦3,000,000",
        renewal: "₦1,500,000",
      },
      {
        type: "Borehole Company",
        newRegistration: "₦200,000",
        renewal: "₦100,000",
      },
      {
        type: "Aluminium Company",
        newRegistration: "₦400,000",
        renewal: "₦200,000",
      },
    ],
  },

  {
    title: "Automobile",
    fees: [
      {
        type: "Motor Spare parts Dealer",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Motor Dealer/Seller",
        newRegistration: "₦120,000",
        renewal: "₦60,000",
      },
      {
        type: "Motorcycle Dealers/Sellers",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Travelling Agencies",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Heavy Duty Generator Seller",
        newRegistration: "₦300,000",
        renewal: "₦150,000",
      },
      {
        type: "Motor Cycle Spare Parts Seller",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "GSM Phone Accessories",
        newRegistration: "₦4,000",
        renewal: "₦2,000",
      },
      {
        type: "Telecommunication Mast Location",
        newRegistration: "₦70,000",
        renewal: "₦35,000",
      },
      {
        type: "Network Service Provider Office",
        newRegistration: "₦300,000",
        renewal: "₦150,000",
      },
    ],
  },

  {
    title: "Academic Institutions",
    fees: [
      {
        type: "Private Nursery/Primary Schools",
        newRegistration: "₦12,000",
        renewal: "₦6,000",
      },
      {
        type: "Private Secondary Schools",
        newRegistration: "₦24,000",
        renewal: "₦12,000",
      },
      {
        type: "Vocational Centre / Secretariat Institute",
        newRegistration: "₦12,000",
        renewal: "₦6,000",
      },
      {
        type: "Private Higher Institutions",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
    ],
  },

  {
    title: "Financial Institutions",
    fees: [
      {
        type: "Commercial Banks",
        newRegistration: "₦150,000",
        renewal: "₦75,000",
      },
      {
        type: "Micro Finance Bank",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Insurance Company",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
    ],
  },

  {
    title: "Any Other Business",
    fees: [
      {
        type: "Bookshops/Stationeries stores",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Supermarkets",
        newRegistration: "₦60,000",
        renewal: "₦30,000",
      },
      {
        type: "Distributorship",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Small Retail shops",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Clearing agents",
        newRegistration: "₦15,000",
        renewal: "₦7,000",
      },
      {
        type: "Warehouse",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Sole Proprietorship",
        newRegistration: "₦10,000",
        renewal: "₦5,000",
      },
      {
        type: "Solid Mineral Miners",
        newRegistration: "₦40,000",
        renewal: "₦20,000",
      },
      {
        type: "Private Radio TV Station",
        newRegistration: "₦150,000",
        renewal: "₦75,000",
      },
      {
        type: "Limited Liability Company",
        newRegistration: "₦80,000",
        renewal: "₦40,000",
      },
      {
        type: "Agro Services/Chemical",
        newRegistration: "₦8,000",
        renewal: "₦4,000",
      },
      {
        type: "Tailor/Fashion Design",
        newRegistration: "₦4,000",
        renewal: "₦2,000",
      },
      {
        type: "Security Agency",
        newRegistration: "₦15,000",
        renewal: "₦7,500",
      },
      {
        type: "Boutique (Big)",
        newRegistration: "₦30,000",
        renewal: "₦15,000",
      },
      {
        type: "Boutique (Small)",
        newRegistration: "₦15,000",
        renewal: "₦7,000",
      },
    ],
  },
];

export default function ZoneBRegistrationFeesPage() {
  return (
    <>
      <RegistrationTabs>
        <div className={styles.registrationContent}>
          <span className={styles.contentLabel}>
            REGISTRATION
          </span>

          <h1>Zone B Registration Fees</h1>

          <div className={styles.contentBlock}>
            <h2>Overview</h2>

            <p>
              The{" "}
              <strong>
                Zone B Business Name and Business Premises Registration Fee
              </strong>{" "}
              is a mandatory requirement for businesses operating within the
              designated Zone B region. This zone encompasses the following
              Local Government Councils:
            </p>

            <ul className={styles.contentList}>
              <li>Akwanga</li>
              <li>Awe</li>
              <li>Doma</li>
              <li>Karu</li>
              <li>Keana</li>
              <li>Kokona</li>
              <li>Nasarawa</li>
              <li>Nasarawa Eggon</li>
              <li>Obi</li>
              <li>Toto</li>
              <li>Wamba</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h2>Purpose</h2>

            <p>
              The registration fee applies to both new businesses seeking to
              establish their presence and existing businesses renewing their
              registration annually. This process ensures that businesses
              operate legally and are officially recognized, granting them
              the rights and protections needed to thrive in a competitive
              market.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Benefits</h2>

            <p>
              Compliance with the Zone B registration requirement enables
              local authorities to maintain accurate records of businesses,
              ensuring better oversight and regulation. The fees collected
              are utilized to improve infrastructure, enhance service
              delivery, and create a supportive environment for business
              growth in the region.
            </p>

            <p>
              By adhering to the Zone B registration requirements, businesses
              contribute to regional development and benefit from the
              protections and opportunities that come with formal recognition.
              This process is vital for fostering a thriving, sustainable,
              and legally compliant business ecosystem in the Zone B region.
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