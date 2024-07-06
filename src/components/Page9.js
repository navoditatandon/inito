import React, { useEffect, useState } from 'react';
import './Page9.css'; 
import Content9 from './Content9';

const Page9 = () => {
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
        <div className="page7-outline">
            <div className='page7-container'>
                    {/* Web View */}
                    {!isMobile && (
                        <div className="web-view">
                            <div className='left-component'>
                                <Content9 />
                            </div>
                            <div className='right-component'>
                                <div className="image-container">
                                    <div className='image-card'>
                                    <img src="https://s3-alpha-sig.figma.com/img/fc10/0c20/13b8ed28edd7eaf606c062d326beaecc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YrrqLS5U4UwEPMSXCAGVBu5ryefHdMZf~t65oEL2SM52K4ZAxxQNeW2wOPMyzzwZqRlKklg41WSO94v1yLSUcN143CkmwJ-RmYJJxrpNJhzUGweox~GZYRxnVdAmlo9DfSdITueosUGw1CNDJyLan1KvajiSPnTsnR~4cImF0mhnakQaiQp1y3xNH2s8WbWRg-YesmY9Vw~2JWSzRgMABBefHw68S~erkDu8Bx2WX~zobogVY4FaFuN8yQVvUHUcv1unmfh81OgYYbrhS6DC0tnHKIuE1NX8R6IUukG9ftG1vmKWCGjKX9Adu2~YICM0IQ5ffNQHU0-FzYCRuCkbGQ__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/6ce3/0d53/158ee46cb3c761c61a856c81fa25e3d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjpHiwoPpSxrIqONbAEKMY7cd5SeM~f7YI5Q9CMcbGAfz-oE2B29PTArDwWfATQlYdqbubgzBthvqhk-zS4TmX9q1TgzWob6aDdPENEWfaQ6PjnCBHQTtLWcT2tEdjH6GsFxKA9OgJG8vfShQW8XCyXoc7xcsCILPcHUu~j82Tg3rdolJp5KDmOcWyk~5TUffDK5ezt1wd85una9X8ylLpU1Mij2qQfOF38TxDeJMSyeyhHryKDdTXUnhOjDVuxEEMrYY7Bci99ioSzdyFitzierYBqA~ltQCGq8mmB43BkXmwAW2xpz-MhfbK0d2R-2S1NAoY-T4jsTaSPBzSlSTA__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/168e/0d8b/0dae730af265a00923a44de9dccaf8ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGZIQqXOmjZjyxZYTsGDezsUn2~0Z7XDlIaSsqnqNtf8j1eS9QOlWq9FUBZyPzUXFLMsMpPVqKSYl9fIzN37bk222HjKkbQICIkpaXN2G-bAosZX9xZIKhcVFZORIe3WEj48JrU~6B2UR2v6V-ZA~VZBDn8ETcCoY~59BC0zqK9NKeNa2whWjHfETaiA4zIgeb7PhImrc7HTmZ1xJ3ZRHEDyjCmZ16J6h~kKkWAaAhAGKro7yoHmMRtcPITxR8G0P1r3-CkHrW5aHvzgz3Bvdt8akZuss-VyNYA7dOTigPsUSal5-gxkZZK4jQi0PCuPNMtQ1pbRtQYC2pENEr4VuQ__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/86a3/e759/9638dc3feae3528df3be3ecc29bf19d1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cszVIzlYQKpb3xBFjedg2l-fC6KSfSIn~M3GKmKHKTspWBJ4~FniNDE7ajcq2WeGqOXce5N0WlgeCOVRgfuKGf~n2U0d81n1fVU8rBLARipm3Q72G-bzBdnwVQM9NAirIGEgqblN6Pp4fykBjiBzsvw--LrI5pb4EBA9kWTKFEirQGdrlfGX12uNDbtHJSAkZP4r6uiNgDAs4QQwuI1cBEvrgOUeU1gdzzNTZ7J9iQaauzhc-MQ40o~IygO4XM3pCXuuWu1dVYWKZYI1A6p588XzBmu0yNoeSMMplQbWfwBBkSRCwyDYCaqY0nT2TU3SFBzTIu-DDgqmIsWh4gCiBw__" alt="Mobile Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="mobile-view">
                            <Content9 />
                            <div className="bottom-image-mobile">
                            <div className='image-card'>
                                    <img src="https://s3-alpha-sig.figma.com/img/fc10/0c20/13b8ed28edd7eaf606c062d326beaecc?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YrrqLS5U4UwEPMSXCAGVBu5ryefHdMZf~t65oEL2SM52K4ZAxxQNeW2wOPMyzzwZqRlKklg41WSO94v1yLSUcN143CkmwJ-RmYJJxrpNJhzUGweox~GZYRxnVdAmlo9DfSdITueosUGw1CNDJyLan1KvajiSPnTsnR~4cImF0mhnakQaiQp1y3xNH2s8WbWRg-YesmY9Vw~2JWSzRgMABBefHw68S~erkDu8Bx2WX~zobogVY4FaFuN8yQVvUHUcv1unmfh81OgYYbrhS6DC0tnHKIuE1NX8R6IUukG9ftG1vmKWCGjKX9Adu2~YICM0IQ5ffNQHU0-FzYCRuCkbGQ__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/6ce3/0d53/158ee46cb3c761c61a856c81fa25e3d3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjpHiwoPpSxrIqONbAEKMY7cd5SeM~f7YI5Q9CMcbGAfz-oE2B29PTArDwWfATQlYdqbubgzBthvqhk-zS4TmX9q1TgzWob6aDdPENEWfaQ6PjnCBHQTtLWcT2tEdjH6GsFxKA9OgJG8vfShQW8XCyXoc7xcsCILPcHUu~j82Tg3rdolJp5KDmOcWyk~5TUffDK5ezt1wd85una9X8ylLpU1Mij2qQfOF38TxDeJMSyeyhHryKDdTXUnhOjDVuxEEMrYY7Bci99ioSzdyFitzierYBqA~ltQCGq8mmB43BkXmwAW2xpz-MhfbK0d2R-2S1NAoY-T4jsTaSPBzSlSTA__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/168e/0d8b/0dae730af265a00923a44de9dccaf8ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGZIQqXOmjZjyxZYTsGDezsUn2~0Z7XDlIaSsqnqNtf8j1eS9QOlWq9FUBZyPzUXFLMsMpPVqKSYl9fIzN37bk222HjKkbQICIkpaXN2G-bAosZX9xZIKhcVFZORIe3WEj48JrU~6B2UR2v6V-ZA~VZBDn8ETcCoY~59BC0zqK9NKeNa2whWjHfETaiA4zIgeb7PhImrc7HTmZ1xJ3ZRHEDyjCmZ16J6h~kKkWAaAhAGKro7yoHmMRtcPITxR8G0P1r3-CkHrW5aHvzgz3Bvdt8akZuss-VyNYA7dOTigPsUSal5-gxkZZK4jQi0PCuPNMtQ1pbRtQYC2pENEr4VuQ__" alt="Mobile Image" />
                                    <img src="https://s3-alpha-sig.figma.com/img/86a3/e759/9638dc3feae3528df3be3ecc29bf19d1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cszVIzlYQKpb3xBFjedg2l-fC6KSfSIn~M3GKmKHKTspWBJ4~FniNDE7ajcq2WeGqOXce5N0WlgeCOVRgfuKGf~n2U0d81n1fVU8rBLARipm3Q72G-bzBdnwVQM9NAirIGEgqblN6Pp4fykBjiBzsvw--LrI5pb4EBA9kWTKFEirQGdrlfGX12uNDbtHJSAkZP4r6uiNgDAs4QQwuI1cBEvrgOUeU1gdzzNTZ7J9iQaauzhc-MQ40o~IygO4XM3pCXuuWu1dVYWKZYI1A6p588XzBmu0yNoeSMMplQbWfwBBkSRCwyDYCaqY0nT2TU3SFBzTIu-DDgqmIsWh4gCiBw__" alt="Mobile Image" />
                                    </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Page9;

