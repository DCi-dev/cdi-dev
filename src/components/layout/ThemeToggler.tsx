import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="z-30 cursor-pointer rounded-full transition active:scale-75"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <BsMoonStars className="h-6 w-6 select-none transition active:scale-75 sm:h-7 sm:w-7" />
      ) : (
        <BsSun className="h-6 w-6 select-none transition active:scale-75 sm:h-7 sm:w-7" />
      )}
    </button>
  );
};

export default ThemeToggler;
