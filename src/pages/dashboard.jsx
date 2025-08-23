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
    weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Views",
          data: [100, 120, 130, 110, 160, 170, 180],
        },
        {
          label: "Previous Views",
          data: [90, 110, 115, 105, 140, 150, 160],
        },
        {
          label: "Watch time",
          data: [80, 90, 100, 95, 105, 110, 120],
        },
        {
          label: "Previous Watch time",
          data: [75, 85, 90, 90, 100, 105, 110],
        },
        {
          label: "Subscribers",
          data: [5, 7, 6, 8, 9, 10, 11],
        },
        {
          label: "Previous Subscribers",
          data: [4, 6, 5, 7, 8, 9, 10],
        },
        {
          label: "Earnings",
          data: [20, 22, 23, 25, 27, 29, 30],
        },
        {
          label: "Previous Earnings",
          data: [18, 20, 21, 23, 25, 26, 28],
        },
      ],
    },

    monthly: {
      labels: [
        "JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG","SEPT","OCT","NOV","DEC"
      ],
      datasets: [
        {
          label: "Views",
          data: [150, 160, 170, 180, 200, 210, 230, 250,250,400,450,500],
        },
        {
          label: "Previous Views",
          data: [140, 155, 165, 170, 190, 200, 215, 240,250,350,400,450],
        },
        {
          label: "Watch time",
          data: [90, 95, 100, 105, 110, 115, 120, 125,135,150,170,180],
        },
        {
          label: "Previous Watch time",
          data: [85, 90, 95, 100, 105, 110, 115, 120,125,130,150,160],
        },
        {
          label: "Subscribers",
          data: [10, 12, 13, 14, 16, 18, 20, 22,24,26,28,30],
        },
        {
          label: "Previous Subscribers",
          data: [9, 11, 12, 13, 15, 17, 19, 20,22,24,26,28],
        },
        {
          label: "Earnings",
          data: [30, 32, 35, 38, 40, 42, 45, 47,50,55,60,65],
        },
        {
          label: "Previous Earnings",
          data: [28, 30, 33, 35, 38, 40, 43, 45,47,50,55,60],
        },
      ],
    },

    yearly: {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022","2023", "2024", "2025"

      ],
      datasets: [
        {
          label: "Views",
          data: [1000, 1200, 1300, 1100, 1600, 1700, 1800, 1900,2000,2200,2500,3000],
        },
        {
          label: "Previous Views",
          data: [900, 1100, 1250, 1050, 1500, 1600, 1700, 1800,1900,2000,2200,2500],
        },
        {
          label: "Watch time",
          data: [800, 900, 1000, 950, 1050, 1100, 1200, 1250,1300,1400,1500,1600],
        },
        {
          label: "Previous Watch time",
          data: [750, 850, 950, 900, 1000, 1050, 1100, 1150,1000,1200,1300,1400],
        },
        {
          label: "Subscribers",
          data: [50, 70, 60, 80, 90, 100, 110, 115,120,130,140,150],
        },
        {
          label: "Previous Subscribers",
          data: [45, 65, 55, 75, 85, 95, 105, 110,115,120,130,140],
        },
        {
          label: "Earnings",
          data: [200, 220, 230, 250, 270, 290, 300, 320,350,400,450,500],
        },
        {
          label: "Previous Earnings",
          data: [190, 210, 220, 240, 260, 280, 290, 310,340,380,400,450],
        },
      ],
    },
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
          <WatchedVideos videos={videoData} />

          {/* Analytics Graph */}
          <AnalyticsGraph
            views={180}
            watchTime={120}
            subscribers={22}
            earnings={47}
            viewsChange={18}
            watchTimeChange={14}
            subscribersChange={11}
            earningsChange={7}
            allChartData={chartData}
          />

          {/* Playlist Section */}
          <PlaylistSection playlists={playlists} />

          {/* Mobile Sidebar */}
          <div className="block lg:hidden border-t border-gray-800 pt-6">
            <Sidebar
              subscribers={subscribers}
              comments={comments}
              earnings={earnings}
            />
          </div>
        </div>
      </main>

      {/* Desktop Sidebar */}
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
