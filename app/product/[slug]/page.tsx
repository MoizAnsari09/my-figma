import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Swal from "sweetalert2";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
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
    }`,
    { slug }
  );
}

// Handle adding product to the cart
const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();
  addToCart(product); // Assuming addToCart is a function that adds the product to a global cart state
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.title} has been added to your cart!`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params; // Destructure slug from params
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && ( // Use optional chaining and check if image exists
            <Image
              src={urlFor(product.image).url()}
              alt={product.title || "Product Image"} // Provide a default alt text
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

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
