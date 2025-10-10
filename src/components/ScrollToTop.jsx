import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure scroll happens after content loads
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);  // Small delay (100ms)
  }, [location]);  // Only trigger when location changes

  return null;
};

export default ScrollToTop;
