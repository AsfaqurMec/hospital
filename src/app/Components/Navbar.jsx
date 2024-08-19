import Image from "next/image";
import logo from '../../../public/Screenshot 2024-08-19 162502.png'

const Navbar = () => {
    return (
        <div className="bg-[#07332f] w-full border-b-[1px] border-b-[#ffffff41]">
            <div className="navbar bg-transparent w-[90%] mx-auto items-center flex py-3 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><Image src={logo} alt="logo" className="h-16 w-44"></Image></a>
  </div>
  <div className="flex-none mt-2">
    <ul className="menu menu-horizontal px-1">
      <li className="font-medium text-xl text-white"><a>Home</a></li>
      <li className="font-medium text-xl text-white"><a>About Us</a></li>
      <li className="font-medium text-xl text-white"><a>Services</a></li>
      <li className="font-medium text-xl text-white"><a>Shop</a></li>
      <li className="font-medium text-xl text-white mr-2"><a>Contact Us</a></li>
      <button className="btn bg-transparent font-semibold text-xl rounded-3xl border-2 text-[#f7a582] btn-outline hover:bg-left">Book Appointment</button>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;