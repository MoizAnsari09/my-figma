"use client"
import React, { useState} from 'react';
import Image from 'next/image';

const Products2 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
   
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Or Subscribe To The Newsletter
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-6 pl-[200px] pr-[200px]">
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-md p-2 mr-2 "
            placeholder="Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      <h2 className="text-3xl font-bold text-center mt-12">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-8 pl-[100px] pr-[100px]">
        <div>
          <Image src="/chair/1 (1).png" alt="Product 1" width={200} height={200} />
        </div>
        {/* अन्य उत्पादों के लिए समान संरचना दोहराएं */}
        <div>
          <Image src="/chair/1 (2).png" alt="Product 2" width={200} height={200} />
        </div>
        <div>
          <Image src="/chair/1 (3).png" alt="Product 3" width={200} height={200} />
        </div>
        <div>
          <Image src="/chair/1 (1).png" alt="Product 1" width={200} height={200} />
        </div>
        {/* अन्य उत्पादों के लिए समान संरचना दोहराएं */}
        <div>
          <Image src="/chair/1 (2).png" alt="Product 2" width={200} height={200} />
        </div>
        <div>
          <Image src="/chair/1 (3).png" alt="Product 3" width={200} height={200} />
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Products2;