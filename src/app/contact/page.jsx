/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';

const page = () => {
    AOS.init({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const load = () => {
             setTimeout( () => {
                setLoading(false);
             }, '500');
        }
       load(); 
    }, []);

    return (
        <>
        {
            isLoading ? <Spinner></Spinner>

            :
            <div className='pt-20 '>
                <div className='bg-[#07332f] text-center py-20  text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Contact Us</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Contact Us</h1>

         </div>

         <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="w-full lg:w-[80%] mx-auto my-10 h-full">
             <form  
               className=' space-y-6 bg-[#07332f] px-8 py-12'
           >

             <h1 className='text-center text-xl text-[#f29269]'>Fill The Form</h1>
             <p  className='text-center text-5xl font-semibold text-white pb-20'>Contact Form</p>

             <div className='space-y-4 w-full md:w-[80%] lg:w-[60%] mx-auto'>
              <div className="w-full flex gap-5"> 
             <div className='w-1/2'>
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Name'
                 className='w-full px-3 py-2 border-b-[#e2b29d] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-slate-200 bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-1/2'>
               
               <input
                 type='email'
                 name='email'
                 id='email'
                 required
                 placeholder='Email'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-b-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div className="flex gap-5 w-full"> 
             <div className='w-1/2' >
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Your Number'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-b-2 focus:outline-none bg-transparent text-gray-900'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-1/2'>
               
               <input
                 type='text'
                 name='email'
                 id='email'
                 required
                 placeholder='Your Subject'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-b-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div>
               
               {/* lg */}
 <textarea placeholder="your massage" className="resize-none h-[136px] textarea border-b-[#e2b29d] rounded-md border-b-2  bg-transparent textarea-lg w-full " ></textarea>
             </div>
 <div className='w-full flex justify-center'><button className='btn border-[#e2b29d] rounded-xl border-2 focus:outline-none bg-transparent text-white  hover:bg-none  hover:text-red-700 px-5 font-medium  text-2xl uppercase'>SEND</button></div>
             </div> 
           </form>
             </div>

            </div>
        }
        
        </>    
    );
};

export default page;