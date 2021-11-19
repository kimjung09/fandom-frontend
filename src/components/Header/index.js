import React, { useRef } from 'react';
import "./Header.css";
import WalletBtn from "../Wallet";

function Header() {
    const headerContainer = useRef();

    const handleScroll = () => {
        if (document.body.offsetWidth > 768) {
            return;
        }

        let obj = document.getElementById("header-container");
        if (window.scrollY === 0) {
            obj.classList.remove('bg');
        } else {
            const classLength = obj.classList.length;
            for(let i = 0; i < classLength; i++){
                if (obj.classList.item(i) === 'bg') {
                    return;
                }
            }
            obj.classList.add('bg');
        }
    }
    window.addEventListener('scroll', handleScroll, true);

    return (
        <div className="Header-container" id="header-container">
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
