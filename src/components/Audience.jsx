import React from "react";
import LineGraph from "./LineGraph";

const Engagement = ({ viewsData, watchTimeData, subscribersData }) => {
  const maxValue = Math.max(...viewsData, ...watchTimeData, ...subscribersData, 50);

  const generateXLabels = (data) => {
    const labels = [];
    const step = Math.floor(data.length / 5) || 1;
    for (let i = 0; i < data.length; i += step) {
      labels.push(i.toString());
    }
    labels.push(`${data.length - 1} days`);
    return labels;
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white">Audience Insights</h2>
      <LineGraph
        viewsData={viewsData}
        watchTimeData={watchTimeData}
        subscribersData={subscribersData}
        maxValue={maxValue}
        height={180}
        yLabels={[maxValue, Math.round(maxValue / 2), 0]}
        xLabels={generateXLabels(viewsData)}
      />
    </div>
  );
};

export default Engagement;
