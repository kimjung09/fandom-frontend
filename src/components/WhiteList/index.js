import React from 'react';
import "./style/body.css"
import "./style/story.css"
import {FaPlay, FaPlus, FaTelegramPlane, FaCheck, FaRetweet} from 'react-icons/fa'

const WhiteList = () => {
    return (
        <div className="WhiteList-container" id="Story">
            <div>
                <div>
                    <h1>ttt</h1>
                    <p>aaa</p>
                    <div className="subscribe">
                        <div>
                            <React.Fragment>
                                <button type="submit">
                                    <FaRetweet className='icon'/>
                                </button>

                                <h1>ttt</h1>
                                <button>Click</button>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default WhiteList;