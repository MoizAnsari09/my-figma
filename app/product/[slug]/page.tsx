import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import React from "react";

interface ProductPageProps {
  params: { slug: string }; // Define the slug parameter
}

// Fetch all possible slugs for static generation
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "products"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

// Fetch product details based on slug
async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error("Slug is not available.");
    return null;
  }
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Destructure slug
  const product = await getProduct(slug); // Fetch product data

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-red-500 text-2xl">
          Product not found. Please check the URL or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex justify-center items-center">
            {product.image && (
              <img
                src={urlFor(product.image).url()}
                alt={product.title}
                className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
            )}
          </div>

          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-xl font-semibold text-green-600">${product.price}</p>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
