import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Refs for desktop and mobile INCUB8 buttons
  const incub8DesktopRef = useRef(null);
  const incub8MobileRef = useRef(null);

  useEffect(() => {
    // Glow animation timeline for desktop button
    const glowTimelineDesktop = gsap.timeline({ repeat: -1, yoyo: true });
    glowTimelineDesktop.to(incub8DesktopRef.current, {
      boxShadow: "0 0 12px 3px rgba(0, 0, 128, 0.8)", // navy blue glow
      duration: 1.5,
      ease: "power1.inOut",
    });
    glowTimelineDesktop.to(incub8DesktopRef.current, {
      boxShadow: "0 0 20px 6px rgba(0, 255, 255, 0.9)", // cyan glow
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Glow animation timeline for mobile button
    const glowTimelineMobile = gsap.timeline({ repeat: -1, yoyo: true });
    glowTimelineMobile.to(incub8MobileRef.current, {
      boxShadow: "0 0 12px 3px rgba(0, 0, 128, 0.8)", // navy blue glow
      duration: 1.5,
      ease: "power1.inOut",
    });
    glowTimelineMobile.to(incub8MobileRef.current, {
      boxShadow: "0 0 20px 6px rgba(0, 255, 255, 0.9)", // cyan glow
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Hover scale effect handlers for desktop button
    const onEnterDesktop = () => {
      gsap.to(incub8DesktopRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeaveDesktop = () => {
      gsap.to(incub8DesktopRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };
    incub8DesktopRef.current.addEventListener("mouseenter", onEnterDesktop);
    incub8DesktopRef.current.addEventListener("mouseleave", onLeaveDesktop);

    // Hover scale effect handlers for mobile button
    const onEnterMobile = () => {
      gsap.to(incub8MobileRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeaveMobile = () => {
      gsap.to(incub8MobileRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    };
    incub8MobileRef.current.addEventListener("mouseenter", onEnterMobile);
    incub8MobileRef.current.addEventListener("mouseleave", onLeaveMobile);

    // Cleanup event listeners and timelines on unmount
    return () => {
      incub8DesktopRef.current.removeEventListener("mouseenter", onEnterDesktop);
      incub8DesktopRef.current.removeEventListener("mouseleave", onLeaveDesktop);
      incub8MobileRef.current.removeEventListener("mouseenter", onEnterMobile);
      incub8MobileRef.current.removeEventListener("mouseleave", onLeaveMobile);

      glowTimelineDesktop.kill();
      glowTimelineMobile.kill();
    };
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#0b0f18] text-white py-4 px-4 sm:py-6 sm:px-8 flex justify-between items-center rounded-b-3xl relative"
      style={{
        boxShadow:
          "0 0 15px rgba(0, 255, 255, 0.4), 0 0 25px rgba(0, 255, 255, 0.3), 0 0 35px rgba(0, 255, 255, 0.2)",
        border: "2px solid rgba(255, 255, 255, 0.1)",
      }}
    >
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
        <button
          ref={incub8DesktopRef}
          className="ml-2 border px-5 py-2 rounded-full text-base border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold"
          onClick={() => setOpen(false)}
          style={{ transformOrigin: "center" }}
        >
          INCUB8
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
      ref={incub8MobileRef}
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
        style={{
          boxShadow:
            "0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.2)",
        }}
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
          ref={incub8MobileRef}
          className="border px-5 py-2 rounded-full text-base border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold"
          onClick={() => setOpen(false)}
          style={{ transformOrigin: "center" }}
        >
          INCUB8
        </button>
      </div>
    </nav>
  );
};

export default Navbar;







