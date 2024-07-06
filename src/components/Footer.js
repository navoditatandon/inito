import React from 'react';
import Facebook from '../svgs/Facebook.js';
import Instagram from '../svgs/Instagram.js';
import LinkedIn from '../svgs/LinkedIn.js';
import Youtube from '../svgs/Youtube.js';
import './Footer.css'; // Ensure to import your CSS file

const Footer = () => {
    return (
        <div className="web-footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer-list">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Support</h3>
                    <ul className="footer-list">
                        <li>FAQ</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Return and Warranty</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Get In Touch</h3>
                    <ul className="footer-list">
                        <li>+1 815-369-0989</li>
                        <li>help@inito.com</li>
                        <li>355 Bryant Street, Suite 403, San Francisco 94017</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="social-icons">
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

export default Footer;
