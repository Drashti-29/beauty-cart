import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import SignUp from "./SignUp";
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
