import React, { useState, useEffect } from "react";
import ViewsGraph from "../components/viewsgraph";
import LineGraph from "../components/LineGraph";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [dateRange, setDateRange] = useState("lifetime");

  // Updated tab labels
  const tabs = ["Overview", "Content", "Audience", "Trends"];

  const generateMetricsByRange = (range) => {
    let dataPoints = 0;
    switch (range) {
      case "7days":
        dataPoints = 7;
        break;
      case "28days":
        dataPoints = 28;
        break;
      case "90days":
        dataPoints = 90;
        break;
      case "365days":
        dataPoints = 30;
        break;
      case "lifetime":
      default:
        dataPoints = 50;
        break;
    }

    const views = [];
    const watchTime = [];
    const subscribers = [];

    for (let i = 0; i < dataPoints; i++) {
      const v = Math.floor(Math.random() * 50);
      const w = Number((v * 0.5 + Math.random() * 10).toFixed(1));
      const s = Math.floor(v / 15 + Math.random() * 3);

      views.push(v);
      watchTime.push(w);
      subscribers.push(s);
    }

    return { views, watchTime, subscribers };
  };

  const generateXLabels = (data) => {
    const labels = [];
    const step = Math.floor(data.length / 5) || 1;

    for (let i = 0; i < data.length; i += step) {
      labels.push(i.toString());
    }
    labels.push(`${data.length - 1} days`);
    return labels;
  };

  const [viewsData, setViewsData] = useState([]);
  const [watchTimeData, setWatchTimeData] = useState([]);
  const [subscribersData, setSubscribersData] = useState([]);

  const [realtimeData] = React.useState(() =>
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 50))
  );

  useEffect(() => {
    const { views, watchTime, subscribers } = generateMetricsByRange(dateRange);
    setViewsData(views);
    setWatchTimeData(watchTime);
    setSubscribersData(subscribers);
  }, [dateRange]);

  const datasets = [
    { label: "Views", data: viewsData, color: "#3b82f6" },
    { label: "Watch Time (hours)", data: watchTimeData, color: "#10b981" },
    { label: "Subscribers", data: subscribersData, color: "#f59e0b" },
  ];

  const maxValue = Math.max(...viewsData, ...watchTimeData, ...subscribersData, 50);

  const renderOverviewTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-[#1e1e1e] rounded-xl p-6 border border-gray-700">
        <h2 className="text-lg font-bold mb-6">
          This video has had {viewsData.reduce((a, b) => a + b, 0)} views{" "}
          {dateRange === "lifetime" ? "since it was published" : "in the selected range"}
        </h2>

        <LineGraph
          datasets={datasets}
          maxValue={maxValue}
          height={180}
          yLabels={[maxValue, Math.round(maxValue / 2), 0]}
          xLabels={generateXLabels(viewsData)}
        />
      </div>

      <ViewsGraph data={realtimeData} title="Realtime" />
    </div>
  );

  // Renamed Reach to Content
  const renderContentTab = () => (
    <div className="text-white bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Content</h2>
      <p className="text-gray-400">Content analytics will go here...</p>
    </div>
  );

  // Renamed Engagement to Audience
  const renderAudienceTab = () => (
    <div className="text-white bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Audience</h2>
      <p className="text-gray-400">Audience metrics will go here...</p>
    </div>
  );

  // Renamed Audience to Trends
  const renderTrendsTab = () => (
    <div className="text-white bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Trends</h2>
      <p className="text-gray-400">Trend insights will go here...</p>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Overview":
        return renderOverviewTab();
      case "Content":
        return renderContentTab();
      case "Audience":
        return renderAudienceTab();
      case "Trends":
        return renderTrendsTab();
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 pt-14">
      {/* Page Heading */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Video Analytics</h1>

        {/* Date Range Selector */}
        <div className="flex items-center mt-3 md:mt-0 space-x-2 p-3">
          <span className="text-sm text-gray-400">Date Range:</span>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-[#1e1e1e] text-sm px-3 py-2 rounded border border-gray-700"
          >
            <option value="7days">Last 7 days</option>
            <option value="28days">Last 28 days</option>
            <option value="90days">Last 90 days</option>
            <option value="365days">Last 365 days</option>
            <option value="lifetime">Lifetime (Since published)</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-[#1e1e1e] text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      {renderActiveTab()}
    </div>
  );
};

export default Analytics;
