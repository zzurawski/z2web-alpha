import React from "react";
import "../componenents/styles/home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="video-container">
                <video autoPlay muted loop className="test-video">
                    <source  src={require('../componenents/images/mountain.mp4')}  type="video/mp4" />
                </video>
                <div className="title">
                    <img alt="z-squared web design" className="z-logo" src={require('../componenents/images/zsquaredweblogo2.png')} />
                </div>
            </div>
        </div>
    )
}