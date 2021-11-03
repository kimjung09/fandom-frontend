import React, {useState} from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg'


function  Body({ id, img }) {
console.log('aaa');
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
                   <h1>
                    LIVE {clock}
                   </h1>
                   <div className="Container">
                     <h2>제목 title 제목 title title 제목 title 제목 title 제목 title 제목</h2>
                       <img></img>
                       <form className="Description">
                           <p>구매하시려는 수량을 입력해주세요</p>
                        <div className="ButtonContainer">
                            <input type="text" />
                        </div>
                       </form>
                       <button type="button" className="Bid-BTN">
                           BID-BTN1
                       </button>
                       <form className="Table">
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
                   </div>
                   <button type="button" className="Item-Left">
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