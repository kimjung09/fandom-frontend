import "App.css"
import React, {useState, useEffect} from "react";
import "./style/Info.css"
import "./style/Bottom.css"
import {AiOutlineClose} from 'react-icons/ai'
import {getNftInfo} from "../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "../Timer";
import {parseAccount, parseAmount, parseDate, parseUSD} from "../../utils/util";


const InfoPage = ({history, location, match}) => {
    const asyncData = useAsync(getNftInfo, [match.params.id]);
    const item = asyncData.result

    console.log(asyncData)

    const [currentSlider, setCurrentSlider] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        window.scrollTo(0, 0);
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

    const initSlider = () => {
        const pageId = Number(match.params.id);
        let tmpCurrentSlider = [];
        for (let iLoop = 0;iLoop < 6;iLoop++) {
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
        window.location.href = `/fandom/${pageId}`;
        // history.push(`/fandom/${pageId}`);
        // initSlider();
    }

    useEffect(() => {
        initSlider();
    }, []);

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
                            <Timer time="여기에 END DATE를 넣자"/>
                            <div className="Container">
                                <div className="Image">
                                    <img src={item.list_img}/>
                                </div>
                                <div className="Description">
                                    <h2>{item.title}</h2>
                                    <p className="subTitle">{item.sub_title}</p>
                                    <div className="ButtonContainer">
                                        <div className="input">
                                            <input type="text" name="inputNum" placeholder="BNB"/>
                                        </div>
                                        <div className="btn">
                                            <button type="button" onClick={openModal}>
                                                MUA NGAY
                                            </button>
                                        </div>
                                    </div>
                                    <table className="bid-table">
                                        <thead>
                                        <tr>
                                            <th className="bold">Amount</th>
                                            <th>Usd price</th>
                                            <th>time</th>
                                            <th>bidding</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {item.bid.map((value, index) =>
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
                                    {
                                        showModal ?
                                            <div className="Modal-wrap">
                                                <div className="Modal">
                                                    <button className="close-btn" onClick={closeModal}>
                                                        <AiOutlineClose size={40}/>
                                                    </button>
                                                    <h1>BID NOW</h1>
                                                    <p className="sub-title">{item.sub_title}</p>
                                                    <input type="text" name='bsc' placeholder="0.00001 BNB" required className="input"/>
                                                </div>
                                                <button className="bid-btn" type="button" onClick={closeModal}>
                                                    BID NOW
                                                </button>
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
                                    <span onClick={() => movePage(index + 1)} key={'pageKey' + index}><img src={currentSlider[index]}/></span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-container" id="Story">
                        <div className="bottom-content">
                            <div className="left" dangerouslySetInnerHTML={{__html: item.first_description}}>
                            </div>
                            <img className="right" src={item.first_info_img}/>
                        </div>

                        <div className="bottom-content">
                            <div className="left" dangerouslySetInnerHTML={{__html: item.second_description}}>
                            </div>
                            <img className="right" src={item.second_info_img}/>
                        </div>

                        {
                            match.params.id > 1 ?
                                <div className="info-bottom-area">
                                    <p style={{margin: 0}}>* Các điều khoản và điều kiện</p>
                                    1) Người thắng cuộc trong phiên đấu giá sẽ được thông báo qua Telegram trong
                                    vòng 7
                                    ngày làm việc sau khi kết thúc sự kiện. Sau khi nhận được tin nhắn, người trúng
                                    thầu
                                    phải điền chính xác địa chỉ và thông tin liên hệ trong vòng 7 ngày. Danh sách
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
                                    hoặc có sự thay đổi, ID bị xóa sau khi đã nhập trên Whitelist trước khi công bố.
                                    (Để biết thêm chi tiết, hãy tham khảo chính sách hoạt động và trang điều khoản
                                    sử
                                    dụng ở cuối trang web.)
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