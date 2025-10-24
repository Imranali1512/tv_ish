import React from "react";
import { Check, Truck, RefreshCw, XCircle } from "lucide-react";

export default function F2() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 py-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-white mb-1">
          Natural Testosterone Support
        </h1>
        <p className="text-sm text-gray-400 flex justify-center items-center space-x-1">
          <span className="text-blue-400">★ 4.9</span>
          <span>Over 247,353 Vitalized Men</span>
        </p>

        {/* Pricing */}
        <div className="mt-4">
          <p className="text-gray-400 line-through inline-block mr-2">$118</p>
          <p className="text-3xl font-bold text-white inline-block">$59</p>
          <span className="ml-2 bg-orange-500 text-black px-2 py-1 rounded-md text-sm font-semibold">
            EXTRA $10 OFF
          </span>
          <span className="ml-2 text-gray-300 text-sm">
            USE CODE:{" "}
            <span className="text-orange-400 font-bold">ONE</span>
          </span>
        </div>

        {/* Offer Details */}
        <p className="mt-3 text-gray-300 text-sm font-semibold">
          Lock in 50% Off For Life
        </p>
        <p className="text-gray-400 text-xs">
          Less than $2/day. Clinical Doses.
        </p>

        {/* Bullets */}
        <ul className="text-sm text-gray-300 text-left mt-4 space-y-2">
          <li className="flex items-start">
            <Check className="text-orange-400 mr-2 mt-1" size={16} />
            60% Increase in Natural T Production in 12 Weeks*
          </li>
          <li className="flex items-start">
            <Check className="text-orange-400 mr-2 mt-1" size={16} />
            Clinical Doses for less than $2/day
          </li>
          <li className="flex items-start">
            <Check className="text-orange-400 mr-2 mt-1" size={16} />
            Made in USA + 3rd Party Tested
          </li>
          <li className="flex items-start">
            <Check className="text-orange-400 mr-2 mt-1" size={16} />
            Higher T in 90 Days or your Money Back
          </li>
        </ul>

        <p className="text-[10px] text-gray-500 mt-2">
          *Based on survey of 1000 actual Cell Pwr customers.
        </p>

        {/* CTA Button */}
        <button className="bg-[#00aaff] hover:bg-[#0095e0] text-white font-semibold w-full py-4 mt-5 rounded-md transition-all duration-200">
          TRY IT NOW →
        </button>

        {/* Disclaimer */}
        <p className="text-[11px] text-gray-400 mt-3 leading-tight">
          CellPwr™ does not sell on Amazon or eBay. If you see any product
          listings on these websites, they are illegal knock offs. We are
          actively shutting them down.
        </p>

        {/* Extra Discount Section */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            EXTRA <span className="text-orange-400">$10 OFF</span>
          </h2>
          <p className="text-gray-300 text-sm mb-2">WITH CODE</p>
          <div className="inline-block border border-dashed border-orange-400 px-4 py-2 text-orange-400 font-semibold tracking-widest rounded-md">
            ONE
          </div>

          {/* Icons Row */}
          <div className="flex justify-between mt-6 text-sm text-gray-300">
            <div className="flex flex-col items-center w-1/3">
              <Truck size={22} className="text-orange-400 mb-1" />
              <p className="text-center leading-tight">
                Fast Free Shipping<br />with First Order
              </p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <RefreshCw size={22} className="text-orange-400 mb-1" />
              <p className="text-center leading-tight">
                Refill Ships in<br />30 Days
              </p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <XCircle size={22} className="text-orange-400 mb-1" />
              <p className="text-center leading-tight">
                Change or Cancel<br />Anytime
              </p>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 mt-3 leading-tight">
            By default, you’ll receive a 30-day supply every 30 days. You can
            easily adjust or cancel at any time.
          </p>
        </div>

        {/* Free Gifts Section */}
        <div className="mt-10">
          <p className="text-[#00aaff] text-sm font-semibold mb-4">
            PLUS $70 WORTH OF FREE GIFTS
          </p>

          {/* 4 Gifts in One Line */}
          <div className="flex justify-between gap-3 overflow-x-auto no-scrollbar">
            {[
              { src: "/images/Rectangle 49.png", text: "FREE $19 Value\nTravel Tin" },
              { src: "/images/Rectangle 50.png", text: "FREE $20 Value\nTestosterone E-Book" },
              { src: "/images/Rectangle 51.png", text: "FREE $25 Value\nMonth of Ladder Workout App" },
              { src: "/images/Rectangle 52.png", text: "FREE Fast Shipping\nWith First Order" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-3 rounded-lg text-center flex-shrink-0 w-[100px]"
              >
                <img
                  src={item.src}
                  alt={`Gift ${i + 1}`}
                  className="mx-auto mb-2 w-14 h-14 object-contain"
                />
                <p className="text-[11px] text-gray-300 font-semibold leading-tight whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
