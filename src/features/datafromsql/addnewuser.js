import Axios from "axios";
import React, { useState } from "react";

function Addnewuser({ render, notification }) {
  const initialstate = {
    name: "",
    email: "",
  };
  const [user, setuser] = useState(initialstate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = user;
    if (name !== "" && email !== "") {
      try {
        await Axios.post("http://localhost:5000/", user);
        notification("Add User Successfully!");
        setTimeout(() => {
          render();
        }, 2000);
      } catch (error) {
        console.log(error);
      }

      setuser(initialstate);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={user.name}
              onChange={(e) => setuser({ ...user, name: e.target.value })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="Email input"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary is-rounded " type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addnewuser;
