'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/Header.css'

const NAV_LINKS = [
  { label: 'Home',                 section: 'home-section' },
  { label: 'About Us',             section: 'about-section' },
  { label: 'Tourism Services',     section: 'tourism-section' },
  { label: 'Real Estate Services', section: 'real-estate-section' },
  { label: 'About Georgia',        section: 'georgia-section' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    document.title = 'VIP Travel & Real Estate'
  }, [])

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isSidebarOpen])

  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  const handleScrollLink = (section) => {
    closeSidebar()
    setTimeout(() => scrollToSection(section), 300)
  }
  useEffect(() => {
  const onScroll = () => {
    const header = document.querySelector('.header-container')
    if (!header) return
    if (window.scrollY > 20) {
      header.style.backdropFilter = 'blur(8px)'
      header.style.webkitBackdropFilter = 'blur(8px)'
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.15)'
    } else {
      header.style.backdropFilter = 'none'
      header.style.webkitBackdropFilter = 'none'
      header.style.backgroundColor = 'transparent'
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])

  return (
    <div className="heading-body">

      <header className="header-container">
        <div className="header1">
          <Image
            src="/logo2.png"
            alt="Utopia VIP Tourism and Real Estate"
            width={120}
            height={50}
            priority
            className="utopia-logo"
          />
        </div>

        <div className="header2">
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
        <div className="header2-text-container">
            <h2>UTOPIA</h2>
            <p>VIP Tourism &amp; Real Estate</p>
        </div>
    </button>
</div>

        <div className="header3">
          <div className="contact-container">
            <div className="forcontact">
              <Link href="/tours" className="contact">
                Discover Tours
              </Link>
            </div>
            <div className="formenu">
              <button
                className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
                aria-label="Toggle menu"
                aria-expanded={isSidebarOpen}
              >
                <span className="bar" />
                <span className="bar" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} aria-hidden="true" />
      )}

      <nav className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`} aria-label="Site navigation">
        <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
          <span className="close-line" />
          <span className="close-line" />
        </button>

        <div className="sidebar-text">
          <h3>UTOPIA</h3>
          <p>VIP Tourism &amp; Real Estate</p>
        </div>

        <ul className="menu-items">
          {NAV_LINKS.map(({ label, section }) => (
            <li key={section}>
              <button className="menu-scroll-btn" onClick={() => handleScrollLink(section)}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <Link href="/tours" className="discover-tours" onClick={closeSidebar}>
              Discover Tours
            </Link>
          </li>
        </ul>

        <div className="line" />

       

       <div className="social-media">
    <p>Follow Us On Social Media</p>
    <div className="icons">
        <a href="https://wa.me/995500888171" target="_blank" rel="noopener noreferrer">
            <Image src="/icon1.png" alt="WhatsApp" width={30} height={30} className="icon" />
        </a>
        <a href="https://www.facebook.com/utopiavip" target="_blank" rel="noopener noreferrer">
            <Image src="/icon2.png" alt="Facebook" width={30} height={30} className="icon" />
        </a>
        <a href="https://www.instagram.com/utopia.vip.travel" target="_blank" rel="noopener noreferrer">
            <Image src="/icon3.png" alt="Instagram" width={30} height={30} className="icon" />
        </a>
    </div>
</div>
      </nav>

      <main className="landing-container">
        {children}
      </main>

    </div>
  )
}