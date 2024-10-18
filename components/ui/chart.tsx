"use client"

import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ data }) {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Total',
        data: data.map(d => d.total),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return <Line data={chartData} />;
}

export function BarChart({ data }) {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Users',
        data: data.map(d => d.users),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  return <Bar data={chartData} />;
}

export function PieChart({ data }) {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      }
    ]
  };

  return <Pie data={chartData} />;
}