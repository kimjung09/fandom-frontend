import React, {useState, useEffect} from "react";
import "./style/Modal.css"

const Index = ({ showModal, children }) => {
    return (
        <>
            {
                showModal &&
                <div className="Modal">
                    <div className="content">
                        {children}
                    </div>
                </div>
            }
        </>
    )
}
export default Index;
