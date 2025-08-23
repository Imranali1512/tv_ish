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
  Filler,
} from "chart.js";

// Register chart components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

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
  const stats = [
    { label: "Views", value: views, change: viewsChange },
    { label: "Watch time", value: watchTime, change: watchTimeChange },
    { label: "Subscribers", value: subscribers, change: subscribersChange },
    { label: "Earnings", value: `$${earnings}`, change: earningsChange },
  ];

  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-4">MY CHANNEL OVERVIEW</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(({ label, value, change }, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded flex flex-col justify-center"
          >
            <h4 className="text-gray-400 text-sm">{label}</h4>
            <p className="text-xl font-bold">{value}</p>
            <p className={change >= 0 ? "text-green-500" : "text-red-500"}>
              {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
            </p>
          </div>
        ))}
      </div>

      {/* Responsive Chart with horizontal scrollbar */}
      <div className="bg-gray-800 p-4 rounded w-full aspect-[16/9] min-h-[200px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
              tooltip: {
                enabled: true,
                backgroundColor: "#1f2937",
                titleColor: "#fff",
                bodyColor: "#d1d5db",
                borderColor: "#4b5563",
                borderWidth: 1,
                padding: 10,
                cornerRadius: 6,
              },
              legend: { display: false },
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
        />
      </div>
    </div>
  );
};

export default AnalyticsGraph;
