import React from "react";
import './Page8.css'; 

const Content8 = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems : "center", padding : "90px 0 20px 0"}}>
           <h1>Get charts and actual values of your hormones</h1>
           <p style = {{color: "black"}}>Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.</p><br/>
           <p style = {{color: "black"}}>Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
           <button className="try-button">Get the inito kit</button>
        </div>
    )
}

export default Content8;