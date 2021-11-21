import React, { useState, useRef } from "react";
import "./style/Body.css"
import "./style/Story.css"
import {getNftList} from "../../utils/axios";
import {useAsync} from 'react-async-hook';
import Timer from "../Timer";
import {NavLink} from 'react-router-dom';
import WhiteList from "../WhiteList";


const MainPage = (props) => {
    const asyncData = useAsync(getNftList);
    const item = asyncData.result
    const videoPlayer = useRef();
    const sliderWrap = useRef();
    const slider = useRef();
    const sliderItem = useRef();

    const [playBtnDisplay, setPlayBtnDisplay] = useState('block');
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const [currentSlider, setCurrentSlider] = useState(['/images/icon/page-on.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png']);
    const [sliderTouchStart, setSliderTouchStart] = useState(0);
    const [sliderTouchMove, setSliderTouchMove] = useState(0);

    const onPlayClick = () => {
        if (videoPlayer) {
            if (videoPlayer.current.paused) {
                videoPlayer.current.play();
                setPlayBtnDisplay('none');
            } else {
                videoPlayer.current.pause();
                setPlayBtnDisplay('block');
            }
        }
    };
    const videoMouseOn = () => {
        setPlayBtnDisplay('block');
    };
    const videoMouseBlur = () => {
        if (videoPlayer.current.paused) {
            setPlayBtnDisplay('block');
        } else {
            setPlayBtnDisplay('none');
        }
    };

    const moveSlider = (x) => {
        let tmpCurrentSlider = [],
            offsetWidth = sliderItem.current.offsetWidth + 1;
        slider.current.style.marginLeft = (offsetWidth * x * -1) + 'px';

        for (let iLoop = 0;iLoop < 6;iLoop++) {
            tmpCurrentSlider[iLoop] = iLoop === x ? '/images/icon/page-on.png' : '/images/icon/page-off.png';
        }
        setCurrentSlider(tmpCurrentSlider);
        setCurrentSliderIndex(x);
    }

    const sliderSwipe = (event) => {
        switch (event.type) {
            case 'touchstart':
                setSliderTouchStart(event.touches[0].pageX);
                break;
            case 'touchmove':
                setSliderTouchMove(event.touches[0].pageX);
                break;
            case 'touchend':
                let idx = 0,
                    move = sliderTouchStart - sliderTouchMove;

                if (move > 20) {
                    idx = currentSliderIndex + 1;
                    if (idx > 5) {
                        idx = 0;
                    }
                    moveSlider(idx);
                }

                if (move < -20) {
                    idx = currentSliderIndex - 1;
                    if (idx < 0) {
                        idx = 5;
                    }
                    moveSlider(idx);
                }
                break;
        }
    }

    return (
        <>
            <div className="Body-container">
                <div className="title-area">
                    <h1>Sở hữu những khoảnh</h1>
                    <h1 className="mb-7">khắc đặc biệt nhất</h1>
                    <Timer/>
                </div>
                <div className="video-area">
                    <div className="btn-play" style={{display: playBtnDisplay}} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur}>
                        <img src="/images/home/btn-play.png" onClick={onPlayClick}/>
                    </div>
                    <div className="video">
                        <video className="player" src="/video/WBO_NHI_edited_v1.mp4" ref={videoPlayer} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur} onEnded={videoMouseOn}/>
                    </div>
                </div>
            </div>
            {
                props.match.path === '/whitelist' ? (
                    <WhiteList />
                ) : (
                    <div className="Story-container" id="Story">
                        <div className="Story-components">
                            <NavLink to="/whitelist">
                                <button>
                                    DANH SÁCH TRẮNG
                                    <img src="/images/icon/giftbox.png" className="off"/>
                                    <img src="/images/icon/giftbox-on.png" className="on"/>
                                </button>
                            </NavLink>
                            <h3 className="mb-3">
                                <span className="mobile-block">Nhận airdrop trị giá $ 9,900</span>
                                <span className="mobile-block">bằng cách tham gia Whitelist của chúng tôi!</span>
                            </h3>
                            <h2>
                                NHỮNG KHOẢNH KHẮC<br/>
                                ĐẶC BIỆT CỦA NHI QUA NFT.
                            </h2>
                            <h3 className="mb-3">
                                <span className="mobile-block">Thời gian tham gia đấu giá: 0:00,</span>
                                <span className="mobile-block">ngày 24/11 ~  23:59, ngày 30/11</span>
                            </h3>
                            <div className="desc mobile-only">
                                Hãy cùng chúng tôi điểm lại những khoảnh<br/>
                                khắc trưởng thành ngoạn mục của NHI từ trước<br/>
                                khi bắt đầu chơi quyền anh cho tới khi cô ấy trở<br/>
                                thành nhà vô địch thế giới nhé!
                            </div>
                            <div className="desc pc-only">
                                Hãy cùng chúng tôi điểm lại những khoảnh khắc<br/>
                                trưởng thành ngoạn mục của NHI từ trước khi bắt đầu chơi quyền anh cho tới<br/>
                                khi cô ấy trở thành nhà vô địch thế giới nhé!
                            </div>
                            <div className="list-wrap" ref={sliderWrap} onTouchStart={sliderSwipe} onTouchMove={sliderSwipe} onTouchEnd={sliderSwipe}>
                                <div className="list" ref={slider}>
                                    {item ? item.map((res, index) =>
                                        <div className="list-item" key={index} ref={sliderItem}>
                                            <React.Fragment>
                                                <NavLink to={`/fandom/${res.id}`}>
                                                    <img src={res.list_img}/>
                                                </NavLink>
                                            </React.Fragment>
                                        </div>

                                    ) : (
                                        <React.Fragment/>
                                    )}
                                </div>
                                <div className="pagination">
                                    {currentSlider.map((res, index) =>
                                        <span onClick={() => moveSlider(index)} key={'pageKey' + index}><img src={currentSlider[index]}/></span>
                                    )}
                                </div>
                            </div>
                            <NavLink to="/whitelist">
                                <button>
                                    ĐẤU GIÁ NGAY BÂY GIỜ
                                </button>
                            </NavLink>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MainPage;