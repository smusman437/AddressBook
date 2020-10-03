import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

export default function Userlist() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    let unmounted = false;
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!unmounted) {
          setusers(res.data);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          console.log(err);
        }
      });
    return () => {
      unmounted = true;
    };
  }, []);

  const userList = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <NavLink
          className="button is-success is-rounded"
          to={`users/${user.id}`}
        >
          Details
        </NavLink>
      </td>
    </tr>
  ));
  return (
    <div className="margin m-4 p-5 has-text-centered">
      <div className="table-container">
        <table className="table is-bordered  is-fullwidth has-background-light">
          <thead>
            <tr>
              <th className="has-text-primary">S No:</th>
              <th className="has-text-primary">Name</th>
              <th className="has-text-primary">email</th>
              <th className="has-text-primary">Action</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </div>
    </div>
  );
}
