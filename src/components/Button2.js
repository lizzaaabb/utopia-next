'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Hotel, Plane, Earth } from 'lucide-react'
import '../styles/Button2.css'

const tabs = [
  {
    id: 'tours',
    label: 'Discover Tours',
    icon: Earth,
    url: '/tours',
    isInternal: true,
  },
  {
    id: 'hotels',
    label: 'Hotels',
    icon: Hotel,
    url: 'https://www.trip.com/hotels/list?city=7612&display=Tbilisi&optionId=7612&optionType=City&optionName=Tbilisi&Allianceid=6623016&SID=225750218&trip_sub1=hotelTest',
    isInternal: false,
  },
  {
    id: 'flights',
    label: 'Flights',
    icon: Plane,
    url: 'https://www.trip.com/flights/welcome/?to=home&Allianceid=6623016&SID=225750218&trip_sub1=flightTest',
    isInternal: false,
  },
]

export default function Button2() {
  const [activeTab, setActiveTab] = useState('tours')

  return (
    <div className="luxury-container">
      <div className="luxury-glow" />
      <div className="floating-particles">
        {[...Array(4)].map((_, i) => <div key={i} className="particle" />)}
      </div>

      {tabs.map(({ id, label, icon: Icon, url, isInternal }) => {
        const cls = `luxury-button${activeTab === id ? ' active' : ''}`
        const content = <><Icon className="luxury-icon" /><span className="luxury-label">{label}</span></>

        return isInternal ? (
          <Link key={id} href={url} className={cls} onClick={() => setActiveTab(id)}>
            {content}
          </Link>
        ) : (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer"
            className={cls} onClick={() => setActiveTab(id)}>
            {content}
          </a>
        )
      })}
    </div>
  )
}