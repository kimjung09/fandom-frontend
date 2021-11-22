import React, {useState, useEffect} from "react";
import "./style/Popup.css"
import {AiOutlineClose} from 'react-icons/ai'

const PopupMsg = ({title, msg, closeModal}) => {
    return (
        <>
            <div className="Popup-wrap">
                <div className="Popup">
                    <button className="close-btn" onClick={() => closeModal()}>
                        <AiOutlineClose size={20}/>
                    </button>
                    <p className="sub-title" style={{padding: '5px', fontSize: '16px'}}>{title}
                    </p>
                    <h1 style={{marginTop: '50px', fontSize: '24px'}}>{msg}</h1>
                </div>
            </div>
        </>
    )
}
export default PopupMsg;
