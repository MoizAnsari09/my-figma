"use client";

import Swal from 'sweetalert2';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Products14, Products124, Products18, Products15 } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { addToCart } from "../actions/actions";

const Products3 = () => {
  const [products14, setProducts14] = useState<Product[]>([]);
  const [products124, setProducts124] = useState<Product[]>([]);
  const [products18, setProducts18] = useState<Product[]>([]);
  const [products15, setProducts15] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts14: Product[] = await client.fetch(Products14);
        const fetchedProducts124: Product[] = await client.fetch(Products124);
        const fetchedProducts18: Product[] = await client.fetch(Products18);
        const fetchedProducts15: Product[] = await client.fetch(Products15);

        setProducts14(fetchedProducts14);
        setProducts124(fetchedProducts124);
        setProducts18(fetchedProducts18);
        setProducts15(fetchedProducts15);
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
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.slug.current}`} key={product._id}>
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="rounded-md object-cover w-full h-56 mb-4"
                />
              )}
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-500 mt-1">Price: ${product.price}</p>
              <button
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out w-full"
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

  const renderExploreSection = (products: Product[], title: string) => (
    <section className="mb-16 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          {products[0]?.image && (
            <Image
              src={urlFor(products[0].image).url()}
              alt={products[0].title}
              width={600}
              height={600}
              className="w-full h-auto rounded-md object-cover shadow-lg"
            />
          )}
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {products.slice(1).map((product) => (
            <div key={product._id} className="h-72 w-full">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-full rounded-md object-cover shadow-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="container mx-auto py-16 px-6">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {renderProducts(products14, "Featured Products")}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {renderProducts(products124, "Category Products")}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {renderExploreSection(products15, "Explore Popular Styles")}
      {renderProducts(products18, "Additional Products")}
    </div>
  );
};

export default Products3;
