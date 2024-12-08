"use client";
import React, { useState } from "react";
import Image from "next/image";

const Products2 = () => {
  const [email, setEmail] = useState("");

  // Update the type of the event to be more specific
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Newsletter Section */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Or Subscribe To The Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          className="flex-1 border border-gray-300 rounded-md p-2 w-full sm:w-auto"
          placeholder="Email Address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Submit
        </button>
      </form>

      {/* Instagram Products Section */}
      <h2 className="text-3xl font-bold text-center mt-12">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        <div>
          <Image src="/chair/1 (1).png" alt="Product 1" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src="/chair/1 (2).png" alt="Product 2" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src="/chair/1 (3).png" alt="Product 3" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src="/chair/1 (1).png" alt="Product 4" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src="/chair/1 (2).png" alt="Product 5" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
        <div>
          <Image src="/chair/1 (3).png" alt="Product 6" width={200} height={200} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Products2;
