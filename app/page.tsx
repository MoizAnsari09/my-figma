import Benner from "./components/Banner";

import Footer from "./components/Footer";

import FeaturedProducts from "./components/Products";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer2 from "./components/Footer2";



export default function Home (){
  return(
    <div>
      <Footer/>
      <Navbar/>
      <Navbar2/>
      <Benner/>
     <FeaturedProducts/>
     <Footer2/>
     
    </div>
  )
}