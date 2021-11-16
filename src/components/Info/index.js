import "App.css"
import React, {useState} from "react";
import "./style/Info.css"
import "./style/Bottom.css"
import {CgChevronLeft, CgChevronRight} from 'react-icons/cg';
import {MdLocalOffer} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineIssuesClose} from 'react-icons/ai'
import {getNftInfo} from "../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "./Timer";
import {parseAccount, parseAmount, parseDate, parseUSD} from "../../utils/util";


const InfoPage = ({history, location, match}) => {
    const asyncData = useAsync(getNftInfo, [match.params.id]);
    const item = asyncData.result

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

    const goPage = (params, e) => {
        const pageId = Number(match.params.id)
        if (pageId === 1 && params === -1) {
            params = 6;
        } else if (pageId === 6 && params === 1) {
            params = 1;
        } else {
            params = pageId + params;
        }
        history.push(`/fandom/${params}`)
    }


    return (
        <>
            {item ?
                <div>
                    <div className="SubPage">
                        <div className="background">

                            <div className="SubBody-Container" onClick={() => onSetIsVisible(true)}>
                                <Timer time="여기에 END DATE를 넣자"/>
                                <div className="Container">
                                    <img className="Image"
                                         src={item.list_img}/>
                                    <div className="Description">
                                        <h2>{item.title}</h2>
                                        <p>{item.sub_title}</p>
                                        <div className="ButtonContainer">
                                            <input type="text" name='inputNum' placeholder="BSC"/>
                                            <button type="button" onClick={openModal} value='false'>
                                                <span>
                                                    <MdLocalOffer/>
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
                                                {item.bid.map((value, index) =>
                                                    <tbody key={index}>
                                                    <tr>
                                                        <th className="bold"><i
                                                            className="fas fa-user"></i>{parseAmount(value.amount)}
                                                        </th>
                                                        <th>{parseUSD(value.amount)}</th>
                                                        <th>{parseDate(value.block_time)}</th>
                                                        <th className="bold">
                                                            <i className="fas fa-user"></i>
                                                            {parseAccount(value.account)}
                                                        </th>
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
                                                            <AiOutlineClose size={40}/>
                                                            </span>
                                                        </button>
                                                        <p>{item.sub_title}</p>
                                                        <input type="text" name='bsc' placeholder="0.00001" required/>
                                                        <span className="number">
                                                             ETH
                                                         </span>
                                                        <span className="icon">
                                                            <AiOutlineIssuesClose/>
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
                                            ) : null}
                                    </div>
                                </div>
                                <button type="button" className="Item-Left" onClick={(e) => goPage(-1, e)}>
                                    <div>
                                        <CgChevronLeft size={"48px"}/>
                                    </div>
                                </button>
                                <button type="button" className="Item-Right" onClick={(e) => goPage(1, e)}>
                                    <div>
                                        <CgChevronRight size={"48px"}/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="Bottom-container" id="Story">
                        <form>
                            <div dangerouslySetInnerHTML={{__html: item.description}}>
                            </div>
                            <img src={item.first_info_img}/>
                            <img src={item.second_info_img}/>
                        </form>

                    </div>

                </div>
                : ''
            }
        </>

    )
}


export default InfoPage;