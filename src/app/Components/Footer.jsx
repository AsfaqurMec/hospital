import React from 'react';
import logo from '../../../public/Screenshot 2024-08-19 162502.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className=' bg-[#07332f] '>
           <footer className="w-[90%] mx-auto lg:grid-flow-col grid-flow-row footer bg-[#07332f]  text-white p-10">
  <aside>
    {/* <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg> */}
    <Image src={logo} alt='logo'></Image>
    <p className='mt-3 text-base text-slate-300'>
    Our family-centered approach to healthcare <br /> ensures that each member of your family <br /> receives
      
      personalized attention.
    </p>
  </aside>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Quick Links</h6>
    <a className="link link-hover text-base font-semibold">Home</a>
    <a className="link link-hover text-base font-semibold">About Us</a>
    <a className="link link-hover text-base font-semibold">Doctors</a>
    <a className="link link-hover text-base font-semibold">Services</a>
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Contact Details</h6>
    <a className="link link-hover text-base font-semibold">Dhanmondi Road No.7, Dhaka</a>
    <a className="link link-hover text-base font-semibold">Healthcare@gmail.com</a>
    <a className="link link-hover text-base font-semibold">+01956230265</a>
    <a className="link link-hover text-base font-semibold">8 AM - 5 PM , Monday - Saturday</a>
  </nav>
  
  <form className='hidden md:block'>
    <h6 className="footer-title text-xl mb-3 text-[#eb966e] opacity-100">Newsletter</h6>
    <h1 className='text-lg font-semibold'>Subscribe To Our Newsletter</h1>
    <p className='text-base text-slate-300 my-1'>Stay informed and never miss out on the <br /> latest news, health tips.</p>
    <fieldset className="form-control w-80 ">
    
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input  join-item bg-transparent btn-outline border-[#eb966e] border-2" />
        <button className="btn bg-[#eb966e] border-[#eb966e] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer> 
<footer className="footer footer-center text-white p-4">
  <aside>
    <p className='text-xl mb-7'>Copyright © {new Date().getFullYear()} - All right reserved by <strong className='text-[#eb966e]'>MediPro</strong> Ltd</p>
  </aside>
</footer>
        </div>
    );
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default Footer;