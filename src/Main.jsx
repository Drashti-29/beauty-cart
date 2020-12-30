import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./components/App";
import SignUp from "./components/SignUp";
// import Home from "./components/Home";

export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/login" component={App} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/home" component={Home} /> */}

        <Redirect to="/login" />
      </Switch>
    </>
  );
}
