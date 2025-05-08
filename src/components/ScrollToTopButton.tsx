import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { GiCarWheel } from "react-icons/gi";
import clsx from "clsx";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full bg-green-700 text-white flex items-center justify-center shadow-lg transition-all duration-300",
        "hover:bg-green-800 cursor-pointer",
        isVisible ? "opacity-70" : "opacity-0 pointer-events-none",
        isScrolling ? "animate-spin" : ""
      )}
      aria-label="Повернутися вгору"
    >
      {isScrolling ? (
        <GiCarWheel className="text-5xl" />
      ) : (
        <IoIosArrowUp className="text-xl" />
      )}
    </button>
  );
}
