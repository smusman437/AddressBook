import React, { useState } from "react";

function Dashboardcard({ bgcolor, value, content, icon }) {
  const [bgColor, setbgColor] = useState(bgcolor);
  return (
    <div className="">
      <div className={`card boxShadow  ${bgColor} `}>
        <div className="card-content">
          <div className="content">
            <div className="is-size-6">{content}</div>
            <div className="is-size-1 is-inline mr-2">{value}</div>
            <span class="icon is-inline ml-6 is-size-1">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardcard;
