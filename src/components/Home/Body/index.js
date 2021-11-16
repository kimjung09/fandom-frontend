import React, {useEffect, useState, useRef} from "react";
import "./Body.css"
import "./Story.css"
import {FaPlay,FaGift,} from 'react-icons/fa'
import itemList  from '../../item.json';
// import { detailPage } from "../../../utils/api/api";
import {getNftList, getNftInfo} from "../../../utils/axios";
import CountDownTimer from "../Time/CountDownTimer";


const Body = () => {
    const [datalist, setDataList] = useState([]);


//onClick="location.href='http://webtong.kr'"
    const connect = async(id) => {
        await getNftList(id)
            .then(res=>{setDataList(res.id);})
            .catch(res => {console.log(res.error);})
            .finally(res =>{console.log("ssss");})
        console.log(await getNftList(id));
    }


    useEffect(() => {
        setDataList(itemList);
    }, [])




    // 컴포넌트 전환
    const [viewChange, setViewChange] = useState(true);


   // function procBid() {
     //   // TODO 서버연동로직으로 수정해야함
       // callBid()
       // txList.push('aaa')
       // alert('비드되었습니다')
    //}

    const nextId = useRef(6);

  //  const hoursMinSecs = {hours:24, minutes: 0, seconds:0}



    return (
        <>
            <div className="Body-container" >
                <div>
                    <form>
                        <h1>own the most</h1>
                        <br/>
                        <h1>special moments!</h1>
                        <p>own the most special moments!</p>
                        {/*<p className="time">*/}
                        {/*    <span className="live">LIVE</span>*/}
                        {/*    <span className="clock">*/}
                        {/*         {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>*/}
                        {/*</p>*/}
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
                        <button  onClick={() => {history.push("whitelist")}}>
                            <a href="whitelist">
                                white listing <FaGift color={"none"} />
                            </a>
                        </button>

                            <h1>1st Story</h1>
                            <p>
                            길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                            <br/>
                            그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                            </p>
                            <div>
                                {datalist ? itemList.map((res, index) =>
                                        <React.Fragment key={index}>
                                            <a href={`/fandom/${res.id}`} onClick={connect} datalist={datalist}>
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
                        <button onClick="location.href='http://webtong.kr'"

                        >
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