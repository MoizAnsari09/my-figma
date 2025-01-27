import { groq } from "next-sanity";



export const Products15 = groq`*[_type == "products"][6..10]`;
export const AllProducts = groq`*[_type == "products"]`;
export const Products14 = groq`*[_type == "products"][0..3]`;
export const Products124 = groq`*[_type == "products"][4..7]`;
export const Products18 = groq`*[_type == "products"][7..14]`;