import React from "react";

function Topbar() {
  return (
    <div className="w-full bg-[#007CA6] text-white text-xs sm:text-sm font-mono text-center py-1">
      <span className="tracking-wide">
        1-YEAR ANNIVERSARY SALE! USE CODE:{" "}
      </span>
      <span className="bg-black text-white px-2 py-[2px] rounded-sm font-bold">
        ONE
      </span>
      <span className="tracking-wide"> TO SAVE $10</span>
    </div>
  );
}

export default Topbar;
