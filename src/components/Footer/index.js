import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div className="Footer" id="Shop">
            <div className="privacy">
                <a href="#">TERMS</a>
                <span className="bar"></span>
                <a href="#">PRIVACY</a>
            </div>
            <div className="sns-btn">
                <a href="https://www.fandom.io">
                    <img src="/images/sns1.png"/>
                </a>
                <a href="https://twitter.com/Fandom_CRTR">
                    <img src="/images/sns2.png"/>
                </a>
                <a href="https://t.me/Fandom_vietnam">
                    <img src="/images/sns3.png"/>
                </a>
                <a href="https://medium.com/@Fandom_CRTR">
                    <img src="/images/sns4.png"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
