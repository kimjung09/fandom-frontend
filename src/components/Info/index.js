import "App.css"
import React, {useState, useEffect} from "react";
import "./style/Info.css"
import "./style/Bottom.css"
import {getNftInfo} from "../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "../Timer";
import PopupBuy from "../Popup/PopupBuy";
import PopupBid from "../Popup/PopupBid";
import Modal from '../Modal';

import {parseAccount, parseAmount, parseDate, parseUSD} from "../../utils/util";
import {bidAbleCheck, bidAction, buyAction, getBlockNumber, getBuyIndex, withdrawAction} from "../../utils/calls";
import {useSelector, useDispatch} from 'react-redux'



const InfoPage = ({history, location, match}) => {
    const [nftId, setNftId] = useState(null);
    const [currentSlider, setCurrentSlider] = useState([]);
    const [showBuyModal, setShowBuyModal] = useState(false);
    const openBuyModal = () => {
        setShowBuyModal(true);
    };
    const closeBuyModal = () => {
        setShowBuyModal(false);
    }
    const [showBidModal, setShowBidModal] = useState(false);
    const openBidModal = () => {
        setShowBidModal(true);
    };
    const closeBidModal = () => {
        setShowBidModal(false);
    }
    const openModal = () => {
        if (item.contract_type === 'BUY') {
            openBuyModal();
        } else {
            openBidModal();
        }
    }
    const [buyIndex, setBuyIndex] = useState('');
    const [bidStatus, setBidStatus] = useState(false)

    const userAccount = useSelector((state) => state.global.userAccount)

    const [isVisible, setIsVisible] = useState(false);
    const onSetIsVisible = (active) => {
        setIsVisible(false);
    }


    const initSlider = () => {
        const pageId = Number(match.params.id);
        let tmpCurrentSlider = [];
        for (let iLoop = 0; iLoop < 6; iLoop++) {
            tmpCurrentSlider[iLoop] = iLoop === (pageId - 1) ? '/images/icon/page-on1.png' : '/images/icon/page-off1.png';
        }
        setCurrentSlider(tmpCurrentSlider);
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
        history.push(`/fandom/${params}`);
    }

    const movePage = (pageId) => {
        history.push(`/fandom/${pageId}`);
    }

    if (nftId !== match.params.id) {
        setNftId(match.params.id);
        initSlider();
    }

    const asyncData = useAsync(getNftInfo, [nftId]);
    const item = asyncData.result;


    const bid = async () => {
        closeModal();
        if (!item.auction_address) {
            return;
        }
        if (isNaN(inputAmount) || inputAmount === '') {
            return;
        }
        await bidAction(item.auction_address, inputAmount);
    }

    const withdraw = async () => {
        closeModal();
        await withdrawAction(item.auction_address);
    }

    const buy = async () => {
        await buyAction(item.auction_address, item.nft_address, buyIndex);
    }
    console.log(asyncData)

    if (asyncData.status === 'success') {
        if (item.contract_type === 'BUY') {
            getBuyIndex(item.auction_address).then(res => {
                setBuyIndex(res);
            })
        } else {
            // console.log(item)
            // console.log('BID')
            bidAbleCheck(item.auction_address).then(res => {
                setBidStatus(res)
            })
        }
    }
    return (
        <>
            {item ?
                <div>
                    <div className="bid-btn-mobile">
                        <button type="button" onClick={openModal}>
                            MUA NGAY
                        </button>
                    </div>
                    <div className="SubPage">
                        <div className="SubBody-Container" onClick={() => onSetIsVisible(true)}>
                            <div className="sub-timer">
                                <Timer />
                            </div>
                            <div className="Container">
                                <div className="Image">
                                    <img src={item.list_img}/>
                                </div>
                                <div className="Description">
                                    <h2 dangerouslySetInnerHTML={{__html: item.title}}>
                                    </h2>
                                    <div className="subTitle" dangerouslySetInnerHTML={{__html: item.sub_title}}/>
                                    {item.contract_type === 'BID' ?
                                        !userAccount || bidStatus ?
                                            <div className="ButtonContainer">
                                                <div className="input">
                                                    <input type="text" name="inputNum" placeholder="BNB"
                                                           value={inputAmount}
                                                           onChange={(e) => setInputAmount(e.target.value)}/>
                                                </div>
                                                <div className="btn">
                                                    <button type="button" className={userAccount ? '': 'disabled-btn'} onClick={openModal}>
                                                        MUA NGAY
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <div className="ButtonContainer">
                                                <div className="btn">
                                                    <button type="button" onClick={withdraw}>
                                                        WITHDRAW
                                                    </button>
                                                </div>
                                            </div>
                                        :
                                        <div className="ButtonContainer">
                                            <div className="btn">
                                                <button type="button"
                                                        onClick={buy}
                                                        className={buyIndex ? '' : 'disabled-btn'}
                                                >
                                                    BUY NOW
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    <table className="bid-table">
                                        <thead>
                                        <tr>
                                            <th className="bold">Amount</th>
                                            <th>Usd price</th>
                                            <th>time</th>
                                            <th>{item.contract_type === 'BID' ? 'bidding' : 'buyer'}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {item.list.map((value, index) =>
                                            <tr key={index}>
                                                <td className="bold">
                                                    {parseAmount(value.amount)}
                                                </td>
                                                <td>{parseUSD(value.amount)}</td>
                                                <td>{parseDate(value.block_time)}</td>
                                                <td className="bold">
                                                    {parseAccount(value.account)}
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                    <Modal showModal={showBuyModal}>
                                        <PopupBuy item={item} closeModal={closeBuyModal}/>
                                    </Modal>
                                    <Modal item={item} showModal={showBidModal}>
                                        <PopupBid item={item} closeModal={closeBidModal}/>
                                    </Modal>
                                </div>
                                <div className="left-btn">
                                    <button type="button" onClick={(e) => goPage(-1, e)}>
                                        <img src="/images/icon/left_off.png"/>
                                    </button>
                                </div>
                                <div className="right-btn">
                                    <button type="button" onClick={(e) => goPage(1, e)}>
                                        <img src="/images/icon/right_off.png"/>
                                    </button>
                                </div>
                            </div>
                            <div className="pagination">
                                {currentSlider.map((res, index) =>
                                    <span onClick={() => movePage(index + 1)} key={'pageKey' + index}><img
                                        src={currentSlider[index]}/></span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-container" id="Story">
                        <div className="bottom-content-box">
                            <div className="bottom-content">
                                <div className="left" dangerouslySetInnerHTML={{__html: item.first_description}}>
                                </div>
                                {
                                    item.contract_type === 'BID' ?
                                        <img className="right" src={item.first_info_img}/> : ''
                                }
                            </div>

                            <div className="bottom-content">
                                <div className="left" dangerouslySetInnerHTML={{__html: item.second_description}}>
                                </div>
                                {
                                    item.contract_type === 'BID' ?
                                        <img className="right" src={item.second_info_img}/> : ''
                                }
                            </div>
                        </div>
                        {
                            item.contract_type === 'BID' ?
                                <div className="info-bottom-area">
                                    <p style={{fontSize: '12px', margin: 0, fontWeight: 'bold'}}>* Các điều khoản và
                                        điều kiện</p>
                                    <br/>
                                    <p style={{fontSize: '10px'}}>1) Người thắng cuộc trong phiên đấu giá sẽ được thông
                                        báo qua Telegram trong
                                        vòng 7
                                        ngày làm việc sau khi kết thúc sự kiện. Sau khi nhận được tin nhắn, người trúng
                                        thầu
                                        phải điền chính xác<br/>địa chỉ và thông tin liên hệ trong vòng 7 ngày. Danh
                                        sách
                                        này có
                                        thể sẽ bị hủy nếu thông tin không được nhập đầy đủ trong khoảng thời gian quy
                                        định.
                                        <br/><br/>
                                        2) Sau đó, lịch trình phân phối sẽ được thông báo qua kênh Telegram chính thức
                                        của
                                        Fandom.
                                        <br/><br/>
                                        3) Nếu người thắng cuộc thay đổi hoặc xóa Twitter và / hoặc ID Telegram đã nhập
                                        trên
                                        Whitelist trước khi công bố kết quả sự kiện và / hoặc nhận giải, giải thưởng có
                                        thể
                                        bị hủy.
                                        <br/><br/>
                                        4) Fandom không chịu trách nhiệm về những bất lợi do thông tin gửi không chính
                                        xác
                                        hoặc có sự thay đổi, ID bị xóa sau khi đã nhập trên Whitelist trước khi công bố.<br/>
                                        (Để biết thêm chi tiết, hãy tham khảo chính sách hoạt động và trang điều khoản
                                        sử
                                        dụng ở cuối trang web.)
                                    </p>
                                </div>
                                : ''
                        }

                    </div>
                </div>
                : ''
            }
        </>
    )
}

export default InfoPage;