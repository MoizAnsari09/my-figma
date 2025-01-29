"use client";

import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Products14, Products18 } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { addToCart } from "../../actions/actions";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

import Navbar2 from "@/app/components/Navbar2";
import Footer2 from "@/app/components/Footer2";

const ProductsPage = () => {
  const [products14, setProducts14] = useState<Product[]>([]);
  const [products18, setProducts18] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts14 = await client.fetch(Products14);
        const fetchedProducts18 = await client.fetch(Products18);

        setProducts14(fetchedProducts14);
        setProducts18(fetchedProducts18);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

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

  // Render product list sections
  const renderProducts = (products: Product[], title: string) => (
    <section className="mb-16 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product) => (
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
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Navbar2/>
      <div className="container mx-auto py-16 px-6">
        
        {renderProducts(products18, "Additional Products")}

        <section className="my-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Or Subscribe To The Newsletter</h3>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email Address..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Follow Products And Discounts On Instagram</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {products14.slice(0, 4).map((product) => (
              <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-64"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer2 />
    </div>
  );
};

export default ProductsPage;