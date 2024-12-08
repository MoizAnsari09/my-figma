import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-black w-full h-auto py-4 text-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12">
      {/* Free Shipping Section */}
      <h2 className="text-center sm:text-left text-sm sm:text-base lg:text-lg mb-2 sm:mb-0">
        Free shipping on all orders over $50
      </h2>

      {/* Language Selector */}
      <div className="flex items-center gap-2">
        <h1 className="text-sm sm:text-base">English</h1>
        <IoIosArrowDown className="text-sm sm:text-base" />
      </div>
    </div>
  );
}
