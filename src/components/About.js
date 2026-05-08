'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/About.css';
import { content, languageOptions, phoneNumbers } from '../components/aboutContent';
import { useLang } from '../components/LanguageContext';

const tourismImages = ['/bag1.jpg', '/bag2.jpg', '/bag3.jpg', '/bag4.jpg', '/bag5.jpg'];
const realEstateImages = ['/re1.jpg', '/re2.jpg', '/re3.jpg', '/re4.jpg', '/re5.jpg'];
const chooseIcons = ['/icn1.png', '/icn2.png', '/icn3.png', '/icn4.png', '/icn5.png'];

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

function FadeIn({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null);
  useFadeIn(ref, delay);
  return <div ref={ref} className={className} style={style}>{children}</div>;
}

export default function About() {

  const [phoneVisible, setPhoneVisible] = useState(false);
  const { lang, changeLang } = useLang();
const handleLangChange = useCallback((e) => changeLang(e.target.value), [changeLang]);
  const headerTextRef = useRef(null);
  const langRef = useRef(null);

  useFadeIn(headerTextRef, 0);
  useFadeIn(langRef, 150);


  const c = content[lang];
  const isRtl = lang === 'ara';

  return (
    <div className="about-body" dir={isRtl ? 'rtl' : 'ltr'}>

      <div className="about-header" id="about-section">
        <div className="about-headerText" ref={headerTextRef}>
          <h2 className="about-title">{c.title}</h2>
          <p className="about-subtitle">{c.subtitle}</p>
        </div>
        <div className="about-langWrapper" ref={langRef}>
          <select value={lang} onChange={handleLangChange} className="about-langSelect" aria-label="Select language">
            {languageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="about-cardsGrid">
        {c.cards.map((card, i) => (
          <FadeIn key={i} delay={i * 80} className="about-card">
            {card.title && <h3 className="about-cardTitle">{card.title}</h3>}
            <p className="about-cardText">{card.text}</p>
          </FadeIn>
        ))}
      </div>

      <section className="about-section" id="tourism-section">
        <FadeIn><h2 className="about-sectionTitle">{c.tourismTitle}</h2></FadeIn>
        <div className="about-serviceGrid">
          {c.tourismServices.map((service, i) => (
            <FadeIn key={i} delay={i * 70} style={{ backgroundImage: `url(${tourismImages[i]})` }} className="about-serviceCard">
              <div className="about-serviceOverlay">
                <p className="about-serviceText">{service}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="about-section" id="real-estate-section">
        <FadeIn><h2 className="about-sectionTitle">{c.realEstateTitle}</h2></FadeIn>
        <div className="about-serviceGrid">
          {c.realEstateServices.map((service, i) => (
            <FadeIn key={i} delay={i * 70} style={{ backgroundImage: `url(${realEstateImages[i]})` }} className="about-serviceCard">
              <div className="about-serviceOverlay">
                <p className="about-serviceText">{service}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="about-chooseSection">
        <FadeIn><h2 className="about-sectionTitle">{c.chooseTitle}</h2></FadeIn>
        <div className="about-chooseList">
          {c.chooseReasons.map((reason, i) => (
            <FadeIn key={i} delay={i * 60} className="about-chooseCard">
              <Image src={chooseIcons[i]} alt="" width={60} height={60} className="about-chooseIcon" />
              <p className="about-chooseText">{reason}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn className="about-contact" style={{ margin: '90px auto 0' }} delay={0}>
        <div id="contact" style={{ display: 'contents' }}>
          <p className="about-contactText">{c.closingText}</p>
          <button className="about-contactBtn" onClick={() => setPhoneVisible(true)}>
            {c.contactBtn}
          </button>
        </div>
      </FadeIn>

      {phoneVisible && (
        <div className="about-modalBackdrop" onClick={() => setPhoneVisible(false)}>
          <div className="about-modal" onClick={(e) => e.stopPropagation()}>
            <p className="about-modalTitle">Contact Us</p>
            {phoneNumbers.map((num) => (
              <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="about-phoneNumber">{num}</a>
            ))}
            <button className="about-closeBtn" onClick={() => setPhoneVisible(false)} aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}