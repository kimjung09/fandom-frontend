import React, {useEffect, useState, createContext, useContext} from "react";
import "./body.css"
import "./story.css"
import {FaPlay,FaPlus,FaTelegramPlane,FaCheck,FaRetweet} from 'react-icons/fa'
import itemList  from '../../item.json';
import whiteList from '../../whitelist.json'
import {getNftList} from "../../../utils/axios";

const Body = (match) => {
    const [clock, setClock] = useState("");
    const [dataList, setDataList] = useState([]);


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


    const [click, setClick] = useState(false);

    const handleClick = (id) => {
        setClick(!click);
    }

    const connect = async(id) => {
        await getNftList(id)
            .then(res=>{
                setDataList(res.id);
            })
            .catch(res => {
                console.log("연결 실패");
            })
            .finally(res =>{
                console.log("ssss");
            })
        console.log(await getNftList(id));
    }


    useEffect(() => {
        setDataList(itemList);
    }, [])

    return (
        <>
            <div className="Body-container" >
                <div>
                    <form>
                        <h1>own the most</h1>
                        <br/>
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
            <div className="WhiteList-container" id="Story">
                <div>
                    <div>
                        <h1>{whiteList.title}</h1>
                        <p>{whiteList.subTitle}<br /></p>
                        <div className="subscribe">
                            {whiteList ? dataList.map((res, index) =>
                                <div >
                                    <React.Fragment key={index}>
                                        <button type="submit">
                                            <FaRetweet className='icon' />
                                        </button>

                                        <h1>{whiteList.title}</h1>
                                        <button>Click</button>
                                    </React.Fragment>

                                </div>
                            ) : (
                                <React.Fragment>
                                    <h1>
                                        sdkskds
                                    </h1>
                                </React.Fragment>
                            )
                            }

                        </div>
                    </div>
                    <button>Submit</button>

                </div>
            </div>
        </>
    )
}

export default Body;