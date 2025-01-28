
import { FaShoppingCart } from 'react-icons/fa';
import { MdChair } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-black body-font bg-white shadow-md pl-9">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        {/* Brand Name */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <MdChair className="text-2xl sm:text-4xl text-[#029FAE]" />
          <span className="text-xl sm:text-3xl text-[#272343] font-bold">Comforty</span>
        </div>

        {/* Cart Button */}
        <div className="mt-3 sm:mt-0 pr-12">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium text-gray-700 hover:bg-gray-50 transition-all">
            <FaShoppingCart className="text-lg sm:text-xl text-gray-600 mr-2" />
            <span>
              Cart <span className="text-teal-500 font-bold">2</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
