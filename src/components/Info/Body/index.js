import React from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg';
import ItemList from '../../item.json'
import {MdLocalOffer} from 'react-icons/md'

const Body = ({match}) => {
    // ItemList.find(item => item.id === match.params.id);
    console.log(match, "hihih")

    // itemList match 함수를 불러 ItemList json 파일에 배치된 id 값을 숫자로 불러 - 1씩 뺸 값을 불러온다.
    const item = ItemList[parseInt(match.params.id) - 1];

    return (
        <>
            <div className="SubBody-Container">
                <h1><span>LIVE</span> 00:00:00:00</h1>
                <div className="Container">
                    <img className="Image"
                         src={item.img}/>
                    <div className="Description">
                        <h2>{item.title}</h2>
                        <p>{item.subTitle}</p>
                        <div className="ButtonContainer">
                            <input type="text"  name='name' placeholder="ETH"/>
                            <button type="button">
                                <span>
                                    <MdLocalOffer />
                                </span>Make Offer
                            </button>
                        </div>
                        <form >
                            <table>
                                <thead>
                                <tr>
                                    <th className="bold">Amount</th>
                                    <th>Usd price</th>
                                    <th>time</th>
                                    <th>bidding</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className="bold"><i className="fas fa-user"></i>{item.amount}</th>
                                    <th>{item.price}</th>
                                    <th>{item.time}</th>
                                    <th>{item.bidding}</th>
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
                                    <th className="bold"><i className="fas fa-user"></i>{item.amount}</th>
                                    <th>{item.price}</th>
                                    <th>{item.time}</th>
                                    <th>{item.bidding}</th>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                <button type="button" className="Item-Left">
                    <span> <CgChevronLeft size={"48px"}/></span>
                </button>
                <button type="button" className="Item-Right">
                    <span><CgChevronRight size={"48px"}/></span>
                </button>
            </div>
        </>
    )
}

export default Body;