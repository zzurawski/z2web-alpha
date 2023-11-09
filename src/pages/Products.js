import React from "react";
import "../componenents/styles/social.css";

export default function Social() {
    return (
        <div className="social-container">
            <div className="social-heading">
                <h1>Examples of Products</h1>
                <p>Each website is customized based on client's requests and branding preferences</p>
            </div>
            <div className="card-container">
            <div className="product-card">
                <h3>PERSONAL PAGE</h3>
                <video muted autoPlay loop>
                    <source src={require('../componenents/images/rompala.webm')} type="video/webm" />
                </video>
            </div>

            <div className="product-card">
                <h3>BUSINESS PAGE EXAMPLE</h3>
                <img alt="Business Page Example" src={require('../componenents/images/dd214screenshot.png')}></img>
            </div>

            <div className="product-card">
                <h3>ECOMMERCE EXAMPLE</h3>
                <img alt="Shopping Page Example" src={require('../componenents/images/lfascreenshot.png')}></img>
            </div>
            </div>
        </div>
    )
}