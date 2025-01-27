import Footer2 from "@/app/components/Footer2";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
        <Navbar />
        <Navbar2 />
      {/* About Us Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-teal-700 text-white p-8 rounded-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-lg mb-6">
            At Comforty, we believe that the right chair can transform your space
            and elevate your comfort. Specializing in ergonomic design, premium
            materials, and modern aesthetics, we craft chairs that seamlessly
            blend style with functionality.
          </p>
          <button className="bg-white text-teal-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
            View collection
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/chair/1 (1).png"
            alt="A stylish chair"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Brand Differentiation Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          What Makes Our Brand Different
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-teal-700 mb-2">
              Next day as standard
            </h4>
            <p className="text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-teal-700 mb-2">
              Made by true artisans
            </h4>
            <p className="text-gray-600">
              Handcrafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-teal-700 mb-2">
              Unbeatable prices
            </h4>
            <p className="text-gray-600">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-teal-700 mb-2">
              Recycled packaging
            </h4>
            <p className="text-gray-600">
              We use 100% recycled materials for our packaging to reduce our
              footprint.
            </p>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Our Popular Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/chair/1 (2).png"
              alt="Product 1"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/chair/1 (3).png"
              alt="Product 2"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/chair/1 (4).png"
              alt="Product 3"
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
