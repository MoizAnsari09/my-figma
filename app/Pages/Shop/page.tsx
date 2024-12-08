import { FiShoppingCart } from "react-icons/fi";
import Footer from "../../components/Footer";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer2 from "../../components/Footer2";

const products1 = [
  { id: 1, name: "Product Name 1", price: "$20.00", tag: "New", image: "/chair/image.png" },
];

const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 2, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 3, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 4, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
  { id: 5, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 6, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      {/* Top Categories Section */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 gap-6">
          {products1.map((product1) => (
            <div
              key={product1.id}
              className="bg-gray-200 shadow-md rounded-md p-6 flex flex-col md:flex-row items-center gap-6"
            >
              <Image
                src={product1.image}
                alt={product1.name}
                width={675}
                height={607}
                className="w-full md:w-[675px] h-auto object-cover rounded-md"
              />
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
                  Library Stool <br /> Chair
                </h1>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit dolorem non.
                </p>
                <button className="w-[212px] h-[63px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center justify-center text-[20px]">
                  <FiShoppingCart className="w-[29px] h-[29px] mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md"
              />
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              {product.tag && (
                <span className="text-sm bg-green-100 px-2 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      <Footer2 />
    </div>
  );
}
