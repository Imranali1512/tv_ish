import React, { useState } from "react";
import { Zap, Sparkles, Rocket } from "lucide-react";

export default function F3() {
  const [activeTab, setActiveTab] = useState("expect");

  return (
    <div className="bg-[#1a1a1a] text-white rounded-t-xl shadow-lg w-full max-w-5xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex justify-between bg-[#2a2a2a] rounded-t-xl overflow-hidden">
        <button
          onClick={() => setActiveTab("expect")}
          className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
            activeTab === "expect"
              ? "bg-[#1a1a1a] text-white"
              : "bg-[#3a3a3a] text-gray-400 hover:text-white"
          }`}
        >
          What to Expect
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
            activeTab === "faq"
              ? "bg-[#1a1a1a] text-white"
              : "bg-[#3a3a3a] text-gray-400 hover:text-white"
          }`}
        >
          Frequently Asked Questions
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
            activeTab === "reviews"
              ? "bg-[#1a1a1a] text-white"
              : "bg-[#3a3a3a] text-gray-400 hover:text-white"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-[#1a1a1a] rounded-b-xl">
        {activeTab === "expect" && (
          <>
            <h2 className="text-lg font-bold mb-4">
              What Happens After You Boost Testosterone With PWR Cell
            </h2>

            {/* Line */}
            <div className="h-[2px] bg-[#00aaff] mb-6 relative">
              <div className="absolute left-0 top-0 w-[10px] h-[2px] bg-[#00aaff]" />
              <div className="absolute right-0 top-0 w-[10px] h-[2px] bg-[#00aaff]" />
            </div>

            {/* 3-Stage Timeline */}
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {/* DAY 7 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-orange-400 w-5 h-5" />
                  <p className="text-[#00aaff] font-bold">DAY 7</p>
                  <p className="font-semibold text-white ml-1">Ignition</p>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>Tongkat Ali blocks stress hormones</li>
                  <li>Shilajit feeds starving testosterone cells</li>
                  <li>Workouts feel intense again</li>
                  <li>Start to feel that all-day energy!</li>
                </ul>
              </div>

              {/* DAY 30 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-orange-400 w-5 h-5" />
                  <p className="text-[#00aaff] font-bold">DAY 30</p>
                  <p className="font-semibold text-white ml-1">Spark</p>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>Boron helps free stuck T</li>
                  <li>Zinc gives your balls T-making materials</li>
                  <li>Body looks leaner, stronger, more masculine</li>
                  <li>People ask what you’re doing differently</li>
                </ul>
              </div>

              {/* DAY 90 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="text-orange-400 w-5 h-5" />
                  <p className="text-[#00aaff] font-bold">DAY 90</p>
                  <p className="font-semibold text-white ml-1">Liftoff</p>
                </div>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>All 8 ingredients working like a tuned engine</li>
                  <li>T-production optimized fully</li>
                  <li>Not temporary, this is your new normal</li>
                  <li>Welcome to the man you’re supposed to be</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {activeTab === "faq" && (
          <div className="text-gray-300 text-sm">
            <p>Coming soon: Frequently Asked Questions section.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-300 text-sm">
            <p>Coming soon: Customer Reviews section.</p>
          </div>
        )}
      </div>
    </div>
  );
}
