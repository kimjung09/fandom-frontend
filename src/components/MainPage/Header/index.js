import React, {useEffect, useState} from 'react';
import "./style/Header.css";
import {BiWalletAlt} from 'react-icons/bi'



function Header() {
  return (
      <div className="Header-container">
          <div>
              <a>Home</a>
              <a>
                  Shop
              </a>
              <a href="Wallet">
                  <span>
                  <BiWalletAlt/>
                  </span>
                  Wallet
              </a>
          </div>
      </div>
  )
}

export default Header;