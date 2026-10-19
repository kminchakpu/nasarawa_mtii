"use client";

import Image from "next/image";
import styles from "./CompletedProjects.module.css";

const completedProjects = [
  {
    id: 1,
    title: "Construction of Awe Modern Market",
    description:
      "Construction of a modern market facility in Awe to support commercial activities, improve the trading environment, and create better opportunities for local businesses.",
    image: "/images/projects/awe-modern-market.jpg",
    alt: "Awe Modern Market project",
  },
  {
    id: 2,
    title: "Construction of Toto Modern Market",
    description:
      "Development of a modern market facility in Toto to promote trade, improve market infrastructure, and support the growth of local commerce.",
    image: "/images/projects/toto-modern-market.jpg",
    alt: "Toto Modern Market project",
  },
  {
    id: 3,
    title: "Construction of Wamba Modern Market",
    description:
      "Construction of a modern trading facility in Wamba designed to provide an improved environment for traders, customers, and commercial activities.",
    image: "/images/projects/wamba-modern-market.jpg",
    alt: "Wamba Modern Market project",
  },
  {
    id: 4,
    title: "Construction of Nasarawa Modern Market",
    description:
      "Development of modern market infrastructure in Nasarawa to strengthen commercial activities and provide improved facilities for the trading community.",
    image: "/images/projects/nasarawa-modern-market.jpg",
    alt: "Nasarawa Modern Market project",
  },
  {
    id: 5,
    title: "Construction of Masaka Modern Market",
    description:
      "Construction of a modern market facility in Masaka to enhance the local business environment and support trade and economic development.",
    image: "/images/projects/masaka-modern-market.jpg",
    alt: "Masaka Modern Market project",
  },
  {
    id: 6,
    title: "Construction of Doma Modern Market",
    description:
      "Development of modern market infrastructure in Doma to improve trading conditions and support commercial activities within the area.",
    image: "/images/projects/doma-modern-market.jpg",
    alt: "Doma Modern Market project",
  },
  {
    id: 7,
    title:
      "Remodelling, Glazing, Curtain Wall and Completion of Shops at Lafia Square",
    description:
      "Remodelling and completion of shops at Lafia Square, including glazing and curtain wall works, to improve the facility and its commercial appeal.",
    image: "/images/projects/ Lafia-square.jpg".replace(" ", ""),
    alt: "Lafia Square shops remodelling project",
  },
  {
    id: 8,
    title: "Upgrading and Maintenance of Awe Abattoir",
    description:
      "Upgrading and maintenance works at Awe Abattoir to improve the facility and support its continued use for commercial meat processing activities.",
    image: "/images/projects/awe-abattoir.jpg",
    alt: "Awe Abattoir upgrading and maintenance project",
  },
  {
    id: 9,
    title: "Construction of Nasarawa Eggon Modern Market",
    description:
      "Construction of a modern market in Nasarawa Eggon to improve trading facilities and strengthen local commercial opportunities.",
    image: "/images/projects/nasarawa-eggon-modern-market.jpg",
    alt: "Nasarawa Eggon Modern Market project",
  },
  {
    id: 10,
    title: "Construction of Akwanga Neighbourhood Market",
    description:
      "Development of a neighbourhood market in Akwanga to improve access to trading facilities and support small businesses within the community.",
    image: "/images/projects/akwanga-neighbourhood-market.jpg",
    alt: "Akwanga Neighbourhood Market project",
  },
];

export default function CompletedProjects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>PROJECT PORTFOLIO</span>
          <h2>Completed Projects</h2>
          <p>
            Explore completed market infrastructure and commercial development
            projects delivered across Nasarawa State to support trade, improve
            business facilities, and strengthen local economic activity.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {completedProjects.map((project) => (
            <article className={styles.projectCard} key={project.id}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className={styles.projectImage}
                />
                <span className={styles.statusBadge}>Completed</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.projectNumber}>
                  PROJECT {String(project.id).padStart(2, "0")}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}