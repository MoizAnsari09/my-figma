"use client";
import React from "react";
import { FiChevronRight } from "react-icons/fi"; // For the arrow icon
import Image from "next/image";

const Banner = () => {
  // Click handler function
  const handleClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className="flex flex-col lg:flex-row px-40">
      {/* Banner Image Section */}
      <div className="relative w-[1321px] h-[600px] bg-gray-200 rounded-md overflow-hidden">
      <Image
        src="/benner/b1.WEBP"
        alt="Banner Image"
        width={1321}
        height={600}  // Adjusted height for smaller image
        className="object-cover"
        priority
      />


        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-12 lg:px-20 text-white bg-gradient-to-r from-black/50 to-transparent">
          <p className="text-lg lg:text-xl font-light">Welcome to Chairy</p>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mt-4">
            Best Furniture <br /> Collection for your <br /> Interior.
          </h1>
          <button
            onClick={handleClick}
            className="mt-6 px-6 py-3 bg-[#029FAE] text-white font-semibold text-lg rounded-md hover:bg-[#028a98] transition-all"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;




{/* <div className="w-full lg:w-[20%] h-auto max-h-[80vh] border border-gray-300 rounded-md bg-white overflow-y-auto shadow-sm">
        <ul className="space-y-2 p-2">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors rounded-md"
              onClick={() => handleClick(item)} // Call handleClick when clicked
            >
              {item}
              <FiChevronRight className="text-gray-400" />
            </li>
          ))}
        </ul>
      </div> */}