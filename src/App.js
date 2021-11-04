import React from "react";
import './App.css';
import MainPage from "./components/Home";
import SubPage from "./components/Info";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Web3ReactProvider} from '@web3-react/core'
import Web3 from 'web3'
import Header from './components/Header'
import Footer from './components/Footer'

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
