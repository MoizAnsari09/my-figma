"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { useAuth } from "@/app/components/AuthContext";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

// Define the expected type for params
interface ProductPageParams {
  slug: string;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    return await client.fetch(
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
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductPage() {
  const { user } = useAuth(); // Get authentication status
  const router = useRouter(); // For redirection
  const params = useParams() as unknown as ProductPageParams; // ✅ Fix: Ensure params have 'slug'
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!params?.slug) return; // ✅ Ensure slug exists
    if (!user) {
      router.push("/signin"); // Redirect to Sign-In if not logged in
      return;
    }

    async function fetchProduct() {
      const fetchedProduct = await getProduct(params.slug);
      setProduct(fetchedProduct);
    }

    fetchProduct();
  }, [params?.slug, user, router]);

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
