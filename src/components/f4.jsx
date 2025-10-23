import React from "react";
import {
  FlaskConical,
  Factory,
  ShieldCheck,
  BadgeCheck,
  Dna,
} from "lucide-react";

export default function F4() {
  const ingredients = [
    {
      name: "Tongkat Ali",
      desc: "Boosts testosterone, enhances libido, improves fertility, and supports muscle growth.",
      img: "/images/Frame 180.png",
      dose: "1,000 mg",
    },
    {
      name: "Shilajit",
      desc: "Improves fertility and boosts testosterone levels.",
      img: "/images/Frame 181.png",
      dose: "400 mg",
    },
    {
      name: "K1 & K2",
      desc: "Supports bone health and density, improves mood, and encourages testosterone production.",
      img: "/images/Frame 182.png",
      dose: "100 mg",
    },
    {
      name: "Vitamin D",
      desc: "Essential for maintaining cellular health and helping regulate testosterone production.",
      img: "/images/Frame 183.png",
      dose: "4,000 IU",
    },
    {
      name: "Zinc",
      desc: "An essential trace mineral that plays a role in testosterone metabolism and immune function.",
      img: "/images/Frame 184.png",
      dose: "30 mg",
    },
    {
      name: "Taurine",
      desc: "Reduces oxidative stress, improves blood flow, and supports increased testosterone levels.",
      img: "/images/Frame 185.png",
      dose: "675 mg",
    },
    {
      name: "Fenugreek",
      desc: "Supports testosterone production, DHT levels, and male vitality.",
      img: "/images/Frame 186.png",
      dose: "675 mg",
    },
    {
      name: "Boron",
      desc: "A trace mineral with the potential to increase free testosterone and regulate estrogen levels.",
      img: "/images/Frame 187.png",
      dose: "4 mg",
    },
  ];

  return (
    <div className="w-full bg-transparent text-white py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center">
        8 Ingredients In1 Powerful Formula
      </h2>
      <p className="text-[#00aaff] font-semibold text-sm md:text-base mt-2 tracking-wide uppercase">
        Clinically Dosed + Effective
      </p>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
        {ingredients.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group shadow-lg border border-gray-700/30 bg-gray-900/20 backdrop-blur-sm"
          >
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 p-5 h-full flex flex-col justify-end">
              <h3 className="text-lg font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-300 leading-snug">{item.desc}</p>
              <div className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full mt-3 self-start shadow-md">
                {item.dose}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-5xl border-t border-gray-700 mt-14 mb-8"></div>

      {/* Bottom Features Row */}
      <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-sm font-medium">
        <div className="flex items-center gap-2">
          <FlaskConical size={18} className="text-[#00aaff]" />
          <p>Third Party Tested</p>
        </div>
        <div className="flex items-center gap-2">
          <Factory size={18} className="text-[#00aaff]" />
          <p>Made in USA</p>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-[#00aaff]" />
          <p>Hormone-Free</p>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck size={18} className="text-[#00aaff]" />
          <p>Made In A CGMP Facility</p>
        </div>
        <div className="flex items-center gap-2">
          <Dna size={18} className="text-[#00aaff]" />
          <p>Non-GMO</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-12 bg-[#00aaff] hover:bg-[#0095e0] text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg">
        TRY IT NOW →
      </button>
    </div>
  );
}
