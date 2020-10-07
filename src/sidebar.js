import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ sideclose, clicked }) {
  const [sidebarClass, setSidebarClass] = useState("");

  useEffect(() => {
    if (sideclose) {
      setSidebarClass("sidebar close");
    } else {
      setSidebarClass("sidebar  has-background-dark");
    }
  }, [sideclose]);
  return (
    <div className={sidebarClass}>
      <aside className="menu">
        <p className="menu-label has-text-white">
          General
          <button
            className="sidebarclosebtn delete is-large"
            onClick={() => {
              clicked();
            }}
          ></button>
        </p>
        <ul className="menu-list">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="has-background-light has-text-dark"
            >
              <i className="fas fa-tachometer-alt has-text-info"></i>
              <p className="is-inline p-2">Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              activeClassName="has-background-light has-text-dark"
            >
              <i className="fas fa-users has-text-info"></i>{" "}
              <p className="is-inline p-2">Users</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              activeClassName="has-background-light has-text-dark"
            >
              <i className="fas fa-users has-text-info"></i>{" "}
              <p className="is-inline p-2">Users From sql</p>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}
