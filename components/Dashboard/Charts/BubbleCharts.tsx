'use client'
import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const options: ChartOptions<'bubble'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
    },
    y: {
      type: 'linear',
      beginAtZero: true,
    }
  }
};

const BubbleChart: React.FC = () => {
  return <Bubble data={data} options={options} />;
};

export default BubbleChart;