"use client";

import { useState } from "react";
import styles from "./AboutContent.module.css";

type CoreValue = {
  number: string;
  title: string;
  description: string;
};

const coreValues: CoreValue[] = [
  {
    number: "01",
    title:
      "High standards of personal integrity and professional excellence",
    description:
      "We uphold the highest ethical standards, ensuring that all actions are guided by integrity and a commitment to excellence in everything we do.",
  },
  {
    number: "02",
    title: "Mutual respect and teamwork",
    description:
      "We foster a culture of respect and collaboration, valuing the contributions of all individuals and working together to achieve common goals.",
  },
  {
    number: "03",
    title: "Creativity and individual initiative",
    description:
      "We encourage innovation and the proactive pursuit of new ideas, empowering individuals to take initiative and contribute to continuous improvement.",
  },
  {
    number: "04",
    title: "Transparency",
    description:
      "We are committed to openness and honesty, ensuring that our processes, decisions, and actions are clear and accessible to all stakeholders.",
  },
];

export default function AboutContent() {
  const [openValue, setOpenValue] = useState<string | null>(
    null
  );

  const toggleValue = (number: string) => {
    setOpenValue((current) =>
      current === number ? null : number
    );
  };

  return (
    <div className={styles.aboutContent}>
      {/* ABOUT MTII */}
      <section
        id="about-mtii"
        className={styles.contentBlock}
      >
        <span className={styles.contentLabel}>01</span>

        <h2>About MTII</h2>

        <p>
          The Ministry of Trade, Industry & Investment is dedicated to fostering economic growth and creating opportunities for all communities within Nasarawa State. With its six specialized bureaus (departments), the Ministry works to enhance the state’s economic competitiveness, strengthen the domestic industry, and promote the creation of quality jobs across all regions of the state. Serving as the primary advocate for business within the state and at the federal level, the Ministry plays a vital role in supporting the needs of Nasarawa&apos;s citizens on a daily basis. Additionally, the Ministry drives innovation and fosters the development of key sectors, including agriculture, solid minerals, and tourism, which are central to Nasarawa State’s unique competitive advantages.
        </p>

      </section>

      {/* MISSION */}
      <section
        id="mission"
        className={styles.contentBlock}
      >
        <span className={styles.contentLabel}>02</span>

        <h2>Our Mission</h2>

        <p>
          The Ministry of Trade, Industry, and Investment (MTII) is dedicated to fostering a dynamic and supportive ecosystem that drives sustainable economic growth and creates opportunities for all stakeholders, including investors, entrepreneurs, start-ups, and businesses across Nasarawa State. Our mission is to develop and maintain an enabling environment where innovation, enterprise, and investment can thrive.
        </p>

        <p>
          By implementing policies that reduce barriers to
          business, promoting trade and industrial development,
          and providing strategic support to emerging and
          established businesses, we aim to empower our
          clients to succeed and contribute to the broader
          economic development of the state.
        </p>

        <p>
          Through collaboration, transparency, and continuous
          improvement, MTII is committed to ensuring that
          every individual and organization has the resources,
          guidance, and opportunities needed to prosper and
          make a meaningful impact.
        </p>

        {/* VISION */}
        <div className={styles.subSection}>
          <h2>Our Vision</h2>

          <p>
            The Ministry of Trade, Industry, and Investment (MTII) envisions a thriving and resilient economy driven by both local and international trade. We are committed to creating a robust and sustainable economic environment that fosters growth, innovation, and prosperity for businesses and individuals alike. By facilitating seamless trade relations, both within and beyond the borders of Nasarawa State, we aim to connect local industries with global markets, enabling them to compete, innovate, and succeed on an international scale.
          </p>

          <p>
            By facilitating seamless trade relations, both
            within and beyond the borders of Nasarawa State,
            we aim to connect local industries with global
            markets, enabling them to compete, innovate, and
            succeed on an international scale.
          </p>

          <p>
            Our vision is to position Nasarawa State as a hub
            for trade, industry, and investment, where
            opportunities for economic advancement are
            accessible to all, driving prosperity, job
            creation, and long-term development.Through strategic partnerships, policy advocacy, and resource empowerment, MTII strives to be the catalyst for transformative growth and a prosperous future for all.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className={styles.valuesSection}>
          <span className={styles.contentLabel}>03</span>

          <h2>Our Core Values</h2>

          <p>
            The principles that guide our decisions,
            relationships, and commitment to the people of
            Nasarawa State.
          </p>

          <div className={styles.valuesAccordion}>
            {coreValues.map((value) => {
              const isOpen = openValue === value.number;

              return (
                <div
                  key={value.number}
                  className={`${styles.accordionItem} ${
                    isOpen
                      ? styles.accordionOpen
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.accordionButton}
                    onClick={() =>
                      toggleValue(value.number)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`core-value-${value.number}`}
                  >
                    <div
                      className={styles.accordionTitle}
                    >
                      <span
                        className={styles.valueNumber}
                      >
                        {value.number}
                      </span>

                      <span
                        className={styles.valueTitle}
                      >
                        {value.title}
                      </span>
                    </div>

                    <span
                      className={styles.accordionIcon}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`core-value-${value.number}`}
                      className={styles.accordionBody}
                    >
                      <p>{value.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}