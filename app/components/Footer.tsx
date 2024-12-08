import React from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className='bg-black w-full h-[48px] text-white flex items-center justify-evenly '>
      <h2 className='pr-[500px]'>
      Free shipping on all orders over $50
        
      </h2>
      <div className='flex items-center pl-[250px]'>
        <h1>English</h1>
        <IoIosArrowDown />
      </div>
      
    </div>
  );
}

