import React from "react";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-transparent text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src="/logo/p1.png"
            alt="Cell Pwr Logo"
            className="h-24 w-24 object-contain drop-shadow-[0_0_12px_#00aaff]"
          />
        </div>

        {/* Right - Navigation */}
        <nav className="flex items-center space-x-10">
          {/* Launch Kit Button (Transparent Rectangle with Blue Border) */}
          <div
            className="px-5 py-[6px] border border-[#00aaff] rounded-md text-[10px] tracking-[0.15em] font-mono cursor-default"
          >
            50% OFF LAUNCH KIT
          </div>

          {/* The Science Link */}
          <a
            href="#"
            className="text-[10px] tracking-[0.25em] font-mono hover:text-[#00aaff] transition"
          >
            THE SCIENCE
          </a>

          {/* User Icon */}
          <button className="h-9 w-9 rounded-full flex items-center justify-center hover:scale-110 transition">
            <img
              src="/logo/p2.png"
              alt="User Icon"
              className="h-7 w-7 object-contain"
            />
          </button>

          {/* Cart Icon */}
          <button className="h-9 w-9 flex items-center justify-center hover:text-[#00aaff] transition">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
