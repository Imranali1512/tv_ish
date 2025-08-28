import React, { useState, useEffect, useRef } from "react";

const cardData = [
  {
    src: "/images/AI1.png",
    border: "#7a3cff",
    shadow: "rgba(122,56,255,0.9)",
    translateZ: 130,
    translateX: 0,
    zIndex: 30,
    brightness: 1.15,
    contrast: 1.1,
  },
  {
    src: "/images/AI2.png",
    border: "#914dff",
    shadow: "rgba(145,77,255,0.7)",
    translateZ: 70,
    translateX: 22,
    zIndex: 20,
    brightness: 1.05,
    contrast: 1.05,
  },
  {
    src: "/images/AI3.png",
    border: "#b088ff",
    shadow: "rgba(176,136,255,0.5)",
    translateZ: 0,
    translateX: 44,
    zIndex: 10,
    brightness: 1,
    contrast: 1,
  },
];

const FrontAI = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [autoTilt, setAutoTilt] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const animationFrame = useRef();
  const [mounted, setMounted] = useState(false);
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Continuous slow sway animation
  useEffect(() => {
    let startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      // Oscillate between -7 and +7 degrees on x and y for subtle 3D sway
      const x = 7 * Math.sin(elapsed / 4000);
      const y = 7 * Math.cos(elapsed / 3500);

      if (!isHover) setAutoTilt({ x, y });
      animationFrame.current = requestAnimationFrame(animate);
    }

    animationFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame.current);
  }, [isHover]);

  // Mouse parallax tilt with scale (overrides autoTilt on hover)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setTilt({ x, y });
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHover(false);
  };

  // Ripple effect for button click
  const handleButtonClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
    setTimeout(() => setRipple({ x: 0, y: 0, show: false }), 500);
  };

  // Use mouse tilt on hover, otherwise use continuous auto tilt
  const currentTilt = isHover ? tilt : autoTilt;

  return (
    <div
      className={`relative w-full min-h-screen bg-[#0f0124] overflow-hidden select-none transition-opacity duration-1500 ease-in-out ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{ perspective: "1800px", paddingTop: "60px" }} // Added top padding here
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0124] to-[#43187c]" />

      {/* Twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => {
          const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 1.5 + 0.5}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            opacity: 0.3,
          };
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={style}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-20 lg:py-36">
        {/* Left Text */}
        <div className="text-center lg:text-left lg:w-1/2 ml-8 animate-slideUpFade">
          <h1 className="text-white font-bold text-[48px] md:text-[64px] leading-tight font-['Orbitron'] tracking-wide relative inline-block glow-text flicker">
            AI Revolution: Smart Videos, Smarter Minds
            <br />

            {/* Flicker overlay */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 opacity-30 blur-[15px] animate-glowPulse rounded-md pointer-events-none" />
          </h1>
        </div>

        {/* Right Image Stack */}
        <div
          className="relative mt-20 lg:mt-0 lg:w-1/2 flex justify-center items-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative w-[320px] h-[460px]">
            {cardData.map(
              (
                {
                  src,
                  border,
                  shadow,
                  translateZ,
                  translateX,
                  zIndex,
                  brightness,
                  contrast,
                },
                i
              ) => (
                <div
                  key={i}
                  className="absolute top-0 w-full h-full rounded-2xl border shadow-lg overflow-hidden cursor-pointer transition-transform duration-400 hover:scale-[1.07] hover:shadow-[0_0_30px_rgba(122,34,255,0.9)]"
                  style={{
                    left: translateX,
                    zIndex,
                    filter: `brightness(${brightness}) contrast(${contrast}) drop-shadow(0 10px 10px ${shadow})`,
                    border: `3px solid ${border}`,
                    transform: `
                      rotateY(-25deg)
                      rotateX(3deg)
                      translateZ(${translateZ}px)
                      translateX(${translateX}px)
                      rotateX(${currentTilt.y}deg)
                      rotateY(${currentTilt.x}deg)
                      translateX(${currentTilt.x * 1.3}px)
                      translateY(${currentTilt.y * 1}px)
                      scale(${1 + Math.abs(currentTilt.x + currentTilt.y) * 0.015})
                    `,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  title={`AI Card ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`AI Card ${i + 1}`}
                    className="w-full h-full object-cover rounded-2xl relative z-10"
                    draggable={false}
                  />

                  {/* Shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none overflow-hidden">
                    <div className="shine" />
                  </div>

                  {/* Neon animated border */}
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `0 0 15px 3px ${border}`,
                      animation: `pulseGlow 3s ease-in-out infinite alternate`,
                    }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Removed Scroll Down Arrow */}

      {/* CSS Animations */}
      <style>{`
        /* Twinkling stars */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        /* Text glow flicker */
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
            text-shadow:
              0 0 5px #a855f7,
              0 0 15px #7c3aed,
              0 0 25px #7c3aed,
              0 0 40px #8b5cf6,
              0 0 60px #a855f7;
          }
          20%, 22%, 24%, 55% {
            opacity: 0.7;
            text-shadow: none;
          }
        }
        .flicker {
          animation: flicker 3s linear infinite;
        }

        /* Text glow pulse */
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        .glow-text {
          position: relative;
          z-index: 5;
        }
        .glow-text > span {
          z-index: 10;
        }
        .glowPulse {
          animation: glowPulse 4s ease-in-out infinite;
        }

        /* Button gradient shift */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        /* Button ripple */
        .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rippleEffect 0.5s ease-out;
          pointer-events: none;
          width: 120px;
          height: 120px;
          opacity: 0.9;
          z-index: 20;
        }
        @keyframes rippleEffect {
          0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }

        /* Slide up fade for left text */
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUpFade {
          animation: slideUpFade 1.2s ease forwards;
        }

        /* Card shine */
        @keyframes shineMove {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }
        .shine {
          position: absolute;
          top: 0;
          left: -50%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(10px);
          animation: shineMove 3.5s linear infinite;
          pointer-events: none;
          border-radius: 12px;
          z-index: 15;
        }

        /* Pulse glow for card border */
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px 2px rgba(122, 34, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 20px 6px rgba(122, 34, 255, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default FrontAI;
