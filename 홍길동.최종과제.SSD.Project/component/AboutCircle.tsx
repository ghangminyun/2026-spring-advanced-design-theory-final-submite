"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/component/AboutCircle.module.css";
import Header from "./Header";

const AboutCircle = () => {
  const photoRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const mottoRef = useRef<HTMLHeadingElement | null>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: "power3.out" });

      tl.from(profileRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
      });
      // 사진
      tl.from(
        photoRef.current,
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
        },
        "-=0.6",
      );

      // 텍스트 한 줄씩
      tl.from(
        textRefs.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,

          stagger: 0.35,
        },
        "-=0.4",
      );
      // 2️⃣ 좌측 박스 나중
      tl.from(
        mottoRef.current,
        {
          opacity: 0.2,
          y: 80,
          duration: 1,
        },
        "-=0.3", // 살짝 겹치게
      );
      tl.to(
        `.${styles.mottotext}, .${styles.sub}`,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "+=0.2",
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          {/* 우측 하단 */}
          <div className={styles.profile} ref={profileRef}>
            <div className={styles.profileInner}>
              {/* 텍스트 (사진 왼쪽) */}
              <div className={styles.text}>
                {[
                  "Social welfare → Frontend Developer",
                  "사람을 이해하는 경험에서 출발하여",
                  "사용자의 흐름을 설계합니다",
                ].map((line, idx) => (
                  <p
                    key={idx}
                    ref={(el) => {
                      if (el) textRefs.current[idx] = el;
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* 사진 */}
              <div className={styles.photo} ref={photoRef}>
                <img src="/images/ljs.jpg" alt="profile" />
              </div>
            </div>
          </div>
          {/* 좌측 상단 */}
          <div className={styles.left}>
            <div className={styles.overlay}>
              <h1 className={styles.motto} ref={mottoRef}>
                <span className={styles.mottotext}>
                  사람의 마음을 이해하는 일에서
                  <br />
                  모든 기획은 시작된다고 믿습니다.
                  <br />그 경험을 화면 위의 흐름으로 옮깁니다.
                </span>
              </h1>
              <p className={styles.sub}>Frontend Developer · Jinseon Lee</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCircle;
