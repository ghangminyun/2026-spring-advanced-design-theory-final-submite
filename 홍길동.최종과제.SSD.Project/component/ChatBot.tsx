// src/component/FeaturedChatbot.tsx
"use client";
import styles from "./ChatBot.module.scss";

export default function ChatBot() {
  return (
    <section className={styles.featured}>
      <h2>Guard + RAG 기반 AI 챗봇</h2>
      <p>
        프로젝트 범위 내 질문에만 응답하도록 설계한
        비용 효율적인 AI 챗봇입니다.
      </p>

      <div className={styles.actions}>
        <a
          href="https://chattbot-736c.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
       
      </div>
    </section>
  );
}
