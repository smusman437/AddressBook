import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Userdetail({ match }) {
  const { id } = match.params;
  const initial = {
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [user, setuser] = useState(initial);
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="margin m-4 p-5">
      <div className="columns is-centered">
        <div className="column is-half ">
          <div className="card boxShadow has-background-light  has-text-centered">
            <div className="card-header  is-4">
              <p className="card-header-title has-background-info is-centered">
                {" "}
                User Detail
              </p>
            </div>
            <div className="card-centent">
              <h2>
                Name :<strong> {user.name}</strong>
              </h2>
              <h2>
                UserName : <strong> {user.username}</strong>
              </h2>
              <h2>
                Email : <strong> {user.email}</strong>
              </h2>
              <h2 className="is-size-5">Address </h2>
              <h2>
                Street : <strong> {user.address.street}</strong>
              </h2>
              <h2>
                Suite : <strong> {user.address.suite}</strong>
              </h2>
              <h2>
                City : <strong> {user.address.city}</strong>
              </h2>
              <h2>
                Zip Code : <strong> {user.address.zipcode}</strong>
              </h2>
              <h2 className="is-size-5">Geo </h2>
              <h2>
                lat : <strong> {user.address.geo.lat}</strong>
              </h2>
              <h2>
                lng : <strong> {user.address.geo.lng}</strong>
              </h2>
              <h2>
                Phone Number : <strong> {user.phone}</strong>
              </h2>
              <h2>
                Website : <strong> {user.website}</strong>
              </h2>

              <h2 className="is-size-5">Company </h2>
              <h2>
                Name : <strong> {user.company.name}</strong>
              </h2>
              <h2>
                Catch Phrase : <strong> {user.company.catchPhrase}</strong>
              </h2>
              <h2>
                Bs : <strong> {user.company.bs}</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
