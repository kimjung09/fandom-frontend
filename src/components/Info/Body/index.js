import React,{useState, useEffect} from "react";
import "./style/Body.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg';
import ItemList from '../../item.json'
import {MdLocalOffer} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineIssuesClose} from 'react-icons/ai'
import {getNftInfo, getNftList} from "../../../utils/axios";


const Body = ({match}) => {
    // ItemList.find(item => item.id === match.params.id);
    // itemList match 함수를 불러 ItemList json 파일에 배치된 id 값을 숫자로 불러 - 1씩 뺸 값을 불러온다.
    const item = ItemList[parseInt(match.params.id) - 1];

    ItemList.find(item => item.id === match.params.data);


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
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = (event) => {
        setShowPopup(event.target.value);
    }
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(60);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }

            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }

            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [hours,minutes, seconds]);



    return (
        <>
            <div className="background">
                <div className="SubBody-Container" onClick={() => onSetIsVisible(true)} >
                    <h1><span>LIVE</span>  {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    <div className="Container">
                        <img className="Image"
                             src={item.img}/>
                        <div className="Description">
                            <h2>{item.title}</h2>
                            <p>{item.subTitle}</p>
                            <div className="ButtonContainer">
                                <input type="text"  name='inputNum' placeholder="BSC"/>
                                <button type="button" onClick={openModal} value='false'>
                                <span>
                                    <MdLocalOffer />
                                </span>Make Offer
                                </button>
                            </div>

                            <form>
                                <table>
                                    <thead>
                                    <tr>
                                        <th className="bold">Amount</th>
                                        <th>Usd price</th>
                                        <th>time</th>
                                        <th>bidding</th>
                                    </tr>
                                    </thead>
                                    {ItemList.map((res,index) =>
                                        <tbody key={index}>
                                        <tr>
                                            <th className="bold"><i className="fas fa-user"></i>{res.amount}</th>
                                            <th>{res.price}</th>
                                            <th>{res.time}</th>
                                            <th className="bold"><i className="fas fa-user"></i>{res.amount}</th>
                                        </tr>
                                        </tbody>
                                    )}
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
                            {
                                showPopup ? (
                                    <div className="popup">
                                        <div className="popup_inner">
                                            dsadsdk
                                        </div>
                                    </div>
                                ): null}
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
            </div>
        </>
    )
}

export default Body;