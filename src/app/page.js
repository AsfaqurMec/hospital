import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";

export default function Home() {
  return (
    <div className=" ">
        <Banner></Banner>
        <About></About>
        
    </div>
    
  );
}
