import React from "react";
import './App.css';
import MainPage from "./components/Home";
import SubPage from "./components/Info";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
      <>
          <Header/>
      <Router>
          <Switch>
              <Route exact path="/"  component={MainPage} />
              <Route path="/:id" component={SubPage} />
          </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
