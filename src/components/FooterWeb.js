import React from 'react';
import Facebook from '../svgs/Facebook.js';
import Instagram from '../svgs/Instagram.js';
import LinkedIn from '../svgs/LinkedIn.js';
import Youtube from '../svgs/Youtube.js';
import './FooterWeb.css'; // Ensure to import your CSS file

const FooterWeb = () => {
    return (
        <div className="web-footer">
            <div className="footer-content-web">
                <div className="footer-column-web">
                    <h3 className="footer-heading-web">Company</h3>
                    <ul className="footer-list-web">
                        <li href = "https://www.inito.com/about-us">About Us</li>
                        <li href = "https://www.inito.com/careers">Careers</li>
                        <li href = "https://blog.inito.com/">Blog</li>
                        <li href = "https://www.inito.com/contact-us">Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column-web">
                    <h3 className="footer-heading-web">Support</h3>
                    <ul className="footer-list-web">
                        <li href="https://www.inito.com/faqs">FAQ</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Return and Warranty</li>
                    </ul>
                </div>
                <div className="footer-column-web">
                    <h3 className="footer-heading-web">Get In Touch</h3>
                    <ul className="footer-list-web">
                        <li>+1 815-369-0989</li>
                        <li>help@inito.com</li>
                        <li>355 Bryant Street, Suite 403, San Francisco 94017</li>
                    </ul>
                </div>
                <div className="footer-column-web">
                    <div className="social-icons-web">
                       <Facebook />
                       <Instagram />
                       <LinkedIn />
                       <Youtube />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterWeb;