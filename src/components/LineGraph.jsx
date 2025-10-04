import React from "react";

const LineGraph = ({
  datasets = [],  // Each dataset: { label, data: [], color: "#hex" }
  maxValue = 50,
  height = 600,
  yLabels = [50, 25, 0],
  xLabels = [],
}) => {
  const paddingLeft = 40;
  const paddingBottom = 50;

  const viewBoxWidth = 1000;
  const viewBoxHeight = height + paddingBottom;

  // Generate points from data
  const generatePoints = (data) =>
    data.map((val, i) => {
      const x = (i / (data.length - 1)) * (viewBoxWidth - paddingLeft);
      const y = height - (val / maxValue) * height;
      return `${x + paddingLeft},${y}`;
    });

  // Render data point circles
  const renderCircles = (data, color) =>
    data.map((val, i) => {
      const x = (i / (data.length - 1)) * (viewBoxWidth - paddingLeft) + paddingLeft;
      const y = height - (val / maxValue) * height;
      return <circle key={i} cx={x} cy={y} r="3" fill={color} />;
    });

  // Generate stats
  const stats = datasets.map((ds) => {
    const total = ds.data.reduce((a, b) => a + b, 0);
    const isWatchTime = ds.label.toLowerCase().includes("watch");
    const isSubscribers = ds.label.toLowerCase().includes("subscriber");

    return {
      label: ds.label,
      value: isWatchTime ? total.toFixed(1) : isSubscribers ? `+${total}` : total,
      color: ds.color,
    };
  });

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      {/* Stats Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-black/40 p-4 rounded-lg text-center border border-gray-700"
          >
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Line Graph */}
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        style={{ width: "1000px", height: viewBoxHeight }}
      >
        {/* Y-axis Grid Lines */}
        {yLabels.map((val, idx) => {
          const y = (idx / (yLabels.length - 1)) * height;
          return (
            <g key={idx}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={viewBoxWidth}
                y2={y}
                stroke="#e5e7eb"
                strokeDasharray="4"
              />
              <text
                x={paddingLeft - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill="#9ca3af"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* Lines & Circles for Each Dataset */}
        {datasets.map((ds, idx) => (
          <g key={idx}>
            <polyline
              fill="none"
              stroke={ds.color}
              strokeWidth="2"
              points={generatePoints(ds.data).join(" ")}
            />
            {renderCircles(ds.data, ds.color)}
          </g>
        ))}

        {/* X-axis Labels */}
        {xLabels.length > 0 &&
          xLabels.map((label, idx) => {
            const x = (idx / (xLabels.length - 1)) * (viewBoxWidth - paddingLeft) + paddingLeft;
            return (
              <text
                key={idx}
                x={x}
                y={viewBoxHeight - 10}
                textAnchor="middle"
                fontSize="12"
                fill="#9ca3af"
              >
                {label}
              </text>
            );
          })}
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10, gap: 20 }}>
        {datasets.map((ds, idx) => (
          <div key={idx} style={{ color: ds.color }}>
            <strong>{ds.label}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineGraph;
