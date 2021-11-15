import React from 'react';
import "./Header.css";
import WalletBtn from "../Wallet";
import {FaTiktok} from 'react-icons/fa'
import {MdOutlineTipsAndUpdates} from 'react-icons/md'

function Header() {
    return (
        <div className="Header-container">
            <div>
                <a href="/">
                    <MdOutlineTipsAndUpdates className="icon" />
                    fandom
                </a>
                <a
                    href=""
                    className="Header-H1"
                >
                    <FaTiktok className="icon" />

                    Tik Tok
                </a>
                <WalletBtn/>
            </div>
        </div>
    )
}

export default Header;