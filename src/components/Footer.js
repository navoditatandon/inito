import React, { useEffect, useState } from 'react';
import './Page4.css'; 
import FooterWeb from './FooterWeb';
import FooterMobile from './FooterMobile';

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
            {!isMobile && (
               <FooterWeb />
            )}

            {isMobile && (
                <FooterMobile />
            )} 
        </div>
    );
}

export default Page4;
