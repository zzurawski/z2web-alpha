import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img alt="Z-SQUARED WEB DESIGN" src={require('../images/zsquaredweblogo2.png')} className="logo-image"/>
            </div>

            <div className="social-media-links">
                <a href="www.facebook.com"><img className="sm-link" alt="facebook" src={require('../images/fb-logo.png')} /></a>
                <a href="www.instagram.com"><img className="sm-link" alt="instagram" src={require('../images/insta.png')} /></a>
                <a href="www.linkedin.com"><img className="sm-link" alt="linkedin" src={require('../images/linkedin.png')} /></a>
                <a href="www.youtube.com"><img className="sm-link" alt="youtube" src={require('../images/yt-icon2.png')} /></a>
            </div>

            <div className="copyright">
                <p>
                ©2023 Z-SQUARED WEB DESIGN. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    )
}