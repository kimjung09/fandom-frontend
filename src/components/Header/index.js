import React from 'react';
import "./Header.css";
import WalletBtn from "../Wallet";

function Header() {
    return (
        <div className="Header-container">
            <div>
                <a href="/">Home
                </a>
                <a
                    href="Shop"
                    className="Header-H1"
                >
                    Shop
                </a>
                <WalletBtn/>
            </div>
        </div>
    )
}

export default Header;