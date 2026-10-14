import Image from "next/image";
import Link from "next/link";
import styles from "./Team.module.css";

type TeamMember = {
  name: string;
  position: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Engr. Abdullahi A. Sule",
    position: "Executive Governor, Nasarawa State",
    image: "/images/team/governor.jpg",
  },
  {
    name: "The Commissioner",
    position: "Commissioner, MTII, Nasarawa State",
    image: "/images/team/commissioner.jpeg",
  },
  {
    name: "The Permanent Secretary",
    position: "Permanent Secretary, MTII, Nasarawa State",
    image: "/images/team/permanent-secretary.jpg",
  },
];

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.teamHeader}>
          <div className={styles.headingArea}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleAccent}></span>
              Great Results Depend on a
              <br />
              <span>Professional Team</span>
              <span className={styles.titleDot}>.</span>
            </h2>

            <p className={styles.sectionDescription}>
              Meet our experienced leaders, directors, and professionals
              driving trade, industry, and investment development in Nasarawa
              State.
            </p>
          </div>

          <div className={styles.vacancyBox}>
            <div className={styles.vacancyImage}>
              <Image
                src="/images/coat.svg"
                alt="Career opportunities"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.vacancyContent}>
              <h3>Register Today!</h3>
              <p>You can Register Your Business with us.</p>
              <Link href="/register" className={styles.vacancyLink}>
                REGISTER YOUR BUSINESS
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <article className={styles.teamCard} key={member.name}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.memberImage}
                />
              </div>

              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}