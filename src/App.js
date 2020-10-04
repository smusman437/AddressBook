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
  const [side, setside] = useState(false);
  const onChangeHandler = () => {
    setsideToggler(!sideToggler);
    setTimeout(() => {
      setside(!side);
    }, 200);
  };

  return (
    <Router>
      <Navbarr clicked={onChangeHandler} sidebar={sideToggler} />

      <div className="columns">
        {side ? (
          ""
        ) : (
          <div className="column is-one-fifth">
            <Sidebar sideclose={sideToggler} clicked={onChangeHandler} />
          </div>
        )}

        <div className="column">
          <Switch>
            <Route exact path="/users" component={Userlist} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users/:id" component={Userdetail} />
            <Redirect from="/" to="/users" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
