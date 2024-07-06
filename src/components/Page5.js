import React, { useEffect, useState } from 'react';
import './Page5.css'; // Import the CSS file

const Page5 = () => {
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
        <div className="page5-outline">
            <div className={isMobile ? 'mobile-view' : 'page5-container'}>
                <h4>WHY MEASURE PROGESTERONE?</h4>
                <p><strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence,<br/>
                affecting 1 in 10 women*.
                A sure way to confirm ovulation is a <strong>rise in Progesterone level</strong> after peak fertility.<br/> Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlate to higher chances of a successful pregnancy.</p>
                <p>* Source: National Institutes of Health</p>
                <h2>“Inito is all that you need to give you the best chance of conception."</h2>
                <div className='bottom-image-container'>
                    <img className='bottom-image' src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" alt="Warner" />
                        <h4 style={{color: "black", paddingLeft: "20px"}}>Dr. Rachel Wagner</h4><br/>
                </div>
            </div>
        </div>
    );
}

export default Page5;
