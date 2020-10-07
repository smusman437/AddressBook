import Axios from "axios";
import React, { useState } from "react";

function Edituser({ visible, handleVisibility, selecteduser, handleRender }) {
  const [user, setuser] = useState(selecteduser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`http://localhost:5000/${user.id}`, user);
      handleRender();
    } catch (error) {
      console.log(error);
    }

    handleVisibility();
  };
  return (
    <div>
      <div className={"modal " + (visible ? "is-block" : "is-invisibility")}>
        <div className="modal-background" onClick={handleVisibility}></div>
        <div className="modal-content">
          <div className="section wrapper has-background-light">
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
                    onChange={(e) =>
                      setuser({ ...user, email: e.target.value })
                    }
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    className="button is-primary is-rounded"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={handleVisibility}
        ></button>
      </div>
    </div>
  );
}

export default Edituser;
