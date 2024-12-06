import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">NavSite</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">首页</Link>
            <Link to="/resources" className="text-gray-700 hover:text-indigo-600">资源</Link>
            <Link to="/tools" className="text-gray-700 hover:text-indigo-600">工具</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">关于</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={toggleMenu}
              >
                首页
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={toggleMenu}
              >
                资源
              </Link>
              <Link
                to="/tools"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={toggleMenu}
              >
                工具
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={toggleMenu}
              >
                关于
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;