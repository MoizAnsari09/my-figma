"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { useAuth } from "@/app/components/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the interface to specify the expected params type
interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    `*[_type == "products" && slug.current == $slug][0]{
      _id,
      title,
      _type,
      image,
      price,
      description,
      tags
    }`,
    { slug }
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { user } = useAuth(); // Get authentication status
  const router = useRouter(); // For redirection
  const [product, setProduct] = useState<Product | null>(null);

  const slug = params.slug; // Directly access slug from params

  useEffect(() => {
    if (!user) {
      router.push("/signin"); // Redirect to Sign-In if not logged in
      return;
    }

    async function fetchProduct() {
      if (slug) {  // Ensure slug exists before fetching the product
        const fetchedProduct = await getProduct(slug);
        setProduct(fetchedProduct);
      }
    }
    fetchProduct();
  }, [user, slug, router]); // Depend on slug to re-fetch if it changes

  if (!product) {
    return <p className="text-center py-10">Loading product...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title || "Product Image"}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
          <p>{product.description}</p>
          <p className="text-gray-500 mt-1">{product.tags}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
