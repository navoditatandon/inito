import React, { useEffect, useState } from 'react';
import './Page7.css'; 
import Content7 from './Content7';

const Page7 = () => {
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
                                 <div className="image-container">
                                    <img src="https://s3-alpha-sig.figma.com/img/54ec/9438/ab258946f5802c9bb01a282c4e6fbde6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUOeDdpfxVziuuWfD0phrmkQNPax3tizqnN~-mCPDQ-DcB-lt5YZ2FLzbLRw5m9YPtajCW08PNMJVaKBJp4d6t0iSch308n70R2TarI5lLmcVmJMURkzBE4D1pfrrrRtqnjt4jvO9fq0dAFGnYoNtfmZ9zJpa3PQmNiT49Xps3OmMO90pv~qSzhFDMa9W0491tYKtBjz1VEUoPCM7yW6677Da4RHprOE25CiNXw3TMv6VTtAoFkl2bApm4efmBqZKHEyeMFf-e-n9BfBmd50TGJ~mZWZ9F3~Ez7-s1o0vjqUGozbKTrjeiV6BquaEGljE6jpY3KixaETZm8BNpx2pg__" alt="Mobile Image" />
                                </div>
                            </div>
                            <div className='right-component'>
                                <Content7 />
                            </div>
                        </div>
                    )}

                    {/* Mobile View */}
                    {isMobile && (
                        <div className="mobile-view">
                            <Content7 />
                            <div className="bottom-image-mobile">
                                <img src="https://s3-alpha-sig.figma.com/img/54ec/9438/ab258946f5802c9bb01a282c4e6fbde6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUOeDdpfxVziuuWfD0phrmkQNPax3tizqnN~-mCPDQ-DcB-lt5YZ2FLzbLRw5m9YPtajCW08PNMJVaKBJp4d6t0iSch308n70R2TarI5lLmcVmJMURkzBE4D1pfrrrRtqnjt4jvO9fq0dAFGnYoNtfmZ9zJpa3PQmNiT49Xps3OmMO90pv~qSzhFDMa9W0491tYKtBjz1VEUoPCM7yW6677Da4RHprOE25CiNXw3TMv6VTtAoFkl2bApm4efmBqZKHEyeMFf-e-n9BfBmd50TGJ~mZWZ9F3~Ez7-s1o0vjqUGozbKTrjeiV6BquaEGljE6jpY3KixaETZm8BNpx2pg__" alt="Lady Image" />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Page7;

