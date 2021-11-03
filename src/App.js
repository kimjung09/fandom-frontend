import React from "react";
import './App.css';
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <>
      <Router>
          <Switch>
                <Route exact path="/"  component={MainPage} />
                <Route path="/:id" component={SubPage} />
          </Switch>
      </Router>
      </>
  );
}

export default App;
