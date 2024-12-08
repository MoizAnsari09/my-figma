import React from 'react';
import Link from 'next/link';

const Navbar2 = () => {
  return (
    <header className="text-black body-font bg-gray-100 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between pl-[100px]">
        {/* Brand Name */}
        <nav className="hidden md:flex flex-grow  space-x-4">
          <Link href="/" className="font-semibold text-gray-800 hover:underline">Home</Link>
          <Link href="/Pages/Shop" className="font-semibold text-gray-800 hover:underline">Shop</Link>
          <Link href="/Pages/Products" className="font-semibold text-gray-800 hover:underline">Products</Link>
          <Link href="/Pages/Summry" className="font-semibold text-gray-800 hover:underline">About</Link>
          <Link href="#" className="font-semibold text-gray-800 hover:underline">Contact</Link>
        </nav>
        <div className="flex items-center mr-28">
          <h1 className="text-lg font-semibold text-gray-800 mr-4">Contact:</h1>
          <a href="tel:(808) 555-0111" className="text-blue-500 hover:underline">(808) 555-0111</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
 
  

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