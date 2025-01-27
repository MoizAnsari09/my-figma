"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const images = [
    "/benner/a.jpg",
    "/benner/b.jpg",
    "/benner/c.jpg",
    "/benner/d.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-6 md:py-12">
      {/* Banner Image Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] bg-gray-200 rounded-md overflow-hidden">
        <Image
          src={images[currentIndex]}
          fill
          alt={`Slide ${currentIndex + 1}`}
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-20 text-white bg-gradient-to-r from-black/70 to-transparent">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">
            Welcome to Chairy
          </p>
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Best Furniture <br /> Collection for your <br /> Interior.
          </h1>
          <button
            onClick={() => console.log("Shop Now button clicked")}
            className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#029FAE] text-white font-semibold text-sm sm:text-base md:text-lg rounded-md hover:bg-[#028a98] transition-all"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition-all"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition-all"
      >
        &#8250;
      </button>

      {/* Dots for navigation */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
              index === currentIndex ? "bg-[#029FAE]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
