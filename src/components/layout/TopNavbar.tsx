import React, { useState, useRef } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { navigationRoutes } from "@utils/utils";
import ThemeToggler from "./ThemeToggler";

export default function TopNavbar() {
  const router = useRouter();
  const navRef = useRef<HTMLDivElement | null>(null);

  const [navOpen, setNavOpen] = useState(false);

  // to lock the scroll when mobile is open
  function lockScroll() {
    const root = document.getElementsByTagName("html")[0];
    root?.classList.toggle("lock-scroll"); // class is define in the global.css
  }

  /* To Lock  the Scroll when user visit the mobile nav page */
  function handleClick() {
    lockScroll();
    setNavOpen(!navOpen);
  }

  return (
    <>
      <div
        className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-[10px] dark:bg-black dark:text-white print:hidden sm:p-4 sm:px-6"
        ref={navRef}
      >
        {/* Mobile Navigation Hamburger and MobileMenu */}
        <HamBurger open={navOpen} handleClick={handleClick} />
        {navOpen && (
          <MobileMenu links={navigationRoutes} handleClick={handleClick} />
        )}

        {/* Logo */}
        <Link href="/" passHref>
          <div className="z-50 flex cursor-pointer items-center gap-2">
            <a className="relative mr-3 hidden sm:inline-flex">
              <span className="font-squartiqa text-2xl text-black dark:text-white">
                CDi
              </span>
            </a>
          </div>
        </Link>

        {/* Top Nav list */}
        <nav className="z-10 hidden sm:flex md:absolute md:inset-0 md:justify-center">
          <div className="flex items-center md:gap-2">
            {navigationRoutes.slice(0, 7).map((link, index) => {
              return (
                <NavItem
                  key={index}
                  href={`/${link}`}
                  text={link}
                  router={router}
                />
              );
            })}
          </div>
        </nav>
        <div className="z-50 flex cursor-pointer items-center gap-2">
          <div></div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}

// NavItem Container
function NavItem({
  href,
  text,
  router,
}: {
  href: string;
  text: string;
  router: NextRouter;
}) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        className={`${
          isActive
            ? "font-bold text-gray-800 dark:text-gray-100"
            : " text-gray-600 dark:text-gray-300"
        } hidden rounded-md px-2 py-[3px] text-[17px] transition-all hover:bg-gray-100 dark:hover:bg-neutral-700/50 sm:inline-block md:px-3`}
      >
        <span className="capitalize">{text}</span>
      </a>
    </Link>
  );
}

// Hamburger Menu
function HamBurger({
  open,
  handleClick,
}: {
  open: boolean;
  handleClick: () => void;
}) {
  return (
    <div style={{ zIndex: 1000 }} className="sm:hidden">
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform cursor-pointer select-none rounded-md  duration-300 active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
}

// Mobile Menu
const MobileMenu = ({
  links,
  handleClick,
}: {
  links: string[];
  handleClick: () => void;
}) => {
  return (
    <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-white font-normal dark:bg-darkPrimary sm:hidden">
      <nav className="mx-8 mt-28 flex flex-col">
        {links.map((link, index) => {
          const navlink =
            link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
          return (
            <Link href={navlink} key={`mobileNav-${index}`} passHref>
              <a
                href={navlink}
                className="flex w-auto cursor-pointer border-b border-gray-300 py-4 text-base font-semibold capitalize text-gray-900 dark:border-gray-700 dark:text-gray-100"
                onClick={handleClick}
              >
                {link === "rss" ? link.toUpperCase() : link}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
