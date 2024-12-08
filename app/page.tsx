import Benner from "./components/Banner";

import Footer from "./components/Footer";


import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer2 from "./components/Footer2";
import Products from "./components/Products";



export default function Home (){
  return(
    <div>
      <Footer/>
      <Navbar/>
      <Navbar2/>
      <Benner/>
     <Products/>
     <Footer2/>
     
    </div>
  )
}