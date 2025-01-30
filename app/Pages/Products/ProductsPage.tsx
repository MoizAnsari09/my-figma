"use client";

import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import React from "react";
import { addToCart } from "../../actions/actions";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";
import Footer2 from "@/app/components/Footer2";

const ProductsPage = ({ products14, products18 }: { products14: Product[], products18: Product[] }) => {

  // Handle add to cart action
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} has been added to your cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto py-16 px-6">

        <section className="mb-16 py-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Additional Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {products18.map((product) => (
              <Link href={`/product/${product.slug.current}`} key={product._id}>
                <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="rounded-md object-cover w-full h-64 mb-4"
                    />
                  )}
                  <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-500 mt-1">Price: ${product.price}</p>
                  <button
                    className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out w-full"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
      <Footer2 />
    </div>
  );
};

export default ProductsPage;
