"use client";

import styles from "./ContactCircle.module.css";
import Header from "./Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactCircle = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!avatarRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      avatarRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
    )
      .to(avatarRef.current, {
        y: -6,
        duration: 1.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      })
      .to(avatarRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power3.in",
        delay: 0.2,
      });
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      x += (e.clientX - x) * 0.08;
      y += (e.clientY - y) * 0.08;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Header />
      <section className={styles.contact}>
        <div className={styles.introAvatar} ref={avatarRef}>
          <img src="/images/ljs01.jpg" alt="Jinseon character" />
        </div>

        {/* background text */}
        <div className={styles.marquee}>
          <span>LET&apos;S WORK TOGETHER ✦</span>
          <span>LET&apos;S WORK TOGETHER ✦</span>
          <span>LET&apos;S WORK TOGETHER ✦</span>
          <span>LET&apos;S WORK TOGETHER ✦</span>
        </div>
        <div ref={cursorRef} className={styles.cursor} />

        <div className={styles.inner}>
         
          <p className={styles.message}>
            사람을 이해해 온 복지사의 시선과 개발자로서의 구조적 사고를
            바탕으로, 사용자의 경험을 의도 있게 설계하고 구현하며, 함께 더 나은
            방향을 만들어가고 싶습니다.
          </p>
          <p className={styles.subMessage}>
            Grounded in empathy and structured thinking, I build intentional
            user experiences.
          </p>
         
          {/* buttons */}
          <div className={styles.links}>
            <a
              href="mailto:leemet97@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Jinseon,%0D%0A%0D%0A"
              className={styles.btn}
            >
              Email
            </a>

            <a
              href="https://github.com/leemet97"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              GitHub
            </a>

            <a
              href="https://blog.naver.com/leemet977"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCircle;
