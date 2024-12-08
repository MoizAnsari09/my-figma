import React from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 2, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 3, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 4, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
];
const products1 = [
  // Replace with your actual product data
  { id: 1, name: "Product Name 1", price: "$20.00", tag: "New", image: "/chair/c1.png" },
  { id: 2, name: "Product Name 2", price: "$35.00", tag: "Sale", image: "/chair/c2.png" },
  { id: 3, name: "Product Name 2", price: "$35.00", tag: "Sale", image: "/chair/c3.png" },
  // ... Add more products as needed
];
const products2 =[
  { id: 1, name: "Modern Orange Chair", image: "/chair/1 (1).png" },
  { id: 2, name: "Luxury White Chair", image: "/chair/1 (2).png" },
  { id: 3, name: "Classic Dining Chair", image: "/chair/1 (3).png" },
  { id: 4, name: "Minimalist Gray Chair", image: "/chair/1 (4).png" },
  { id: 5, name: "Rustic White Chair", image: "/chair/1 (5).png" },
];
const products3 = [
  { id: 1, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 2, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 3, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 4, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
  { id: 5, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 6, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 7, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 8, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
];

const Products = () => {
  return (
    <div className="container mx-auto py-16 pl-24 pr-28">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      <div className="py-10">
      <h2 className="text-2xl font-bold mb-6 ">Top Categories</h2> {/* Center-aligned heading */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products1.map((product1) => (
          <div key={product1.id} className="product-card bg-gray-200 shadow-md rounded-md p-4">
            <Image
              src={product1.image}
              alt={product1.name}
              width={300}
              height={300}
              className="rounded-md  w-[400px] h-[400px]" // Maintain aspect ratio and cover container
            />
          </div>
        ))}
      </div>
      
    <div className="container mx-auto flex py-16 px-8">
      {/* Sidebar Horizontal Text */}
      <div className="w-1/12 flex items-center justify-center">
      <h2 className="text-gray-700 font-bold text-lg text-center inverted-text">
        EXPLORE NEW AND POPULAR STYLES
      </h2> {/* Center-aligned heading with inverted text */}
      </div>

      {/* Main Image and Grid */}
      <div className="flex w-11/12 gap-4">
        {/* Large Image */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={products2[0].image}
            alt={products2[0].name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Smaller Grid */}
        <div className="w-1/2 grid grid-cols-2 gap-4">
          {products2.slice(1).map((product2) => (
            <div key={product2.id} className="h-48">
              <Image
                src={product2.image}
                alt={product2.name}
                width={300}
                height={300}
                className="w-full h-[250px] object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products3.map((product3) => (
          <div key={product3.id} className="bg-white shadow-md p-4 rounded-md">
            <Image
              src={product3.image}
              alt={product3.name}
              width={300}
              height={300}
              className="rounded-md"
            />
            <h3 className="mt-4 text-lg font-medium">{product3.name}</h3>
            <p className="text-gray-500">{product3.price}</p>
            {product3.tag && <span className="text-sm bg-green-100 px-2 py-1 rounded-full">{product3.tag}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;



