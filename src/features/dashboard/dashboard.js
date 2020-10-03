import React from "react";
import Dashboardcard from "../card/dashboardcard";
import Linechart from "../chart/linechart";
import DoughnutChart from "../chart/doughNutChart";

export default function Dashboard() {
  const icon1 = <i class="fas fa-users"></i>;
  const icon2 = <i class="fas fa-flag-usa"></i>;
  const icon3 = <i class="fas fa-graduation-cap"></i>;
  return (
    <div className="margin m-4 p-5">
      <div className="columns">
        <div className="column">
          <Dashboardcard
            bgcolor={"has-background-danger has-text-white"}
            value={"56950"}
            content={"Total Contacts"}
            icon={icon1}
          />
        </div>
        <div className="column ">
          {" "}
          <Dashboardcard
            bgcolor={"has-background-warning has-text-dark"}
            value={"5650"}
            content={"Total Contacts in US"}
            icon={icon2}
          />
        </div>
        <div className="column ">
          {" "}
          <Dashboardcard
            bgcolor={"has-background-link has-text-white"}
            value={"5950"}
            content={"Total Contacts of Graduated People"}
            icon={icon3}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Linechart />
        </div>
        <div className="column">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
