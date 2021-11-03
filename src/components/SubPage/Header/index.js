import React, {useEffect, useState} from 'react';
import "./style/Header.css";
import {BiWalletAlt} from 'react-icons/bi'



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
                <a href="Wallet">
                    <span>
                        <BiWalletAlt/>
                    </span>
                    Wallet
                </a>
            </div>
        </header>
    )
}

export default Header;