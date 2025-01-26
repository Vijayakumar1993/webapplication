import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CHART_BORDER_COLOR,CHART_COLOR } from "../../data/static";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart(props) {
  const {label,labels,title,records} = props.options;
  const data = {
    labels: labels, 
    datasets: [
      {
        label: label,
        data: records,
        backgroundColor: CHART_COLOR,
        borderColor: CHART_BORDER_COLOR,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Bar data={data} options={options} />;
}