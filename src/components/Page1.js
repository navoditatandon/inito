import React, { useEffect, useState } from "react";
import FiveStars from "../svgs/FiveStars";
import "./Page1.css"; // Import CSS file

const Page1 = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [opacity, setOpacity] = useState(0); // State for opacity

    useEffect(() => {
        // Function to update isMobile state based on window width
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        // Initial call to set isMobile state on component mount
        updateIsMobile();

        // Event listener to update isMobile state on window resize
        window.addEventListener("resize", updateIsMobile);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateIsMobile);
        };
    }, []);

    // Update image URL based on isMobile state
    useEffect(() => {
        const newImageUrl = isMobile
            ? "https://cdn.inito.com/inito_website/v2_main_hero_mobile.png"
            : "https://cdn.inito.com/inito_website/v2_main_hero_desktop.png";
        setImageUrl(newImageUrl);
    }, [isMobile]);

    // Update opacity to make the image visible once loaded
    useEffect(() => {
        if (imageUrl) {
            setOpacity(1); // Set opacity to 1 once image URL is set
        }
    }, [imageUrl]);

    return (
        <div className="page1">
            <div className="left-right-container">
                <div className="left-component">
                    <FiveStars /> Trusted By 20,000+ couples
                    <div style={{ lineHeight: "1", marginTop: "18px", fontSize: "45px", padding:"20px" }}>
                        <strong>Track your fertility</strong> <br/> 
                        <strong>hormones at home,</strong> <br/> 
                        <strong>in 10 minutes</strong>
                    </div> 
                    Get accurate results of <strong>Estrogen, LH, Progesterone metabolite PdG and FSH</strong>with Inito, the all-in-one, FDA-registered fertility monitor.
                    {!isMobile && (
                        <div className="button-container">
                            <button className="button">How does inito work</button>
                        </div>
                    )}
                </div>
                <div className="right-component" style={{ opacity }}>
                    {imageUrl && <img src={imageUrl} alt="Right Component Image" />}
                    {isMobile && (
                        <div className="button-container">
                            <button className="button">How does inito work</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="page1-footer">
                AS SEEN ON
                <div className="footer-icons">
                    <img src="https://cdn.inito.com/inito_website/press/Logo_Bloomberg@2x.png" alt="Bloomberg" />
                    {!isMobile && (
                        <>
                            <img src="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@2x.png" alt="Forbes India" />
                            <img src="https://cdn.inito.com/inito_website/press/Logo_The_Week@2x.png" alt="The Week" />
                        </>
                    )}
                    <img src="https://cdn.inito.com/inito_website/press/Logo_Washington@2x.png" alt="Washington" />
                    <img src="https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@2x.png" alt="Entrepreneur" />
                    {isMobile && (
                        <>
                            <img src="https://cdn.inito.com/inito_website/press/Logo_Forbes_India@2x.png" alt="Forbes India" />
                            <img src="https://cdn.inito.com/inito_website/press/Logo_The_Week@2x.png" alt="The Week" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page1;
