'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import '../styles/Landing.css'
import Button2 from './Button2'

function Landing({ isSidebarOpen }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#home') {
        const el = document.getElementById('home')
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
        }
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [])

  return (
    <div id="home">
      <div className={`landing-container${isSidebarOpen ? ' sidebar-open' : ''}`}>
        <div className="main-title">
          <h1 className="landing-title">
            Discover the dream land<br />
            of Georgia
          </h1>
        </div>
        <div className="second-title">
          <p>
            Utopia – Where Comfort Meets Opportunity.
            your trusted gateway into the world of luxury tourism and smart real estate investment.
          </p>
        </div>
        <div className="button2-container">
          <Button2 />
        </div>
      </div>
    </div>
  )
}

export default Landing