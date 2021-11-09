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
              <a href="#">
                  <span>
                   <FaHome color={"#db154a"} size={"23"}/>
                  </span>
              </a>
              <a href="#">
                   <span>
                   <FaTwitter color={"#1e9cf1"} size={"23"}/>
                  </span>
              </a>
              <a href="#">
                    <span>
                   <FaTelegramPlane color={"#fff"} size={"23"} />
                  </span>
              </a>
              <a href="#">
                   <span>
                   <FaDiscord color={"#fff"} size={"23"}/>
                  </span>
              </a>
              <a href="#">
                  <span>
                   <FaHome color={"#000000"} size={"23"}/>
                  </span>
              </a>
          </div>

      </div>
  )
}


export default Footer;

