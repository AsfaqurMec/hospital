/* eslint-disable react/no-unescaped-entities */
"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Spinner from '../Components/Spinner';
import img4 from '../../../public/Screenshot 2024-08-19 190850.png'
import img5 from '../../../public/Screenshot 2024-08-19 190902.png'
import img6 from '../../../public/Screenshot 2024-08-19 190914.png'
import img7 from '../../../public/Screenshot 2024-08-19 190930.png'
import img8 from '../../../public/Screenshot 2024-08-21 192402.png'
import img9 from '../../../public/Screenshot 2024-08-21 192413.png'
import img10 from '../../../public/Screenshot 2024-08-21 192425.png'
import img11 from '../../../public/Screenshot 2024-08-21 192434.png'
import img12 from '../../../public/Screenshot 2024-08-21 192444.png'
import img13 from '../../../public/Screenshot 2024-08-21 192451.png'
import img14 from '../../../public/Screenshot 2024-08-21 192509.png'
import img15 from '../../../public/Screenshot 2024-08-21 192517.png'
import img16 from '../../../public/Screenshot 2024-08-21 192525.png'
import img17 from '../../../public/Screenshot 2024-08-21 192534.png'
// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';



const page = () => {

   useEffect(() => {
      AOS.init({});
  }, []); // The empty dependency array ensures this runs only once on mount

  
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
               <div className='bg-[#07332f] text-center py-28  text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Services</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Services</h1>

         </div>

          <div className='py-20 bg-[#fef8f3] w-full'>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='mt-10 uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium text-center'>our services</p>
          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className='text-4xl font-semibold text-center mb-3'>Providing Medical Care For TheSickest</h1>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='mb-28 flex justify-center font-semibold text-4xl items-center gap-2 '>In Our Community.</h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-[85%] mx-auto'>

           <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img8} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>cardiology clinic</h1>
                      <p className="text-base text-slate-400">Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Cardiac Electrophysiology</h1>
                         <h1 className="text-lg font-semibold">Cardiac Catheterization</h1>
                         <h1 className="text-lg font-semibold">Arrhythmia Management</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img9} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>pathology clinic</h1>
                      <p className="text-base text-slate-400">Comprehensive tests to analyze body fluids, aiding in the diagnosis and monitoring of organ function and metabolic disorders.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Molecular Pathology</h1>
                         <h1 className="text-lg font-semibold">Cytogenetics</h1>
                         <h1 className="text-lg font-semibold">Immunology</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img10} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>laboratory analysis</h1>
                      <p className="text-base text-slate-400">Our Laboratory Analysis Services offer a comprehensive range of advanced tests to aid in the accurate diagnosis. metabolic disorders.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Comprehensive Test Menu</h1>
                         <h1 className="text-lg font-semibold">Timely Turnaround</h1>
                         <h1 className="text-lg font-semibold">Advanced Diagnostic Tests</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img11} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>pediatric clinic</h1>
                      <p className="text-base text-slate-400">Comprehensive well-child checkups, growth monitoring, and developmental assessments to ensure your child's health track.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Nutrition Counseling</h1>
                         <h1 className="text-lg font-semibold">Pediatric Dermatology</h1>
                         <h1 className="text-lg font-semibold">Developmental Evaluations</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img12} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>cardiac clinic</h1>
                      <p className="text-base text-slate-400">Find comprehensive care and support for heart failure patients, including lifestyle recommendations and advanced therapies.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Heart Failure Program</h1>
                         <h1 className="text-lg font-semibold">Cardiac Rehabilitation</h1>
                         <h1 className="text-lg font-semibold">Lipid Management</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="bg-[#07332f] text-white w-full border-[1px] border-black flex flex-col justify-center gap-3 p-10">
                
                <Image src={img13} alt="logo" priority></Image>
                      <h1 className='text-2xl font-semibold'>neurology clinic</h1>
                      <p className="text-base text-slate-400">Consultations with specialized neurologists to address various neurological concerns, symptoms, and disorders.</p>
                      <div className=" my-3 space-y-3">
                         <h1 className="text-lg font-semibold">Epilepsy Management</h1>
                         <h1 className="text-lg font-semibold">Headache and Migraine Clinic</h1>
                         <h1 className="text-lg font-semibold">Neurological Examinations</h1>
                      </div>
                      <div className='flex items-end h-full w-full'>
                      <button className="flex  btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
                      </div>
                </div>
                 
           </div>
           
           {/* section 5 */}

   <section className=" pt-10 pb-20">

<div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14 w-full lg:w-[80%] mx-auto">
<div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start gap-3  font-semibold text-black text-5xl py-10">
         <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>top service</p>
               <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">We Are a Pogressive </h1>
               <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">Medical Clinic.</h1>
               
            </div>

            <div className="w-full lg:w-1/2 p-10">
              <p data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className="text-slate-500">Welcome to our comprehensive medical services designed to cater to your diverse healthcare needs. We are committed to delivering top-notch medical care with a patient-centered approach.</p>
            </div>
</div>

<div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className="flex flex-col justify-center items-center gap-5 text-black border-[1px] border-black py-7">
     <Image src={img14} alt="o" priority></Image>
     <h1 className="text-base font-semibold md:text-xl mb-5">Cardiology</h1>
 </div>

 <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col justify-center items-center gap-5 text-black border-[1px] border-black py-7">
     <Image src={img15} alt="o" priority></Image>
     <h1 className="text-base font-semibold md:text-xl mb-5">Diagnostics</h1>
 </div>

 <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300" className="flex flex-col justify-center items-center gap-5 text-black border-[1px] border-black py-7">
     <Image src={img16} alt="o" priority></Image>
     <h1 className="text-base font-semibold md:text-xl mb-5">Virology</h1>
 </div>

 <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col justify-center items-center gap-5 text-black border-[1px] border-black py-7">
     <Image src={img17} alt="o" priority></Image>
     <h1 className="text-base font-semibold md:text-xl mb-5">Therapy</h1>
 </div>
</div>

</section>



          </div>



         <section className="bg-[#fef8f3] h-auto pt-0 pb-14">

<div className="w-[90%] md:w-[80%] mx-auto pt-2 ">
       <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className='uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium'>Our Best Doctor</p>
       <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-4xl font-semibold mb-5">Meet Our Doctors.</h1>
</div>

<div className="w-[100%] md:w-[90%] mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
   

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img4} className="rounded-md" alt="logo" priority></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">family physician</button>
                  <h1>dr. elizabeth foster</h1>
                  <p className="text-base text-slate-400">Compassionate care for all ages.</p>
               </div>
               
            

            
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img5} className="rounded-md" alt="logo" priority></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">surgeon</button>
                  <h1>dr. david lee</h1>
                  <p className="text-base text-slate-400">Skillful hands, transforming lives.</p>
               </div>
               
          

            
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img6} className="rounded-md" alt="logo" priority></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">cardiologist</button>
                  <h1>dr. ava white</h1>
                  <p className="text-base text-slate-400">Mental wellness and guiding..</p>
               </div>
               
               <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img7} className="rounded-md" alt="logo" priority></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">dermatologist</button>
                  <h1>Dr. Daniel Brown</h1>
                  <p className="text-base text-slate-400">Focuses on skin, hair disorders.</p>
                  
               </div>

</div>

</section>

            </div>
        }
        
        </>
    );
};

export default page;