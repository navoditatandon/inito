import React from "react";
import FiveStars from "../svgs/FiveStars";
import './Page10.css';
import FourDots from "../svgs/FourDots";

const Page10 = () => {
    return (
            <div className="page-10-container">
                <FiveStars />
                <p>This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.</p>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                    <p style = {{color: "#8F8F8F", padding: "0px 10px 0 0"}}> Sunny </p>
                    <div style={{position: "center"}}><FourDots/></div>
                </div>
        </div>
    );
}

export default Page10;
