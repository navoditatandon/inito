import React, { useEffect, useState } from 'react';
import './Page4.css'; 
import Content4 from './content4';

const Page4 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); 
        };
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    return (
        <div className="page-four-container">
            {/* Web View */}
            {!isMobile && (
                <div className="web-view">
                    <div className='left-component'>
                    <Content4 />
                    </div>
                    <div className="right-content">
                        <div className="image-container">
                            <img src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png" alt="Ovulation Graph" />
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile View */}
            {isMobile && (
                <div className="mobile-view">
                    <Content4 />
                    <div className="bottom-image">
                        <img src="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg" alt="Ovulation Graph" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page4;
