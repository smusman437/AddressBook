import React from "react";
import { Line } from "react-chartjs-2";
function Linechart() {
  const data = {
    labels: ["Pak", "Ind", "Usa", "Eng", "SA"],
    datasets: [
      {
        label: "Contact In 2020",
        data: [100, 400, 200, 300, 100],
        borderColor: ["rgba(54,162,235,0.2)"],
        backgroundColor: ["rgba(54,162,235,0.2)"],
        pointBackgroundColr: "rgba(54,162,235,0.2)",
        pointBorderColor: ["rgba(54,162,235,0.2)"],
      },
      {
        label: "Contact In 2019",
        data: [200, 300, 500, 100, 400],
        borderColor: ["rgba(255,206,90,0.2)"],
        backgroundColor: ["rgba(255,206,90,0.2)"],
        pointBackgroundColr: "rgba(255,206,86,0.2)",
        pointBorderColor: ["rgba(255,206,86,0.2)"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 600,
            stepSize: 50,
          },
        },
      ],
    },
  };
  return (
    <div className="boxShadow">
      <Line data={data} options={options} />
    </div>
  );
}

export default Linechart;
