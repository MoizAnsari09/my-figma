"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black body-font bg-gray-100 shadow-md ">
      <div className="container mx-auto flex flex-wrap p-4 sm:p-5 items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex flex-grow flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 pl-10`}
        >
          <Link href="/" className="font-semibold text-gray-800 hover:underline">
            Home
          </Link>
          <Link
            href="/Pages/Shop"
            className="font-semibold text-gray-800 hover:underline"
          >
            Shop
          </Link>
          <Link
            href="/Pages/Products"
            className="font-semibold text-gray-800 hover:underline"
          >
            Products
          </Link>
          <Link
            href="/Pages/Summry"
            className="font-semibold text-gray-800 hover:underline"
          >
            Pages
          </Link>
          <Link
            href="/Pages/About"
            className="font-semibold text-gray-800 hover:underline"
          >
            About
          </Link>
          <Link href="/Pages/Contact" className="font-semibold text-gray-800 hover:underline">
            Contact
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden sm:flex items-center pr-16">
          <h1 className="text-lg font-semibold text-gray-800 mr-4">Contact:</h1>
          <a
            href="tel:(808) 555-0111"
            className="text-blue-500 hover:underline"
          >
            (808) 555-0111
          </a>
        </div>
      </div>
      {/* Mobile Contact Info */}
      {isOpen && (
        <div className="block sm:hidden mt-4 px-4">
          <h1 className="text-lg font-semibold text-gray-800">Contact:</h1>
          <a href="tel:(808) 555-0111" className="text-blue-500 hover:underline">
            (808) 555-0111
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
