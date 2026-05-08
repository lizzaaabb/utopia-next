'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/AboutGeorgia.css';
import { useLang } from '../components/LanguageContext';

const images = ['/geo2.jpg', '/geo4.jpg', '/geo5.jpg', '/geo6.jpg', '/geo7.jpg', '/geo8.jpg'];

const content = {
  eng: {
    location: { title: "Location",    text: "At the crossroads of Eastern Europe and Western Asia — bordered by Turkey, Russia, Armenia, and Azerbaijan" },
    capital:  { title: "Capital",     text: "Tbilisi" },
    language: { title: "Language",    text: "Georgian (English and Russian are widely spoken)" },
    religion: { title: "Religion",    text: "Predominantly Orthodox Christian, known for religious and cultural tolerance" },
    currency: { title: "Currency",    text: "Georgian Lari (GEL)" },
    visa:     { title: "Visa Policy", text: "Gulf citizens can enter visa-free and stay up to one full year" },
  },
  ara: {
    location: { title: "الموقع",   text: "بين أوروبا الشرقية وغرب آسيا، تحدّها تركيا وروسيا وأذربيجان وأرمينيا" },
    capital:  { title: "العاصمة",  text: "تبليسي" },
    language: { title: "اللغة",    text: "الجورجية، لكن الإنجليزية والروسية منتشرتان" },
    religion: { title: "الديانة",  text: "غالبية مسيحية، وتُعرف بتسامحها الثقافي والديني" },
    currency: { title: "العملة",   text: "لاري جورجي (GEL)" },
    visa:     { title: "التأشيرة", text: "مواطني الخليج يمكنهم الدخول بدون تأشيرة والإقامة لمدة عام كامل" },
  },
  geo: {
    location: { title: "მდებარეობა",  text: "აღმოსავლეთ ევროპასა და დასავლეთ აზიას შორის – ესაზღვრება თურქეთს, რუსეთს, სომხეთს და აზერბაიჯანს" },
    capital:  { title: "დედაქალაქი",  text: "თბილისი" },
    language: { title: "ენა",         text: "ქართული (ინგლისური და რუსული ფართოდ გამოიყენება)" },
    religion: { title: "რელიგია",     text: "უმრავლესობა მართლმადიდებელი ქრისტიანი – ქვეყანა ცნობილია რელიგიური და კულტურული ტოლერანტობით" },
    currency: { title: "ვალუტა",      text: "ლარი (GEL)" },
    visa:     { title: "ვიზა",        text: "სპარსეთის ყურის ქვეყნების მოქალაქეებს არ სჭირდებათ ვიზა და შეუძლიათ ერთწლიანი ყოფნა" },
  },
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

function AnimatedCard({ card, image, delay }) {
  const ref = useRef(null);
  useFadeIn(ref, delay);
  return (
    <div
      ref={ref}
      className="about-georgia-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="about-georgia-title">{card.title}</h2>
      <p className="about-georgia-text">{card.text}</p>
    </div>
  );
}

export default function AboutGeorgia() {
  const { lang } = useLang();
  const c = content[lang] ?? content.ara;
  const cards = Object.values(c);

  return (
    <div className="about-georgia-body" id="georgia-section">
      <div className="about-georgia-cards-container">
        {cards.map((card, i) => (
          <AnimatedCard key={i} card={card} image={images[i]} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}