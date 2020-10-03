import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbarr(props) {
  const [isActive, setisActive] = useState(false);

  return (
    <div>
      <nav
        className="navbar is-dark is-fixed-top is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {props.sidebar ? (
            <div
              className="button is-dark mt-4 ml-2  p-4"
              onClick={() => props.clicked()}
            >
              <i class="fas fa-bars"></i>
            </div>
          ) : (
            ""
          )}

          <a className="navbar-item" href="https://bulma.io">
            <i
              className="far fa-address-book is-size-2 m-2"
              width="112"
              height="28"
            ></i>
            <h2 className="is-size-5">Address Book</h2>
          </a>

          <a
            role="button"
            className={`navbar-burger is-black mt-4 burger${
              isActive ? "is-active" : ""
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setisActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <NavLink className="navbar-item" to="/users">
              Users
            </NavLink>

            <a className="navbar-item">Documentation</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
