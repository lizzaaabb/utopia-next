'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/GeorgiaHeader.css';
import { useLang } from '../components/LanguageContext';

const content = {
  eng: "About Georgia",
  geo: "საქართველოს შესახებ",
  ara: "نبذة عن جورجيا"
};

function useFadeIn(ref, delay = 0) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, delay]);
}

export default function GeorgiaHeader() {
  const { lang } = useLang();
  const titleRef = useRef(null);
  useFadeIn(titleRef, 0);

  return (
    <div className="georgia-header-body">
      <h2 className="georgia-header-title" ref={titleRef}>
        {content[lang] ?? content.ara}
      </h2>
    </div>
  );
}