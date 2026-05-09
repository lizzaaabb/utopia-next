'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLang } from './LanguageContext'
import {
    sevenNightsEightDays,
    nineNightsTenDays,
    fourteenNightsFifteenDays,
    twelveNightsThirteenDays,
} from '../components/Array'
import '../styles/TourBooking.css'

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

const uiStrings = {
    tourNotFound:       { eng: 'Tour not found',                          ara: 'لم يتم العثور على الجولة' },
    backToTour:         { eng: '← Back to Tour',                         ara: '→ العودة إلى الجولة' },
    bookingDetails:     { eng: 'Booking Details',                        ara: 'تفاصيل الحجز' },
    confirmation:       { eng: 'Confirmation',                           ara: 'التأكيد' },
    firstName:          { eng: 'First Name *',                           ara: 'الاسم الأول *' },
    lastName:           { eng: 'Last Name *',                            ara: 'اسم العائلة *' },
    email:              { eng: 'Email *',                                ara: 'البريد الإلكتروني *' },
    phone:              { eng: 'Phone *',                                ara: 'رقم الهاتف *' },
    tourDate:           { eng: 'Tour Date *',                            ara: 'تاريخ الرحلة *' },
    participants:       { eng: 'Number of Participants',                 ara: 'عدد المشاركين' },
    specialRequests:    { eng: 'Special Requests (Optional)',            ara: 'طلبات خاصة (اختياري)' },
    specialPlaceholder: { eng: 'Any dietary restrictions, accessibility needs, or special requests...', ara: 'أي قيود غذائية أو احتياجات خاصة أو طلبات إضافية...' },
    confirmBtn:         { eng: 'Confirm Booking',                        ara: 'تأكيد الحجز' },
    submitting:         { eng: 'Submitting...',                          ara: 'جارٍ الإرسال...' },
    reviews:            { eng: 'reviews',                                ara: 'تقييم' },
    fillFields:         { eng: 'Please fill in all required fields correctly.', ara: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.' },
    successTitle:       { eng: '🎉 Booking Confirmed!',                  ara: '🎉 تم تأكيد الحجز!' },
    successMsg1:        { eng: 'Thank you for booking with Utopia Tours!', ara: 'شكراً لحجزك مع يوتوبيا تورز!' },
    successClose:       { eng: 'Return Home',                            ara: 'العودة للرئيسية' },
    participant:        { eng: 'participant',                            ara: 'مشارك' },
    participants2:      { eng: 'participants',                           ara: 'مشاركين' },
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgvazz'

const parsePriceToNumber = (priceStr) => {
    if (!priceStr) return 0
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''))
}

