import React from "react";
import Body from './Body';
import "App.css"
import Bottom from "../Info/Bottom";
import {getNftInfo, getNftList} from "../../utils/axios";

const SubPage = ({ match }) => {
    const connect = async(data) => {
        console.log(await getNftList(data.id));
    }

    console.log(connect(getNftList,getNftInfo));

    return (
        <>
            <div className="SubPage">
            <Body match={match} connect={connect} />
            </div>

            <Bottom match={match} connect={connect} />
        </>

    )
}

export default SubPage;