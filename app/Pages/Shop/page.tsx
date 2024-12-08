
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../../components/Footer";
import Image from "next/image";
import FeaturedProducts from "../../components/Products";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer2 from "../../components/Footer2";
const products1 = [
    // Replace with your actual product data
    { id: 1, name: "Product Name 1", price: "$20.00", tag: "New", image: "/chair/image.png" },
    
    // ... Add more products as needed
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
        <Footer />
        <Navbar />
        <Navbar2 />
        <div className="py-10 space-x-40 mr-[150px]">
          <h2 className="text-2xl font-bold mb-6 pl-[170px]">Top Categories</h2> {/* Center-aligned heading */}
          <div className="grid grid-cols-1 ">
            {products1.map((product1) => (
              <div
                key={product1.id}
                className="product-card bg-gray-200 shadow-md rounded-md p-4 flex items-center gap-6"
              >
                <Image
            src={products1[0].image}
            alt={products1[0].name}
            width={675}
            height={607}
            className="w-[675px] h-[607px] object-cover rounded-md"
          />
                <div className="flex flex-col">
                  <h1 className="text-3xl font-bold mb-2">Library Stool <br /> Chair</h1>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit dolorem non.
                  </p>
                  <button className="w-[212px] h-[63px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex text-[20px] text-center justify-center items-center" >
                  <FiShoppingCart className="w-[29px] h-[29px] mx-auto mt-2"/>
                  Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
         <div className="mt-10">
         <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-md"
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            {product.tag && <span className="text-sm bg-green-100 px-2 py-1 rounded-full">{product.tag}</span>}
          </div>
        ))}
      </div>
         </div>
          <Footer2 />
        </div>
      </div>
    );
  }
  

   