export default function TourBooking({ id }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { lang, changeLang } = useLang()
    const currentLanguage = lang === 'geo' ? 'eng' : lang

    const tourPackage = allTourPackages.find((p) => p.id === parseInt(id))
    const urlPriceParam = searchParams.get('price')

    const actualPriceString = urlPriceParam ?? tourPackage?.priceOptions?.[0]?.price
    const actualPriceNumeric = parsePriceToNumber(actualPriceString)

    const tour = tourPackage ? {
        id: tourPackage.id,
        title: tourPackage.details.eng.title,
        priceString: actualPriceString,
        priceNumeric: actualPriceNumeric,
        image: tourPackage.image,
        duration: tourPackage.details.eng.duration || 'N/A',
        groupSize: tourPackage.details.eng.groupSize || 'N/A',
        rating: tourPackage.rating,
        reviews: tourPackage.reviews,
    } : null

    const [bookingData, setBookingData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        participants: 1,
        specialRequests: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [lastSubmitted, setLastSubmitted] = useState(null)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const totalPrice = (tour?.priceNumeric ?? 0) * bookingData.participants

    const handleChange = (e) => {
        const { name, value } = e.target
        setBookingData((prev) => ({ ...prev, [name]: value }))
    }

    const validate = () => {
        const { firstName, lastName, email, phone, date, participants } = bookingData
        return firstName && lastName && email && phone && date && participants > 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) {
            setSubmitMessage(uiStrings.fillFields[currentLanguage])
            return
        }
        setIsSubmitting(true)
        setSubmitMessage('')
        try {
            const payload = {
                'Tour ID': tour.id,
                'Tour Name': tour.title,
                'Selected Package Price': tour.priceString,
                'Number of Participants': bookingData.participants,
                'Total Price': `$${totalPrice}`,
                'Booking Date': bookingData.date,
                'First Name': bookingData.firstName,
                'Last Name': bookingData.lastName,
                'Email': bookingData.email,
                'Phone': bookingData.phone,
                'Special Requests': bookingData.specialRequests || 'None specified',
                '_replyto': bookingData.email,
            }
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            })
            if (res.ok) {
                setLastSubmitted(bookingData)
                setShowSuccessModal(true)
                setBookingData({
                    firstName: '', lastName: '', email: '', phone: '',
                    date: '', participants: 1, specialRequests: '',
                })
            } else {
                const data = await res.json()
                const detail = data.errors ? data.errors.map((e) => e.message).join(', ') : 'Unknown error.'
                setSubmitMessage(`Failed to submit. ${detail}`)
            }
        } catch {
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // ── Single back handler used everywhere ─────────
    const handleBack = () => {
        if (showSuccessModal) {
            setShowSuccessModal(false)
        } else {
            router.push(`/tours/${id}`)
            window.scrollTo({ top: 0 })
        }
    }

    // ── Tour not found ───────────────────────────────
    if (!tour) {
        return (
            <div className="booking-body">
                <div className="tour-not-found">
                    <h2>{uiStrings.tourNotFound[currentLanguage]}</h2>
                    <button className="return-btn" onClick={() => router.push('/tours')}>
                        {uiStrings.backToTour[currentLanguage]}
                    </button>
                </div>
            </div>
        )
    }

    const langClass = `lang-${currentLanguage}`

    return (
        <div className={`booking-body ${langClass}`}>
            <div className="booking-container">

              {/* Header */}
<div className="booking-header">
    <button className="return-btn" onClick={handleBack}>
        {showSuccessModal ? 'Close' : uiStrings.backToTour[currentLanguage]}
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

{/* Steps below header */}
<div className="booking-steps">
    <span className="step active">1. {uiStrings.bookingDetails[currentLanguage]}</span>
    <span className="step">2. {uiStrings.confirmation[currentLanguage]}</span>
</div>

                {/* Main content */}
                <div className="booking-content">

                    {/* Tour summary */}
                    <div className="tour-summary">
                        <div className="tour-summary-image-wrap">
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 1024px) 100vw, 400px"
                            />
                        </div>
                        <div className="tour-summary-details">
                            <h3>{tour.title}</h3>
                            <div className="tour-summary-info">
                                <span>⏱️ {tour.duration}</span>
                                <span>👥 {tour.groupSize}</span>
                                <span>⭐ {tour.rating} ({tour.reviews} {uiStrings.reviews[currentLanguage]})</span>
                            </div>
                            <div className="price-summary">
                                <div className="price-breakdown">
                                    <span>
                                        {tour.priceString} × {bookingData.participants}{' '}
                                        {bookingData.participants > 1
                                            ? uiStrings.participants2[currentLanguage]
                                            : uiStrings.participant[currentLanguage]}
                                    </span>
                                    <span className="total-price">${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking form */}
                    <div className="booking-form">
                        <h2>{uiStrings.bookingDetails[currentLanguage]}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{uiStrings.firstName[currentLanguage]}</label>
                                    <input type="text" name="firstName" value={bookingData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>{uiStrings.lastName[currentLanguage]}</label>
                                    <input type="text" name="lastName" value={bookingData.lastName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{uiStrings.email[currentLanguage]}</label>
                                    <input type="email" name="email" value={bookingData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>{uiStrings.phone[currentLanguage]}</label>
                                    <input type="tel" name="phone" value={bookingData.phone} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>{uiStrings.tourDate[currentLanguage]}</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={bookingData.date}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{uiStrings.participants[currentLanguage]}</label>
                                    <select name="participants" value={bookingData.participants} onChange={handleChange}>
                                        {[1,2,3,4,5,6,7,8].map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>{uiStrings.specialRequests[currentLanguage]}</label>
                                <textarea
                                    name="specialRequests"
                                    value={bookingData.specialRequests}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder={uiStrings.specialPlaceholder[currentLanguage]}
                                />
                            </div>

                            {submitMessage && (
                                <p className="submit-error-message">{submitMessage}</p>
                            )}

                            <button className="proceed-btn" type="submit" disabled={isSubmitting}>
                                {isSubmitting
                                    ? uiStrings.submitting[currentLanguage]
                                    : `${uiStrings.confirmBtn[currentLanguage]} — $${totalPrice}`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && lastSubmitted && (
                <div className="success-modal-overlay">
                    <div className="success-modal-content">
                        <h2>{uiStrings.successTitle[currentLanguage]}</h2>
                        <p>{uiStrings.successMsg1[currentLanguage]}</p>
                        <p>
                            {currentLanguage === 'ara'
                                ? `تم إرسال طلب حجزك لرحلة "${tour.title}" بتاريخ ${lastSubmitted.date} لـ ${lastSubmitted.participants} ${lastSubmitted.participants > 1 ? 'مشاركين' : 'مشارك'} بنجاح. سنتواصل معك على ${lastSubmitted.email}.`
                                : `Your booking for "${tour.title}" on ${lastSubmitted.date} for ${lastSubmitted.participants} ${lastSubmitted.participants > 1 ? 'participants' : 'participant'} was submitted. We'll contact you at ${lastSubmitted.email}.`
                            }
                        </p>
                        <button
                            className="modal-return-home-btn"
                            onClick={() => { setShowSuccessModal(false); router.push('/') }}
                        >
                            {uiStrings.successClose[currentLanguage]}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}