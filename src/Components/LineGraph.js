import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import './LineGraph.css'

const LineGraph = ({ data }) => {
    const values = []
    values.push(data[0].o)
    values.push(data[0].h)
    values.push(data[0].l)
    values.push(data[0].c)

    const labels = ["open","high","low","close"]
    const chartData = {
        labels: labels,
        datasets: [
        {
            label: 'price ($)',
            data: values,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
        },
        ],
    };

  return (
    <div className="container">
      <Line data={chartData}></Line>
    </div>
  );
};

export default LineGraph;
