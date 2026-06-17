'use client'
import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="utopia-footer">
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h3 className="brand-title">Utopia</h3>
                        <p className="brand-description">
                            Your trusted gateway to luxury tourism and smart real estate investment in Georgia's natural paradise.
                        </p>
                        <p className="brand-tagline">Where Comfort Meets Opportunity</p>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="section-title">Our Services</h4>
                        <ul className="section-list">
                            <li>Premium Tourism Packages</li>
                            <li>Private Tours & VIP Services</li>
                            <li>Real Estate Investment</li>
                            <li>Property Management</li>
                            <li>Legal Advisory</li>
                            <li>Residency Support</li>
                        </ul>
                    </div>

                    {/* Georgia Highlights */}
                    <div className="footer-section">
                        <h4 className="section-title">Why Georgia</h4>
                        <ul className="section-list">
                            <li>Visa-free for Gulf Citizens</li>
                            <li>Easy Property Ownership</li>
                            <li>High Rental Returns</li>
                            <li>Breathtaking Nature</li>
                            <li>Cultural Tolerance</li>
                            <li>Strategic Location</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4 className="section-title">Contact Us</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <MapPin className="contact-icon" size={16} />
                                <span>Tbilisi, Georgia</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" size={16} />
                                <span>+995 514 511 166</span>
                            </div>
                        
                            <div className="contact-item">
                                <Mail className="contact-icon" size={16} />
                                <span>utopiaviptravel@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Globe className="contact-icon" size={16} />
                                <span>Arabic Speaking Team</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                       <p className="copyright">
  © 2025 Utopia VIP Tourism & Real Estate. Licensed Georgian Company. All rights reserved. | Developed & Designed by{' '}
  <a href="https://apollocreations.net" target="_blank" rel="noopener noreferrer" className="footer-legal-links">
    Apollo Creations
  </a>
</p>
                        <Link href="/privacy-policy" className="footer-legal-links">
                            Privacy Policy
                        </Link>
                        <p className="specialization">Specializing in Gulf Region Services</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}