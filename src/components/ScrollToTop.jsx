import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // first try main tag (your scroll container)
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // fallback to window scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
