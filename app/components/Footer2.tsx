import React from 'react';
import { MdChair } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer2() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col lg:flex-row">
        {/* Logo and Text Section */}
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <MdChair className="text-5xl text-[#029FAE]" />
            <span className="text-5xl text-[#272343]">Exclusive</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>

        {/* Categories Section */}
        <div className="flex-grow flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6 lg:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Sofa</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Wooden Chair</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Armchair</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Desk Chair</a>
              </li>
            </nav>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6 lg:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Sofa</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Wooden Chair</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Armchair</a>
              </li>
            </nav>
          </div>

          {/* Email Subscription */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Email" className="w-full" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Footer Bottom */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
