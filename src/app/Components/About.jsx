"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import img1 from '../../../public/Screenshot 2024-08-19 223339.png'
import img2 from '../../../public/Screenshot 2024-08-19 223353.png'
import banner from '../../../public/Screenshot 2024-08-19 022627.png'
import img3 from '../../../public/Screenshot 2024-08-19 223411.png'
import img4 from '../../../public/Screenshot 2024-08-19 223432.png'
import img5 from '../../../public/Screenshot 2024-08-19 223441.png'
import img6 from '../../../public/Screenshot 2024-08-19 223454.png'
import img7 from '../../../public/Screenshot 2024-08-19 223503.png'
import img8 from '../../../public/Screenshot 2024-08-19 223518.png'
import img9 from '../../../public/Screenshot 2024-08-19 223532.png'
import img10 from '../../../public/Screenshot 2024-08-19 223540.png'
import img11 from '../../../public/Screenshot 2024-08-19 223549.png'
import img12 from '../../../public/Screenshot 2024-08-19 223606.png'
import img13 from '../../../public/Screenshot 2024-08-19 190600.png'
import img14 from '../../../public/Screenshot 2024-08-19 190628.png'
import img15 from '../../../public/Screenshot 2024-08-19 190654.png'
import img16 from '../../../public/Screenshot 2024-08-19 190713.png'
import Parallex from "./Parallex";

// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { useEffect } from "react";



