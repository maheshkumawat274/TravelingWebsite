import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/aboutus" },
    { name: "SERVICES", path: "/services"},
    { name: "CONTACT US", path: "/contactus" }
    
  ];

  // Scroll detection for hiding top bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔹 Top Header (only for md+ screens, hide on scroll) */}
      {!hideTopBar && (
        <div className="hidden md:flex justify-center items-center bg-gray-100 text-gray-700 text-sm py-2 shadow-sm">
          🌍 Welcome to Well Global INC – Delivering Excellence in Energy
        </div>
      )}

      {/* 🔹 Main Header */}
      <div className="w-full p-3 px-4 md:px-10 shadow-md bg-[#1A3E72]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to='/'><h1 className="text-2xl font-semibold text-gray-100">Reservation of flights</h1></Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-sm transition duration-200 ${
                    isActive
                      ? "text-[#C5A15C] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#C5A15C]"
                      : "text-gray-100 font-semibold hover:text-[#C5A15C] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#C5A15C] hover:after:w-full after:transition-all after:duration-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden text-2xl text-gray-100"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white flex flex-col z-50"
          >
            {/* Top Bar with Logo + Close */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
              <Link to="/">
                <h1 className="text-2xl font-semibold text-gray-100">Reservation of flights</h1>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-800"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col items-start px-8 mt-6 w-full">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between w-full border-b border-gray-300 py-3 text-md font-medium ${
                      isActive
                        ? "text-[#C5A15C] border-[#C5A15C]"
                        : "text-gray-800 hover:text-[#C5A15C] hover:border-[#C5A15C]"
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <span className="text-gray-500">→</span>
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500 mt-auto">
              © Well Global INC 2025. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
