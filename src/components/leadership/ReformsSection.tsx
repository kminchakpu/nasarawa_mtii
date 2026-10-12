import Image from "next/image";
import styles from "./ReformsSection.module.css";

export default function ReformsSection() {
  const images = [
    {
      src: "/images/reforms/01.jpg",
      alt: "Nasarawa State business reform initiative",
    },
    {
      src: "/images/reforms/02.jpg",
      alt: "Nasarawa State business reform initiative",
    },
    {
      src: "/images/reforms/03.jpg",
      alt: "Nasarawa State business reform initiative",
    },
    {
      src: "/images/reforms/04.jpg",
      alt: "Nasarawa State business reform initiative",
    },
  ];

  return (
    <section className={styles.reformsSection}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Images */}
          <div className={styles.imageGrid}>
            {images.map((image, index) => (
              <div className={styles.imageWrapper} key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          {/* Reform Content */}
          <div className={styles.content}>
            <p>
              Under the leadership of Governor A.A Sule, the Ministry has been able to implement policies that align with the Governor’s broader goals for industrialization and economic diversification. Governor Sule’s commitment to creating a business-friendly environment, fostering public-private partnerships, and attracting both local and foreign investment has enabled the Ministry to facilitate significant progress in the development of Nasarawa State&apos;s industries and infrastructure.
            </p>

            <p>
              Governor Sule&apos;s leadership style, which emphasizes innovation, accountability, and inclusivity, has allowed the Ministry to mobilize resources, streamline processes, and execute projects efficiently. Through Governor Sule&apos;s guidance, the Ministry has been able to enhance trade relations, promote small and medium enterprises, and ensure sustainable economic growth.
            </p>

            <p>
              The Business Enabling Reforms agenda therefore represents a
              continued commitment to improving the ease of doing business,
              attracting new investments, supporting existing enterprises, and
              positioning Nasarawa State as a competitive destination for
              trade, industry, and investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}