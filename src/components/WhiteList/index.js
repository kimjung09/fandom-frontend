import React, {useState, useEffect} from 'react';
import "./style/story.css"
import {FaPlay, FaPlus, FaTelegramPlane, FaCheck, FaRetweet, FaHandPointer} from 'react-icons/fa'
import {registerWhiteList} from "../../utils/axios";
import ReCAPTCHA from "react-google-recaptcha";
import {useSelector, useDispatch} from 'react-redux'
import Modal from "../Modal";
import PopupBid from "../Popup/PopupBid";
import PopupMsg from "../Popup/PopupMsg";

const WhiteList = () => {
    // 페이지 이동을 구현할 input은 2가지 == Twitter & Telegram
    const [inputTwitter, setInputTwitter] = useState('');
    const [inputTelegram, setInputTelegram] = useState('');

    // 버튼 클릭스 check 아이콘이 활 성화되는 const 선언 == 기본값 false
    const [checkJoinTelegram, setCheckJoinTelegram] = useState(false);
    const [checkFollowTwitter, setCheckFollowTwitter] = useState(false);
    const [checkRetweetTwitter, setCheckRetweetTwitter] = useState(false);
    const [checkSubmitBtn, setCheckSubmitBtn] = useState(false);
    const [checkRecaptcha, setCheckRecaptcha] = useState(false)

    const [showModal, setShowModal] = useState(false);

    // useSelector를 사용해 상태값을 global 전역변수(어디서든 불러올 수 있는 값) 로 담아줌줌    const userAccount = useSelector((state) => state.global.userAccount)
    const userAccount = useSelector((state) => state.global.userAccount)
    const checkRegisterWhiteList = useSelector((state) => state.global.whiteListCheck)


    const closeModal = () => {
        setShowModal(false);
    }

    const submit = async () => {
        // Sumitbtn이 비활성화 되었을때
        if (!checkSubmitBtn) {
            return;
        }
        // telegram_id , twitter_id 값 input 지역변수 선언 == 선언과동시에 초기화
        if(!userAccount.length){
            setShowModal(true);
            return;
        }


        let params = {
            telegram_id: inputTelegram,
            twitter_id: inputTwitter,
            account: userAccount
        }
        // 페이지 이동이 활성화된 params
        await registerWhiteList(params).then(res => {
            window.location.href = '/'
        });
    }

    // twittter 버튼 클릭시 cehck버튼으로 변환
    // window.open함수를 사용해 새창으로 페이지를 이동할 수 있도록 구현
    const follow = () => {
        window.open('https://twitter.com/Fandom_CRTR/status/1461539400312049669');
        setCheckFollowTwitter(true)
    }

    // 동일
    const retweet = () => {
        setCheckRetweetTwitter(true)
    }

    // 텔레그램 참가 페이지로 넘어감
    const join = () => {
        window.open('https://t.me/Fandom_Vietnam');
        setCheckJoinTelegram(true)
    }


    // 렌더링 될때마다 button 활성화
    useEffect(() => {
        if (!checkRegisterWhiteList && checkRetweetTwitter && checkFollowTwitter && checkJoinTelegram && inputTelegram.length && inputTwitter.length && checkRecaptcha) {
            setCheckSubmitBtn(true);
            return;
        }
        setCheckSubmitBtn(false)

    }, [inputTelegram, inputTwitter, checkRetweetTwitter, checkFollowTwitter, checkJoinTelegram, checkRecaptcha])


    return (
        <div className="white-list-container">
            <div className="white-list-inner">
                <div className="main-font">
                    <h1>Tham gia Whitelist</h1>
                    <p>
                        Sự kiện đấu giá NFT là một sự kiện để kỷ niệm<br/>
                        chiến thắng lịch sử của NHI khi trở thành nhà vô địch thế giới.<br/>
                        Đăng ký Whitelist để có cơ hội tham gia đấu giá!<br/>
                    </p>
                </div>
                <div className="check-bar">
                    <div className="left">
                        <FaPlus className='icon' style={{marginRight: '5px'}}/>
                        Theo dõi
                    </div>
                    <div className="center">
                        Theo dõi chúng tôi trên Twitter
                    </div>
                    <div className="right" onClick={follow}>
                        {checkFollowTwitter ? <FaCheck className='icon'/> : <FaHandPointer className='icon'/>}
                    </div>
                </div>

                <div className="check-bar">
                    <div className="left">
                        <FaRetweet className='icon' style={{marginRight: '5px'}}/>
                        Retweet
                    </div>
                    <div className="center">
                        Retweet bài post của chúng tôi trên twitter
                    </div>
                    <div className="right" onClick={retweet}>
                        {checkRetweetTwitter ? <FaCheck className='icon'/> : <FaHandPointer className='icon'/>}
                    </div>
                </div>

                <div className="check-bar">
                    <div className="left">
                        <FaCheck className='icon' style={{marginRight: '5px'}}/>
                        SUBSCRIBE
                    </div>
                    <div className="center">
                        <input placeholder="Điền ID Twitter của bạn" onChange={(e) => setInputTwitter(e.target.value)}
                               value={inputTwitter}/>
                    </div>
                    <div className="right">
                        {inputTwitter.length ? <FaCheck className='icon'/> : <FaHandPointer className='icon'/>}
                    </div>
                </div>

                <div className="check-bar">
                    <div className="left">
                        <FaTelegramPlane className='icon' style={{marginRight: '5px'}}/>
                        Tham gia
                    </div>
                    <div className="center">
                        Tham gia kênh telegram của chúng tôi
                    </div>
                    <div className="right" onClick={join}>
                        {checkJoinTelegram ? <FaCheck className='icon'/> : <FaHandPointer className='icon'/>}
                    </div>
                </div>

                <div className="check-bar">
                    <div className="left">
                        <FaCheck className='icon' style={{marginRight: '5px'}}/>
                        SUBSCRIBE
                    </div>
                    <div className="center">
                        <input placeholder="Điền ID Telegram của bạn" onChange={(e) => setInputTelegram(e.target.value)}
                               value={inputTelegram}/>
                    </div>
                    <div className="right">
                        {inputTelegram.length ? <FaCheck className='icon'/> : <FaHandPointer className='icon'/>}
                    </div>
                </div>

                <div className="main-font">
                    <p>
                        Airdrop BNB trị giá $30 cho 330 người may mắn được chọn ngẫu nhiên.<br/>
                        Người chiến thắng Airdrop sẽ được công bố sau đó thông qua kênh Telegram chính thức của Fandom.
                    </p>
                </div>

                <div className="check-recaptcha">
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_SITE_KEY}
                        onChange={val => {
                            setCheckRecaptcha(true)
                        }}
                        onExpired={exp => {
                            setCheckRecaptcha(false)
                        }}
                        onErrored={err => {
                            setCheckRecaptcha(false)
                        }}
                        theme="light"
                    />
                </div>
                <Modal showModal={showModal}>
                    <PopupMsg title={'WALLET'} msg={'Vui lòng liên kết ví của bạn.'} closeModal={closeModal}/>
                </Modal>

                {checkRegisterWhiteList ? (
                    <div className="submit-area">
                        <button className="submit-btn-inactive">Success</button>
                    </div>
                ) : (
                    <div className="submit-area">
                        <button className={checkSubmitBtn ? "submit-btn-active" : "submit-btn-inactive"}
                                onClick={submit}>xác nhận
                        </button>
                    </div>
                )
                }


            </div>
        </div>
    )
}

export default WhiteList;