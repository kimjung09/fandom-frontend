import React from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg';


function Body() {

    return (
        <>
       <div className="SubBody-Container">
                <h1>LIVE : 00:00:00:00</h1>
                  <div className="Container"  >
                          <img className="Image"  />
                       <div className="Description">
                                <h2>제목</h2>
                           <p>구매하시려는 수량을 입력해주세요</p>
                        <div className="ButtonContainer">
                            <input type="text" />
                            <button type="button">
                                BID-BTN
                            </button>
                        </div>
                           <form className="TableContainer">
                               <table className="Table">
                                   <td>
                                       <tr>
                                           <th className="bold">Amount</th>
                                           <th>Usd price</th>
                                           <th>time</th>
                                           <th>bidding</th>
                                       </tr>
                                       <tr>
                                           <th className="bold"><i className="fas fa-user"></i>100.11 SOL</th>
                                           <th>$3,333</th>
                                           <th>1 hour ago</th>
                                           <th>0x2732300...</th>
                                       </tr>
                                       <tr>
                                           <th className="bold"><i className="fas fa-user"></i>100.11 SOL</th>
                                           <th>$3,333</th>
                                           <th>1 hour ago</th>
                                           <th>0x2732300...</th>
                                       </tr>
                                       <tr>
                                           <th className="bold"><i className="fas fa-user"></i>100.11 SOL</th>
                                           <th>$3,333</th>
                                           <th>1 hour ago</th>
                                           <th>0x2732300...</th>
                                       </tr>
                                       <tr>
                                           <th className="bold"><i className="fas fa-user"></i>100.11 SOL</th>
                                           <th>$3,333</th>
                                           <th>1 hour ago</th>
                                           <th>0x2732300...</th>
                                       </tr>
                                       <tr>
                                           <th className="bold"><i className="fas fa-user"></i>100.11 SOL</th>
                                           <th>$3,333</th>
                                           <th>1 hour ago</th>
                                           <th>0x2732300...</th>
                                       </tr>
                                   </td>
                               </table>
                           </form>
                       </div>
                  </div>
                   <button type="button" className="Item-Left" >
                       <CgChevronLeft size={"48px"}/>
                   </button>
                   <button type="button" className="Item-Right" >
                       <CgChevronRight size={"48px"}/>
                   </button>
               </div>
        </>
    )
}

export default Body;