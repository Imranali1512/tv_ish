import React from "react";
import { useInView } from "../hooks/useInView"; // custom hook for scroll animation

const AnimatedCard = ({ bgColor, imgSrc, altText, height = "h-52", delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`relative w-28 transition-all duration-1000 ${
        inView ? "animate-fadeZoomSlow" : "opacity-0"
      }`}
    >
      {/* Outer Glow */}
      <div
        className={`absolute -top-4 -left-4 w-[140%] h-[140%] rounded-[60px] ${bgColor} opacity-30 blur-2xl z-0 animate-pulseSlow`}
      ></div>

      {/* Image Card */}
      <div
        className={`relative p-[2px] w-28 ${height} rounded-[50px] ${bgColor} shadow-xl transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rotate-[2deg] hover:scale-[1.1] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)] z-10 group overflow-hidden animate-float`}
      >
        {/* Shine Swipe */}
        <div className="absolute inset-0 z-20 overflow-hidden rounded-[50px] pointer-events-none">
          <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-white/10 via-white/60 to-white/10 transform rotate-6 group-hover:animate-shineSwipe"></div>
        </div>

        <img
          src={imgSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-[50px] transition duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

const EducationFront = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center px-6 pt-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Centered & Beautiful Heading */}
        <div className="text-white w-full md:w-auto mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeZoomSlow drop-shadow-lg text-center md:text-left max-w-xl mx-auto md:mx-0">
            Your Modern <br className="hidden md:block" /> Online School
          </h1>
        </div>

        {/* Image Grid */}
        <div className="relative grid grid-cols-3 gap-4 pt-10 md:pt-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 pt-12">
            <AnimatedCard
              bgColor="bg-purple-600"
              imgSrc="/images/std1.png"
              altText="Student 1"
              delay={200}
            />
            <AnimatedCard
              bgColor="bg-neutral-200"
              imgSrc="/images/std4.png"
              altText="Student 4"
              delay={500}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 items-center">
            <AnimatedCard
              bgColor="bg-orange-500"
              imgSrc="/images/std2.png"
              altText="Student 2"
              height="h-60"
              delay={800}
            />
            <AnimatedCard
              bgColor="bg-pink-600"
              imgSrc="/images/std5.png"
              altText="Student 5"
              height="h-44"
              delay={1100}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-12">
            <AnimatedCard
              bgColor="bg-yellow-400"
              imgSrc="/images/std3.png"
              altText="Student 3"
              delay={1400}
            />
            <AnimatedCard
              bgColor="bg-green-400"
              imgSrc="/images/std6.png"
              altText="Student 6"
              delay={1700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFront;
