import { client } from "@/sanity/lib/client";
import { Products14, Products18 } from "@/sanity/lib/queries";
import ProductsPage from "./ProductsPage";

export default async function Page() {
  const products14 = await client.fetch(Products14);
  const products18 = await client.fetch(Products18);

  return <ProductsPage products14={products14} products18={products18} />;
}
