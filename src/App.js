import React, { useState } from "react";
import Navbarr from "./navbarr";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Userlist from "./features/users/userlist";
import Userdetail from "./features/users/userdetail";
import Sidebar from "./sidebar";
import Dashboard from "./features/dashboard/dashboard";

export default function App() {
  const [sideToggler, setsideToggler] = useState(false);

  const onChangeHandler = () => {
    setsideToggler(!sideToggler);
  };

  return (
    <Router>
      <Navbarr clicked={onChangeHandler} sidebar={sideToggler} />

      <div className="columns">
        <div className="column is-one-fifth">
          <Sidebar sideclose={sideToggler} clicked={onChangeHandler} />
        </div>

        <div className="column">
          <Switch>
            <Route exact path="/users" component={Userlist} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users/:id" component={Userdetail} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
