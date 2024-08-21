/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';

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
            <h1 className='text-5xl font-semibold text-[#f29269] mb-3'>Contact Us</h1>
            <h1 className='flex justify-center text-lg items-center gap-2'> Home / Contact Us</h1>

         </div>
            </div>
        }
        
        </>    
    );
};

export default page;