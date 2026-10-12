import Image from "next/image";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function PlanningPage() {
  return (
    <>
      <DepartmentTabs>
        <div className={styles.departmentContent}>
          <span className={styles.contentLabel}>
            DEPARTMENT
          </span>

          <h2>Planning, Research &amp; Statistics</h2>

          {/* Director Profile */}
          <div className={styles.directorProfile}>
            <div className={styles.directorImage}>
              <Image
                src="/images/departments/director-planning.jpg"
                alt="Director of Planning, Research and Statistics"
                width={400}
                height={500}
                priority
              />
            </div>

            <div className={styles.directorInfo}>
              <span className={styles.directorLabel}>
                DIRECTOR
              </span>

              <h3>Director, Planning, Research &amp; Statistics</h3>

              <p>
                The Planning, Research and Statistics Department plays a
                pivotal role in the Ministry, serving as the backbone for
                strategic policy formulation, effective planning, and
                performance evaluation. The department supports informed
                decision-making through research, data analysis, monitoring,
                and evidence-based planning while ensuring that the Ministry&apos;s
                activities remain aligned with its goals and priorities.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <p>
            The Planning, Research &amp; Statistics Department plays a pivotal
            role in the Ministry, serving as the backbone for strategic policy
            formulation, effective planning, and performance evaluation. This
            department ensures that every decision made aligns with the
            Ministry&apos;s overarching goals and priorities, leveraging detailed
            research and evidence-based analysis.
          </p>

          <p>
            By adopting a systematic approach, the department bridges gaps
            between policy aspirations and operational realities, ensuring
            informed decision-making processes that are adaptable to changing
            socio-economic landscapes.
          </p>

          {/* Role of the Department */}
          <div className={styles.departmentDetails}>
            <h3>
              Role of the Department of Planning, Research &amp; Statistics
            </h3>

            <p>
              Beyond its foundational responsibilities, the department fosters
              innovation by identifying emerging trends, potential challenges,
              and opportunities for growth. It employs advanced data analytics
              and performance metrics to continuously monitor and evaluate the
              Ministry&apos;s initiatives, ensuring alignment with national
              development goals.
            </p>

            <p>
              Through efficient information management systems and robust
              feedback mechanisms, the Planning, Research &amp; Statistics
              Department not only supports the Ministry&apos;s current objectives
              but also helps anticipate future needs, solidifying its role as a
              catalyst for sustainable progress and institutional excellence.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className={styles.departmentDetails}>
            <h3>Key Responsibilities of the Department</h3>

            <ul className={styles.responsibilitiesList}>
              <li>
                <strong>Policy Formulation and Planning:</strong> Designing
                actionable policies and strategic plans for the Ministry&apos;s
                operations.
              </li>

              <li>
                <strong>Monitoring and Evaluation:</strong> Overseeing the
                economic sectors within the Ministry to ensure objectives are
                met and identifying areas for improvement.
              </li>

              <li>
                <strong>Data Management and Dissemination:</strong> Ensuring
                proper documentation, storage, and dissemination of critical
                data and information to support informed decision-making.
              </li>

              <li>
                <strong>Budget Preparation:</strong> Preparing and processing
                budget estimates to align with the Ministry&apos;s goals.
              </li>

              <li>
                <strong>Capacity Building:</strong> Coordinating training and
                development programs to enhance staff skills and capacity.
              </li>

              <li>
                <strong>Stakeholder Liaison:</strong> Serving as the Ministry&apos;s
                point of contact with external agencies for collaboration,
                assistance, and project-related research.
              </li>

              <li>
                <strong>Contract Oversight:</strong> Monitoring the progress and
                quality of all contractual works within the Ministry.
              </li>

              <li>
                <strong>Ministerial Tenders Board:</strong> Acting as the
                secretariat for procurement processes to ensure transparency
                and compliance.
              </li>
            </ul>
          </div>

          {/* Key Activities */}
          <div className={styles.departmentDetails}>
            <h3>Key Activities</h3>

            <p>
              The Department is actively engaged in developmental projects and
              initiatives aimed at improving infrastructure and revenue
              generation within the state. Notable activities include:
            </p>

            <h4>Construction Projects</h4>

            <ul className={styles.responsibilitiesList}>
              <li>Keffi Neighborhood Market/Square</li>
              <li>Akwanga Neighborhood Market</li>
              <li>Nasarawa Eggon Modern Market</li>
              <li>Cold Storage Facility at Lafia Neighborhood Market</li>
            </ul>

            <h4>Revenue Generation</h4>

            <p>
              Developing strategies and initiatives to increase the state&apos;s
              revenue base through market projects and other innovative
              approaches.
            </p>
          </div>

          {/* Significance */}
          <div className={styles.departmentDetails}>
            <h3>Significance</h3>

            <p>
              The Department&apos;s strategic initiatives not only enhance the
              Ministry&apos;s operational efficiency but also contribute
              significantly to the socio-economic development of the state. By
              aligning planning, research, and execution, the Department
              ensures that the Ministry delivers impactful results for its
              stakeholders.
            </p>
          </div>
        </div>
      </DepartmentTabs>

      <Footer />
    </>
  );
}