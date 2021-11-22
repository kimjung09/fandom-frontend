import React, { useState, useRef } from "react";
import "./style/Body.css"
import "./style/Story.css"
import {getNftInfo, getNftList} from "../../utils/axios";
import {useAsync} from 'react-async-hook';
// 타이머 를 가지고 옴
import Timer from "../Timer";
import {NavLink} from 'react-router-dom';
import WhiteList from "../WhiteList";
import {FaTiktok, FaChevronDown} from 'react-icons/fa'


// props를 사용해 현재 상태값을 저장해주도록 한다.
// 새로 고침시 저장된 값을 불러올테니 시간이 초기화 되는 문제를 해결할 수 있다.
const MainPage = (props) => {
    // useAsnyc를 사용해 getNftList 상품을 관리해주는 const 선언
    const asyncData = useAsync(getNftList);

    // item 변수에 asyncData.result 결과 값을 담아준다.
    const item = asyncData.result



    // useRef를 사용해 값이 slider 와 videoPlayer값이 바뀌어도 리렌더링을 방지해준다.
    const videoPlayer = useRef();
    const slider = useRef();
    const sliderItem = useRef();
    const storyContainer = useRef();

    // display 가로 영역
    const [playBtnDisplay, setPlayBtnDisplay] = useState('block');

    // 슬라이더에 대한 index
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    const [currentSlider, setCurrentSlider] = useState(['/images/icon/page-on.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png', '/images/icon/page-off.png']);

    // 모바일 반응형화면에서 touchSlider 적용
    const [sliderTouchStart, setSliderTouchStart] = useState(0);
    const [sliderTouchMove, setSliderTouchMove] = useState(0);

    const scrollDownClick = () => {
        storyContainer.current.scrollIntoView(true);
    }


    // Video에 PlayButton을 클릭할때에 함수
    const onPlayClick = () => {
        // if 만약 VideoPlayer안에
        if (videoPlayer) {
            // videoPlayer 상태가 paused 상태에서 onClick 시 PlayButton으로 변환되고 else, 아니라면 pause 상태로 변경됨
            if (videoPlayer.current.paused) {
                videoPlayer.current.play();
                setPlayBtnDisplay('none');
            } else {
                videoPlayer.current.pause();
                setPlayBtnDisplay('block');
            }
        }
    };



    // Video에 마우스를 올릴때에 Diosplay값을 block상태 처리
    const videoMouseOn = () => {
        setPlayBtnDisplay('block');
    };

    // video에 pause를 눌렀을때 pause 버튼이 나타나도록 구현
    const videoMouseBlur = () => {
        if (videoPlayer.current.paused) {
            setPlayBtnDisplay('block');
        } else {
            setPlayBtnDisplay('none');
        }
    };

    // 모바일 화면에서 slider 이동 방식
    const moveSlider = (x) => {
        // currentSlider 슬라이더 배열
        let tmpCurrentSlider = [],
            // offeset 세팅한 Width 값 을 slideItem.current.offesetWidth 값에 + 1 = 클릭시 image + 1 씩 더해저 다음 상품으로 넘어감
            offsetWidth = sliderItem.current.offsetWidth + 1;

        // slider 왼쪽으로 클릭시 offsetWidth 값에 - 1 = 클릭시 image가 -1 감소해 이전 상품으로 넘아간다.
        slider.current.style.marginLeft = (offsetWidth * x * -1) + 'px';

        // for문을 돌려서 클릭할 때마다 이미지 페이지 값이 변경된다.
        for (let iLoop = 0;iLoop < 6;iLoop++) {
            // mouseSlide 가 적용되었을때  page-on 아이콘 / page-off 로 변환
            // 이동시 현재상테에 on이 적용되고 / 나머지는 off로 변환됨
            tmpCurrentSlider[iLoop] = iLoop === x ? '/images/icon/page-on.png' : '/images/icon/page-off.png';
        }
        // setCurrentSlide에 배열로 정한 tmpCuurrentSlider를 담아줌
        setCurrentSlider(tmpCurrentSlider);
        // Slider에 이동할 위치값에 x 좌표로 선언
        setCurrentSliderIndex(x);

    };



    // 반응형 모바일 페이지에서 Mouse를 이용해 움직일 수있는 const 선언
    const sliderSwipe = (event) => {
        // slide 액션에 대한 type 설정
        switch (event.type) {
            // touch 할때
            case 'touchstart':
                // touch방향 x 좌표로 시작
                setSliderTouchStart(event.touches[0].pageX);
                break;
            case 'touchmove':
                // touch후 움직일때 x 좌표로 마우스 슬라이더더
               setSliderTouchMove(event.touches[0].pageX);
                break;
                // touch 이동이 끝날때 상황
            case 'touchend':
                // 초기 index 값 = 0
                let idx = 0,
                    // touch 방향 시작하는 부분과 움직인 부분을 - 해서 나온 좌표 로 이동
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
                    {/* btn playe 버튼 playBtnDisplay 스타일 적용, */}
                    <div className="btn-play" style={{display: playBtnDisplay}} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur}>
                        {/* 플레이버튼 onClick 적용 */}
                        <img src="/images/home/btn-play.png" onClick={onPlayClick}/>
                    </div>
                    <div className="video">
                        <video className="player" poster="/images/home/video-poster.jpg" src="/video/WBO_NHI_edited_v1.mp4" ref={videoPlayer} onMouseOver={videoMouseOn} onMouseLeave={videoMouseBlur} onEnded={videoMouseOn}/>
                    </div>
                </div>
            </div>
            <div className="scroll-down-area">
                <div className="scroll-down-btn" onClick={scrollDownClick}>
                    <FaChevronDown className="icon"/>
                </div>
            </div>
            <div ref={storyContainer}>
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
                                <div className="list-wrap" onTouchStart={sliderSwipe} onTouchMove={sliderSwipe} onTouchEnd={sliderSwipe}>
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
            </div>
        </>
    )
}

export default MainPage;