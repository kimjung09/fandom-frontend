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
    const [inputAmount, setInputAmount] = useState('')

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
        // page에 대한 id 값 Number라는 변수에 matching
        const pageId = Number(match.params.id);
        // Slider 현재 값을 배열 형태로 선언
        let tmpCurrentSlider = [];

        // iLoop = 페이지 네이션될 Loop값 기본 0 ; page값이 6개보다 적다면 Loop증가
        for (let iLoop = 0;iLoop < 6;iLoop++) {
            // 증가하는 PageSlider에 아이템 컴포넌트 id값에 - 1 , page를 Slider할때마다 현재 페이지를 나타내는 아이콘을 변환
            tmpCurrentSlider[iLoop] = iLoop === (pageId - 1) ? '/images/icon/page-on1.png' : '/images/icon/page-off1.png';
        }
        setCurrentSlider(tmpCurrentSlider);
    }

    // 페이지를 이동시킬수 있는 GoPage 함수
    const goPage = (params, e) => {
        // pageId 값을 Number 변수에 matching
        const pageId = Number(match.params.id)
        // pageId 가 13 처음 페이지이거나 마지막 페이지 에서 slide를 동작할 경우 경고창
        if (pageId === 13 && params === 12) {
            alert("처음페이지")
        }

        // pageId 가 1페이지 -1 페이지로 이동할 경우 6번째 페이지로 돌아감
        if (pageId === 1 && params === -1) {
            params = 6;
        }
        // 6번째 상품페이지 에서 1페이지로 슬라이드 할 경우 초기 페이지로 돌아감
        else if (pageId === 6 && params === 1) {
            params = 1;
        } else {
            // 페이지를 이동할때마다 PageId 값에 + parms
            params = pageId + params;
        }
        // 서브페이지에서 슬라이드할때마다 fandom/parmas  해당하는 id로 전환된다.
        history.push(`/fandom/${params}`);
    }

    // Page
    const movePage = (pageId) => {
        // window.location 을 이용해 현재 페이지값을 나태내줌
        window.location.href = `/fandom/${pageId}`;
        // history.push(`/fandom/${pageId}`);
        // initSlider();
    }

    if (nftId !== match.params.id) {
        setNftId(match.params.id);
        initSlider();
    }

    const asyncData = useAsync(getNftInfo, [nftId]);
    const item = asyncData.result;


    const bid = async () => {
        if (!item.auction_address) {
            return;
        }
        if (isNaN(inputAmount) || inputAmount === '') {
            return;
        }
        await bidAction(item.auction_address, inputAmount);
    }

    const withdraw = async () => {
        await withdrawAction(item.auction_address);
    }

    const buy = async () => {
        await buyAction(item.auction_address, item.nft_address, buyIndex);
    }

    if (asyncData.status === 'success') {
        if (item.contract_type === 'BUY') {
            getBuyIndex(item.auction_address).then(res => {
                setBuyIndex(res);
            })
        } else {
            // console.log(item)
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
                                <Timer/>
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
                                        bidStatus ? //나중에 바꿔줘야함 일단 !userAccount
                                            <div className="ButtonContainer">
                                                <div className="input">
                                                    <input type="text" name="inputNum" placeholder="BNB"
                                                           value={inputAmount}
                                                           onChange={(e) => setInputAmount(e.target.value)}/>
                                                </div>
                                                <div className="btn">
                                                    <button type="button" style={{fontSize:'16px'}} className={userAccount ? '' : ''}
                                                            onClick={openModal}>
                                                        {/*disabled-btn*/}
                                                        THAM GIA ĐẤU GIÁ NGAY BÂY GIỜ
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
                                                    // onClick={openModal}
                                                        className={buyIndex ? 'disabled-btn' : 'disabled-btn'}
                                                >
                                                    MUA NGAY
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
                                        <PopupBuy item={item} buyIndex={buyIndex} closeModal={closeBuyModal}/>
                                    </Modal>
                                    <Modal showModal={showBidModal}>
                                        <PopupBid item={item} closeModal={closeBidModal}/>
                                    </Modal>
                                </div>
                                {/* Left 버튼 클릭시 현재 GoPage값에 -1 이 감소되 이전 페이지로 슬라이드 */}
                                <div className="left-btn">
                                    <button type="button" onClick={(e) => goPage(-1, e)}>
                                        <img src="/images/icon/left_off.png"/>
                                    </button>
                                </div>
                                {/* Right 버튼 클릭시 현재 GoPage값에 +1 이 증가되 다음 페이지로 슬라이드 */}
                                <div className="right-btn">
                                    <button type="button" onClick={(e) => goPage(1, e)}>
                                        <img src="/images/icon/right_off.png"/>
                                    </button>
                                </div>
                            </div>

                            {/* 현재 페이지를 알려주는 pagenation */}
                            <div className="pagination">
                                {/* currentSlide에 map함수를 돌려서  */}
                                {currentSlider.map((res, index) =>
                                    <span onClick={() => movePage(index + 1)} key={'pageKey' + index}><img
                                        src={currentSlider[index]}/></span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* bottom 설명리스트 */}
                    <div className="bottom-container" id="Story">
                        {
                            document.body.offsetWidth > 850 ?
                                <div className="bottom-content-box">
                                    <div className="bottom-content">
                                        <div className="left"
                                             dangerouslySetInnerHTML={{__html: item.first_description}}>
                                        </div>
                                        {
                                            item.contract_type === 'BID' ?
                                                <img className="right" src={item.first_info_img}/> : ''
                                        }
                                    </div>

                                    <div className="bottom-content">
                                        <div className="left"
                                             dangerouslySetInnerHTML={{__html: item.second_description}}>
                                        </div>
                                        {
                                            item.contract_type === 'BID' ?
                                                <img className="right" src={item.second_info_img}/> : ''
                                        }
                                    </div>
                                </div>
                                :
                                <div className="bottom-content-box">
                                    <div className="bottom-content">
                                        <div className="left"
                                             dangerouslySetInnerHTML={{__html: item.first_description}}>
                                        </div>
                                    </div>

                                    <div className="bottom-content">
                                        <div className="left"
                                             dangerouslySetInnerHTML={{__html: item.second_description}}>
                                        </div>
                                    </div>
                                    {
                                        item.contract_type === 'BID' ?
                                            <>
                                                <div className="bottom-content">
                                                    <img className="right" src={item.first_info_img}/>
                                                </div>
                                                <div className="bottom-content">
                                                    <img className="right" src={item.second_info_img}/>
                                                </div>
                                            </> :
                                            ''
                                    }


                                </div>
                        }
                        {
                            // match.params.id 값이 1페이지를 제외한 모든 페이지에 matching
                            match.params.id > 1 ?
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