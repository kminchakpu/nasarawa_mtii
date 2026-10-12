import Image from "next/image";
import DepartmentTabs from "@/components/departments/DepartmentTabs";
import styles from "@/components/departments/DepartmentTabs.module.css";
import Footer from "@/components/layout/Footer";
import InvestmentCards from "@/components/departments/InvestmentCards";

export default function IndustryInvestmentPage() {
  return (
    <>
      <DepartmentTabs>
        <div className={styles.departmentContent}>
          <span className={styles.contentLabel}>DEPARTMENT</span>

          <h2>Industry &amp; Investment</h2>

          {/* Director Profile */}
          <div className={styles.directorProfile}>
            <div className={styles.directorImage}>
              <Image
                src="/images/team/dir-investment.jpg"
                alt="Director of Industry and Investment"
                width={400}
                height={500}
                priority
              />
            </div>

            <div className={styles.directorInfo}>
              <span className={styles.directorLabel}>DIRECTOR</span>

              <h3>Director, Industry &amp; Investment</h3>

              <p>
                In a rapidly globalizing economy, the Department of Industry
                and Investment plays an instrumental role in aligning
                industrial policies with international best practices,
                ensuring that industries not only thrive but also remain
                competitive in the global market. The Department works closely
                with other governmental bodies, private sector players, and
                international organizations to unlock the full potential of
                Nasarawa State&apos;s industrial and investment landscape.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <p>
            The Department of Industry and Investment is a critical arm of the
            Ministry of Trade, Industry, and Investment (MTII), responsible
            for driving the industrial and investment growth of the State. Its
            role extends beyond facilitating industrial development and
            investment opportunities; it serves as a catalyst for economic
            transformation by creating an enabling environment for both local
            and foreign investors, promoting industrial policies, and ensuring
            the sustainable development of industries within the economy.
          </p>

          {/* Vision */}
          <div className={styles.departmentDetails}>
            <h3>Vision</h3>

            <p>
              The Department of Industry and Investment aspires to be a leading
              force in the economic transformation of the State by promoting
              industrialization and attracting sustainable investments that
              contribute to job creation, economic diversification, and global
              competitiveness.
            </p>

            <p>
              Through the development of an inclusive and competitive
              industrial sector, the Department aims to enhance the State&apos;s
              industrial output and position it as a key player in the global
              economy.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.departmentDetails}>
            <h3>Mission</h3>

            <p>
              The Department&apos;s mission is to foster an enabling environment
              for industrial growth and investment, support the development of
              a robust industrial base, and encourage the diversification of
              the economy through targeted investments in key sectors.
            </p>

            <p>
              This is achieved through policy direction, infrastructure
              development, investment facilitation, and the promotion of
              industrial innovation and sustainable practices.
            </p>
          </div>

          {/* Key Functions */}
          <div className={styles.departmentDetails}>
            <h3>Key Functions of the Department</h3>

            <h4>1. Promotion of Industrial Growth</h4>

            <p>
              Developing and implementing strategies for industrial expansion,
              modernization, and diversification. The Department encourages
              the establishment of new industries in key sectors such as
              manufacturing, technology, agriculture, and energy.
            </p>

            <p>
              It also supports the growth of Small and Medium-sized Enterprises
              (SMEs) through grants, funding schemes, and infrastructure
              support.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>2. Investment Attraction and Facilitation</h4>

            <p>
              Promoting Nasarawa State as an attractive investment destination
              by developing investment policies and incentives for both local
              and international investors.
            </p>

            <p>
              The Department coordinates investment initiatives such as
              investment summits, trade missions, and investor roadshows. It
              also assists investors with the necessary regulatory approvals,
              permits, and licenses required for smooth establishment and
              operation.
            </p>

            <p>
              The Department also provides a platform for public-private
              partnerships (PPPs) aimed at large-scale industrial projects.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>3. Policy Development and Industrial Regulation</h4>

            <p>
              Formulating policies to drive industrial development while
              ensuring compliance with global trade standards. The Department
              conducts regular reviews of industrial policies to meet the
              evolving needs of industries and the investment climate.
            </p>

            <p>
              It also works with relevant agencies to ensure that industries
              comply with local and international regulations, including
              environmental standards, labour laws, and safety guidelines.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>4. Industrial Capacity Building</h4>

            <p>
              Organizing training and capacity-building programmes to upgrade
              skills in the industrial sector, especially for entrepreneurs
              and workforce development.
            </p>

            <p>
              The Department supports research and development (R&amp;D) to
              foster innovation and increase the competitiveness of industries
              while encouraging the adoption of modern technologies and best
              practices to improve productivity and efficiency.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>5. Industrial Infrastructure Development</h4>

            <p>
              Facilitating the creation of industrial parks, Special Economic
              Zones (SEZs), and industrial clusters to boost manufacturing and
              industrial output.
            </p>

            <p>
              The Department also supports the development and improvement of
              critical infrastructure, including power, transport, and
              logistics systems, and coordinates with local governments and
              private sector partners to ensure the availability of industrial
              land and necessary utilities.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>6. Export Promotion and International Trade Relations</h4>

            <p>
              Supporting the export sector by facilitating trade agreements,
              removing trade barriers, and promoting Made-in-Nigeria goods.
            </p>

            <p>
              The Department builds and strengthens trade relations with other
              countries, creates new markets for locally produced goods and
              services, and monitors global market trends to provide timely
              information and opportunities to local industries.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>7. Sustainability and Environmental Impact</h4>

            <p>
              Promoting sustainable industrial practices by encouraging the use
              of clean energy, waste reduction, and environmentally friendly
              technologies.
            </p>

            <p>
              The Department collaborates with environmental agencies to ensure
              industries meet environmental compliance standards and supports
              industries in their transition to greener technologies and
              practices that reduce their carbon footprint.
            </p>
          </div>

          <div className={styles.departmentDetails}>
            <h4>8. Investment Monitoring and Evaluation</h4>

            <p>
              Monitoring the performance of both local and foreign investments
              to ensure that they meet agreed-upon terms, including economic
              impact, job creation, and sustainability.
            </p>

            <p>
              The Department provides continuous support to investors through
              aftercare services, ensuring that their investments grow
              successfully within the State framework.
            </p>

            <p>
              It also evaluates the effectiveness of investment policies and
              industrial programmes to ensure that they deliver tangible
              benefits to the economy.
            </p>
          </div>

          {/* Other Functions */}
          <div className={styles.departmentDetails}>
            <h3>Other Functions</h3>

            <ul className={styles.responsibilitiesList}>
              <li>
                Coordinates the activities of Small and Medium Scale
                Enterprises (SMSEs).
              </li>

              <li>
                Processes the granting of soft loans to Small Scale
                Entrepreneurs through the Small Scale Revolving Scheme of the
                Ministry.
              </li>

              <li>
                Facilitates the process for the establishment of Dangote
                Projects, including sugar, rice, and coal projects, in the
                State.
              </li>

              <li>
                Initiates the process for the provision of Industrial Layouts
                across the State.
              </li>

              <li>
                Oversees and advises, where necessary, on the activities of
                Nasarawa Investment and Property Development Company (NIPDC)
                Limited.
              </li>

              <li>
                Oversees Government-owned industries transferred to NIPDC
                Limited.
              </li>

              <li>
                Initiates and facilitates the process for the collection of
                Haulage Fees.
              </li>

              <li>
                Promotes entrepreneurship development programmes for value
                addition.
              </li>

              <li>
                Facilitates the process for the State to key into BOI and
                CBN-SME Fund programmes.
              </li>

              <li>
                Represents the Ministry on the Board of NADP, Lafia.
              </li>

              <li>
                Represents the State on the Technical Advisory Committee (TAC)
                of the North Central CBN-EDC established in Makurdi.
              </li>

              <li>
                Coordinates and carries out exhibitions of SME products in
                local and foreign exhibitions.
              </li>

              <li>
                Oversees and promotes the activities of NGO bodies such as
                NASSI, NASME, MAN, and others.
              </li>

              <li>
                Liaises with Federal Ministries and Parastatals including
                Industry, Trade and Investment; Science and Technology;
                SMEDAN; RMRDC; NIPC; SON; BOI; CBN; and other relevant
                institutions.
              </li>
            </ul>
          </div>

          {/* Core Activities */}
          <div className={styles.departmentDetails}>
            <h3>Core Activities</h3>

            <p>
              The functions outlined above are categorized into three core
              activities, which the Department of Industry and Investment
              diligently executes with dedication and expertise.
            </p>

            <p>
              Explore the cards below to learn more about each area of the
              Department&apos;s work.
            </p>
          </div>
        </div>
      </DepartmentTabs>
      <InvestmentCards />
      <Footer />
    </>
  );
}