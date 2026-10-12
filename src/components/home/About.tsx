// src/components/home/About.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>

        {/* ================================
            Image
        ================================= */}

        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/farmer.jpg"
              alt="Farmer Picture"
              fill
              priority
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>


        {/* ================================
            Content
        ================================= */}

        <div className={styles.content}>

          {/* Section Heading */}

          <div className={styles.headingWrapper}>
            <span className={styles.headingLine}></span>

            <h2>
              Briefly <span>About Us.</span>
            </h2>
          </div>


          {/* Intro */}

          <p className={styles.intro}>
            The Nasarawa State Ministry of Trade, Industry and Investment
            is committed to creating an enabling environment for trade,
            industrial development, entrepreneurship, and investment
            across the state.
          </p>


          {/* Description */}

          <p className={styles.description}>
            We facilitate business development, promote investment
            opportunities, support entrepreneurs, and implement policies
            that strengthen the state&apos;s economy. Our goal is to create
            opportunities for businesses and investors while contributing
            to sustainable economic growth in Nasarawa State.
          </p>


          <p className={styles.description}>
            Through strategic partnerships, business-enabling reforms,
            investment promotion, and support for industries and
            enterprises, we work to position Nasarawa State as an
            attractive destination for business and investment.
          </p>


          {/* ================================
              Statistics
          ================================= */}

          <div className={styles.stats}>

            {/* Stat 1 */}

            <div className={styles.stat}>
              <span className={styles.statDot}></span>

              <strong>6+</strong>

              <p>
                Key
                <br />
                Departments
              </p>
            </div>


            {/* Stat 2 */}

            <div className={styles.stat}>
              <span className={styles.statDot}></span>

              <strong>13+</strong>

              <p>
                Local
                <br />
                Governments
              </p>
            </div>


            {/* Stat 3 */}

            <div className={styles.stat}>
              <span className={styles.statDot}></span>

              <strong>1</strong>

              <p>
                State
                <br />
                Investment Hub
              </p>
            </div>

          </div>


          {/* CTA */}

          <Link href="/about" className={styles.button}>
            Learn More
            <span>→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}