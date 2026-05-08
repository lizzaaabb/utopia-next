'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLang } from '../components/LanguageContext'
import { getToursData } from '../components/ToursData'
import '../styles/Tours.css'

export default function Tours() {
    const router = useRouter()
    const { lang, changeLang } = useLang()
    const toursData = getToursData(lang)

    const handleBookNow = (id) => router.push(`/tours/${id}`)

    return (
        <div className="tours-app-body">
            <div className="tours-app-container">

                {/* Heading */}
               <div className="tours-app-heading">
    <div className="home-button">
        <Link href="/" className="return">Return Home</Link>
    </div>

    <div className="tours-heading-title">
        <h2>Discover Tours</h2>
        <p>Your journey to Georgia's beauty starts here.</p>
    </div>

    <select
        value={lang}
        onChange={(e) => changeLang(e.target.value)}
        className="language-dropdown"
    >
        <option value="ara">العربية</option>
        <option value="eng">ENG</option>
    </select>
</div>

                {/* Cards */}
                <div className="tours-card-container">
                    {toursData.map((tour) => (
                        <div key={tour.id} className="tours-card">

                            <div className="tours-card-image">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 800px) 100vw, 50vw"
                                />
                            </div>

                            <div className="tours-card-content">
                                <span className="tours-category">{tour.category}</span>
                                <h3>{tour.title}</h3>
                                <div className="tours-rating">
                                    <span className="tours-score">{tour.rating} ⭐</span>
                                </div>
                                <div className="tours-price">
                                    <span className="tours-amount">{tour.price}</span>
                                </div>
                                <button
                                    className="tours-purchase"
                                    onClick={() => handleBookNow(tour.id)}
                                >
                                    Learn More
                                </button>
                            </div>

                            <button className="tours-favorite">♡</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}