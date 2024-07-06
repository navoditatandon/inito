import React, { useEffect, useState } from 'react';
import './Page8.css'; 
import Content8 from './Content8';

const Page8 = () => {
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
                                <Content8 />
                            </div>
                            <div className='right-component'>
                                <div className="image-container">
                                    <img src="https://s3-alpha-sig.figma.com/img/7530/b9bc/c46e8e609b451f5d831e74819f321442?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TT3bKZ3MUdIv10VVKJSKiS1FgjK7Kax~7HVvtJSm7LyrwyQ8NdSbfi33xasj5u-wNpDS5Kg7ZNYfyV5wveokgtaE4awW4de-0KuIozTgD4mF4Hjcss~b7Ibimk4gbAToPgBlkm2sAwD3~swZW~R-ZS4IhLTzOMiRDnwQCwdhytFHccUXSWuiex89iyur9dKRGKkLxE90I0ba6tqrlX3LmKSSnffS2C922xFtb-dRlfvxxKes7vRAQa3i4LSXvpiawLgNcJikgpzfmZRW-KxMnl~IAeXvU01XV6lg2iYs3wmnhELoN5xRICvMJPMGrxtRc1cYjlaC4I4hnNqUQqT~9Q__" alt="Mobile Image" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="mobile-view">
                            <Content8 />
                            <div className="bottom-image-mobile">
                                <img src="https://s3-alpha-sig.figma.com/img/7530/b9bc/c46e8e609b451f5d831e74819f321442?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TT3bKZ3MUdIv10VVKJSKiS1FgjK7Kax~7HVvtJSm7LyrwyQ8NdSbfi33xasj5u-wNpDS5Kg7ZNYfyV5wveokgtaE4awW4de-0KuIozTgD4mF4Hjcss~b7Ibimk4gbAToPgBlkm2sAwD3~swZW~R-ZS4IhLTzOMiRDnwQCwdhytFHccUXSWuiex89iyur9dKRGKkLxE90I0ba6tqrlX3LmKSSnffS2C922xFtb-dRlfvxxKes7vRAQa3i4LSXvpiawLgNcJikgpzfmZRW-KxMnl~IAeXvU01XV6lg2iYs3wmnhELoN5xRICvMJPMGrxtRc1cYjlaC4I4hnNqUQqT~9Q__" alt="Lady Image" />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Page8;

