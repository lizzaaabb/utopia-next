'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/Georgia.css';
import { useLang } from '../components/LanguageContext';

const content = {
  eng: {
    title: "Georgia – Where Smart Investment Meets Real Enjoyment",
    description: "In recent years, Georgia has become one of the top destinations for those seeking natural beauty, peace of mind, and profitable investment opportunities — all in one place. A small country in size, yet rich in possibilities for anyone looking for a refined lifestyle or secure investment.",
    discoverMore: "Discover More"
  },
  geo: {
    title: "საქართველო – იქ, სადაც ინვესტიცია სარგებლიანია და დასვენება ნამდვილი სიამოვნებაა",
    description: "ბოლო წლებში საქართველო იქცა ერთ-ერთ ყველაზე მოთხოვნად მიმართულებად მათთვის, ვინც ეძებს ბუნების სილამაზეს, სიმშვიდეს და მომგებიან ინვესტიციას ერთდროულად. პატარა ქვეყანა გეოგრაფიულად, მაგრამ დიდი შესაძლებლობებით მათთვის, ვინც მოისურვებს ახალი ცხოვრების სტილს ან სანდო ინვესტიციას.",
    discoverMore: "გაიგეთ მეტი"
  },
  ara: {
    title: "جورجيا… حيث يجتمع الاستثمار الذكي والمتعة الحقيقية",
    description: "في السنوات الأخيرة، أصبحت جورجيا من أبرز الوجهات التي تجمع بين الطبيعة الساحرة، الهدوء، والفرص الاستثمارية الذهبية. بلد صغير بحجمه، لكنه كبير بجماله، سهل الوصول، سهل التملك، وواسع الآفاق أمام كل من يبحث عن نمط حياة راقٍ أو استثمار مضمون.",
    discoverMore: "اكتشف المزيد"
  }
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

export default function Georgia() {
  const { lang } = useLang();
  const c = content[lang] ?? content.ara;
  const isRtl = lang === 'ara';

  const titleRef = useRef(null);
  const descRef  = useRef(null);
  const btnRef   = useRef(null);

  useFadeIn(titleRef, 0);
  useFadeIn(descRef, 150);
  useFadeIn(btnRef, 300);

  const scrollDown = () => {
    window.scrollBy({ top: 700, behavior: 'smooth' });
  };

  return (
    <div
      className="georgia-body"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="georgia-section"
      style={{ backgroundImage: "url('/tbilisiback3.jpeg')" }}
    >
      <div className="georgia-container">
        <div className="georgia-header">
          <h2 className="georgia-title" ref={titleRef}>{c.title}</h2>
        </div>
        <div className="georgia-content">
          <p className="georgia-description" ref={descRef}>{c.description}</p>
        </div>
        <div className="georgia-button-container" ref={btnRef}>
          <button className="georgia-discover-button" onClick={scrollDown}>
            {c.discoverMore}
          </button>
          <div className="georgia-icon">
            <Image src="/chevron.png" alt="Discover More" width={50} height={50} className="georgia-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}