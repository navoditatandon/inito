import React from "react";
import GreenTick from '../svgs/GreenTick';
import PurpleTick from '../svgs/PurpleTick';
import BlueTick from '../svgs/BlueTick';
import OrangeTick from '../svgs/OrangeTick';
import './Page4.css'; 

const Content4 = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems : "center", padding : "90px 0 20px 0"}}>
             <div className='heading'><strong>Never miss a day again<br/>with Inito</strong></div><br/>
                        Inito tracks up to 6 fertile days and confirms ovulation by <br/>
                        measuring all 4 hormones in just 10 minutes:<br/><br/>

                        <div style={{display: "flex"}}><GreenTick/>Estrogen, which rises 3-4 days before ovulation<br/></div>
                        <div style={{display: "flex"}}><PurpleTick/>LH, which surges 24-36 hours before ovulation<br/></div>
                        <div style={{display: "flex"}}><BlueTick/>PdG, which rises after ovulation<br/></div>
                        <div style={{display: "flex"}}><OrangeTick/>FSH, to track follicle growth</div>
        </div>
    )
}

export default Content4;