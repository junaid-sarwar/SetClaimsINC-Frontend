import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash (like #section), scroll to top
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant so investors don't see the page "sliding" up
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;