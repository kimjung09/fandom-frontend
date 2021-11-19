import React from "react";
import MainPage from "./components/Home/index";
import SubPage from "./components/Info";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Web3ReactProvider} from '@web3-react/core'
import Web3 from 'web3'
import Header from './components/Header'
import Footer from './components/Footer'


// web3에 getLibrary 함수를 전달해주어야 한다.
function getLibrary(provider) {
    return new Web3(provider)
}

const App = () => {
    return (
        <>
            {/* 이더리움 지갑을 연결해주기 위한 Web3ReactProvider ===> web3-react가 관리하는 Provider 컴포넌트 */}
            <Web3ReactProvider getLibrary={getLibrary}>
                {/* MainPage와 Subpage에 동일한 Header Footer를 적용해 페이지 이동시 새로고침방지를 위해 분리 */}
                <Header/>
                <Router>
                    <Switch>
                        {/* Route exact 정확하게 일치한 주소만 접속하도록 설정 */}
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/fandom/:id" component={SubPage}/>
                        <Route exact path="/whitelist" component={MainPage} />
                    </Switch>
                </Router>
                <Footer/>
            </Web3ReactProvider>
        </>
    );
}

export default App;