const About = () => {
   useEffect(() => {
      AOS.init({});
  }, []); // The empty dependency array ensures this runs only once on mount
    return (
        <div>

     {/* section 1 */}

           <section data-aos="fade-up"  data-aos-duration="2000" className="my-20">

            <div className="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div className="h-56 w-full lg:w-1/3 bg-[#f7a582]">
                <div className="h-[78.6%] flex flex-col justify-center font-semibold text-white text-3xl">
                   <h1 className="pl-5 pt-5">Don't Hesitate To</h1>
                   <h1 className="pl-5 ">Contact us</h1>
                   </div>
                   <button className="btn rounded-none w-full bg-black border-none text-white">Make Appointment</button>
                </div>
                <div className="h-[580px] md:h-[490px] lg:h-56 w-full lg:w-2/3 flex flex-col lg:flex-row bg-[#07332f] p-3">
                   <div className="w-full lg:w-1/2 p-8 gap-3 flex flex-col justify-center font-semibold text-white text-xl border-b-2 lg:border-b-0 border-r-0 lg:border-r-2">
                      <Image src={img1} alt="logo"></Image>
                      <h1>Need family health</h1>
                      <p className="text-base text-slate-400">we understand the importance of family health overall well-being.</p>
                   </div>
                   <div className="w-full lg:w-1/2 p-8 f flex gap-3 flex-col justify-center font-semibold text-white text-xl">
                   <Image src={img2} alt="logo"></Image>
                      <h1>24 hours service</h1>
                      <p className="text-base text-slate-400">we take pride in offering 24-hour medical services to ensure that you.</p>
                   </div>
                </div>
            </div>


            </section> 

         {/* section 2 */}

            <section>

            <div className="md:hero bg-[#fff7f3] pb-20 lg:pb-0 min-h-screen">
  <div className="flex md:hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
    <Image data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>
    {/* <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className='px-10 md:px-5'>
        <p data-aos="zoom-out-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>about medicalife</p>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100"  className="text-5xl font-bold  mt-3">Our Best Services &</h1>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200"  className="text-5xl font-bold  my-2">Poplular Treatment</h1>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300"  className="text-5xl font-bold ">Here.</h1>
      <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="py-6 text-xl text-slate-400">
      we take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs .
      </p>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="ml-3 my-5 space-y-3">
        <h1 className="text-xl font-semibold">Mental health Solutions</h1>
        <h1 className="text-xl font-semibold">Rapid Patient Improvement</h1>
        <h1 className="text-xl font-semibold">World Class Treatment</h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className='flex gap-5'>
      <button className="btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
      
      </div>
    </div>
  </div>
</div>     

   </section>

      {/* section 3 */}


   <section className=" bg-[#fff7f3] pb-20">
     <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
     <div className="h-72 w-full ">
                <div className="h-full flex flex-col justify-center gap-3  font-semibold text-black text-5xl py-10">
                <p data-aos="zoom-in-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>medical services</p>
                      <h1 data-aos="zoom-in-up" data-aos-duration="1000">We're Providing</h1>
                      <h1 data-aos="zoom-in-up" data-aos-duration="1000">Best Services.</h1>
                   </div>
                   
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-black">
                <div className="h-[83.1%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <Image src={img3} alt="logo"></Image>
                      <h1>eye care</h1>
                      <p className="text-base text-slate-400">we understand the importance of clear vision and its impact on your.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black">
                <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <Image src={img4} alt="logo"></Image>
                      <h1>medical checkup</h1>
                      <p className="text-base text-slate-400">During your medical checkup, our skilled healthcare professionals.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="h-72 w-full border-[1px] border-black">
                <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <Image src={img5} alt="logo"></Image>
                      <h1>dental care</h1>
                      <p className="text-base text-slate-400">we are passionate about providing top-notch dental care to help you.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="h-72 w-full border-[1px] border-black">
                <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <Image src={img6} alt="logo"></Image>
                      <h1>laboratory service</h1>
                      <p className="text-base text-slate-400">we understand the critical role that accurate diagnostics play in guiding.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="h-72 w-full border-[1px] border-black">
                <div className="h-[83.2%] flex flex-col justify-center gap-3  font-semibold text-black text-3xl p-10">
                <Image src={img7} alt="logo"></Image>
                      <h1>Patient-centered</h1>
                      <p className="text-base text-slate-400">hospitals, or clinics with positive reviews and ratings from patients.</p>
                   </div>
                   <button className="btn rounded-none w-full bg-[#f7a582] border-none text-white">Read More</button>
                </div>
     </div>

   </section>


    {/* section 4 */}


   <section className="bg-[#07332f] w-full ">

     <div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14">
        <div className="flex flex-col justify-center lg:flex-row items-center gap-8 text-white">
            <Image src={img8} alt="o"></Image>
            <div className="text-center lg:text-left">
                <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="text-4xl mb-5">Open For Appointments</h1>
                <p data-aos="zoom-in-down" data-aos-duration="1000">we are delighted to announce that our doors are open, and we are now accepting <br /> appointments to serve you better.</p>
            </div>
            
        </div>
        <button data-aos="zoom-in-down" data-aos-duration="1000" className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
     </div>

   </section>


   {/* section 5 */}

   <section className="bg-[#fceee7] pt-10 pb-20">

       <div className="flex flex-col gap-10 justify-evenly items-center lg:flex-row py-14 w-full lg:w-[80%] mx-auto">
       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start gap-3  font-semibold text-black text-2xl md:text-5xl py-10">
                <p data-aos="zoom-down" data-aos-duration="1000" className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>how we work</p>
                      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">A Comprehensive</h1>
                      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Directory For Your</h1>
                      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Health Care.</h1>
                   </div>

                   <div className="w-full lg:w-1/2 p-10">
                     <p data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className="text-slate-500">we are your trusted one-stop destination for all your healthcare needs. Our comprehensive directory is designed to provide you with easy access to a wide range of healthcare services and providers, ensuring that you and your family.</p>
                   </div>
       </div>

       <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">

       <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="flex flex-col justify-center items-center gap-5 text-black">
            <Image src={img9} alt="o"></Image>
            <h1 className="text-base font-semibold md:text-xl mb-5">Book An Appointment</h1>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="flex flex-col justify-center items-center gap-5 text-black">
            <Image src={img10} alt="o"></Image>
            <h1 className="text-base font-semibold md:text-xl mb-5">Conduct Checkup</h1>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" className="flex flex-col justify-center items-center gap-5 text-black">
            <Image src={img11} alt="o"></Image>
            <h1 className="text-base font-semibold md:text-xl mb-5">Perform Treatment</h1>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="flex flex-col justify-center items-center gap-5 text-black">
            <Image src={img12} alt="o"></Image>
            <h1 className="text-base font-semibold md:text-xl mb-5">Prescribe & Payment</h1>
        </div>
       </div>

   </section>

      {/* section 6 */}

      <section>

<div className="md:hero bg-[#fef9f6] pb-20 lg:pb-0 min-h-screen">
<div className="flex md:hero-content flex-col-reverse lg:flex-row px-3 gap-20 lg:gap-10">
   <div className="w-full mx-auto lg:w-1/2">
<Image data-aos="flip-right" data-aos-duration="2000" src={img13} className="w-full" alt='banner' ></Image>
</div>
{/* <img
src={banner}
className="max-w-sm rounded-lg shadow-2xl" /> */}
<div className='px-8 md:px-5 w-full  lg:w-1/2'>
<p data-aos="zoom-down" data-aos-duration="1000"  className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>faqs</p>
<h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-2xl md:text-5xl font-bold  mt-3">Consultations with</h1>
<h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-5xl font-bold  my-2">Qualified doctors.</h1>


<div className=" my-5 space-y-1">
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="collapse collapse-plus bg-transparent">
<input type="radio" className="text-xl" name="my-accordion-3"  />
  <div className="collapse-title text-xl font-semibold">Are telemedicine consultations available?</div>
  <div className="collapse-content">
    <p className="text-slate-400">Yes, we offer telemedicine consultations for certain medical conditions.</p>
  </div>
  
</div>
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="collapse collapse-plus bg-transparent">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-semibold">Do you accept health insurance?</div>
  <div className="collapse-content">
    <p className="text-slate-400">Yes, we accept most major health insurance plans.</p>
  </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="collapse collapse-plus bg-transparent">
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

   {/* testimonial */}
   <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="bg-[#07332f] w-full relative">

<div className="w-[90%] md:w-[80%] mx-auto py-20 text-white">
<p className='uppercase tracking-widest text-xl text-[#f29269] font-medium'>testimonial</p>
           <h1 className="text-4xl mb-5">What Patients Say About Us.</h1>
           
       

</div>


</section>


    {/* blog section */}

    <section className="bg-[#f6efec] h-auto pt-10">

    <div className="w-[90%] md:w-[80%] mx-auto pt-20 ">
           <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="000" className='uppercase tracking-widest text-xl mb-2 text-[#f29269] font-medium'>our blog</p>
           <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="text-4xl font-semibold mb-5">Lates News & Articles.</h1>
    </div>

   <div className="w-[100%] md:w-[90%] mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
       
  
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img14} className="rounded-md" alt="logo"></Image>
                      <h1>Best Medical Network Directory For Physicians & Clients</h1>
                      <p className="text-base text-slate-400">Hypertension, commonly known as high blood pressure, is a prevalent</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
                

                
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img15} className="rounded-md" alt="logo"></Image>
                      <h1>The Importance of Regular Health Checkups</h1>
                      <p className="text-base text-slate-400">This symptoms, causes, risk factors, diagnosis, treatment options strategies.</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
              

                
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className=" flex flex-col justify-center gap-3   text-black text-2xl font-normal p-10">
                <Image src={img16} className="rounded-md" alt="logo"></Image>
                      <h1>Managing Better Stress for Better Mental Health</h1>
                      <p className="text-base text-slate-400">These stories can provide valuable insights into living with a particular condition</p>
                      <button className="text-lg rounded-none bg-[#f7a58200] border-none text-[#ef885b] text-left">Read More</button>
                   </div>
                   
                
   </div>

    </section>

{/* parallax section */}

    <Parallex></Parallex>
    {/* <div className="h-40 w-full bg-[#1e4036] pt-5">
    <Spinner></Spinner>
    </div> */}
        </div>
    );
};

export default About;