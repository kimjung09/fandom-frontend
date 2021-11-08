import React from "react";
import Body from './Body';
import Bottom from "../Info/Bottom";

const SubPage = ({ match }) => {
    return (
        <>
            <Body match={match} />
            <Bottom match={match}/>
        </>
    )
}

export default SubPage;