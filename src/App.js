import React from "react";
import MainPage from "./components/Home/index";
import SubPage from "./components/Info";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Web3ReactProvider} from '@web3-react/core'
import Web3 from 'web3'
import Header from './components/Header'
import Footer from './components/Footer'

function getLibrary(provider) {
    return new Web3(provider)
}

const App = () => {
    return (
        <>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Header/>
                <Router>
                    <Switch>
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