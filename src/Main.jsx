import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./components/App";
import SignUp from "./components/SignUp";
export default function Main() {
  return (
    <>
      <Switch>
        <Route path="/login" component={App} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
}
