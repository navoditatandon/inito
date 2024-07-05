import React, { useEffect, useState } from 'react';
import './Page3.css'; // Import CSS file

const Page3 = () => {
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
        <div className="page-three-container">
            {/* Web View */}
            {!isMobile && (
                <div className="web-view">
                    <div className="left-content">
                        <div className="image-container">
                            <img src="https://cdn.inito.com/inito_website/ovulation_confirmed.png" alt="Ovulation Confirmed" />
                        </div>
                    </div>
                    <div className="right-content">
                        <div className='heading-right'>Predict and confirm <br/> your ovulation with <br/> actual data</div>
                        Unlike most ovulation tests that only give you "yes/no" results,
                        Inito provides <strong>real numerical values </strong>of your fertility
                        hormones.
                        <br/>
                        If you have irregular cycles, actual data is necessary to know 
                        exactly when you ovulate, and when is the best time to try to 
                        conceive.
                    </div>
                </div>
            )}

            {/* Mobile View */}
            {isMobile && (
                <div className="mobile-view">
                    <div className="top-content">
                    <div className='mobile-heading'><strong>Predict and confirm <br/> your ovulation with <br/> actual data</strong></div>
                    Unlike most ovulation tests that only give you "yes/no" results,
                        Inito provides <strong>real numerical values </strong>of your fertility
                        hormones.

                        If you have irregular cycles, actual data is necessary to know 
                        exactly when you ovulate, and when is the best time to try to 
                        conceive.   
                    </div>
                    <div className="bottom-image">
                        <img src="https://cdn.inito.com/inito_website/ovulation_confirmed.png" alt="Ovulation Confirmed" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page3;
