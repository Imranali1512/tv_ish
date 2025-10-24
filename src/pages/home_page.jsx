import React from "react";
import Header from "../components/header";
import Topbar from "../components/topbar";
import F1 from "../components/f1";
import F2 from "../components/f2";
import F3 from "../components/f3";
import F4 from "../components/f4";
import F5 from "../components/f5";  // 👈 new import added

function Home_page() {
  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/images/image.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Soft overlay for depth */}
      <div className="min-h-screen w-full bg-black bg-opacity-50 flex flex-col">
        <Topbar />
        <Header />

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16 px-6 lg:px-20 py-12 lg:py-20">
          
          {/* Left side (F1) - Wider display */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full lg:w-[600px] xl:w-[700px]">
              <F1 />
            </div>
          </div>

          {/* Right side (F2) */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="max-w-md w-full">
              <F2 />
            </div>
          </div>
        </div>

        {/* F3 Section */}
        <div className="px-6 lg:px-20 pb-20 flex justify-center">
          <F3 />
        </div>

        {/* F4 Section - Below F3 */}
        <div className="px-6 lg:px-20 pb-20 flex justify-center">
          <F4 />
        </div>

        <div className="px-6 lg:px-20 pb-20 flex justify-center">
          <F5 />
        </div>

      </div>
    </div>
  );
}

export default Home_page;
