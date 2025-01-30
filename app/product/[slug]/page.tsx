import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

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
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // ✅ یہاں `params` کو `await` کیا گیا ہے
  const { slug } = resolvedParams;
  
  const product = await getProduct(slug);

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
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
