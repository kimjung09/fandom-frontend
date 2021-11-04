import React, {useEffect, useState} from 'react';
import "./style/Header.css";
import WalletBtn from "../../Wallet";



function Header() {
    return (
        <header>
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
        </header>
    )
}

export default Header;