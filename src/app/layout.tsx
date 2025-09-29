"use client";

import { useState } from "react";

import { Lato } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import HeaderComponent from "@/components/Header";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>Richard Obaitan</title>
        <meta name="description" content="Front End Engineer | Designer" />
      </head>
      <body
        className={`bg-zinc-950 leading-relaxed text-zinc-400 antialiased selection:bg-amber-400/20 selection:text-amber-200 overflow-x-hidden ${lato.variable} font-sans`}
      >
        {/* Desktop Sidebar */}
        <div className="hidden xl:block fixed z-40 inset-y-0 left-0 w-[320px]">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        <div className="fixed inset-0 z-40 xl:hidden pointer-events-none">
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
            <Sidebar onLinkClick={toggleMobileMenu} />
          </div>
        </div>

        <div className="min-h-screen ml-0 xl:ml-[320px] overflow-y-auto">
          <HeaderComponent
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="max-w-[800px] mx-auto px-7 py-10 md:px-10 lg:px-0 2xl:px-0 h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
