import React from "react";
import "./style/Footer.css"
import {AiOutlineToTop} from 'react-icons/ai';
import {animateScroll as scroll} from 'react-scroll';


 function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
      <div className="Footer" id="Shop">
          <div>
              <a>TERMS</a>
              <a>PRIVACY</a>
              <img>
              </img>
              <img>
              </img>
              <img>
              </img>
              <img>
              </img>
              <img>
              </img>

          </div>
      </div>
  )
}


export default Footer;

