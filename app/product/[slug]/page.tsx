"use client";

import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
import { addToCart } from "../../actions/actions";
import { useEffect, useState, use } from "react";

interface ProductPageProps {
  params: Promise<{ slug: string }>; // Ensure params is treated as a Promise
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params); // Unwrap the Promise

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{_id, title, image, price, description}`,
        { slug }
      );
      setProduct(data);
    }
    fetchProduct();
  }, [slug]);

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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product?.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product?.title}</h1>
          <p className="text-2xl font-sans text-gray-700">${product?.price}</p>
          <p className="text-lg text-gray-600">{product?.description}</p>
          <button
            className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
