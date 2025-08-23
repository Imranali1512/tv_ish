import React from "react";
import WatchedVideos from "../components/WatchedVideos";
import AnalyticsGraph from "../components/AnalyticsGraph";
import Sidebar from "../components/Sidebar";
import PlaylistSection from "../components/PlaylistSection";

const Dashboard = () => {
  const videoData = [
    {
      thumbnail: "https://placehold.co/300x180?text=Video+1",
      title: "Some title about this video",
      duration: "4:34",
      nickname: "Nickname1",
      timeAgo: "15m ago",
    },
    {
      thumbnail: "https://placehold.co/300x180?text=Video+2",
      title: "Some title about this video",
      duration: "5:20",
      nickname: "Nickname2",
      timeAgo: "30m ago",
    },
    {
      thumbnail: "https://placehold.co/300x180?text=Video+3",
      title: "Some title about this video",
      duration: "6:00",
      nickname: "Nickname3",
      timeAgo: "1h ago",
    },
  ];

  const chartData = {
    labels: ["8 Mar", "12 Mar", "16 Mar", "20 Mar", "29 Mar"],
    datasets: [
      {
      label: "Views",
      data: [100, 200, 150, 300],
      borderColor: "rgb(59,130,246)",
      backgroundColor: "rgba(59,130,246,0.2)",
      fill: true,
    },
    {
      label: "Watch time",
      data: [50, 70, 80, 60],
      borderColor: "rgb(16,185,129)",
      backgroundColor: "rgba(16,185,129,0.2)",
      fill: true,
    },
    {
      label: "Subscribers",
      data: [10, 20, 30, 25],
      borderColor: "rgb(234,179,8)",
      backgroundColor: "rgba(234,179,8,0.2)",
      fill: true,
    },
    {
      label: "Earnings",
      data: [20, 40, 35, 45],
      borderColor: "rgb(239,68,68)",
      backgroundColor: "rgba(239,68,68,0.2)",
      fill: true,
    },
    ],
  };

  const subscribers = [
    { avatar: "https://placehold.co/40x40", name: "Alice", subCount: 123, time: "1h ago" },
    { avatar: "https://placehold.co/40x40", name: "Bob", subCount: 95, time: "2h ago" },
  ];

  const comments = [
    { avatar: "https://placehold.co/40x40", text: "Awesome video!", nickname: "John", time: "30m ago" },
    { avatar: "https://placehold.co/40x40", text: "Thanks for sharing!", nickname: "Jane", time: "1h ago" },
  ];

  const earnings = [
    { avatar: "https://placehold.co/40x40", amount: 89.0, change: -12.5, time: "2h ago" },
    { avatar: "https://placehold.co/40x40", amount: 120.0, change: 25.6, time: "4h ago" },
  ];

  const playlists = [
    { thumbnail: "https://placehold.co/300x180?text=Playlist+1", title: "Frontend Projects", videoCount: 12 },
    { thumbnail: "https://placehold.co/300x180?text=Playlist+2", title: "React Tutorials", videoCount: 8 },
    { thumbnail: "https://placehold.co/300x180?text=Playlist+3", title: "UI/UX Design", videoCount: 5 },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Main content */}
      <main className="flex-1 w-full px-4 md:px-6 pt-20 pb-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Watched Videos */}
          <div className="w-full">
            <WatchedVideos videos={videoData} />
          </div>

          {/* Analytics Graph */}
          <div className="w-full">
            <AnalyticsGraph
              views={150}
              watchTime={150}
              subscribers={15}
              earnings={150}
              viewsChange={12}
              watchTimeChange={-12}
              subscribersChange={13}
              earningsChange={-12}
              chartData={chartData}
            />
          </div>

          {/* Playlist Section */}
          <div className="w-full">
            <PlaylistSection playlists={playlists} />
          </div>

          {/* Sidebar content for mobile/tablet */}
          <div className="block lg:hidden border-t border-gray-800 pt-6">
            <Sidebar
              subscribers={subscribers}
              comments={comments}
              earnings={earnings}
            />
          </div>
        </div>
      </main>

      {/* Sidebar for desktop */}
      <aside className="hidden lg:block w-full max-w-sm bg-black border-l border-gray-800 p-4 overflow-y-auto">
        <Sidebar
          subscribers={subscribers}
          comments={comments}
          earnings={earnings}
        />
      </aside>
    </div>
  );
};

export default Dashboard;
