import Link from "next/link";
import AboutTabs from "@/components/about/AboutTabs";
import styles from "@/components/about/AboutTabs.module.css";
import Footer from "@/components/layout/Footer";

export default function RegistrationFeesPage() {
  return (
    <>
      <AboutTabs>
        <div className={styles.contentBlock}>
          <span className={styles.contentLabel}>
            ABOUT MTII
          </span>

          <h2>Registration Fees</h2>

          <p>
            Registration fees are mandatory charges required to formalize and
            legally recognize various types of organizations, businesses, or
            entities. These fees cover administrative processing,
            certification, and compliance with regulatory frameworks
            established by the governing authorities.
          </p>

          <p>
            The amount of registration fees typically varies based on the type
            and size of the entity, such as cooperative societies,
            community-based organizations (CBOs), or faith-based organizations
            (FBOs).
          </p>

          <p>
            For businesses, registration fees often depend on the nature of the
            enterprise, its legal structure, such as sole proprietorship,
            partnership, or corporation, and the jurisdiction where it
            operates.
          </p>

          <p>
            Payment of these fees ensures the entity&apos;s legal status,
            enabling it to operate lawfully and access relevant benefits, such
            as tax identification numbers, government support, or legal
            protections.
          </p>

          {/* Registration Zones */}
          <div className={styles.contentBlock}>
            <h3>Registration Zones</h3>

            <p>
              The registration process is organized into three (3) zones to
              ensure efficient coverage based on geographic and administrative
              divisions. Please select the button corresponding to the zone
              that includes your location.
            </p>
          </div>

          {/* Zone A */}
          <div className={styles.contentBlock}>
            <h3>Zone A: Urban and Suburban Centers</h3>

            <p>
              Zone A encompasses major urban and suburban areas, serving as the
              administrative and economic hubs of the state. These locations
              are characterized by higher population density, more developed
              infrastructure, and proximity to the state capital.
            </p>

            <p>This zone includes:</p>

            <ul className={styles.contentList}>
              <li>
                <strong>Lafia:</strong> The state capital and central
                administrative hub.
              </li>

              <li>
                <strong>Mararaba Gurku:</strong> A fast-growing suburban area
                near the Federal Capital Territory.
              </li>

              <li>
                <strong>One Man Village:</strong> A densely populated
                residential area.
              </li>

              <li>
                <strong>Nyanya Gwandara:</strong> A suburban community known
                for its proximity to urban centers.
              </li>

              <li>
                <strong>Masaka:</strong> A commercial town with significant
                residential development.
              </li>

              <li>
                <strong>Keffi:</strong> An academic and cultural hub, hosting
                notable institutions and historical sites.
              </li>
            </ul>

            <Link
              href="/registration-fees/zone-a"
              className={styles.viewDetailsButton}
            >
              <span>Click to See Registration Fee</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Zone B */}
          <div className={styles.contentBlock}>
            <h3>Zone B: Local Government Headquarters</h3>

            <p>
              Zone B includes the 13 Local Government Headquarters, excluding
              the towns in Zone A. These locations function as administrative
              centers for their respective local government areas, providing
              governance, commerce, and services for surrounding communities.
            </p>

            <p>The towns in this zone are:</p>

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

            <Link
              href="/registration-fees/zone-b"
              className={styles.viewDetailsButton}
            >
              <span>Click to See Registration Fee</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Zone C */}
          <div className={styles.contentBlock}>
            <h3>Zone C: Rural and Underserved Areas</h3>

            <p>
              Zone C comprises all rural areas in the state that are{" "}
              <strong>not mentioned in Zones A or B</strong>. These locations
              are typically less populated, with limited infrastructure and
              resources.
            </p>

            <p>
              The focus in this zone is on ensuring inclusivity and reaching
              underserved communities. This zone covers remote villages,
              agricultural settlements, and other rural areas across the
              state.
            </p>

            <Link
              href="/registration-fees/zone-c"
              className={styles.viewDetailsButton}
            >
              <span>Click to See Registration Fee</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Closing */}
          <div className={styles.contentBlock}>
            <p>
              We value your partnership and are committed to making business
              registration in Nasarawa State a seamless experience. Let us help
              you focus on growing your venture while we handle the
              complexities of the registration process.
            </p>
          </div>
        </div>
      </AboutTabs>

      <Footer />
    </>
  );
}