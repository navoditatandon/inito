import React, { useState, useEffect } from 'react';
import './Header.css';
import Inito from '../svgs/Inito';
import Hamburger from '../svgs/Hamburger';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-content">
                {/* Conditional rendering based on viewport */}
                {isMobile ? (
                    // Mobile view
                    <>
                        <div className="mobile-section">
                            {!isModalOpen ? <div onClick={() =>  setIsModalOpen(true)} className="hamburger"><Hamburger/></div> : <div onClick={() =>  setIsModalOpen(false)}>X</div>}
                            <div className="inito-svg"><Inito /></div>
                        </div>
                        <button className="try-button">Try Inito</button>
                        {isModalOpen && (
                            <nav className="nav active" style={{ width: '26%', left: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', top: '90px', position: 'fixed' }}>
                                <a className="nav-link" href="#about" >About Us</a>
                                <a className="nav-link" href="#blog" >Blog</a>
                                <a className="nav-link" href="#faqs" >FAQs</a>
                                <a className="nav-link" href="#contactUs" >Contact Us</a>
                            </nav>
                        )}

                    </>
                ) : (
                    // Web view
                    <>
                        <div className="logo-section">
                        <div className="inito-svg"><Inito /></div>
                            <nav className="nav">
                                <a class="nav-link" href="#about">About Us</a>
                                <a class="nav-link" href="#blog">Blog</a>
                                <a class="nav-link" href="#faqs">FAQs</a>
                                <a class="nav-link" href="#contactUs">Contact Us</a>
                            </nav>
                        </div>
                        <button className="try-button">Try Inito</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
