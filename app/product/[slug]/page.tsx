'use client'; // Add this line at the top to make the component a client-side component

import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../../actions/actions"; // import your addToCart action
import Swal from "sweetalert2";
import Navbar from "@/app/components/Navbar";
import Navbar2 from "@/app/components/Navbar2";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import React from "react";

async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error("Slug is not available.");
    return null;
  }
  // Fetch product based on slug
  return client.fetch(
    `*[_type == "products" && slug.current == $slug][0]{
      _id,
      title,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Ensure params is awaited

  // Fetch the product
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
    };
    fetchData();
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-red-500 text-2xl">
          Product not found. Please check the URL or try again later.
        </p>
      </div>
    );
  }

  // Add to cart handler
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product) {
      addToCart(product);
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.title} has been added to your cart!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Navbar2 />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product Image Section */}
          <div className="flex justify-center items-center">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.title}
                width={600}
                height={600}
                className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
            )}
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-xl font-semibold text-green-600">${product.price}</p>
            <p className="text-lg text-gray-700">{product.description}</p>
            <div className="mt-6">
              <button
                onClick={handleAddToCart} // This is now on the client-side
                className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
