"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  // Click handler function
  const handleClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-40 py-8">
      {/* Banner Image Section */}
      <div className="relative w-full lg:w-[1321px] h-[300px] md:h-[450px] lg:h-[600px] bg-gray-200 rounded-md overflow-hidden">
        <Image
          src="/benner/b1.WEBP"
          alt="Banner Image"
          layout="fill"
          className="object-cover"
          priority
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-white bg-gradient-to-r from-black/50 to-transparent">
          <p className="text-sm md:text-lg lg:text-xl font-light">
            Welcome to Chairy
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Best Furniture <br /> Collection for your <br /> Interior.
          </h1>
          <button
            onClick={handleClick}
            className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-[#029FAE] text-white font-semibold text-base md:text-lg rounded-md hover:bg-[#028a98] transition-all"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
