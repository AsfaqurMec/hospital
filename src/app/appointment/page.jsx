/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
// import AOS from 'aos';

import img from '../../../public/Screenshot 2024-08-19 022706.png'
import img14 from '../../../public/Screenshot 2024-08-19 190850.png'
import img15 from '../../../public/Screenshot 2024-08-19 190902.png'
import img16 from '../../../public/Screenshot 2024-08-19 190914.png'
import img17 from '../../../public/Screenshot 2024-08-19 190930.png'
import Spinner from '../Components/Spinner';
import { useSession } from 'next-auth/react';


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

  const session = useSession();
   // console.log(session.data.user);
   const handleSubmit = async (event) => {
    event.preventDefault();
    const newAppointment = {
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
      date: event.target.date.value,
      time: event.target.time.value,
      doctor: event.target.doctor.value,
      message: event.target.message.value,
    };
    const resp = await fetch("http://localhost:3000/appointment/api", {
      method: "POST",
      body: JSON.stringify(newAppointment),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      event.target.reset();
    }
  };



    return (
        <>
        {
            isLoading ? <Spinner></Spinner>

            :
            <div className='pt-20  bg-[#07332f]'>
            <div className='bg-[#07332f] text-center py-20  text-white'>
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Appointment Booking</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Appointment Booking</h1>

         </div>

        <div className='bg-[#f6efec] py-20'>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="flex w-full flex-col md:flex-row lg:w-[80%] mx-auto">
            
             <div className="w-full lg:w-[60%] h-full">
             <form  onSubmit={handleSubmit} action=""
               className='w-full space-y-6 bg-[#07332f] px-8 py-12'
           >
             <div className='w-full space-y-4'>
              <div className="flex flex-col md:flex-row  gap-5 w-full"> 
             <div className='w-full md:w-1/2'>
               
               <input
                 type='text'
                 name='name'
                 id='name'
                 placeholder='Name'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
                 defaultValue={session?.data?.user?.name}
               />
             </div>
             <div className='w-full md:w-1/2'>
               
               <input
                 type='email'
                 name='email'
                 id='email'
                 required
                 placeholder='Email'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
                 defaultValue={session?.data?.user?.email}
               />
             </div>
 
             </div>
 
             <div className="flex flex-col md:flex-row gap-5 w-full"> 
             <div className='w-full md:w-1/2'>
               
               <input
                 type='text'
                 name='number'
                 id='number'
                 placeholder='Your Number'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-full md:w-1/2'>
               
               <input
                 type='date'
                 name='date'
                 id='date'
                 required
                 placeholder=''
                 className='w-64 px-3 py-2 border-[#e6d1c8] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
 
             </div>
 
             <div className="flex flex-col md:flex-row gap-5 w-full"> 
             <div className='w-full md:w-1/2'>
               
               <input
                 type='time'
                 name='time'
                 id='time'
                 placeholder='Appointment time'
                 className='w-full px-3 py-2 border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-400'
                 data-temp-mail-org='0'
               />
             </div>
             <div className='w-full md:w-1/2'>
               
             <select id='doctor' className="py-3 w-full outline-transparent px-3  border-[#e2b29d] rounded-md border-2 focus:outline-none bg-transparent text-gray-400">
  <option disabled selected>Select Doctor</option>
  <option value='Dr. Elizabeth foster'>Dr. Elizabeth foster</option>
  <option value='Dr. David lee'>Dr. David lee</option>
  <option value='Dr. Ava white'>Dr. Ava white</option>
  <option value='Dr. Daniel Brown'>Dr. Daniel Brown</option>


</select>
             </div>
 
             </div>
 


             <div>
               
               {/* lg */}
 <textarea id='message' placeholder="your massage" className="resize-none h-28 textarea border-[#e2b29d] rounded-md border-2 text-gray-400 focus:outline-[#e2b29d] bg-transparent textarea-lg w-full " ></textarea>
             </div>
 <div className='w-full flex justify-start'><button className='btn border-[#e2b29d] rounded-3xl border-2 focus:outline-none bg-transparent text-white  hover:bg-none  hover:text-red-700 px-5 font-medium  text-2xl uppercase'>SEND</button></div>
             </div> 
           </form>
             </div>
             <Image src={img} alt="" className="h-[465px] w-full lg:w-[40%]"></Image>
         </div>
        </div>


        <section className="bg-[#fef8f3] h-auto pt-10">

<div className="w-[90%] md:w-[80%] mx-auto pt-2 ">
       <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className='uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium'>Our Best Doctor</p>
       <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-4xl font-semibold mb-5">Meet Our Doctors.</h1>
</div>

<div className="w-[100%] md:w-[90%] mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
   

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img14} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">family physician</button>
                  <h1>dr. elizabeth foster</h1>
                  <p className="text-base text-slate-400">Compassionate care for all ages.</p>
               </div>
               
            

            
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img15} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">surgeon</button>
                  <h1>dr. david lee</h1>
                  <p className="text-base text-slate-400">Skillful hands, transforming lives.</p>
               </div>
               
          

            
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img16} className="rounded-md" alt="logo"></Image>
            <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">cardiologist</button>
                  <h1>dr. ava white</h1>
                  <p className="text-base text-slate-400">Mental wellness and guiding..</p>
               </div>
               
               <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
            <Image src={img17} className="rounded-md" alt="logo"></Image>
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