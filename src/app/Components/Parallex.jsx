"use client"

import Image from "next/image";
import img from '../../../public/Screenshot 2024-08-19 022706.png'
import i from '../../../public/hospital_bed_vn_background_by_drechenaux_dg83a9z-pre.jpg'
// import { useEffect, useState } from "react";



const Parallex = () => {

//     const [offsetY, setOffsetY] = useState(0);

//   const handleScroll = () => {
//     setOffsetY(window.scrollY);
//   };

//   useEffect(() => {
//     // Ensure this code only runs on the client side
//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (typeof window !== 'undefined') {
//         window.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);
//https://i.ibb.co/DKvdpvv/hospital-bed-vn-background-by-drechenaux-dg83a9z-pre.jpg

    return (
        <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bb"
        style={{
         // backgroundImage: "url('../../../public/hospital_bed_vn_background_by_drechenaux_dg83a9z-pre.jpg')",
        //   transform: `translateY(${offsetY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
          backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundAttachment: "fixed", // Smooth out the movement
        }}
      ></div >

      <div className="relative z-10 w-full h-full pb-10">
        <div className="flex flex-col items-center justify-end w-full h-full ">
      <h1 className='uppercase tracking-widest text-xl mb-3 text-[#ffffff] font-medium'>fill the form</h1>
      <h1 className="mb-5 text-5xl font-semibold text-[#ffffff]">Contact Form.</h1>

      <div className=" flex items-end justify-center w-full ">
         
         <div className="flex w-full flex-row lg:w-[60%] mx-auto">
             <Image src={img} alt="" className="h-[393px] w-[40%] hidden lg:flex"></Image>
             <div className="w-full lg:w-[60%] h-full">
             <form  
               className='w-full space-y-6 bg-[#07332f] px-8 py-12'
           >
             <div className='space-y-4'>
              <div className="flex gap-5"> 
             <div >
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Name'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
             <div>
               
               <input
                 type='email'
                 name='email'
                 id='email'
                 required
                 placeholder='Email'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div className="flex gap-5 w-full"> 
             <div >
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Your Number'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
             <div>
               
               <input
                 type='date'
                 name='email'
                 id='email'
                 required
                 placeholder=''
                 className='w-56 px-3 py-2 border-[#e6d1c8] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div>
               
               {/* lg */}
 <textarea placeholder="your massage" className="resize-none h-[106px] textarea border-[#e2b29d] rounded-md border-2 focus:outline-[#e2b29d] bg-transparent textarea-lg w-full " ></textarea>
             </div>
 <div className='w-full flex justify-start'><button className='btn border-[#e2b29d] rounded-3xl border-2 focus:outline-none bg-transparent text-white  hover:bg-none  hover:text-red-700 px-5 font-medium  text-2xl uppercase'>SEND</button></div>
             </div> 
           </form>
             </div>
         </div>
       </div>

      </div>
      

      </div>
    </div>
    );
};

export default Parallex;