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
        data: [120, 180, 189, 170, 160],
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.3)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Watch Time",
        data: [100, 140, 150, 130, 125],
        borderColor: "#6B7280",
        backgroundColor: "rgba(107,114,128,0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const subscribers = [
    {
      avatar: "https://placehold.co/40x40",
      name: "Alice",
      subCount: 123,
      time: "1h ago",
    },
    {
      avatar: "https://placehold.co/40x40",
      name: "Bob",
      subCount: 95,
      time: "2h ago",
    },
  ];

  const comments = [
    {
      avatar: "https://placehold.co/40x40",
      text: "Awesome video!",
      nickname: "John",
      time: "30m ago",
    },
    {
      avatar: "https://placehold.co/40x40",
      text: "Thanks for sharing!",
      nickname: "Jane",
      time: "1h ago",
    },
  ];

  const earnings = [
    {
      avatar: "https://placehold.co/40x40",
      amount: 89.0,
      change: -12.5,
      time: "2h ago",
    },
    {
      avatar: "https://placehold.co/40x40",
      amount: 120.0,
      change: 25.6,
      time: "4h ago",
    },
  ];

  const playlists = [
    {
      thumbnail: "https://placehold.co/300x180?text=Playlist+1",
      title: "Frontend Projects",
      videoCount: 12,
    },
    {
      thumbnail: "https://placehold.co/300x180?text=Playlist+2",
      title: "React Tutorials",
      videoCount: 8,
    },
    {
      thumbnail: "https://placehold.co/300x180?text=Playlist+3",
      title: "UI/UX Design",
      videoCount: 5,
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white overflow-x-hidden">
      {/* Left Sidebar */}
      <aside className="hidden md:block w-64 bg-black p-4 flex-shrink-0">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://placehold.co/80x80"
            alt="Profile"
            className="rounded-full border-2 border-red-500 mb-2"
          />
          <h2 className="text-lg font-semibold">Brooke Cooper</h2>
          <p className="text-sm text-gray-400">Web Developer</p>
        </div>
        <nav className="space-y-3">
          {[
            "Home",
            "Dashboard",
            "My Videos",
            "Liked Videos",
            "Playlist",
            "Watch Later",
            "History",
            "Settings",
            "Support",
            "Log out",
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-800 ${
                item === "Dashboard" ? "bg-gray-800" : ""
              }`}
            >
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto pt-12 px-6 pb-6 space-y-8 bg-black">
          {/* Watched Videos */}
          <WatchedVideos videos={videoData} />

          {/* Analytics + Graph */}
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

          {/* Playlist Section */}
          <PlaylistSection playlists={playlists} />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="block w-80 bg-black p-4 overflow-y-auto border-l border-gray-800 flex-shrink-0">
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
