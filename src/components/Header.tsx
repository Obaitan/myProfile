"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 bg-zinc-950/95 backdrop-blur-sm">
        <div className="px-6 md:px-10 lg:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:w-[1320px] mx-auto h-[71px] py-4">
          <div className="lg:hidden flex justify-between items-center gap-5">
            <div className="space-y-1">
              <p className="text-[15px] text-zinc-100 font-medium mb-0.5">
                Richard Obaitan
              </p>
              <p className="text-[11px] font-medium text-zinc-400 uppercase">
                Front End Developer
              </p>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="cursor-pointer hover:text-amber-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8 text-zinc-100"
              >
                {isMobileMenuOpen ? (
                  // Close icon (X)
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  // Hamburger menu icon
                  <>
                    <path d="M15 12H3" />
                    <path d="M17 18H3" />
                    <path d="M21 6H3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Modal (always rendered for animation) */}
      <div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 z-50 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ background: "#101214" }}
        >
          <div className="p-6 pt-20">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
