"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

interface TestimonialItem {
  id: number;
  name: string;
  testimonial: string;
  date: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Local Business Owner",
    testimonial:
      "The support and initiatives of the Nasarawa State Ministry of Trade, Industry and Investment have created greater opportunities for businesses like ours. We are encouraged by the government's commitment to promoting enterprise growth and a more business-friendly environment.",
    date: "March 03, 2024",
  },
  {
    id: 2,
    name: "Manufacturing Entrepreneur",
    testimonial:
      "We appreciate the Ministry's efforts to promote industrial development and encourage investment in Nasarawa State. These initiatives give entrepreneurs and investors greater confidence in the future of the state's economy.",
    date: "September 22, 2024",
  },
  {
    id: 3,
    name: "Small Business Entrepreneur",
    testimonial:
      "As a growing entrepreneur, I am encouraged by the focus on supporting small and medium-sized enterprises. Creating opportunities for businesses to grow will strengthen communities, create jobs, and contribute to sustainable economic development.",
    date: "January 15, 2025",
  },
  {
    id: 4,
    name: "Investment Partner",
    testimonial:
      "Nasarawa State has significant economic potential, and the Ministry's commitment to attracting responsible investment is a welcome development. Continued collaboration between government and investors can unlock new opportunities across key sectors.",
    date: "February 10, 2025",
  },
  {
    id: 5,
    name: "Youth Entrepreneur",
    testimonial:
      "Young people need opportunities to transform their ideas into successful businesses. The Ministry's focus on trade, industry, investment, and enterprise development provides hope for a stronger future where more young people can participate in the economy.",
    date: "April 18, 2025",
  },
  {
    id: 6,
    name: "Business Community Representative",
    testimonial:
      "We welcome efforts aimed at improving the business environment and promoting stronger partnerships between government and the private sector. A thriving trade and investment ecosystem will help businesses expand and create more opportunities for the people of Nasarawa State.",
    date: "June 07, 2025",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderTestimonials = [...testimonials, ...testimonials];

  const scrollSlider = (direction: "next" | "prev") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector<HTMLElement>(
      `.${styles.testimonialCard}`
    );

    if (!firstCard) return;

    const gap = 38;
    const scrollAmount = firstCard.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const autoSlide = setInterval(() => {
      const firstCard = slider.querySelector<HTMLElement>(
        `.${styles.testimonialCard}`
      );

      if (!firstCard) return;

      const gap = 38;
      const scrollAmount = firstCard.offsetWidth + gap;

      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      const halfwayPoint = slider.scrollWidth / 2;

      if (slider.scrollLeft + scrollAmount >= halfwayPoint) {
        setTimeout(() => {
          slider.style.scrollBehavior = "auto";
          slider.scrollLeft = 0;
          slider.style.scrollBehavior = "smooth";
        }, 700);
      }
    }, 4500);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.sectionHeader}>
        <span>TESTIMONIALS</span>

        <h2>What People Say About Us</h2>

        <p>
          Hear from entrepreneurs, investors, business owners, and members of
          the Nasarawa State business community.
        </p>
      </div>

      <div className={styles.testimonialContainer}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={() => scrollSlider("prev")}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 4 7 12l8 8" />
          </svg>
        </button>

        <div className={styles.sliderWrapper}>
          <div className={styles.slider} ref={sliderRef}>
            {sliderTestimonials.map((item, index) => (
              <article
                className={styles.testimonialCard}
                key={`${item.id}-${index}`}
              >
                <div className={styles.quoteIcon}>
                  <span />
                  <span />
                </div>

                <h3>{item.name}</h3>

                <p className={styles.testimonialText}>
                  &ldquo;{item.testimonial}&rdquo;
                </p>

                <time>{item.date}</time>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={() => scrollSlider("next")}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 4 8 8-8 8" />
          </svg>
        </button>
      </div>
    </section>
  );
}