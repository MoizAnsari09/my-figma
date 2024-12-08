import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { MdChair } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-black body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center space-x-7">
          <div className='text-5xl text-[#029FAE] pl-[80px]'>
            <MdChair />
          </div>
          <span className="text-5xl text-[#272343]">Exclusive</span>
        </div>

        {/* Search Input and Icons */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0 ml-auto mr-32">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <FaShoppingCart className="text-xl text-gray-600 mr-2" />
            <span>Cart <span className="text-teal-500 font-bold">2</span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

 
  

//  <nav className="hidden md:flex flex-grow justify-center space-x-8">
//           <Link href="#" className="hover:text-gray-900">Home</Link>
//           <Link href="#" className="hover:text-gray-900">Shop</Link>
//           <Link href="#" className="hover:text-gray-900">About</Link>
//           <Link href="#" className="hover:text-gray-900">Contact</Link>
//         </nav>
//  <div className="block md:hidden border-t mt-3">
//         <nav className="flex flex-col items-center space-y-4 mt-3">
//           <Link href="#" className="hover:text-gray-900">Home</Link>
//           <Link href="#" className="hover:text-gray-900">Shop</Link>
//           <Link href="#" className="hover:text-gray-900">About</Link>
//           <Link href="#" className="hover:text-gray-900">Contact</Link>
//         </nav>
//       </div> <FaRegHeart className="text-3xl text-gray-600 cursor-pointer hover:text-gray-900" />
          //   <div className="relative hidden sm:block">
          //   <input
          //     type="text"
          //     placeholder="What are you looking for?"
          //     className="w-[243px] h-[38px] pl-3 pr-10 bg-gray-100 bg-opacity-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
          //   />
          //   <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600 cursor-pointer" />
          // </div>