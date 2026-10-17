import Image from "next/image";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function FinanceAccountPage() {
  return (
    <>
      <DepartmentTabs >
        <div className={styles.departmentContent}>
          <span className={styles.contentLabel}>
            DEPARTMENT
          </span>

          <h2>Finance &amp; Account</h2>

          {/* Director Profile */}
          <div className={styles.directorProfile}>
            <div className={styles.directorImage}>
              <Image
                src="/images/team/dir_finance.jpeg"
                alt="Director of Finance and Account"
                width={400}
                height={500}
                priority
              />
            </div>

            <div className={styles.directorInfo}>
              <span className={styles.directorLabel}>
                Abdullahi Mahmud Muhammed
              </span>

              <h3>Director, Finance &amp; Account</h3>

              <p>
                The Finance and Account Department plays a vital role in
                ensuring the financial health and stability of the Ministry of
                Trade, Industry, and Investment (MTII). The department is
                responsible for sound financial management, effective resource
                allocation, financial planning, and the implementation of
                appropriate control mechanisms to support the Ministry&apos;s
                operations and objectives.
              </p>
            </div>
          </div>

          <p>
            Finance serves as one of the fundamental pillars of any
            organization, acting as an essential ingredient for sustainable
            success. The Finance and Account Department plays a vital role in
            ensuring the financial health and stability of the Ministry of
            Trade, Industry, and Investment (MTII). Its responsibilities span
            a wide range of functions, both within and outside the organization,
            directly impacting the Ministry&apos;s performance and success.
          </p>

          <div className={styles.departmentDetails}>
            <h3>Role of the Department of Finance &amp; Account</h3>

            <p>
              The Finance and Account Department is responsible for acquiring,
              managing, and planning the allocation of funds to support the
              Ministry&apos;s diverse activities. It ensures sound financial
              management and robust control mechanisms that are indispensable
              for smooth operations. By fostering financial discipline and
              transparency, the Department underpins the Ministry&apos;s mission
              to drive trade, industry, and investment initiatives effectively.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h3>Vision</h3>

            <p>
              The Finance and Account Department envisions being a model of
              financial excellence, ensuring transparency, accountability, and
              optimal utilization of resources to foster sustainable growth and
              development within the Ministry and beyond.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h3>Core Functions of the Department</h3>

            <p>
              <strong>Budget Preparation and Management:</strong> Developing
              and coordinating the annual budget for the Ministry. Monitoring
              budget performance and ensuring compliance with financial
              regulations. Providing periodic financial reports to guide
              decision-making processes.
            </p>

            <p>
              <strong>Fund Acquisition and Allocation:</strong> Securing
              necessary funding from government allocations, grants, or
              external partnerships. Allocating resources effectively to
              support various projects and departmental needs.
            </p>

            <p>
              <strong>Expenditure Planning and Control:</strong> Planning and
              managing expenditures to ensure they align with approved
              budgets. Implementing financial controls to prevent overspending
              or mismanagement.
            </p>

            <p>
              <strong>Revenue Collection and Management:</strong> Collecting
              and managing revenue generated from Ministry activities. Ensuring
              accurate record-keeping of all income sources.
            </p>

            <p>
              <strong>Auditing and Financial Reporting:</strong> Conducting
              internal and external audits to ensure accountability and
              transparency. Preparing comprehensive financial statements and
              statutory reports in line with regulatory requirements.
            </p>

            <p>
              <strong>Payroll and Staff Remuneration:</strong> Managing the
              Ministry&apos;s payroll system, ensuring timely and accurate
              payment of staff salaries and benefits. Administering deductions,
              tax remittances, and other financial obligations.
            </p>

            <p>
              <strong>Compliance and Regulatory Oversight:</strong> Ensuring
              adherence to financial laws, regulations, and government
              policies. Liaising with regulatory bodies to maintain compliance.
            </p>

            <p>
              <strong>Support for Strategic Decision-Making:</strong> Providing
              financial insights and analysis to guide policy formulation and
              strategic planning. Supporting the Ministry&apos;s leadership in
              making data-driven financial decisions.
            </p>

            <p>
              <strong>Financial Risk Management:</strong> Identifying and
              mitigating financial risks that could affect the Ministry&apos;s
              operations. Establishing contingency plans for unforeseen
              financial challenges.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h3>Role in the Ministry&apos;s Success</h3>

            <p>
              The Finance and Account Department&apos;s contributions extend
              beyond numbers; it plays a strategic role in the Ministry&apos;s
              ability to achieve its objectives. By ensuring prudent financial
              management, the Department supports trade, industry, and
              investment initiatives, ultimately contributing to the
              socio-economic development of the state.
            </p>
          </div>
        </div>
      </DepartmentTabs>

      <Footer />
    </>
  );
}