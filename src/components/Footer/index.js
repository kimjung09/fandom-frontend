import React from "react";
import "./Footer.css"
import {FaHome, FaTwitter,FaTelegramPlane} from 'react-icons/fa'
import {SiMedium} from 'react-icons/si'

/** SiMedium 4번쨰 Footer Icon Medium 아이콘 **/

function Footer() {
  return (
      <div className="Footer">
          <div className="container">
              <a href="#">TERMS</a>
              <span></span>
              <a href="#">PRIVACY</a>
          </div>
          <div className="bottom">
              <a href="https://www.fandom.io">
                  <span>
                   <FaHome color={"#d90a42"} size={"30"}/>
                  </span>
              </a>
              <a href="https://twitter.com/Fandom_CRTR">
                   <span>
                   <FaTwitter color={"#6881d8"} size={"30"}  />
                  </span>
              </a>
              <a href="https://t.me/Fandom_vietnam">
                    <span>
                   <FaTelegramPlane color={"#fffff"} size={"30"} />
                  </span>
              </a>
              <a href="https://medium.com/@Fandom_CRTR">
                   <span>
                   <SiMedium color={"#fffff"} size={"30"}/>
                  </span>
              </a>
          </div>

      </div>
  )
}

export default Footer;
