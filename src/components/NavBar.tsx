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
    <div className="h-[130px] bg-gray-100 font-inter">
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-r from-gray-300 to-gray-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 drop-shadow-lg tracking-wider">
                MVP BOXING
              </span>
            </div>

            {/* Right Section: Watch, Fight, Club, User Icon */}
            <div className="flex items-center space-x-6">
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="px-5 py-2 rounded-full text-white text-lg font-semibold bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-lg">
                  WATCH
                </button>
                <button className="flex items-center px-5 py-2 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-yellow-500 to-orange-600 border-2 border-yellow-400 hover:from-yellow-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-lg">
                  FIGHT
                  {/* Crown Icon (SVG) */}
                  <svg
                    className="ml-2 w-6 h-6 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM15 4a.75.75 0 01-.75.75H13a.75.75 0 010-1.5h1.25A.75.75 0 0115 4zm-7.5-.75a.75.75 0 000 1.5h1.25a.75.75 0 000-1.5H7.5zM17 6a.75.75 0 01-.75.75H14a.75.75 0 010-1.5h2.25A.75.75 0 0117 6zM3 6a.75.75 0 01-.75.75H2a.75.75 0 010-1.5h.75A.75.75 0 013 6zm7 2.25a.75.75 0 01.75.75V11a.75.75 0 01-1.5 0V9A.75.75 0 0110 8.25z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10.892 12.062a.75.75 0 011.082.915l-1.523 2.14a.75.75 0 01-1.282-.573l.534-1.602a.75.75 0 01.989-.88zm-3.235-.915a.75.75 0 01.989.88l.534 1.602a.75.75 0 01-1.282.573l-1.523-2.14a.75.75 0 011.082-.915zM10 13.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  CLUB
                </button>
              </div>

              {/* User Icon */}
              <div className="relative">
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  {/* User Icon (SVG) */}
                  <svg
                    className="h-10 w-10 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav className="bg-red-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex space-x-6">
              {/* Navigation Links */}
              {[
                "NEWS",
                "ESPAÑOL",
                "FORUM",
                "MVP FIT",
                "PROGRAMS",
                "EXPERTISE",
                "RESOURCES",
                "GETTING",
                "MORE",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area (for demonstration, can be expanded) */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* Your page content goes here */}
          </div>
        </div>
      </main>
    </div>
  );

  // return (
  //   <>
  //     {/* Header */}
  //     <header className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-lg">
  //       <div className="w-full px-6 lg:px-12">
  //         <div className="flex items-center justify-between h-16">
  //           {/* Logo */}
  //           <div className="flex-shrink-0">
  //             <h1 className="text-3xl font-black tracking-tight">
  //               <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text">
  //                 MVP
  //               </span>
  //               <span className="ml-2 text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text">
  //                 BOXING
  //               </span>
  //             </h1>
  //           </div>

  //           {/* Desktop Navigation */}
  //           <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
  //             {navigationItems.map((item) => (
  //               <a
  //                 key={item}
  //                 href="#"
  //                 className="text-white hover:text-orange-300 transition-colors duration-200 font-semibold text-sm tracking-wide uppercase"
  //               >
  //                 {item}
  //               </a>
  //             ))}
  //           </nav>

  //           {/* Right Side Actions */}
  //           <div className="hidden lg:flex items-center space-x-6">
  //             <span className="text-white font-semibold text-sm tracking-wide uppercase">
  //               WATCH
  //             </span>
  //             <button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-bold px-6 py-2.5 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide text-sm">
  //               FIGHT CLUB
  //             </button>
  //             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
  //               <User className="h-5 w-5 text-gray-700" />
  //             </div>
  //           </div>

  //           {/* Mobile menu button */}
  //           <div className="lg:hidden flex items-center space-x-4">
  //             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
  //               <User className="h-5 w-5 text-gray-700" />
  //             </div>
  //             <button
  //               onClick={() => setIsMenuOpen(!isMenuOpen)}
  //               className="text-white hover:text-orange-300 transition-colors duration-200"
  //             >
  //               {isMenuOpen ? (
  //                 <X className="h-6 w-6" />
  //               ) : (
  //                 <Menu className="h-6 w-6" />
  //               )}
  //             </button>
  //           </div>
  //         </div>

  //         {/* Mobile Navigation */}
  //         {isMenuOpen && (
  //           <div className="lg:hidden pb-4">
  //             <div className="space-y-2">
  //               {navigationItems.map((item) => (
  //                 <a
  //                   key={item}
  //                   href="#"
  //                   className="block px-4 py-3 text-white hover:text-orange-300 hover:bg-red-800 rounded-md transition-colors duration-200 font-semibold text-sm uppercase tracking-wide"
  //                 >
  //                   {item}
  //                 </a>
  //               ))}
  //               <div className="border-t border-red-500 pt-4 mt-4">
  //                 <div className="px-4 py-2">
  //                   <span className="text-white font-semibold text-sm tracking-wide uppercase block mb-3">
  //                     WATCH
  //                   </span>
  //                   <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-black font-bold py-3 rounded-md transition-all duration-200 uppercase tracking-wide text-sm">
  //                     FIGHT CLUB
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </header>
  //   </>
  // );
}
