/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import React from 'react';

//import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';



const page = () => {
    const router = useRouter();
    const  session  = useSession();
    //console.log(session?.data?.user);
    
    AOS.init({});

    const handleLogout = () => {
        
        signOut();
        router.push("/");
      }



    return (
        <>
<div className='bg-black text-center pt-28 text-white pb-5'>
            <h1 className='text-4xl mb-2'>MY ACCOUNT</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / My Account</h1>
         </div>
         <div className="w-[80%] mx-auto mt-10">
                <div className="flex flex-col-reverse lg:flex-row gap-14">
                    <div className="w-full lg:w-96 space-y-2">
                        <h1 className="text-4xl mb-2 h-20 flex items-center justify-center bg-black text-white w-full">MY ACCOUNT</h1> 
                        <Link href={"/login"}><div><button className="mb-2 btn text-white text-xl w-full bg-cyan-800 hover:bg-cyan-700">Login</button></div></Link>
                        <Link href={"/signup"}><div><button className="btn mb-2 text-white text-xl w-full bg-teal-800 hover:bg-cyan-700">Sign Up</button></div></Link>
                        
                        <div><button onClick={handleLogout} className="btn text-white text-xl w-full bg-black hover:bg-cyan-700">Logout</button></div>   
                    </div>

                    <div className="w-full">
                      <h1 className="mb-10 text-xl">Hello - <span className='font-semibold text-[#f29269]'>{session?.data?.user?.name}</span></h1>

                       <h1 className="mb-5 font-serif text-xl">Appointment History :</h1>
                       <div className="flex flex-col gap-5 mb-10">
                      
              </div>
                       <div className="flex flex-col gap-5">
                       <h1 className="font-serif text-xl">Account Details :</h1>
                        <h1 className="text-xl pb-5 border-b-2">Name : {session?.data?.user?.name} <span className="ml-10"></span></h1>
                        <h1 className="text-xl pb-5 border-b-2 mb-5" >Email : {session?.data?.user?.email}<span className="ml-10"></span></h1>
                        
                       </div>
                    </div>
                </div>

            </div>

       </>
    );
};

export default page;

