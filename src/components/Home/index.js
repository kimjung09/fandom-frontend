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

    // 모바일 화면에서 slider
    const moveSlider = (x) => {
        // currentSlider 슬라이더 배열
        let tmpCurrentSlider = [],
            // offeset 세팅한 Width 값 을 slideItem.current.offesetWidth 값에 + 1 = 클릭시 image + 1 씩 더해저 다음 상품으로 넘어감
            offsetWidth = sliderItem.current.offsetWidth + 1;

        slider.current.style.marginLeft = (offsetWidth * x * -1) + 'px';

        for (let iLoop = 0;iLoop < 6;iLoop++) {
            // mouseSlide 가 적용되었을때  page-on 아이콘 / page-off 로 변환
            tmpCurrentSlider[iLoop] = iLoop === x ? '/images/icon/page-on.png' : '/images/icon/page-off.png';
        }
        setCurrentSlider(tmpCurrentSlider);
        setCurrentSliderIndex(x);
    }

    const sliderSwipe = (event) => {
        // slide 액션에 대한 type 설정
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
                    <h1>Sở hữu những</h1>
                    <h1 className="mb-3">khoảnh khắc đặc biệt nhất</h1>
                    <Timer/>
                </div>
                <div className="video-area">
                    <div className="btn-play" style={{display: playBtnDisplay}} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur}>
                        <img src="/images/home/btn-play.png" onClick={onPlayClick}/>
                    </div>
                    <div className="video">
                        <video className="player" src="/video/WBO_NHI_edited.mp4" ref={videoPlayer} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur} onEnded={videoMouseOn}/>
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
                                    danh sách trắng
                                    <img src="/images/icon/giftbox.png" className="off"/>
                                    <img src="/images/icon/giftbox-on.png" className="on"/>
                                </button>
                            </NavLink>
                            <h3 className="mb-3">Nhận airdrop trị giá $ 9,900 bằng cách tham gia Whitelist của chúng tôi!</h3>
                            <h2>Những khoảnh khắc đặc biệt của NHI qua NFT.</h2>
                            <div className="desc">
                                &lt;Thời gian tham gia đấu giá: 0:00, ngày 22/11 ~  23:59, ngày 30/11&gt;<br/><br/>
                                Hãy cùng chúng tôi điểm lại những khoảnh khắc trưởng thành ngoạn mục của NHI<br/>
                                từ trước khi bắt đầu chơi quyền anh cho tới khi cô ấy trở thành nhà vô địch thế giới nhé!
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
                                    Đấu giá ngay bây giờ
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