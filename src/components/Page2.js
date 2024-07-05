import React, { useEffect, useState } from 'react';
import './Page2.css'; // Import CSS file
import ThreeStar from '../svgs/ThreeStar';
import Tick from '../svgs/Tick';
import Box from '../svgs/Box';

const Page2 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to update isMobile state based on window width
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        // Initial call to set isMobile state on component mount
        updateIsMobile();

        // Event listener to update isMobile state on window resize
        window.addEventListener('resize', updateIsMobile);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    return (
        <div className="page2">
            <div className="content-container">
                <h2 className="title">The only fertility kit you will ever need</h2>
                <p className="description">
                    Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <strong>Progesterone.</strong>
                </p>
                <h2 className="subtitle">What makes Inito different?</h2>
                <p className="description">
                    Inito is the only fertility monitor that measures all <strong>4 hormones</strong> on a <strong>single test strip</strong>, showing you a full picture of your cycles with results unique to your body.
                </p>

                {isMobile && (
                    <div className="mobile-extras">
                        <div className="mobile-extra-item">
                            <ThreeStar className="mobile-icon" />
                            <div className="mobile-extra-text">TRUSTED BY<br />20,000+ COUPLES</div>
                        </div>
                        <div className="mobile-extra-item">
                            <Tick className="mobile-icon" />
                            <div className="mobile-extra-text">FREE US SHIPPING</div>
                        </div>
                        <div className="mobile-extra-item">
                            <Box className="mobile-icon" />
                            <div className="mobile-extra-text">HSA/FSA ELIGIBLE</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page2;
