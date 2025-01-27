"use client";

import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { AllProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer2 from "../../components/Footer2";
import Link from "next/link";
import { addToCart } from "../../actions/actions";
import { urlFor } from "@/sanity/lib/image";

const Home = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch all products from Sanity
        const fetchedAllProducts: Product[] = await client.fetch(AllProducts);
        setAllProducts(fetchedAllProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  const renderProducts = (products: Product[], title: string) => (
    <section className="mb-16 py-8">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
            <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer hover:bg-gray-100">
              {product.image && (
                <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-500 mt-1 text-sm">Price: ${product.price}</p>
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
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto py-16 px-6">
        {/* Render all products */}
        {renderProducts(allProducts, "All Products")}
      </div>
      <Footer2 />
    </div>
  );
};

export default Home;
