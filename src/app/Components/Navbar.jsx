import Image from "next/image";
import logo from '../../../public/Screenshot 2024-08-19 162502.png'

const Navbar = () => {
    return (
        <div className="bg-[#07332f] w-full border-b-[1px] border-b-[#ffffff41] h-auto md:h-20 lg:h-auto fixed z-50">
            <div className="navbar bg-transparent w-[98%] md:w-[90%] mx-auto items-center flex py-3">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><Image src={logo} alt="logo" className="md:h-16 md:w-44 w-32 h-12"></Image></a>
  </div>
  <div className="flex-none mt-3">
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li className="font-light text-lg text-white"><a>Home</a></li>
      <li className="font-light text-lg text-white"><a>About Us</a></li>
      <li className="font-light text-lg text-white"><a>Services</a></li>
      <li className="font-light text-lg text-white"><a>Shop</a></li>
      <li className="font-light text-lg text-white mr-2"><a>Contact Us</a></li>
      <button className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
    </ul>

    {/* menubar */}
<div className="flex lg:hidden ">

    <label className="btn p-2 bg-[#f89970] text-white hover:bg-[#f1804f] border-none swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  {/* hamburger icon */}
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  {/* close icon */}
  <svg
    className="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>
</label>
</div>

  </div>
</div>
        </div>
    );
};

export default Navbar;