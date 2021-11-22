import React, {useState, useEffect} from "react";
import "./style/Popup.css"
import {AiOutlineClose} from 'react-icons/ai'

const PopupBuy = ({item, closeModal}) => {
    const procBID = () => {
        console.log(item);
    }

    return (
        <>
            <div className="Popup-wrap">
                <div className="Popup">
                    <button className="close-btn" onClick={() => closeModal()}>
                        <AiOutlineClose size={40}/>
                    </button>
                    <h1>THAM GIA ĐẤU GIÁ NGAY BÂY GIỜ</h1>
                    <p className="sub-title">MỨC GIÁ BẠN ĐƯA RA</p>
                    <input type="text" placeholder="0.00001 BNB" required className="input"/>
                    <div className="desc-tit">* Thông báo trước khi tham gia đấu giá</div>
                    <ul className="desc">
                        <li>Hủy hoặc hoàn trả không được phép sau khi tham gia đấu giá.</li>
                        <li>
                            Số tiền đấu giá sẽ bị đóng băng cho đến khi kết thúc đấu giá.<br/>
                            Nếu bạn không trở thành người thắng cuộc trong phiên đấu giá,<br/>
                            bạn sẽ nhận được toàn bộ tiền hoàn lại khi đăng ký KHIẾU NẠI.
                        </li>
                        <li>Đối với người chiến thắng, số tiền đấu thầu là không thể hoàn lại và có thể yêu cầu NFT thông qua ứng dụng CLAIM.</li>
                    </ul>
                </div>
                <button className="bid-btn" type="button" onClick={procBID}>
                    THAM GIA ĐẤU GIÁ NGAY BÂY GIỜ
                </button>
            </div>
        </>
    )
}
export default PopupBuy;
