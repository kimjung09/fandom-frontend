import React, {useEffect, useState} from 'react';
import "./style/Header.css";
import {BiWalletAlt} from 'react-icons/bi'

import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

const NavLink = styled(LinkS)`
  color:#fff;
  margin: 40px 40px 0px 0px;
  font-size:28px;
  position: relative;
  float: left;
  text-transform: uppercase;
  z-index: 1;
`;

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