/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import Image from 'next/image';
import banner from '../../../public/Screenshot 2024-08-19 022627.png'
import img13 from '../../../public/Screenshot 2024-08-19 190600.png'
import img14 from '../../../public/Screenshot 2024-08-19 190628.png'
import img15 from '../../../public/Screenshot 2024-08-19 190654.png'
import img16 from '../../../public/Screenshot 2024-08-19 190713.png'
import img8 from '../../../public/Screenshot 2024-08-19 223518.png'
import img4 from '../../../public/Screenshot 2024-08-19 190850.png'
import img5 from '../../../public/Screenshot 2024-08-19 190902.png'
import img6 from '../../../public/Screenshot 2024-08-19 190914.png'
import img7 from '../../../public/Screenshot 2024-08-19 190930.png'

const page = () => {

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
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>About Us</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / About Us</h1>

         </div>

          {/* section 2 */}

          <section>

<div className="hero bg-[#fff7f3] pb-20 lg:pb-0 min-h-screen">
<div className="hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
<Image src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>
{/* <img
src={banner}
className="max-w-sm rounded-lg shadow-2xl" /> */}
<div className='px-10 md:px-5'>
<p className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>about medicalife</p>
<h1 className="text-5xl font-bold  mt-3">Our Best Services &</h1>
<h1 className="text-5xl font-bold  my-2">Poplular Treatment</h1>
<h1 className="text-5xl font-bold ">Here.</h1>
<p className="py-6 text-xl text-slate-400">
we take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs .
</p>
<div className="ml-3 my-5 space-y-3">
<h1 className="text-xl font-semibold">Mental health Solutions</h1>
<h1 className="text-xl font-semibold">Rapid Patient Improvement</h1>
<h1 className="text-xl font-semibold">World Class Treatment</h1>
</div>
<div className='flex gap-5'>
<button className="btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>

</div>
</div>
</div>
</div>     

</section>

{/* section 6 */}

<section>

<div className="hero bg-[#07332f] pb-20 lg:pb-0 min-h-screen">
<div className="hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
<Image src={img13} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>
{/* <img
src={banner}
className="max-w-sm rounded-lg shadow-2xl" /> */}
<div className='px-10 text-white md:px-5'>
<p className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>faqs</p>
<h1 className="text-5xl font-bold  mt-3">Consultations with</h1>
<h1 className="text-5xl font-bold  my-2">Qualified doctors.</h1>


<div className=" my-5 space-y-1">
<div className="collapse collapse-plus bg-transparent">
<input type="radio" className="text-xl" name="my-accordion-3"  />
  <div className="collapse-title text-xl font-semibold">Are telemedicine consultations available?</div>
  <div className="collapse-content">
    <p className="text-slate-400">Yes, we offer telemedicine consultations for certain medical conditions.</p>
  </div>
  
</div>
<div className="collapse collapse-plus bg-transparent">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-semibold">Do you accept health insurance?</div>
  <div className="collapse-content">
    <p className="text-slate-400">Yes, we accept most major health insurance plans.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-transparent">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-semibold">How much does a consultation cost?</div>
  <div className="collapse-content">
    <p className="text-slate-400">Consultation fees vary depending on the doctor and the type of consultation.</p>
  </div>
</div>
</div>

</div>
</div>
</div>     

</section>

    {/* blog section */}

    <section className="bg-[#f6efec] h-auto pt-10">

    <div className="w-[90%] md:w-[80%] mx-auto pt-20 ">
           <p className='uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium'>our blog</p>
           <h1 className="text-4xl font-semibold mb-5">Lates News & Articles.</h1>
    </div>

   <div className="w-[100%] md:w-[90%] mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
       
  
                <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img14} className="rounded-md" alt="logo"></Image>
                      <h1>Best Medical Network Directory For Physicians & Clients</h1>
                      <p className="text-base text-slate-400">Hypertension, commonly known as high blood pressure, is a prevalent</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
                

                
                <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img15} className="rounded-md" alt="logo"></Image>
                      <h1>The Importance of Regular Health Checkups</h1>
                      <p className="text-base text-slate-400">This symptoms, causes, risk factors, diagnosis, treatment options strategies.</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
              

                
                <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img16} className="rounded-md" alt="logo"></Image>
                      <h1>Managing Better Stress for Better Mental Health</h1>
                      <p className="text-base text-slate-400">These stories can provide valuable insights into living with a particular condition</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
                
   </div>

    </section>

     {/* section 4 */}


   <section className="bg-[#07332f] w-full ">

<div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14">
   <div className="flex flex-col justify-center lg:flex-row items-center gap-8 text-white">
       <Image src={img8} alt="o"></Image>
       <div className="text-center lg:text-left">
           <h1 className="text-4xl mb-5">Open For Appointments</h1>
           <p>we are delighted to announce that our doors are open, and we are now accepting <br /> appointments to serve you better.</p>
       </div>
       
   </div>
   <button className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
</div>

</section>


<section className="bg-[#f6efec] h-auto ">

<div className="w-[90%] md:w-[80%] mx-auto pt-20 ">
       <p className='uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium'>Our Best Doctor</p>
       <h1 className="text-4xl font-semibold mb-5">Meet Our Doctors.</h1>
</div>

<div className="w-[100%] md:w-[90%] mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
   

            <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img4} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">family physician</button>
                  <h1>dr. elizabeth foster</h1>
                  <p className="text-base text-slate-400">Compassionate care for all ages.</p>
               </div>
               
            

            
            <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img5} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">surgeon</button>
                  <h1>dr. david lee</h1>
                  <p className="text-base text-slate-400">Skillful hands, transforming lives.</p>
               </div>
               
          

            
            <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img6} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">cardiologist</button>
                  <h1>dr. ava white</h1>
                  <p className="text-base text-slate-400">Mental wellness and guiding..</p>
               </div>
               
               <div className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img7} className="rounded-md" alt="logo"></Image>
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