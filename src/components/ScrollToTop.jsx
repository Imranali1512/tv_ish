import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Add scrollbar hiding styles
      document.body.style.overflowY = "scroll";
      document.body.style.scrollbarWidth = "none"; // Firefox
      document.body.style.msOverflowStyle = "none"; // IE 10+

      // For WebKit browsers
      const styleTag = document.createElement("style");
      styleTag.innerHTML = `
        ::-webkit-scrollbar {
          display: none;
        }
      `;
      styleTag.setAttribute("data-scrollbar-hide", "true");
      document.head.appendChild(styleTag);

      // Clean up on unmount
      return () => {
        document.body.style.overflowY = "";
        document.body.style.scrollbarWidth = "";
        document.body.style.msOverflowStyle = "";

        // Remove the style tag
        const oldStyle = document.querySelector("style[data-scrollbar-hide]");
        if (oldStyle) oldStyle.remove();
      };
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
