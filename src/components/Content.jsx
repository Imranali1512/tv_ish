import React, { useEffect, useState } from "react";
import LineGraph from "../components/LineGraph";

const Content = ({ dateRange }) => {
  const [viewsData, setViewsData] = useState([]);
  const [impressionsData, setImpressionsData] = useState([]);
  const [avgViewDurationData, setAvgViewDurationData] = useState([]);

  // Generate dummy data based on date range
  const generateContentMetrics = (range) => {
    let points = 0;
    switch (range) {
      case "7days":
        points = 7;
        break;
      case "28days":
        points = 28;
        break;
      case "90days":
        points = 90;
        break;
      case "365days":
        points = 30;
        break;
      default:
        points = 50;
    }

    const views = [];
    const impressions = [];
    const durations = [];

    for (let i = 0; i < points; i++) {
      const v = Math.floor(Math.random() * 100);
      const imp = v + Math.floor(Math.random() * 150); // impressions more than views
      const dur = Number((Math.random() * 8 + 2).toFixed(1)); // 2–10 minutes

      views.push(v);
      impressions.push(imp);
      durations.push(dur);
    }

    return { views, impressions, durations };
  };

  const generateXLabels = (data) => {
    const labels = [];
    const step = Math.floor(data.length / 5) || 1;
    for (let i = 0; i < data.length; i += step) {
      labels.push(`${i}d`);
    }
    labels.push(`${data.length - 1}d`);
    return labels;
  };

  useEffect(() => {
    const { views, impressions, durations } = generateContentMetrics(dateRange);
    setViewsData(views);
    setImpressionsData(impressions);
    setAvgViewDurationData(durations);
  }, [dateRange]);

  const maxValue = Math.max(
    ...viewsData,
    ...impressionsData,
    ...avgViewDurationData.map((d) => d * 10), // scale duration
    50
  );

  return (
    <div className="text-white bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Content Performance</h2>

      <LineGraph
        datasets={{
          Views: viewsData,
          Impressions: impressionsData,
          "Avg View Duration": avgViewDurationData.map((d) => d * 10), // scale up for graph
        }}
        maxValue={maxValue}
        height={180}
        yLabels={[maxValue, Math.round(maxValue / 2), 0]}
        xLabels={generateXLabels(viewsData)}
        strokeColors={{
          Views: "#3b82f6",
          Impressions: "#f59e0b",
          "Avg View Duration": "#10b981",
        }}
      />
    </div>
  );
};

export default Content;
