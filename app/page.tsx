import Benner from "./components/Banner";

import Footer from "./components/Footer";


import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer2 from "./components/Footer2";

import Page from "./Products3/page";
// import Products from "./components/Products";



export default function Home (){
  return(
    <div>
      <Footer/>
      <Navbar/>
      <Navbar2/>
      <Benner/>
     <Page/>
     <Footer2/>
     
    </div>
  )
}