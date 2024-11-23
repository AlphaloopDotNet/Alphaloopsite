"use client";
import { RxCross1 } from "react-icons/rx";
import { HiBars3BottomRight } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavbarLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import Image from "next/image";
import { PopupButton } from "react-calendly";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement>(
    // Use type assertion to satisfy TypeScript
    (typeof window !== "undefined" ? document.body : null) as HTMLElement
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg md:backdrop-blur-none shadow-sm w-full md:max-w-full mx-auto max-w-full border-b z-50 transition-all duration-300">
        <div className="flex justify-between items-center px-4">
          {/* Logo Section (Hide when scrolled) */}
          {(!isScrolled || !isLargeScreen) && (
            <Image
              src="/alphaloop.png"
              alt="Alphaloop Logo"
              className="h-10 w-28 md:h-16 md:w-44"
              width={100}
              height={100}
            />
          )}
          {/* Navbar Links */}
          <div
            className={`hidden lg:flex space-x-6  absolute left-1/2 transform -translate-x-1/2  items-center p-1 bg-bluee rounded-full  transition-all duration-1000 ease-in-out ${
              isScrolled ? "top-full mt-4  " : ""
            }`}
          >
            {NavbarLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={`rounded-full px-4 py-1 transition-colors ${
                  activeLink === navLink.name
                    ? "bg-white text-gray-950"
                    : "hover:bg-white/40 text-gray-50 hover:text-gray-700"
                }`}
                onClick={() => setActiveLink(navLink.name)}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
          {!isScrolled && (
            <PopupButton
              url="https://calendly.com/alphaloop-firstmain"
              rootElement={rootElement}
              text="Book a Call"
              className="hidden lg:block hover:border-blue-500 bg-black text-white hover:text-white hover:bg-yelloww shadow-md rounded-full px-4 py-2 text-sm transition-colors"
            />
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={handleMenu} aria-label="Menu">
              {isOpen ? (
                <RxCross1 size={24} />
              ) : (
                <HiBars3BottomRight size={24} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div className="lg:hidden md:mx-0 bg-bluee py-4 flex flex-col backdrop-blur-0 items-center space-y-4 justify-center border-t-2">
              {NavbarLinks.map((navLink) => (
                <Link
                  key={navLink.name}
                  href={navLink.href}
                  className={`rounded-full px-4 py-1  transition-colors ${
                    activeLink === navLink.name
                      ? "bg-white text-gray-950"
                      : "hover:bg-white/40 text-gray-50 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveLink(navLink.name)} // Set active link on click
                >
                  {navLink.name}
                </Link>
              ))}

              <Button className="hover:border-blue-500 hover:text-white hover:bg-yelloww shadow-md rounded-full px-4 py-2 text-sm transition-colors ">
                Book a call
              </Button>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
