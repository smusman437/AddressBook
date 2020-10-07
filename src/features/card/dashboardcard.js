import React from "react";

function Dashboardcard({ bgcolor, value, content, icon }) {
  return (
    <div className="">
      <div className={`card boxShadow  ${bgcolor} `}>
        <div className="card-content">
          <div className="content">
            <div className="is-size-6">{content}</div>
            <div className="is-size-1 is-inline mr-2">{value}</div>
            <span className="icon is-inline ml-5 is-size-1">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardcard;
