import useScrollPercentage from "@hooks/useScrollPercentage";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrollPercentage = useScrollPercentage();

  useEffect(() => {
    if (scrollPercentage < 95 && scrollPercentage > 10) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollPercentage]);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll To Top"
          className="fixed bottom-20 right-8 z-40 print:hidden  md:bottom-[50px] md:right-[20px]"
        >
          <IoIosArrowUp className="rounded-lg bg-neutral-900 text-[45px] text-neutral-200 shadow-lg dark:bg-neutral-200 dark:text-neutral-900 md:mr-10" />
        </button>
      )}
    </>
  );
}
