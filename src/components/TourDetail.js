'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLang } from './LanguageContext'
import {
    sevenNightsEightDays,
    nineNightsTenDays,
    fourteenNightsFifteenDays,
    twelveNightsThirteenDays,
} from '../components/Array'
import '../styles/TourDetail.css'

// ── Tour packages data ───────────────────────────────
const allTourPackages = [
    {
        id: 1,
        details: sevenNightsEightDays,
        rating: 4.8,
        reviews: 245,
        image: '/tour1.jpg',
        priceOptions: [
            { stars: 4, label: '4-Star Package', price: '$1111' },
            { stars: 5, label: '5-Star Package', price: '$1333' },
        ],
    },
    {
        id: 2,
        details: nineNightsTenDays,
        rating: 4.9,
        reviews: 189,
        image: '/tour2.jpg',
        priceOptions: [
            { stars: 4, label: '4-Star Package', price: '$1500' },
            { stars: 5, label: '5-Star Package', price: '$1850' },
        ],
    },
    {
        id: 3,
        details: twelveNightsThirteenDays,
        rating: 4.9,
        reviews: 312,
        image: '/tour3.jpg',
        priceOptions: [
            { stars: 4, label: '4-Star Package', price: '$3600' },
            { stars: 5, label: '5-Star Package', price: '$6100' },
        ],
    },
    {
        id: 4,
        details: fourteenNightsFifteenDays,
        rating: 4.8,
        reviews: 156,
        image: '/tour4.jpg',
        priceOptions: [
            { stars: 4, label: '4-Star Package', price: '$4000' },
            { stars: 5, label: '5-Star Package', price: '$7000' },
        ],
    },
]

// ── UI strings ───────────────────────────────────────
const uiStrings = {
    backToTours:  { eng: '← Back to Tours', ara: '→ العودة إلى الجولات', geo: '← დაბრუნება' },
    itineraryTitle: { eng: 'Full Itinerary', ara: 'خط سير الرحلة الكامل', geo: 'სრული მარშრუტი' },
    bookButton:   { eng: 'Book This Tour', ara: 'احجز هذه الجولة', geo: 'დაჯავშნე' },
    tourNotFound: { eng: 'Tour not found', ara: 'لم يتم العثور على الجولة', geo: 'ტური ვერ მოიძებნა' },
    reviews:      { eng: 'Reviews', ara: 'التقييمات', geo: 'შეფასება' },
    chooseOption: { eng: 'Choose your package option:', ara: 'اختر خيار باقتك:', geo: 'აირჩიეთ პაკეტი:' },
}

// ── Component ────────────────────────────────────────
export default function TourDetail({ id }) {
    const router = useRouter()
    const { lang, changeLang } = useLang() 

    // lang from context — fall back to 'ara' if geo (no geo content in Array)
    const currentLanguage = lang === 'geo' ? 'eng' : lang

    const tourPackage = allTourPackages.find((p) => p.id === parseInt(id))

    const [selectedStarOptionPrice, setSelectedStarOptionPrice] = useState(
        tourPackage?.priceOptions?.[0]?.price ?? null
    )

    // Reset selected price if tour changes
    useEffect(() => {
        if (tourPackage?.priceOptions?.length) {
            setSelectedStarOptionPrice(tourPackage.priceOptions[0].price)
        }
    }, [id])

    // Tour not found
    if (!tourPackage) {
        return (
            <div className="tour-detail-body">
                <div className="tour-not-found">
                    <h2>{uiStrings.tourNotFound[currentLanguage]}</h2>
                    <button className="return" onClick={() => router.push('/tours')}>
                        {uiStrings.backToTours[currentLanguage]}
                    </button>
                </div>
            </div>
        )
    }

    const tourContent = tourPackage.details[currentLanguage] ?? tourPackage.details.ara

    const currentDisplayPrice =
        tourPackage.priceOptions.find((o) => o.price === selectedStarOptionPrice)?.price ??
        tourPackage.priceOptions[0].price

    const handleBook = () => {
        router.push(`/tours/${id}/booking?price=${encodeURIComponent(currentDisplayPrice)}`)
    }

    const languageClass = `lang-${currentLanguage}`

    return (
        <div className={`tour-detail-body ${languageClass}`}>
            <div className="tour-detail-container">

                {/* Header */}
             <div className="tour-detail-header">
    <button className="return" onClick={() => router.push('/tours')}>
        {uiStrings.backToTours[currentLanguage]}
    </button>

    <select
        value={lang}
        onChange={(e) => changeLang(e.target.value)}
        className="language-dropdown"
    >
        <option value="ara">العربية</option>
        <option value="eng">ENG</option>
    </select>
</div>
                {/* Card */}
                <div className="tour-detail-card">

                    {/* Image */}
                    <div className="tour-detail-image">
                        <Image
                            src={tourPackage.image}
                            alt={tourContent.title}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '15px' }}
                            sizes="(max-width: 800px) 100vw, 800px"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="tour-detail-content">
                        <h1 className="tour-detail-title">{tourContent.title}</h1>

                        <div className="tour-detail-rating">
                            <span className="rating-score">{tourPackage.rating} ⭐</span>
                            <span className="rating-reviews">
                                ({tourPackage.reviews} {uiStrings.reviews[currentLanguage]})
                            </span>

                            <div className="price-options-selector">
                                <p>{uiStrings.chooseOption[currentLanguage]}</p>
                                {tourPackage.priceOptions.map((option) => (
                                    <div key={option.stars} className="price-option-radio">
                                        <input
                                            type="radio"
                                            id={`star-option-${option.stars}-${tourPackage.id}`}
                                            name={`starOption-${tourPackage.id}`}
                                            value={option.price}
                                            checked={selectedStarOptionPrice === option.price}
                                            onChange={(e) => setSelectedStarOptionPrice(e.target.value)}
                                        />
                                        <label htmlFor={`star-option-${option.stars}-${tourPackage.id}`}>
                                            {option.label} ({option.price})
                                        </label>
                                    </div>
                                ))}
                                <span className="tour-detail-price tour-detail-selected-price">
                                    Current Price: {currentDisplayPrice}
                                </span>
                            </div>
                        </div>

                        <button className="tour-book-btn" onClick={handleBook}>
                            {uiStrings.bookButton[currentLanguage]} — {currentDisplayPrice}
                        </button>
                    </div>

                    {/* Itinerary */}
                    <div className="itinerary-section">
                        <h2 className="itinerary-title">{uiStrings.itineraryTitle[currentLanguage]}</h2>
                        {tourContent.itinerary.map((dayItem, index) => (
                            <div className="itinerary-day" key={index}>
                                <h3>{dayItem.day}</h3>
                                <p>{dayItem.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Extras */}
                    <div className="tour-extras-container">
                        <div className="inclusions-exclusions-grid">
                            {tourContent.inclusions && (
                                <div className="info-section inclusions">
                                    <h3>{tourContent.inclusions.title}</h3>
                                    <ul>
                                        {tourContent.inclusions.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {tourContent.exclusions && (
                                <div className="info-section exclusions">
                                    <h3>{tourContent.exclusions.title}</h3>
                                    <ul>
                                        {tourContent.exclusions.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {tourContent.optionalActivities && (
                            <div className="info-section optional-activities">
                                <h3>{tourContent.optionalActivities.title}</h3>
                                <ul>
                                    {tourContent.optionalActivities.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {tourContent.farewell && (
                            <p className="farewell-message">{tourContent.farewell}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}