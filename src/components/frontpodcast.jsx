import React, { useEffect, useState } from "react";

const podcasters = [
  {
    name: "CHARLIE KENTER",
    tag: "PODCASTMASTER",
    image: "/images/charlie.png",
    style: "translate-y-2 z-[10]",
    glowPosition: "left-[10%]",
    bottomColor: "bg-green-700",
  },
  {
    name: "TATIANA STANTON",
    tag: "GIRLSPODD",
    image: "/images/tatiana.png",
    style: "translate-y-7 z-[20]",
    glowPosition: "left-[35%]",
    bottomColor: "bg-purple-600",
  },
  {
    name: "ABRAM WORKMAN",
    tag: "AMERICANOPOD",
    image: "/images/abram.png",
    style: "translate-y-1 z-[15]",
    glowPosition: "left-[60%]",
    bottomColor: "bg-emerald-600",
  },
  {
    name: "BARBARAPOP",
    tag: "BARBARPOD",
    image: "/images/barbara.png",
    style: "translate-y-8 z-[30]",
    glowPosition: "left-[85%]",
    bottomColor: "bg-indigo-600",
  },
];

const FrontPodcast = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobileOrTablet(window.innerWidth < 1024); // Tablet & below
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const displayedPodcasters = isMobileOrTablet ? podcasters.slice(0, 3) : podcasters;

  return (
    <div className="relative bg-black text-white py-20 px-4 font-sans min-h-screen flex flex-col items-center overflow-visible">

      {/* Glow Lines - hide on tablet and mobile */}
      {!isMobileOrTablet &&
        podcasters.map((p, i) => (
          <div
            key={i}
            className={`absolute top-0 h-full w-[2px] bg-green-400/10 blur-sm ${p.glowPosition}`}
          />
        ))}

      {/* Radial Background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-900/10 via-black/90 to-black z-0 pointer-events-none" />

      {/* Heading */}
      <h1 className="relative mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed mb-10 max-w-xl z-10 drop-shadow-xl">
        Best podcast’s publishing <br /> place for everyone
      </h1>

      {/* Podcaster Cards */}
      <div
        className={`relative z-10 flex items-end ${
          isMobileOrTablet
            ? "flex-nowrap overflow-x-auto px-2 hide-scrollbar"
            : "flex-wrap justify-center"
        } max-w-full`}
        style={{
          perspective: "1000px",
          gap: isMobileOrTablet ? "0" : "0",
        }}
      >
        {displayedPodcasters.map((pc, idx) => (
          <div
            key={idx}
            className={`relative flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-[260px] sm:h-[280px] md:h-[320px] lg:h-[370px] rounded-xl overflow-hidden group shadow-2xl cursor-pointer transition-all duration-700 ease-in-out ${pc.style}`}
            style={{
              marginLeft: idx === 0 ? "0" : isMobileOrTablet ? "-50px" : "-30px",
            }}
          >
            <div className="w-full h-full transform-gpu transition-transform duration-500 group-hover:rotate-x-[4deg] group-hover:rotate-y-[6deg] group-hover:scale-[1.05]">
              <img
                src={pc.image}
                alt={pc.name}
                className="w-full h-full object-cover brightness-110 contrast-110 saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
              <div
                className={`absolute bottom-0 left-0 w-full h-[4px] ${pc.bottomColor} z-20 shadow-md`}
              />
              <div className="absolute bottom-4 left-3 z-30 text-left">
                <h3 className="text-[7px] sm:text-[8px] md:text-[9px] font-semibold tracking-wider text-white drop-shadow-lg whitespace-nowrap">
                  {pc.name}
                </h3>
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-300 tracking-tight drop-shadow-md">
                  {pc.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOP PODCASTER heading - placed below images */}
      <div className="mt-12 w-full max-w-[1200px] text-center z-10 pointer-events-none overflow-visible">
        <h2
          className="text-[36px] sm:text-[60px] md:text-[72px] lg:text-[90px] font-extrabold uppercase tracking-wider text-transparent select-none mx-auto"
          style={{
            WebkitTextStroke: "2px rgba(0,255,150,0.25)",
            textShadow: "0 12px 24px rgba(0,255,150,0.2)",
            userSelect: "none",
            margin: 0,
          }}
        >
          TOP PODCASTER
        </h2>
      </div>

      {/* Scrollbar Hider CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FrontPodcast;
