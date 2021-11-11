import React from 'react';
import "./Header.css";
import WalletBtn from "../Wallet";
import {FaTiktok} from 'react-icons/fa'

function Header() {
    return (
        <div className="Header-container">
            <div>
                <a href="/">
                    <FaTiktok className="icon" />
                    fandom
                </a>
                <a
                    href=""
                    className="Header-H1"
                >
                    <FaTiktok className="icon" />

                    TikTok
                </a>

                <WalletBtn/>
            </div>
        </div>
    )
}

export default Header;