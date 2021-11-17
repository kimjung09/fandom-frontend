import React from 'react';
import "./style/body.css"
import "./style/story.css"
import {FaPlay, FaPlus, FaTelegramPlane, FaCheck, FaRetweet} from 'react-icons/fa'

const WhiteList = () => {
    return (
        <div className="WhiteList-container" id="Story">
            <div>
                <div>
                    <h1>Join the whit list</h1>
                    <p>Nhi 의 세계챔피언을 기념하는 NFT Single Auction!
                        화이트리스팅을 완료하여 참여 할수 있는 기회를 획득하세요!
                        화이트 리스트 작성을 통해 $9,900 상당의 에어드랍을 받으세요~</p>
                    <div className="subscribe">
                        <div>
                            <button>
                                <FaRetweet className='icon'/>
                                FOLLOW
                            </button>
                            <h1>Follow out twitter</h1>
                            <button>Click</button>
                        </div>
                        <div>
                            <button>
                                <FaRetweet className='icon'/>
                                RETWEET
                            </button>
                            <h1>Retweet our twitter</h1>
                            <button>Click</button>
                        </div>
                        <div>
                            <button>
                                <FaRetweet className='icon'/>
                                SUBSCRIBE
                            </button>
                            <h1>Write your twitter ID</h1>
                            <button>Click</button>
                        </div>
                        <div>
                            <button>
                                <FaRetweet className='icon'/>
                                JOIN
                            </button>
                            <h1>Join our telegram</h1>
                            <button>Click</button>
                        </div>
                        <div>
                            <button>
                                <FaRetweet className='icon'/>
                                SUBSCRIBE
                            </button>
                            <h1>Write your telegram ID</h1>
                            <button>Click</button>
                        </div>
                    </div>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default WhiteList;