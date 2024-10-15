'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const options: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const PieChart: React.FC = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;