import React, { useState, useMemo } from "react";
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
import {
  EyeIcon,
  ClockIcon,
  UserPlusIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

const iconMap = {
  Views: EyeIcon,
  "Watch time": ClockIcon,
  Subscribers: UserPlusIcon,
  Earnings: CurrencyDollarIcon,
};

const AnalyticsGraph = ({
  views,
  watchTime,
  subscribers,
  earnings,
  allChartData,
}) => {
  const [selectedStat, setSelectedStat] = useState("Views");
  const [selectedRange, setSelectedRange] = useState("weekly");

  // Auto-calculate current, previous and change for the selected range and stats
  const stats = useMemo(() => {
    const data = allChartData[selectedRange] || { labels: [], datasets: [] };
    const lastIndex = data.labels.length - 1;

    const findDataset = (label) => data.datasets.find((d) => d.label === label);

    const currentViews = findDataset("Views")?.data[lastIndex] || 0;
    const previousViews = findDataset("Previous Views")?.data[lastIndex] || 0;

    const currentWatchTime = findDataset("Watch time")?.data[lastIndex] || 0;
    const previousWatchTime = findDataset("Previous Watch time")?.data[lastIndex] || 0;

    const currentSubscribers = findDataset("Subscribers")?.data[lastIndex] || 0;
    const previousSubscribers = findDataset("Previous Subscribers")?.data[lastIndex] || 0;

    const currentEarnings = findDataset("Earnings")?.data[lastIndex] || 0;
    const previousEarnings = findDataset("Previous Earnings")?.data[lastIndex] || 0;

    const calcChange = (current, previous) => {
      if (previous === 0) return 0;
      return ((current - previous) / previous) * 100;
    };

    return [
      {
        label: "Views",
        value: currentViews,
        change: calcChange(currentViews, previousViews),
      },
      {
        label: "Watch time",
        value: currentWatchTime,
        change: calcChange(currentWatchTime, previousWatchTime),
      },
      {
        label: "Subscribers",
        value: currentSubscribers,
        change: calcChange(currentSubscribers, previousSubscribers),
      },
      {
        label: "Earnings",
        value: `$${currentEarnings.toFixed(2)}`,
        change: calcChange(currentEarnings, previousEarnings),
      },
    ];
  }, [allChartData, selectedRange]);

  // For chart data, pick current and previous datasets based on selectedStat and selectedRange
  const rawChartData = allChartData[selectedRange] || { labels: [], datasets: [] };

  const currentDataset = rawChartData.datasets.find((d) => d.label === selectedStat);
  const previousDataset = rawChartData.datasets.find(
    (d) => d.label === `Previous ${selectedStat}`
  );

  const filteredChartData = {
    labels: rawChartData.labels,
    datasets: [
      // Current Period Dataset
      {
        ...currentDataset,
        label: "Current",
        borderColor: "#10B981",
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(16,185,129,0.3)");
          gradient.addColorStop(1, "rgba(16,185,129,0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 7,
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 3,
        pointBackgroundColor: "#10B981",
      },

      // Previous Period Dataset (comparison line)
      previousDataset && {
        ...previousDataset,
        label: "Previous",
        borderColor: "#6B7280",
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ].filter(Boolean),
  };

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg w-full shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h2 className="text-xl font-bold tracking-tight">My Channel Overview</h2>
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded border border-gray-700 hover:border-gray-500 focus:outline-none focus:ring focus:ring-green-500/30"
        >
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
          <option value="yearly">This Year</option>
        </select>
      </div>

      {/* Stat Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map(({ label, value, change }) => {
          const isSelected = selectedStat === label;
          const Icon = iconMap[label];

          // Show change with 2 decimals, and a % sign
          const displayChange = typeof change === "number" ? change.toFixed(2) : change;

          return (
            <button
              key={label}
              onClick={() => setSelectedStat(label)}
              className={`
                group p-4 rounded-lg transition-all duration-300 ease-in-out
                flex flex-col gap-1 justify-center items-start border 
                ${isSelected ? "bg-green-600 border-green-400 shadow-lg" : "bg-gray-800 border-gray-700 hover:bg-gray-700"}
              `}
            >
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Icon className="h-4 w-4 text-green-400" />
                {label}
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div
                className={`text-sm font-medium ${
                  change >= 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                {change >= 0 ? "↑" : "↓"} {Math.abs(displayChange)}%
              </div>
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md w-full aspect-[16/9] min-h-[250px]">
        <Line
          data={filteredChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: "index",
              intersect: false,
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "#111827",
                titleColor: "#fff",
                bodyColor: "#d1d5db",
                borderColor: "#374151",
                borderWidth: 1,
                cornerRadius: 10,
                padding: 14,
                displayColors: false,
                callbacks: {
                  title: (ctx) => `📅 ${ctx[0].label}`,
                  label: (ctx) => {
                    const label = ctx.dataset.label || "";
                    const value = ctx.formattedValue;
                    return `📊 ${label}: ${value}`;
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: "#9CA3AF" },
                grid: { color: "#374151", borderDash: [4, 4] },
              },
              x: {
                ticks: { color: "#9CA3AF" },
                grid: { color: "#374151" },
              },
            },
            elements: {
              point: {
                radius: 0,
                hoverRadius: 6,
                backgroundColor: "#10B981",
                borderWidth: 2,
                hoverBorderColor: "#ffffff",
              },
              line: {
                tension: 0.4,
                borderWidth: 3,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default AnalyticsGraph;
