import React from "react";
import "./Body.css"
import "./Story.css"
import {FaPlay, FaGift} from 'react-icons/fa'
import {getNftList} from "../../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "./Timer";
import {NavLink} from 'react-router-dom';


const Body = () => {
    const asyncData = useAsync(getNftList);
    const item = asyncData.result

    return (
        <>
            <div className="Body-container">
                <div>
                    <form>
                        <h1>Sở hữu những</h1>
                        <br/>
                        <h1>khoảnh khắc đặc biệt nhất</h1>
                        <p>own the most special moments!</p>
                        <p className="time">
                            <Timer/>
                        </p>

                        <div className="video">
                            {/*<video src="/images/video.mp4" width="900" height="600" controls>*/}
                            {/*</video>*/}
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
                            <NavLink to="/whitelist">
                                danh sách trắng <FaGift color={"none"}/>
                            </NavLink>
                        </button>

                        <h1>1st Story</h1>
                        <p>
                            Những khoảnh khắc đặc biệt của NHI qua NFT.
                            Thời gian tham gia đấu giá: 0:00, ngày 22/11 ~  23:59, ngày 30/11
                            <br/>
                            Hãy cùng chúng tôi điểm lại những khoảnh khắc trưởng thành ngoạn mục của NHI từ trước khi bắt đầu chơi quyền anh cho tới khi cô ấy trở thành nhà vô địch thế giới nhé!
                        </p>
                        <div>
                            {item ? item.map((res, index) =>
                                <React.Fragment key={index}>
                                    <NavLink to={`/fandom/${res.id}`}>
                                        <img src={res.list_img}/>
                                    </NavLink>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>

                                </React.Fragment>
                            )
                            }
                        </div>
                        <button>
                            <NavLink to="/whitelist">
                                Đấu giá ngay bây giờ
                            </NavLink>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Body;