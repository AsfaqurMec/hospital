
import Image from 'next/image';
import banner from '../../../public/Screenshot 2024-08-19 022530.png'


const Banner = () => {
    return (
        <div>
       <div className="hero bg-[#07332f] pb-20 lg:pb-0 min-h-screen pt-20">
  <div className="hero-content flex-col lg:flex-row-reverse px-3 gap-20 lg:gap-0">
    <Image src={banner} alt='banner' className="w-[90%] mx-auto md:max-w-xl"></Image>
    {/* <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className='px-10 md:px-5'>
        <p className='uppercase tracking-widest text-xl text-white font-thin'>we tack care of your health</p>
      <h1 className="text-5xl font-bold text-[#f7a582] mt-3">We Are Providing</h1>
      <h1 className="text-5xl font-bold text-[#f7a582] my-2">Best & Affordable</h1>
      <h1 className="text-5xl font-bold text-[#f7a582]">Health Care.</h1>
      <p className="py-6 text-xl text-slate-400">
      our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
      </p>
      <div className='flex gap-5'>
      <button className="btn bg-transparent font-semibold text-xl rounded-xl border-2 text-[#f7a582] btn-outline hover:bg-left">Read More</button>
      <button className="btn bg-transparent font-semibold text-xl text-[#ffffffd7] border-none">Watch video</button>
      </div>
    </div>
  </div>
</div>     
        </div>
    );
};

export default Banner;