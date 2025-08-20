import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const AnalyticsGraph = ({
  views,
  watchTime,
  subscribers,
  earnings,
  viewsChange,
  watchTimeChange,
  subscribersChange,
  earningsChange,
  chartData,
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">MY CHANNEL OVERVIEW</h2>

      {/* Stat Boxes */}
      <div className="flex flex-nowrap gap-4 mb-6 overflow-x-auto">
        {[
          { label: "Views", value: views, change: viewsChange },
          { label: "Watch time", value: watchTime, change: watchTimeChange },
          { label: "Subscribers", value: subscribers, change: subscribersChange },
          { label: "Earnings", value: `$${earnings}`, change: earningsChange },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-gray-800 p-3 rounded w-44 flex-shrink-0"
          >
            <h4 className="text-gray-400 text-sm">{stat.label}</h4>
            <p className="text-lg font-bold">{stat.value}</p>
            <p
              className={`text-sm ${
                stat.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change >= 0 ? "↑" : "↓"} {Math.abs(stat.change)}%
            </p>
          </div>
        ))}
      </div>

      {/* Line Chart with Hover Tooltip */}
      <div className="bg-gray-800 p-4 rounded">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              tooltip: {
                enabled: true,
                backgroundColor: '#1f2937', // Dark background
                titleColor: '#fff',
                bodyColor: '#d1d5db',
                borderColor: '#4b5563',
                borderWidth: 1,
                padding: 10,
                cornerRadius: 6,
                callbacks: {
                  label: (tooltipItem) =>
                    `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`,
                },
              },
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: "#9CA3AF" },
                grid: { color: "#374151" },
              },
              x: {
                ticks: { color: "#9CA3AF" },
                grid: { color: "#374151" },
              },
            },
          }}
          height={300}
        />
      </div>
    </div>
  );
};

export default AnalyticsGraph;
