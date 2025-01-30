"use client";

import Swal from "sweetalert2";
import { Product } from "@/types/products";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // اپنی addToCart فنکشن یہاں شامل کریں
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
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
}
