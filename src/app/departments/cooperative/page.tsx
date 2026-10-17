import Image from "next/image";
import Link from "next/link";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function CooperativePage() {
  return (
    <>
      <DepartmentTabs>
        <div className={styles.departmentContent}>
          {/* Department Label */}
          <span className={styles.contentLabel}>DEPARTMENT</span>

          <h2>Cooperative &amp; Thrift</h2>

          {/* Director Profile */}
          <div className={styles.directorProfile}>
            <div className={styles.directorImage}>
              <Image
                src="/images/team/dir_cooperative.jpeg"
                alt="Director of Cooperative and Thrift"
                width={400}
                height={500}
                priority
              />
            </div>

            <div className={styles.directorInfo}>
              <span className={styles.directorLabel}>Bilhatu Yusuf Alizi (Mrs.)</span>

              <h3>Director, Cooperative &amp; Thrift</h3>

              <p>
                The Director of Cooperative and Thrift oversees the
                administration, regulation, supervision, and development of
                cooperative societies within the state. The department works
                to promote sustainable, member-driven cooperative
                organizations that contribute to economic growth, employment
                creation, income generation, and socio-economic development.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <p>
            The Department of Cooperatives under the Ministry of Trade,
            Industry, and Investment (MTII) is dedicated to fostering the
            effective growth of sustainable, member-initiated, and
            member-controlled cooperative societies. These societies play a
            crucial role in driving the socio-economic development of the
            state by creating jobs, generating income, and promoting economic
            diversification.
          </p>

          {/* Role of the Department */}
          <div className={styles.departmentDetails}>
            <h3>Role of the Department of Cooperative &amp; Thrift</h3>

            <p>
              As a specialized and professional arm of the MTII, the
              department is tasked with registering and regulating the
              activities of cooperative societies, ensuring their alignment
              with established legal and regulatory frameworks.
            </p>
          </div>

          {/* Mission Statement */}
          <div className={styles.departmentDetails}>
            <h3>Mission Statement</h3>

            <p>
              The Cooperatives Department remains committed to the
              consolidation, promotion, and sustainable development of
              cooperative societies, ensuring they contribute significantly to
              the socio-economic progress of the state.
            </p>
          </div>

          {/* Core Responsibilities */}
          <div className={styles.departmentDetails}>
            <h3>Core Responsibilities</h3>

            <ul className={styles.responsibilitiesList}>
              <li>
                <strong>Promote Compliance:</strong> Ensure that cooperative
                societies operate within the bounds of the cooperative legal
                regulatory framework.
              </li>

              <li>
                <strong>Support Development:</strong> Facilitate the growth and
                advancement of the cooperative movement by creating a favorable
                and enabling environment.
              </li>

              <li>
                <strong>Mobilize and Educate:</strong> Lead efforts to mobilize
                cooperative members and provide education and enlightenment
                programs.
              </li>

              <li>
                <strong>Regulate and Oversee:</strong> Handle registration,
                supervision, and inquiry into cooperative societies&apos;
                activities.
              </li>

              <li>
                <strong>Audit and Arbitrate:</strong> Conduct financial audits,
                resolve disputes through arbitration, and ensure
                accountability.
              </li>

              <li>
                <strong>Manpower Development:</strong> Build capacity through
                training and manpower development initiatives.
              </li>

              <li>
                <strong>Liquidation Support:</strong> Manage liquidation
                processes when necessary.
              </li>

              <li>
                <strong>Legal and Institutional Framework:</strong> Provision
                of legal and institutional framework for co-operatives.
              </li>

              <li>
                <strong>Co-operative Registration:</strong> Registration of
                co-operative societies.
              </li>

              <li>
                <strong>Monitoring and Oversight:</strong> Auditing,
                supervision, inspection, and monitoring of co-operative
                societies.
              </li>

              <li>
                <strong>Institutional Coordination:</strong> Coordinating
                co-operative activities with other institutions.
              </li>

              <li>
                <strong>Policy Development:</strong> Preparation of programs
                and policies for the co-operative sector.
              </li>

              <li>
                <strong>National Project Management:</strong> Conception,
                implementation, and monitoring of national co-operative
                development projects.
              </li>

              <li>
                <strong>Foreign Assistance Coordination:</strong> Coordination
                of foreign financial and technical assistance for the
                implementation of co-operative projects.
              </li>

              <li>
                <strong>Advisory Services:</strong> Advising and assisting
                co-operative societies and federations in the implementation
                of their plans and projects.
              </li>

              <li>
                <strong>Data and Reporting:</strong> Data collection and
                publication of reports on co-operatives and the Co-operative
                Movement.
              </li>

              <li>
                <strong>Modernization Support:</strong> Assisting co-operative
                societies in modernizing their activities and attaining
                financial and functional autonomy.
              </li>

              <li>
                <strong>Human Resource Development:</strong> Promoting new
                management concepts through HRD, training, and education
                within the co-operative sector.
              </li>

              <li>
                <strong>Community Advancement:</strong> Promoting and
                developing the Co-operative Movement in every field of human
                activities for the economic, social, and cultural upliftment of
                members and the community.
              </li>
            </ul>
          </div>

          {/* Registration Section */}
          <div className={styles.registrationSection}>
            <h3>Co-operative Registration</h3>

            <p>
              To register a Co-operative society, NGO/CBO, or FBO, click the
              applicable button below.
            </p>

            <div className={styles.registrationButtons}>
              <Link
                href="/registration/cooperative"
                className={styles.registrationButton}
              >
                Online Cooperative Registration
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/registration/cbo-ngo"
                className={styles.registrationButton}
              >
                Online CBO/NGO Registration
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/registration/fbo"
                className={styles.registrationButton}
              >
                Online FBO Registration
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </DepartmentTabs>

      <Footer />
    </>
  );
}