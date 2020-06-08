import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LinksPage from "./components/LinksPage/LinksPage";
import Account from "./components/Account/Account";
import LogIn from "./components/LogIn/LogIn";
import Signature from "./components/Signature/Signature";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header style={{ flexGrow: 0 }} />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/links">
          <LinksPage style={{ flexGrow: 1 }} />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>

      <Signature />
    </div>
  );
}

export default App;
