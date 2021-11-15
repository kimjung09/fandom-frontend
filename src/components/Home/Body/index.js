import React from "react";
import "./Body.css"
import "./Story.css"
import {FaPlay, FaGift,} from 'react-icons/fa'
import {getNftList} from "../../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "./Timer";

const Body = () => {
    const asyncData = useAsync(getNftList);
    const item = asyncData.result

    return (
        <>
            <div className="Body-container">
                <div>
                    <form>
                        <h1>own the most</h1>
                        <br/>
                        <h1>special moments!</h1>
                        <p>own the most special moments!</p>
                        <p className="time">
                            <Timer/>
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
                        <button>
                            <a href="whitelist">
                                white listing <FaGift color={"none"}/>
                            </a>
                        </button>

                        <h1>1st Story</h1>
                        <p>
                            길거리에서 복권을 팔던 평범한 베트남 소녀, 국민 영웅이 되기까지 Nguyen Thi ThuNhi.
                            <br/>
                            그녀는 이제 하나의 계단만을 남겨두고 있습니다. 그녀의 WHO벨트 세계 타이틀전을 응원하며, 기념합니다.
                        </p>
                        <div>
                            {item ? item.map((res, index) =>
                                <React.Fragment key={index}>
                                    <a href={`/fandom/${res.id}`}>
                                        <img src={res.list_img}/>
                                    </a>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                </React.Fragment>
                            )
                            }
                        </div>
                        <button>
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