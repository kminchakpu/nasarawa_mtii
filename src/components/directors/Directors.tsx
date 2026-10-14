import Image from "next/image";
import styles from "./Directors.module.css";

type Director = {
  id: string;
  name: string;
  title: string;
  image: string;
};

const directors: Director[] = [
  {
    id: "industry-investment",
    name: "Catherine John Bako (Mrs.)",
    title: "Director, Industry & Investment Department",
    image: "/images/team/dir-investment.jpg",
  },
  {
    id: "human-resource",
    name: "Aisha Ahmad Almakura",
    title: "Director,Human Resource Department",
    image: "/images/team/dir-human-resource.jpg",
  },
  {
    id: "cooperative",
    name: "Bilhatu Yusuf Alizi (Mrs.)",
    title: "Director, Cooperative & Thrift Department",
    image: "/images/team/dir-cooperative.jpg",
  },
  {
    id: "finance",
    name: "Director, Finance",
    title: "Finance & Accounts Department",
    image: "/images/directors/director-finance.jpg",
  },
    {
    id: "planning",
    name: "Director, Planning",
    title: "Planning, Research & Statistics",
    image: "/images/team/dir-planning.jpg",
  },
  {
    id: "trade",
    name: "Director, Trade",
    title: "Trade Department",
    image: "/images/team/dir-trade.jpg",
  },
];

export default function Directors() {
  return (
    <section className={styles.directorsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>OUR TEAM</span>

          <h1>Meet the Directors</h1>

          <p>
           At the Ministry of Trade, Industry, and Investment (MTII), we are deeply committed to fostering the growth and success of both individual businesses and organizational development. Our leadership team, consisting of the Honourable Commissioner, the Permanent Secretary, and six Directors, plays a pivotal role in guiding the Ministry in fulfilling its oversight and regulatory functions.
          </p>

        <br />
          <p>
            Each Director is entrusted with specific duties as outlined by the Civil Service regulations and the Ministry&apos;s operational framework. The Directors are entrusted with the autonomy to perform their roles independently, ensuring the effective implementation of the Ministry’s objectives. In line with this commitment to independence, the Commissioner and the Permanent Secretary have established Director Independence Guidelines to ensure that each Director can carry out their responsibilities without any conflicts of interest that may affect their judgment or decision-making processes.
          </p>

        <br />
          <p>
            The current leadership of the Ministry of Trade, Industry, and Investment is as follows:
          </p>
        </div>

        {/* Directors Grid */}
        <div className={styles.directorsGrid}>
          {directors.map((director) => (
            <article
              key={director.id}
              className={styles.directorCard}
            >
              {/* Director Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  sizes="(max-width: 640px) 100vw,
                        (max-width: 1000px) 50vw,
                        33vw"
                  className={styles.directorImage}
                />
              </div>

              {/* Director Information */}
              <div className={styles.directorInfo}>
                <h2>{director.name}</h2>
                <p>{director.title}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}