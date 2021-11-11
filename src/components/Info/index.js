import React from "react";
import Body from './Body';
import Bottom from "../Info/Bottom";
import {getNftInfo, getNftList} from "../../utils/axios";

const SubPage = ({ match }) => {
    const connect = async(data) => {
        console.log(await getNftList(data.id));
    }

    console.log(connect(getNftList,getNftInfo));
    return (
        <>
            <Body match={match} connect={connect}/>
            <Bottom match={match} connect={connect}/>
        </>
    )
}

export default SubPage;