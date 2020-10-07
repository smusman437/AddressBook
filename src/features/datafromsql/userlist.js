import Axios from "axios";
import React, { useEffect, useState } from "react";
import Edituser from "../modal/edituser";
import Addnewuser from "./addnewuser";

function Userlistfromsql() {
  //initialize users as array
  const [users, setusers] = useState([]);
  //render variable is use for useEffect rendering
  const [render, setrender] = useState(false);

  //for modal visibility
  const [visible, setvisible] = useState(false);

  //select user for edit
  const [selectedUser, setselectedUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  //useEffect use to get datafrom sql on first render
  useEffect(() => {
    Axios.get("http://localhost:5000")
      .then((res) => {
        setusers(res.data);
      })
      .catch((err) => console.log(err));
  }, [render]);

  //handleDelete function use to delete user from sql database
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:5000/${id}`)
      .then((res) => {
        handleRender();
      })
      .catch((err) => console.log("error in deletion"));
  };

  //handleRender function use for change the value of render after any sql query execute
  const handleRender = () => {
    setrender(!render);
  };

  const handleVisibility = () => {
    setvisible(!visible);
  };

  const handleEdit = (user) => {
    setselectedUser(user);
    handleVisibility();
  };

  const userList = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <div className="button is-danger" onClick={() => handleDelete(user.id)}>
          Delete
        </div>
        <div
          className="button is-success ml-2"
          onClick={() => handleEdit(user)}
        >
          Edit
        </div>
      </td>
    </tr>
  ));
  return (
    <div className="margin m-4 p-5">
      <div className="section row has-background-light">
        <Addnewuser render={handleRender} />
      </div>
      <div className="section row mt-3 has-background-light">
        <div className="table-container">
          <table className="table is-bordered  is-fullwidth has-background-light">
            <thead>
              <tr>
                <th className="has-text-link">S No:</th>
                <th className="has-text-link">Name</th>
                <th className="has-text-link">email</th>
                <th className="has-text-link">Action</th>
              </tr>
            </thead>
            <tbody>{userList}</tbody>
          </table>
        </div>
      </div>
      {visible ? (
        <Edituser
          visible={visible}
          handleVisibility={handleVisibility}
          selecteduser={selectedUser}
          handleRender={handleRender}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Userlistfromsql;
