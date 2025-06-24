"use client";

import { useState } from "react";
import { Menu, X, User } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    "NEWS",
    "ESPAÑOL",
    "FORUM",
    "MVP FIT",
    "PROGRAMS",
    "EXPERTISE",
    "RESOURCES",
    "BETTING",
    "MORE",
  ];

  return (
    <>
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-lg">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-black tracking-tight">
                <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text">
                  MVP
                </span>
                <span className="ml-2 text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text">
                  BOXING
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-orange-300 transition-colors duration-200 font-semibold text-sm tracking-wide uppercase"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <span className="text-white font-semibold text-sm tracking-wide uppercase">
                WATCH
              </span>
              <button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-bold px-6 py-2.5 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide text-sm">
                FIGHT CLUB
              </button>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <User className="h-5 w-5 text-gray-700" />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-gray-700" />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-300 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-white hover:text-orange-300 hover:bg-red-800 rounded-md transition-colors duration-200 font-semibold text-sm uppercase tracking-wide"
                  >
                    {item}
                  </a>
                ))}
                <div className="border-t border-red-500 pt-4 mt-4">
                  <div className="px-4 py-2">
                    <span className="text-white font-semibold text-sm tracking-wide uppercase block mb-3">
                      WATCH
                    </span>
                    <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-bold py-3 rounded-md transition-all duration-200 uppercase tracking-wide text-sm">
                      FIGHT CLUB
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
