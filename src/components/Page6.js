import React, { useEffect, useState } from 'react';
import './Page6.css'; 
import Content5 from './content5';

const Page6 = () => {
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
        <div className="page6-outline">
            <div className='page6-container'>
                    {/* Web View */}
                    {!isMobile && (
                        <div className="web-view">
                            <div className='left-component'>
                            <Content5 />
                            </div>
                            <div className='right-component'>
                                <div className="image-container">
                                        <img src="https://s3-alpha-sig.figma.com/img/8adc/2fed/45343031db68c06ee46c807afe1d3245?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ws-stVOTT9tL1FwBSX9kzQUSg70rRHhWXmShKODRdJ4i~358H5nOlkmHA-lqKQ3avoWXsQAu9Rubde-0sYLGHMUdnJ6onS3lg4YHO35mwmzc25VD7yE8S-j2S2GAfdlUc8r9yP9eC7Xk3rgx7w9LGrMXsn1GjHNV9739H1KzW1FgJ5MU-23uQ4zNvhSGeuoV7AeFdwnEcBnX5lmC9vUkZ5I49d5Xe3Txw6HZRQ80o~VXPWYhiRgnYP-x0SjXMLeBZGAI7CTw70ExK13RcQKpmsrcgISnk8R2rqJRsNADFwMSNcWIJzeokLc8Q0Yeq2uGe~-p40hBFDM0mBin2TU7fw__" alt="Lady Image" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="mobile-view">
                            <Content5 />
                            <div className="bottom-image">
                                <img src="https://s3-alpha-sig.figma.com/img/8adc/2fed/45343031db68c06ee46c807afe1d3245?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ws-stVOTT9tL1FwBSX9kzQUSg70rRHhWXmShKODRdJ4i~358H5nOlkmHA-lqKQ3avoWXsQAu9Rubde-0sYLGHMUdnJ6onS3lg4YHO35mwmzc25VD7yE8S-j2S2GAfdlUc8r9yP9eC7Xk3rgx7w9LGrMXsn1GjHNV9739H1KzW1FgJ5MU-23uQ4zNvhSGeuoV7AeFdwnEcBnX5lmC9vUkZ5I49d5Xe3Txw6HZRQ80o~VXPWYhiRgnYP-x0SjXMLeBZGAI7CTw70ExK13RcQKpmsrcgISnk8R2rqJRsNADFwMSNcWIJzeokLc8Q0Yeq2uGe~-p40hBFDM0mBin2TU7fw__" alt="Lady Image" />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Page6;

