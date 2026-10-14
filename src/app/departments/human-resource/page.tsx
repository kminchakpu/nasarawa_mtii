import Image from "next/image";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function HumanResourcePage() {
  return (
    <>
    <DepartmentTabs>
      <div className={styles.departmentContent}>
        <span className={styles.contentLabel}>
          DEPARTMENT
        </span>

        <h2>Human Resource</h2>

        {/* Director Profile */}
        <div className={styles.directorProfile}>
          <div className={styles.directorImage}>
            <Image
              src="/images/team/dir_human_resource.jpg"
              alt="Director of Human Resource"
              width={400}
              height={500}
              priority
            />
          </div>

          <div className={styles.directorInfo}>
            <span className={styles.directorLabel}>
              DIRECTOR
            </span>

            <h3>Director, Human Resource</h3>

            <p>
              The Department of Human Resource supports the Chief Executive in overseeing the Commission&apos;s operations, ensuring that organizational and staff matters are addressed in alignment with Public Service Rules, circulars, extant regulations, and the Commission’s Staff Conditions of Service. This department handles core administrative responsibilities, including the coordination and management of personnel and equipment. As a support unit, it facilitates the seamless functioning of other departments, enabling the effective execution of the Ministry’s programs.
            </p>
          </div>
        </div>

        <p>
          Administration plays a crucial role in any organization. It focuses
          on identifying, managing, motivating, controlling, and harmonizing
          both human and material resources within an integrated system to
          achieve defined objectives effectively.
        </p>

        <p>
          The Human Resource Department oversees the daily operations of the
          Ministry, including the management of staff, public relations, legal
          affairs, and human resources (HR) needs. The department plays a
          central role in ensuring the effective coordination and smooth
          operation of the Ministry.
        </p>

        <div className={styles.departmentDetails}>
          <h3>Department Responsibilities</h3>

          <p>
            The department is responsible for monitoring the Ministry&apos;s
            performance and making strategic decisions to guide future
            initiatives and ensure organizational success. It also supports
            the Ministry through effective staff management, human resource
            administration, public relations, legal affairs, and general
            administrative services.
          </p>

          <p>
            Through effective planning, coordination, and supervision, the
            Human Resource Department helps create an efficient working
            environment that enables other departments to effectively deliver
            on the Ministry&apos;s mandate.
          </p>
        </div>

        <div className={styles.departmentDetails}>
          <h3>Human Resources &amp; Staff Management</h3>

          <p>
            The department oversees human resource needs within the Ministry,
            supporting staff development, coordination, and the effective
            management of personnel in accordance with applicable government
            policies and regulations.
          </p>
        </div>

        <div className={styles.departmentDetails}>
          <h3>General Administration</h3>

          <p>
            The department coordinates the Ministry&apos;s day-to-day
            administrative activities and provides the necessary support
            services to ensure that the Ministry operates efficiently and
            effectively.
          </p>
        </div>
      </div>
    </DepartmentTabs>
    <Footer />
    </>
  );
}