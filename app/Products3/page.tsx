import { client } from "@/sanity/lib/client";
import { Products14, Products124, Products18, Products15 } from "@/sanity/lib/queries";
import Products3 from "./Products3";

export default async function Page() {
  const products14 = await client.fetch(Products14);
  const products124 = await client.fetch(Products124);
  const products18 = await client.fetch(Products18);
  const products15 = await client.fetch(Products15);

  return <Products3 products14={products14} products124={products124} products18={products18} products15={products15} />;
}
