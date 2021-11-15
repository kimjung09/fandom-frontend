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
                        <h1>
                          Join the white list
                        </h1>
                        <p>NFT Single Auction to commeorate Nhi's World Champion!
                          <br />
                              commeorate Nhi's World Champion!
                        </p>
                {/*        {whiteList? whiteList.map((res,index) =>
                            <div className="subscribe">
                                <div>
                                    <button type="submit">
                                        <FaPlus className='icon' />

                                    </button>
                                </div>
                        } }
*/}

                     <div className="subscribe">
                          <div>
                              <button type="submit">
                                  <FaPlus className='icon'/>
                                  follow
                              </button>
                              <h1>Follow our twiiter</h1>
                              <button type="submit" onClick={handleClick} >
                                  {!click ? (
                                      <a href="https://twitter.com/Fandom_CRTR">click</a>
                                      ) : (
                                      <FaCheck className="icon"/>
                                  )}
                              </button>
                          </div>
                            <div>
                                <button type="submit">
                                    <FaRetweet className='icon'/>
                                    Retweet
                                </button>
                                <h1>Retweet our twiiter</h1>
                                <button type="submit" onClick={() => handleClick}>
                                    {!click ? (
                                        <a>click</a>
                                    ) : (
                                        <FaCheck className="icon"/>
                                    )}
                                </button>
                            </div>
                            <div>
                                <button type="submit">
                                    <FaTelegramPlane className='icon'/>
                                    join
                                </button>
                                <h1>Join our Telegram</h1>
                                <button type="submit" onClick={() => handleClick} >
                                    {!click ? (
                                        <a href="https://t.me/Fandom_Vietnam">click</a>
                                    ) : (
                                        <FaCheck className="icon"/>
                                    )}
                                </button>
                            </div>
                            <div>
                            <button type="submit">
                                <FaCheck className='icon' />
                                subscribe
                            </button>
                            <h1>Write your telegram ID</h1>
                                <button type="submit" onClick={() => handleClick} >
                                    {!click ? (
                                        <a href="#">click</a>
                                    ) : (
                                        <FaCheck className="icon"/>
                                    )}
                                </button>
                        </div>
                            <div>

                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;