import { useEffect, useState, useCallback } from "react";
export default function useScrollPercentage() {
  // fifteen
  const [scrollPercentage, setScrollPercentage] = useState(0);
  function getScrollPercent() {
    const h = document.documentElement;
    const hst = document.documentElement.scrollTop;
    const bst = document.body.scrollTop;
    const hsh = document.documentElement.scrollHeight;
    const bsh = document.body.scrollHeight;
    return ((hst || bst) / ((hsh || bsh) - h.clientHeight)) * 100;
  }

  const scrollEvent = useCallback(() => {
    setScrollPercentage(getScrollPercent());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  return scrollPercentage;
}
