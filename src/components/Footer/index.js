import React from "react";
import "./Footer.css"
import {FaHome, FaTwitter,FaTelegramPlane,FaDiscord} from 'react-icons/fa'

 function Footer() {
  return (
      <div className="Footer" id="Shop">
          <div>
              <a href="#">TERMS</a>
              <span></span>
              <a href="#">PRIVACY</a>
          </div>

          <div>
              <a href="https://www.fandom.io">
                  <span>
                   <FaHome color={"d7144e"} size={"30"}/>
                  </span>
              </a>
              <a href="https://twitter.com/Fandom_CRTR">
                   <span>
                   <FaTwitter color={"d7144e"} size={"30"}  />
                  </span>
              </a>
              <a href="https://t.me/Fandom_vietnam">
                    <span>
                   <FaTelegramPlane color={"d7144e"} size={"30"} />
                  </span>
              </a>
              <a href="https://medium.com/@Fandom_CRTR">
                   <span>
                   <FaDiscord color={"d7144e"} size={"30"}/>
                  </span>
              </a>

          </div>

      </div>
  )
}


export default Footer;

