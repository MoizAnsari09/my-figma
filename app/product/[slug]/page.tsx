// ❌ Remove "use client"; ✅ Make it a Server Component

import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import { addToCart } from "../../actions/actions";

interface ProductPageProps {
  params: { slug: string };
}

// ✅ Fetch product data (Runs on Server)
async function getProduct(slug: string): Promise<Product> {
  return await client.fetch(
    `*[_type == "products" && slug.current == $slug][0]{
      _id,
      title,
      image,
      price,
      description
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug); // ✅ Fetch inside Server Component

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={`Product Image of ${product.title}`}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          {/* Add to Cart Button (Moved to Client Component) */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

// ✅ Move Client-Side Functionality to a Separate Client Component
"use client";
function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = () => {
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
    <button
      className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out w-full"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
