import React from "react";
import '../componenents/styles/contact.css';
import { Card } from "semantic-ui-react";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <Card>
                    <Card.Header className="contact-title">Z<sup>2</sup> Web Design</Card.Header>
                    <Card.Meta>Zachariah Zurawski</Card.Meta>
                    <Card.Content>
                        <img alt="z-squared logo" src={require('../componenents/images/zsquaredweblogo2.png')} className="logo-contact"/>
                        <ul>
                            <li>EMAIL ADDRESS: 
                                <br></br><br></br>
                                <a href="mailto:zsquaredwebdesign@gmail.com">zsquaredwebdesign@gmail.com</a>
                            </li>
                            <br></br><br></br>
                            <li>PHONE NUMBER: 
                                <br></br><br></br><a href="call:4407814320">(440)-781-4320</a>
                            </li>
                            <br></br><br></br>
                            <li>GITHUB / CODING: 
                                <br></br><br></br><a href="www.github.com/zzurawski">zzurawski</a>
                            </li>
                        </ul>
                    </Card.Content>
                </Card>
            </div>
        </div>
    )
}