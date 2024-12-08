import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdChair } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-black body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 sm:p-6 items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center space-x-3 sm:space-x-7">
          <MdChair className="text-3xl sm:text-5xl text-[#029FAE]" />
          <span className="text-2xl sm:text-4xl text-[#272343] font-bold">Exclusive</span>
        </div>

        {/* Cart Button */}
        <div className="mt-3 sm:mt-0">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50">
            <FaShoppingCart className="text-lg sm:text-xl text-gray-600 mr-2" />
            <span>Cart <span className="text-teal-500 font-bold">2</span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
