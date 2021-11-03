import React, {useState} from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg'

function Body({ id, img }) {
    const [clock, setClock] = useState("");

    const getTime = () => {
        const date = new Date();
        const hours = date.getHours();
        let minutes = date.getMinutes();
        let sec = date.getSeconds();
        let currentTime = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${sec < 10 ? `0${sec}` : sec}`;

        setClock(currentTime);
    }
    React.useEffect(() => {
        setInterval(getTime, 1000);
    });


    return (
        <>
       <div className="SubBody-Container" id="Shop">
               <div>
                   <h1>
                    LIVE {clock}
                   </h1>

                   <form>
                     <h2>제목 title 제목 title title 제목 title 제목 title 제목 title 제목</h2>
                       <form>
                           <p className="SubBody-Container Description">구매하시려는 수량을 입력해주세요</p>
                        <div className="SubBody-Container ButtonContainer">
                            <input type="text" className="SubBody-Container ButtonContainer body"/>
                        </div>
                       </form>
                       <button type="button"  className="SubBody-Container Button-BTN">
                           BID-BTN
                       </button>
                       <form className="SubBody-Container Form">
                           <table className="userTable">
                               <tr>
                                   <th>이름</th>
                                   <th>직업</th>
                               </tr>
                               <tr>
                                   <td>정호</td>
                                   <td>개발자</td>
                               </tr>
                               <tr>
                                   <td>기석</td>
                                   <td>개발자</td>
                               </tr>
                           </table>


                           <table>
                               <td>
                                   <tr>
                                   <th>Amount</th>
                                   <th>Amount</th>
                                   <th>Amount</th>
                                   <th>Amount</th>
                                   </tr>
                               </td>
                           </table>
                           <table>
                               <td>
                                   <tr>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                   </tr>
                               </td>

                           </table>
                           <table>
                               <td>
                                   <tr>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                   </tr>
                               </td>

                           </table>
                           <table>
                               <td>
                                   <tr>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                   </tr>
                               </td>

                           </table>
                           <table>
                               <td>
                                   <tr>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                       <th>Amount</th>
                                   </tr>
                               </td>

                           </table>
                       </form>
                   </form>
                   <button type="button" className="SubBody-Container Item-Left" >
                       <CgChevronLeft size={"48px"}/>
                   </button>
                   <button type="button" className="SubBody-Container Item-Right" >
                       <CgChevronRight size={"48px"}/>
                   </button>
               </div>
           </div>

        </>
    )
}

export default Body;