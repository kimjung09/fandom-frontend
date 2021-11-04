import React  from 'react';
import "./Header.css";
import {BiWalletAlt} from 'react-icons/bi'

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
              <a href="Wallet">
                    <span className="icon"><BiWalletAlt/></span>
                  Wallet
              </a>
          </div>
      </div>
  )
}

export default Header;