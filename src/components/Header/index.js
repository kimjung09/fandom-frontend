import React from 'react';
import "./Header.css";
import WalletBtn from "../Wallet";

function Header() {
    return (
        <div className="Header-container">
            <div className="Header">
                <a href="/">
                    <img src="/images/logo.png" className="logo"/>
                </a>
                <WalletBtn/>
            </div>
        </div>
    )
}

export default Header;