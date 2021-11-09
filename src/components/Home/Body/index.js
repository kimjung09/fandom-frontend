import React, {useEffect, useState} from "react";
import "./Body.css"
import "./Story.css"
import {FaPlay} from 'react-icons/fa'
import itemList  from '../../item.json';
import { detailPage } from "../../../utils/api/api";


const Body = (match) => {

    const [clock, setClock] = useState("");
    const getTime = () => {
        const date = new Date();
        const days = date.getDay();
        const hours = date.getHours();
        let minutes = date.getMinutes();
        let sec = date.getSeconds();
        let currentTime = `${days < 10 ? `0${days}` : days}:${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`: minutes}:${sec < 10 ? `0${sec}` : sec}`;
        setClock(currentTime);
    }
    React.useEffect(() => {
        setInterval(getTime, 1000);
    });





    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(itemList);
    }, [])

    console.log(match.params);

    return (
        <>
            <div className="Body-container">
                <div>
                    <form>
                        <h1>own the most</h1>
                        <h1>special moments!</h1>
                        <p>own the most special moments!</p>
                        <p className="time">
                            <span className="live">LIVE</span>
                            <span className="clock">{clock}</span>
                        </p>
                        <div className="video">
                            <span>
                              <FaPlay size={"40"}/>
                          </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="Story-container" id="Story">
                <form className="Story-components">
                    <div>
                        <h1>
                            1st Story
                        </h1>
                        <p>
                            길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                            <br/>
                            그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                        </p>
                        <div>
                            {
                                dataList ? dataList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <a href={`/shop/${item.id}`}>
                                        <img
                                            key={item.id}
                                            id={item.id}
                                            src={item.img}

                                        />
                                    </a>
                                </React.Fragment>
                            )) : (
                                    <div>등록된</div>
                                )}

                        </div>
                    </div>
                    <button>
                        bid now
                    </button>
                </form>
            </div>
        </>
    )
}

export default Body;