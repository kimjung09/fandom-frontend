import React, {useEffect, useState} from "react";
import "./Body.css"
import "./Story.css"
import {FaPlay} from 'react-icons/fa'
import itemList  from '../../item.json';
// import { detailPage } from "../../../utils/api/api";
import {getNftList, getNftInfo} from "../../../utils/axios";


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
    const [change, setChange] = useState(true);

//onClick="location.href='http://webtong.kr'"
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

    console.log(match.params);

    useEffect(() => {
        setDataList(itemList);
    }, [])

    return (
        <>
            <div className="Body-container" >
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
                        <button onClick={() => setChange(true)}>
                            <a href="whitelist">
                                white listing
                            </a>
                        </button>
                        <h1 onClick={() => setChange(true)}>
                            1st Story
                        </h1>

                        {change ?
                        <p>
                            길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                            <br/>
                            그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                        </p> :
                        <p>
                            1길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                            <br/>
                            그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니1다.
                        </p>
                        }
                            <div>
                                {
                                    /*href={`/fandom/${item.id}`}*/
                                    dataList ? itemList.map((res, index) =>
                                        <React.Fragment key={index} >
                                            <a href={`/fandom/${res.id}`} onClick={connect}>
                                                <img key={res.id} id={res.id} src={res.img}/>
                                            </a>
                                        </React.Fragment>
                                    ) :  (
                                        <React.Fragment>
                                            <h1 key={itemList}>

                                            </h1>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        <button onClick="location.href='http://webtong.kr'" >
                            <a href="whitelist">
                                bid now
                            </a>

                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Body;