import React from "react";
import { Doughnut } from "react-chartjs-2";
function DoughnutChart() {
  const data = {
    labels: ["Pak", "Ind", "Usa", "Eng", "SA"],
    datasets: [
      {
        label: "Contact In 2020",
        data: [100, 400, 200, 300, 100],

        backgroundColor: [
          "rgba(54,162,235,1)",
          "rgba(255,99,132,1)",
          "rgba(255,205,86,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };
  return (
    <div className="boxShadow">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
