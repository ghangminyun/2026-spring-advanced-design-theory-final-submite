"use client";

import styles from "./ProjectsCircle.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

type Project = {
  title: string;
  desc: string;
  tech: string;
  link: string;
  className: string;
  external: boolean;
};

const projects: Project[] = [
  {
    title: "Today’s Mood",
    desc: "감정 기반 dash-board",
    tech: "React · TypeScript · Custom Hooks · Weather API",
    link: "https://todays-mood-z6kp.vercel.app",
    className: "c1",
    external: true,
  },
  {
    title: "VYOR",
    desc: "기업 site clone",
    tech: "HTML · CSS · JavaScript · Scroll Interaction",
    link: "https://line-vyor.vercel.app",
    className: "c2",
    external: true,
  },
  {
    title: "방명록",
    desc: "CRUD 프로젝트",
    tech: "Node.js · Express · MySQL · REST API",
    link: "https://guestbook-1032088294847.us-central1.run.app",
    className: "c3",
    external: true,
  },
  {
    title: "chart Dashboard",
    desc: "데이터 시각화 대시보드 구현",
    tech: "React · Chart.js",
    link: "https://chart-rouge-ten.vercel.app",
    className: "c4",
    external: true,
  },
  {
    title: "CLONE",
    desc: "Publishing Lab",
    tech: "HTML · CSS · UI Layout · Clone Coding",
    link: "/projects/clone",
    className: "c5",
    external: false,
  },
  {
    title: "Silver Road   (시니어 여행)",
    desc: "Self coding",
    tech: "HTML · CSS · JavaScript · Responsive Layout",
    link: "https://leemet97.github.io/silverroad/",
    className: "c6",
    external: true,
  },
  {
    title: "Guard AI Chatbot",
    desc: "프로젝트 전용 AI 챗봇",
    tech: "Next.js · Guard · RAG",
    link: "https://chattbot-736c.vercel.app",
    className: "c7",
    external: true,
  },
];

export default function ProjectsCircle() {
  const router = useRouter();
  const lightRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const wrapRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const ctx = gsap.context(() => {
      const light = lightRef.current;
      const center = centerRef.current;
      const circles = circlesRef.current;

      if (!light || !center || !circles.length) return;

      const tl = gsap.timeline();

      tl.set(light, { opacity: 1 })

        .to(light, { opacity: 1, duration: 0.6 })

        .to(light, { opacity: 0.15, duration: 0.06 })
        .to(light, { opacity: 1, duration: 0.08 })

        .to(light, { opacity: 0.05, duration: 0.08 })
        .to(light, { opacity: 1, duration: 0.12 })

        .to(light, {
          opacity: 0,
          duration: 2.4,
          ease: "power3.inOut",
        })

        .fromTo(
          center,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.6",
        )

        // 프로젝트 원
        .fromTo(
          circles,
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.18,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.9",
        );
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!lightRef.current) return;

      gsap.to(lightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleClick = (el: HTMLElement, link: string, external: boolean) => {
    const isFlipped = el.classList.contains(styles.flipped);

    if (!isFlipped) {
      el.classList.add(styles.flipped);
      return;
    }

    if (external) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  return (
    <>
      <section ref={wrapRef} className={styles.wrap}>
        <div ref={bgRef} className={styles.galaxybg}>
          <div ref={lightRef} className={styles.mouseLight} />
        </div>

        {/* 중앙 원 */}
        <div ref={centerRef} className={styles.centerCircle}>
          <h2>Projects</h2>
          <p>
            감성을 기술로 표현한
            <br />
            프론트엔드 작업 모음
          </p>
        </div>

        {/* 프로젝트 원 */}
        {projects.map((item, idx) => (
          <div
            key={item.title}
            ref={(el) => {
              if (el) circlesRef.current[idx] = el;
            }}
            className={`${styles.smallCircle} ${styles[item.className]}`}
          >
            <div className={styles.floatLayer}>
              <div
                className={styles.smallCircleInner}
                onClick={(e) =>
                  handleClick(e.currentTarget, item.link, item.external)
                }
              >
                <div className={styles.circle3D}>
                  <div className={styles.circleFront}>
                    <strong>{item.title}</strong>
                  </div>

                  <div className={styles.circleBack}>
                    <h3>{item.desc}</h3>
                    <p>{item.tech}</p>
                    <span>Click to Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
