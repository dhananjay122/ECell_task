import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 w-full border-2 border-amber-50 hover:border-cyan-500 bg-[#0b0f18] text-white py-4 px-4 sm:py-6 sm:px-8 shadow-lg flex justify-between items-center rounded-b-3xl relative">
      {/* Logo + Brand Name */}
      <div className="flex items-center space-x-3">
         <img
           src="/images/ECell.png"
           alt="E-Cell"
           className="w-12 h-12 sm:w-14 sm:h-14"
         />
         <div className="flex flex-col leading-tight">
           <span className="text-2xl sm:text-3xl font-extrabold">E-Cell</span>
           <span className="text-sm text-blue-400">NITK Surathkal</span>
         </div>
       </div>


      {/* Desktop Nav Links */}
      <div className="hidden sm:flex space-x-3 sm:space-x-4 text-base sm:text-lg font-semibold">
        {["Home", "Events", "Team", "Gallery", "Contact"].map((item) => (
          <button
            key={item}
            className="hover:text-gray-400 transition duration-200 hover:scale-110"
          >
            {item}
          </button>
        ))}
        <button className="ml-2 border px-5 py-2 rounded-full text-base border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold">
          INCUB8
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden text-white focus:outline-none z-30"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu with Animation */}
      <div
        role="menu"
        className={`sm:hidden absolute top-full left-0 w-full bg-[#0b0f18] border-t border-cyan-500 flex flex-col items-center space-y-3 py-4 z-20 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {["Home", "Events", "Team", "Gallery", "Contact"].map((item) => (
          <button
            key={item}
            role="menuitem"
            className="text-white text-2xl font-semibold hover:text-orange-400 transition"
            onClick={() => setOpen(false)}
          >
            {item}
          </button>
        ))}
        <button
          className="border px-5 py-2 rounded-full text-base border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold"
          onClick={() => setOpen(false)}
        >
          INCUB8
        </button>
      </div>
    </nav>
  );
};

export default Navbar;




