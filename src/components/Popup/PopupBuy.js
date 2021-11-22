import React, {useState, useEffect} from "react";
import "./style/Popup.css"
import {AiOutlineClose} from 'react-icons/ai'
import {buyAction} from "../../utils/calls";

const PopupBuy = ({item, buyIndex, closeModal}) => {
    const procBuy = () => {
        console.log(item);
    }

    const buy = async() => {
        await buyAction(item.auction_address, item.nft_address, buyIndex);
    }

    return (
        <>
            <div className="Popup-wrap">
                <div className="Popup">
                    <button className="close-btn" onClick={() => closeModal()}>
                        <AiOutlineClose size={40}/>
                    </button>
                    <h1>MUA NGAY</h1>
                    <p className="sub-title">Giới hạn mua mỗi khách hàng một lần</p>
                    {/*<input type="text" placeholder="0.00001 BNB" required className="input"/>*/}
                    <div className="desc-tit">* Thông báo trước khi tham gia đấu giá</div>
                    <ul className="desc">
                        <li>Hủy hoặc hoàn trả không được phép sau khi tham gia đấu giá.</li>
                        <li>
                            Số tiền đấu giá sẽ bị đóng băng cho đến khi kết thúc đấu giá.<br/>
                            Nếu bạn không trở thành người thắng cuộc trong phiên đấu giá,<br/>
                            bạn sẽ nhận được toàn bộ tiền hoàn lại khi đăng ký KHIẾU NẠI.
                        </li>
                        <li>3) Đối với người chiến thắng, số tiền đấu thầu là không thể hoàn lại và có thể yêu cầu NFT thông qua ứng dụng CLAIM.</li>
                    </ul>
                </div>
                <button className="bid-btn" type="button" onClick={buy}>
                    MUA NGAY
                </button>
            </div>
        </>
    )
}
export default PopupBuy;
