import React, {useState, useEffect} from 'react';
import "./style/story.css"
import {FaPlay, FaPlus, FaTelegramPlane, FaCheck, FaRetweet, FaHandPointer} from 'react-icons/fa'
import {registerWhiteList} from "../../utils/axios";
import ReCAPTCHA from "react-google-recaptcha";
import {useSelector, useDispatch} from 'react-redux'

const WhiteList = () => {
    const [inputTwitter, setInputTwitter] = useState('');
    const [inputTelegram, setInputTelegram] = useState('');

    const [checkJoinTelegram, setCheckJoinTelegram] = useState(false);
    const [checkFollowTwitter, setCheckFollowTwitter] = useState(false);
    const [checkRetweetTwitter, setCheckRetweetTwitter] = useState(false);
    const [checkSubmitBtn, setCheckSubmitBtn] = useState(false);
    const [checkRecaptcha, setCheckRecaptcha] = useState(false)


    const userAccount = useSelector((state) => state.global.userAccount)
    const checkRegisterWhiteList = useSelector((state) => state.global.whiteListCheck)

    const submit = async () => {
        if (!checkSubmitBtn) {
            return;
        }
        let params = {
            telegram_id: inputTelegram,
            twitter_id: inputTwitter,
            account: userAccount
        }
        await registerWhiteList(params).then(res => {
            window.location.href = '/'
        });
    }

    const follow = () => {
        window.open('https://twitter.com/Fandom_CRTR/status/1461539400312049669');
        setCheckFollowTwitter(true)
    }
    const retweet = () => {
        setCheckRetweetTwitter(true)
    }
    const join = () => {
        window.open('https://t.me/Fandom_Vietnam');
        setCheckJoinTelegram(true)
    }

    useEffect(() => {
        if (!checkRegisterWhiteList && checkRetweetTwitter && checkFollowTwitter && checkJoinTelegram && inputTelegram.length && inputTwitter.length && userAccount.length && checkRecaptcha) {
            setCheckSubmitBtn(true);
            return;
        }
        setCheckSubmitBtn(false)

    }, [inputTelegram, inputTwitter, checkRetweetTwitter, checkFollowTwitter, checkJoinTelegram, checkRecaptcha, userAccount])


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