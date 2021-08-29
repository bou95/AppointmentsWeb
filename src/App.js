import logo from './logo.svg';
import './App.css';
import './assets/css/custom.scss';
import Home from "./Views/Home";
import NavHeader from "./Views/NavHeader";
import Footer from "./Views/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Schedule from "./Views/Schedule";
import React from "react";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavHeader/>
              <Switch>
                  <Route path={"/"} exact><Home/></Route>
                  <Route path={"/schedule"} exact><Schedule/></Route>
              </Switch>
              <Footer/>
          </BrowserRouter>
      </>
  );
}

export default App;
