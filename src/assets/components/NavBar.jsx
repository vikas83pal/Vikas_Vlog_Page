import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaHome, FaServicestack, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-3 border-b shadow-lg backdrop-blur-md transition-all duration-300 
       ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white/10 text-black border-white/20"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <h1 className="text-xl font-bold font-mono">Vikas Vlog</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-blue-300 transition">
            <FaHome /> <span>Home</span>
          </Link>
          <Link to="/services" className="flex items-center space-x-2 hover:text-blue-300 transition">
            <FaServicestack /> <span>Services</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-2 hover:text-blue-300 transition">
            <FaInfoCircle /> <span>About Us</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 hover:text-blue-300 transition">
            <MdContactMail /> <span>Contact</span>
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-3 space-y-4 text-center">
          <Link to="/" className="block hover:text-blue-300 transition">
            <FaHome /> Home
          </Link>
          <Link to="/services" className="block hover:text-blue-300 transition">
            <FaServicestack /> Services
          </Link>
          <Link to="/about" className="block hover:text-blue-300 transition">
            <FaInfoCircle /> About Us
          </Link>
          <Link to="/contact" className="block hover:text-blue-300 transition">
            <MdContactMail /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
