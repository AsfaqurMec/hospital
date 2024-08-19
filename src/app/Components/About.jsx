/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import img1 from '../../../public/Screenshot 2024-08-19 223339.png'
import img2 from '../../../public/Screenshot 2024-08-19 223353.png'
import banner from '../../../public/Screenshot 2024-08-19 022627.png'

const About = () => {
    return (
        <div>
           <section className="my-20">

            <div className="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div className="h-56 w-full lg:w-1/3 bg-[#f7a582]">
                <div className="h-[78.5%] flex flex-col justify-center font-semibold text-white text-3xl">
                   <h1 className="pl-5 pt-5">Don't Hesitate To</h1>
                   <h1 className="pl-5 ">Contact us</h1>
                   </div>
                   <button className="btn rounded-none w-full bg-black border-none text-white">Make Appointment</button>
                </div>
                <div className=" h-[450px] lg:h-56 w-full lg:w-2/3 flex flex-col lg:flex-row bg-[#07332f] p-3">
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



        </div>
    );
};

export default About;