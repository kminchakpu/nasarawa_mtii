import Image from "next/image";
import styles from "./MTIILeadTeam.module.css";

export default function MTIILeadTeam() {
  const teamMembers = [
    {
      image: "/images/team/01.jpg",
      alt: "MTII Leadership Team Member",
      title: "Honourable Commissioner, MTII",
      text: "The Ministry of Trade, Industry, and Investment in Nasarawa State is led by the Honourable Commissioner, who serves as the political head of the ministry, providing strategic direction and overseeing the implementation of policies and programs. The Honourable Commissioner is responsible for ensuring that the ministry's objectives align with the overall vision of the state government, particularly in promoting trade, industrial development, and attracting investment to the state. Under the guidance of the Honourable Commissioner, the ministry plays a critical role in formulating and executing initiatives aimed at fostering economic growth and job creation in Nasarawa State.",
      reverse: true,
    },
    {
      image: "/images/team/02.jpg",
      alt: "MTII Leadership Team Member",
      title: "Permanent Secretary, MTII",
      text: "Supporting the Honourable Commissioner is the Permanent Secretary, a career civil servant who acts as the administrative head of the Ministry. The Permanent Secretary is responsible for the day-to-day operations of the ministry, ensuring that activities are carried out efficiently and in compliance with government regulations. They manage the ministry’s workforce, oversee the execution of projects, and ensure that resources are properly allocated to meet the ministry’s goals. Together, the Honourable Commissioner and the Permanent Secretary work in close collaboration, ensuring that the Ministry of Trade, Industry, and Investment effectively delivers on its mandate to enhance trade, industrialization, and investment in the state.",
      reverse: false,
    },
    {
      image: "/images/team/dir-investment.jpg",
      alt: "MTII Leadership Team Member",
      title: "Director, Industry and Investment, MTII",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
      reverse: true,
    },
  ];

  return (
    <section className={styles.leadershipTeam}>
      {teamMembers.map((member, index) => (
        <section
          key={member.image}
          id={index === 0 ? "scroll" : undefined}
          className={styles.teamSection}
        >
          <div className={styles.container}>
            <div
              className={`${styles.row} ${
                member.reverse ? styles.reverse : ""
              }`}
            >
              {/* Image */}
              <div className={styles.column}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={600}
                    height={600}
                    className={styles.image}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={styles.column}>
                <div className={styles.content}>
                  <h2>{member.title}</h2>
                  <p>{member.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}