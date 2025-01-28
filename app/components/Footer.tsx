
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-black w-full py-4 text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20">
      {/* Free Shipping Section */}
      <h2 className="text-center sm:text-left text-xs sm:text-sm lg:text-base mb-2 sm:mb-0">
        Free shipping on all orders over $50
      </h2>

      {/* Language Selector */}
      <div className=" items-center gap-2 pr-24 hidden sm:flex">
        <span className="text-xs sm:text-sm lg:text-base">English</span>
        <IoIosArrowDown className="text-xs sm:text-sm lg:text-base" />
      </div>
    </div>
  );
}
