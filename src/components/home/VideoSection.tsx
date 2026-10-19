// src/components/home/VideoSection.tsx

"use client";

import Image from "next/image";
import styles from "./VideoSection.module.css";

const videos = [
  {
    id: 1,
    title: "MTII Grievance Redress Mechanism",
    description:
      "Learn about the grievance redress mechanism in place at the Ministry of Trade, Industry and Investment.",
    thumbnail: "/images/videos/grievance.jpg",
    url: "https://youtube.com/shorts/muGsXtOM7hQ?feature=share",
  },
  {
    id: 2,
    title: "Business Registration Guide",
    description:
      "Learn the process of registering your business through the Ministry.",
    thumbnail: "/images/videos/registration.jpg",
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: 3,
    title: "MTII Programmes & Initiatives",
    description:
      "Explore programmes and initiatives supporting businesses and investors.",
    thumbnail: "/images/videos/programmes.jpg",
    url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.subtitle}>Media Centre</span>

          <h2>Featured Videos</h2>

          <p>
            Watch documentaries, investment guides, project highlights, and
            important announcements from the Nasarawa State Ministry of Trade,
            Industry and Investment.
          </p>
        </div>

        <div className={styles.grid}>
          {videos.map((video) => (
            <article key={video.id} className={styles.card}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thumbnail}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={800}
                  height={450}
                />

                <div className={styles.overlay}>
                  <div className={styles.playButton}>
                    ▶
                  </div>
                </div>
              </a>

              <div className={styles.content}>
                <h3>{video.title}</h3>

                <p>{video.description}</p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchButton}
                >
                  Watch Video
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}