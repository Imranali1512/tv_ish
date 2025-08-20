import React from "react";

const Sidebar = ({ subscribers, comments, earnings }) => {
  return (
    <div className="w-80 max-w-full bg-[#121212] text-white p-4 space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-300 uppercase">Real-Time Activity</h2>
        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </div>

      {/* Subscribers */}
      <div>
        <h3 className="text-xs text-gray-400 mb-2 uppercase">New Subscribers</h3>
        <div className="space-y-4">
          {subscribers.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center space-x-3">
                <img
                  src={s.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="truncate max-w-[140px]">
                  <p className="text-sm truncate">{s.name}</p>
                  <p className="text-xs text-gray-500 truncate">{s.subCount} subscribers</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div>
        <h3 className="text-xs text-gray-400 mb-2 uppercase">Last Comments</h3>
        <div className="space-y-4">
          {comments.map((c, idx) => (
            <div key={idx} className="flex items-start space-x-2 overflow-hidden">
              <img
                src={c.avatar}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                alt=""
              />
              <div className="truncate max-w-[180px]">
                <p className="text-sm truncate">{c.text}</p>
                <p className="text-xs text-gray-500 truncate">by {c.nickname}</p>
              </div>
              <span className="text-xs text-gray-400 ml-auto whitespace-nowrap">{c.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Earnings */}
      <div>
        <h3 className="text-xs text-gray-400 mb-2 uppercase">Recent Earnings</h3>
        <div className="space-y-4">
          {earnings.map((e, idx) => (
            <div key={idx} className="flex items-center justify-between overflow-hidden">
              <div className="flex items-center space-x-2">
                <img
                  src={e.avatar}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  alt=""
                />
                <div>
                  <p className="text-sm text-green-400">${e.amount}</p>
                  <p
                    className={`text-xs ${
                      e.change > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {e.change > 0 ? "↑" : "↓"} {Math.abs(e.change)}%
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{e.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
