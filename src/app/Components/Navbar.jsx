import Image from "next/image";
import logo from '../../../public/Screenshot 2024-08-19 162502.png'

const Navbar = () => {
    return (
        <div className="bg-[#07332f] w-full border-b-[1px] border-b-[#ffffff41] h-auto md:h-20 lg:h-auto fixed z-50">
            <div className="navbar bg-transparent w-[98%] md:w-[90%] mx-auto items-center flex py-3">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><Image src={logo} alt="logo" className="lg::h-16 lg::w-44 md:h-14 md:w-40 w-32 h-12"></Image></a>
  </div>
  <div className="flex-none mt-3">
    <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li className="font-light text-lg text-white"><a>Home</a></li>
      <li className="font-light text-lg text-white"><a>About Us</a></li>
      <li className="font-light text-lg text-white"><a>Services</a></li>
      <li className="font-light text-lg text-white"><a>Shop</a></li>
      <li className="font-light text-lg text-white mr-2"><a>Contact Us</a></li>
      <button className="relative btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] border-[#f7a582] hover:border-[#f7a582] group overflow-hidden">
      <span className="absolute inset-0 w-full h-full transition-transform transform scale-x-0 bg-[#fffffff3] group-hover:scale-x-100 origin-center duration-500 ease-out"></span>
        <span className="relative z-50 text-[#f7a582]">Book Appointment</span>
        </button>
    </ul>

    {/* menubar */}
<div className="flex lg:hidden ">


<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}

    <label htmlFor="my-drawer-4" className="btn drawer-button p-2 bg-[#f89970] text-white hover:bg-[#f1804f] border-none swap swap-rotate">
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
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#07332f] text-white min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li ><label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay  py-1 pl-[11px] w-9  rounded-full bg-[#f89970] text-xl">X</label></li>
      <li className="font-light text-lg text-white mt-6"><a>Home</a></li>
      <li className="font-light text-lg text-white"><a>About Us</a></li>
      <li className="font-light text-lg text-white"><a>Services</a></li>
      <li className="font-light text-lg text-white"><a>Shop</a></li>
      <li className="font-light text-lg text-white mr-2 mb-3"><a>Contact Us</a></li>
      <button className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
    </ul>
  </div>
</div>

    
</div>

  </div>
</div>
        </div>
    );
};

export default Navbar;