
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import Footer from "@/components/layout/Footer";
import styles from "./ProjectsPage.module.css";
import CompletedProjects from "@/components/projects/CompletedProjects";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.pageTitle}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>MTII INITIATIVES</span>

            <h1>Projects and Development</h1>

            <p>
  Explore the Ministry’s proposed, ongoing, and completed projects aimed at
  promoting trade, strengthening industrial development, attracting
  investment, and driving sustainable economic growth across Nasarawa State.
  These projects are coordinated and supervised by the Department of
  Planning, Research and Statistics, which oversees project planning,
  monitoring, evaluation, and performance assessment to ensure alignment
  with the Ministry’s strategic objectives and the state government’s
  development priorities. Through effective planning, data-driven research,
  and systematic monitoring, the Department supports transparency,
  accountability, and the successful implementation of initiatives that
  create business opportunities, improve the investment climate, and
  contribute to the socio-economic development of Nasarawa State.
</p>
          </div>
        </section>

        <section className={styles.projectsWrapper}>
          <div className={styles.container}>
            <ProjectsTabs>
              {{
                proposed: (
                  <section>
                    <h1>Proposed Projects</h1>
                    <p>
                      Explore proposed projects intended to strengthen
                      industrial development, attract investment, and
                      improve the business environment in Nasarawa State.
                    </p>
                  </section>
                ),

                ongoing: (
                  <section>
                    <h1>Ongoing Projects</h1>
                    <p>
                      View projects currently being implemented by the
                      Ministry of Trade, Industry and Investment.
                    </p>
                  </section>
                ),

                completed: (
                  <section>
                   <CompletedProjects />
                  </section>
                ),
              }}
            </ProjectsTabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
