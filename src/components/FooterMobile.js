import React, { useState } from 'react';
import Facebook from '../svgs/Facebook';
import Instagram from '../svgs/Instagram';
import LinkedIn from '../svgs/LinkedIn';
import Youtube from '../svgs/Youtube';
import './FooterMobile.css';

const FooterMobile = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleAccordion = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (
            <div className="footer mobile-view">
                <div className="social-icons">
                    <Facebook />
                    <Instagram />
                    <LinkedIn />
                    <Youtube />
                </div>
                <div className="footer-section" onClick={() => toggleAccordion(0)}>
                    <div className="footer-heading">
                        <h3>Company</h3>
                        <div className={`accordion-icon ${activeSection === 0 ? 'open' : ''}`}>
                            {activeSection === 0 ? '∧' : '∨'}
                        </div>
                    </div>
                    <ul className={`footer-list ${activeSection === 0 ? 'active' : ''}`}>
                        <li href = "https://www.inito.com/about-us">About Us</li>
                        <li href = "https://www.inito.com/careers">Careers</li>
                        <li href = "https://blog.inito.com/">Blog</li>
                        <li href = "https://www.inito.com/contact-us">Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section" onClick={() => toggleAccordion(1)}>
                    <div className="footer-heading">
                        <h3>Support</h3>
                        <div className={`accordion-icon ${activeSection === 1 ? 'open' : ''}`}>
                            {activeSection === 1 ? '∧' : '∨'}
                        </div>
                    </div>
                    <ul className={`footer-list ${activeSection === 1 ? 'active' : ''}`}>
                        <li href="https://www.inito.com/faqs">FAQ</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Return and Warranty</li>
                    </ul>
                </div>
                <div className="footer-section" onClick={() => toggleAccordion(2)}>
                    <div className="footer-heading">
                        <h3>Get In Touch</h3>
                        <div className={`accordion-icon ${activeSection === 2 ? 'open' : ''}`}>
                            {activeSection === 2 ? '∧' : '∨'}
                        </div>
                    </div>
                    <ul className={`footer-list ${activeSection === 2 ? 'active' : ''}`}>
                        <li>+1 815-369-0989</li>
                        <li>help@inito.com</li>
                        <li>355 Bryant Street, Suite 403, San Francisco 94017</li>
                    </ul>
                </div>
            </div>
    );
};

export default FooterMobile;
