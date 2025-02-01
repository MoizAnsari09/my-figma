"use client";

import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { addToCart } from "../../actions/actions";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";
import Footer2 from "@/app/components/Footer2";
import { client } from "@/sanity/lib/client";
import {  Products124, SingleProduct } from "@/sanity/lib/queries"; // Assuming Products18 contains the list of products
import { useAuth } from "@/app/components/AuthContext";
import { useRouter } from "next/navigation"; // For navigation

const Home = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const router = useRouter(); // For redirection
  const [products, setProducts] = useState<Product[]>([]);
  const [products1, setProducts1] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(Products124);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  
    async function fetchTopCategories() {
      try {
        const fetchedTopCategory: Product = await client.fetch(SingleProduct); 
  
        // چونکہ یہ ایک واحد پروڈکٹ ہے، اسے ایک array میں wrap کریں
        if (fetchedTopCategory) {
          setProducts1([fetchedTopCategory]); 
        } else {
          setProducts1([]); // اگر پروڈکٹ نہیں ملا تو خالی array سیٹ کریں
        }
      } catch (error) {
        console.error("Error fetching top category:", error);
        setProducts1([]); // Error ہونے پر بھی خالی array رکھیں
      }
    }
  
    fetchProducts();
    fetchTopCategories();
  }, []);

  // Handle add to cart action
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "You must sign in first!",
        text: "Please log in to add items to your cart.",
        showConfirmButton: true,
      }).then(() => {
        router.push("/signin"); // Redirect to sign-in page
      });
      return;
    }

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

      {/* Top Categories Section */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 gap-6">
          {products1 && products1.length > 0 ? (
            products1.map((product) => (
              <div
                key={product.id || product.slug.current}
                className="bg-gray-200 shadow-md rounded-md p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={675}
                  height={607}
                  className="w-full md:w-[675px] h-auto object-cover rounded-md"
                />
                <div className="flex flex-col items-center md:items-start">
                  <h1 className="text-3xl font-bold mb-2 text-center md:text-left">
                    {product.title}
                  </h1>
                  <p className="text-gray-700 mb-4 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias reprehenderit dolorem non.
                  </p>
                  <button
                    className="w-[212px] h-[63px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center justify-center text-[20px]"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products available</p>
          )}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id || product.slug.current} // Ensure unique key
                className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/product/${product.slug.current}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-medium">{product.title}</h3>
                  <p className="text-gray-500">{product.price}</p>
                  {product.tags && (
                    <span className="text-sm bg-green-100 px-2 py-1 rounded-full">
                      {product.tags}
                    </span>
                  )}
                  <button
                    className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out w-full flex items-center justify-center"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center">No featured products available</p>
          )}
        </div>
      </div>

      
      <Footer2 />
    </div>
  );
};

export default Home;
