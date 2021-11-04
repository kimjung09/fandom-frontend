import React, {useState} from "react";
import './App.css';
import MainPage from "./components/Home";
import SubPage from "./components/Info";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
      <>
          <Header/>
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/shop/:id" component={SubPage} />
          </Switch>
      </BrowserRouter>
      <Footer />
      </>
  );
}

export default App;
