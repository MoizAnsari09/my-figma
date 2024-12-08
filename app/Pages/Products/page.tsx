
import Image from "next/image";
import Footer from "../../components/Footer";


import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer2 from "../../components/Footer2";
import Products2 from "@/app/components/Products2";
const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 2, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 3, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 4, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
  { id: 5, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 6, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 7, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 8, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
  { id: 9, name: "Library Stool Chair", price: "$20", tag: "New", image: "/chair/1 (1).png" },
  { id: 10, name: "Library Stool Chair", price: "$20", tag: "Sale", image: "/chair/1 (2).png" },
  { id: 11, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (3).png" },
  { id: 12, name: "Library Stool Chair", price: "$20", tag: "", image: "/chair/1 (4).png" },
];


export default function Home (){
  return(
    <div>
      <Footer/>
      <Navbar/>
      <Navbar2/>
      <div className="container mx-auto py-16 pl-24 pr-28">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-md"
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            {product.tag && <span className="text-sm bg-green-100 px-2 py-1 rounded-full">{product.tag}</span>}
          </div>
        ))}
      </div>
      
    </div>
    <Products2/>
     
     <Footer2/>
     
    </div>
  )
}