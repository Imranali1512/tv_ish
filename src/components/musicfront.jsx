import React from "react";

const MusicFront = () => {
  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center bg-black overflow-hidden pt-28 px-6">
      {/* Container with simple subtle border */}
      <div className="relative w-full max-w-7xl h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-md group transition-all duration-1000 ease-in-out
                      border-2 border-yellow-500/40">

        {/* Background Image - centered and fully visible */}
        <img
          src="/images/concert.png"
          alt="Music Event"
          className="absolute inset-0 w-full h-full object-contain object-center brightness-[0.5] scale-110 blur-[1.5px] group-hover:scale-125 transition-transform duration-[2000ms] ease-out"
        />

        {/* Radial Light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)] z-10 pointer-events-none" />

        {/* Top glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[320px] h-[320px] bg-yellow-400 opacity-15 blur-4xl rounded-full z-10 animate-pulse pointer-events-none" />

        {/* Bottom glow */}
        <div className="absolute bottom-5 right-10 w-36 h-36 bg-yellow-400 opacity-8 blur-3xl rounded-full animate-pulse-slow z-10 pointer-events-none" />

        {/* Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 animate-fadeInZoom">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] tracking-wide leading-tight animate-shine bg-[length:200%]">
            ALL ABOUT MUSIC — ITS ALL HERE
          </h1>
          <p className="mt-5 text-white/95 text-base md:text-xl font-medium max-w-2xl drop-shadow-md">
            Turn on the feeling with every beat. Dive into the rhythm of the most electrifying music experiences.
          </p>
        </div>

        {/* Floating Light Effects */}
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-yellow-400 opacity-50 filter blur-4xl animate-floatUp pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 rounded-full bg-yellow-300 opacity-40 filter blur-3xl animate-floatUp pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MusicFront;
