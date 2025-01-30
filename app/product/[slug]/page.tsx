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

// Tabnine | Edit | Test | Explain | Document | Pieces: Comment | Pieces: Explain

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
              className="rounded-lg shadow-md" // Corrected class name: rounded-lg
            />
          )}
        </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
              {product.title} {/* Display product name */}
            </h1>
            <p>
              ${product.price} {/* Display product price */}
            </p>
            <h3>
              {product.description}
            </h3>
           
          </div>
      </div>
    </div>
  );
}