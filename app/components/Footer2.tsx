
import { MdChair } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function Footer2() {
  return (
    <footer className="text-gray-600 body-font bg-white">
      {/* Footer Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-wrap flex-col lg:flex-row gap-y-8">
        {/* Logo and Description Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <MdChair className="text-5xl text-[#029FAE]" />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#272343] font-bold ml-2">
            Comforty
            </span>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xs lg:max-w-md mx-auto lg:mx-0">
            Discover premium furniture collections that transform your interior spaces.
          </p>
        </div>

        {/* Categories and Subscription Section */}
        <div className="flex-grow flex flex-wrap justify-between gap-8 lg:gap-16">
          {/* Categories Section */}
          <div className="w-1/2 sm:w-1/4 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Park Bench
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Armchair
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-1/2 sm:w-1/4 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Park Bench
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Armchair
                </Link>
              </li>
            </nav>
          </div>

          {/* Subscription Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Stay updated with the latest collections and exclusive offers.
            </p>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-48 lg:w-56"
              />
              <Button type="submit" className="bg-[#029FAE] text-white hover:bg-[#028a98]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Comforty Furniture —
            <Link
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </Link>
          </p>
          <div className="inline-flex mt-4 sm:mt-0 justify-center sm:justify-start space-x-4">
            <Link href="#" className="text-gray-500 hover:text-[#029FAE]">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#029FAE]">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#029FAE]">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
