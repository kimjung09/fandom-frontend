import React from "react";
import './App.css';
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Web3ReactProvider} from '@web3-react/core'
import Web3 from 'web3'
import Header from './components/SubPage/Header/index'
import Footer from "./components/MainPage/Footer";

function getLibrary(provider) {
    return new Web3(provider)
}

function App() {
    return (
        <>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/:id" component={SubPage}/>
                    </Switch>
                </Router>
                <Footer/>
            </Web3ReactProvider>
        </>
    );
}

export default App;
