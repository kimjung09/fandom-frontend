import React,{useState, useEffect} from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg';
import ItemList from '../../item.json'
import {MdLocalOffer} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineIssuesClose} from 'react-icons/ai'


const Body = ({match,props}) => {
    // ItemList.find(item => item.id === match.params.id);
    // itemList match 함수를 불러 ItemList json 파일에 배치된 id 값을 숫자로 불러 - 1씩 뺸 값을 불러온다.
    const item = ItemList[parseInt(match.params.id) - 1];


    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    }

    const [isVisible, setIsVisible] = useState(false);
    const onSetIsVisible = (active) => {
        setIsVisible(false);
    }





    return (
        <>

            <div className="SubBody-Container" onClick={() => onSetIsVisible(true)} >
                <h1><span>LIVE</span> 00:00:00:00</h1>
                <div className="Container">
                    <img className="Image"
                         src={item.img}/>
                    <div className="Description">
                        <h2>{item.title}</h2>
                        <p>{item.subTitle}</p>
                        <div className="ButtonContainer">
                            <input type="text"  name='inputNum' placeholder="BSC"/>
                            <button type="button" onClick={openModal}>
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
                        {
                            showModal ?
                                <div className="Modal">
                                 <div>
                                    <h1>bid now</h1>
                                    <button onClick={closeModal}>
                                        <span>
                                        <AiOutlineClose size={40} />
                                        </span>
                                    </button>
                                    <p>{item.subTitle}</p>
                                    <input type="text"  name='bsc'  placeholder="0.00001" required/>
                                     <span className="number">
                                         ETH
                                     </span>
                                     <span className="icon">
                                     <AiOutlineIssuesClose />
                                     </span>
                                    <button type="button" onClick={closeModal}>
                                        Make Offer
                                    </button>
                                 </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
                <button type="button" className="Item-Left">
                    <div>
                        <CgChevronLeft size={"48px"}/>
                    </div>
                </button>
                <button type="button" className="Item-Right">
                    <div>
                        <CgChevronRight size={"48px"}/>
                    </div>
                </button>
            </div>
        </>
    )
}

export default Body;