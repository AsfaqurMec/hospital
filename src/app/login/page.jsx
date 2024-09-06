"use client";
import Image from "next/image";
import Link from "next/link";
import React  from "react";
 import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
 // const session = useSession();



  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log(resp);
    
  };

  return (
      <div className="container bg-[#f7ede9] px-5 lg:px-24 mx-auto py-24">
        <div className="grid grid-cols-1 gap-12 items-center">
          
          <div className="border-2 bg-[#07332f] p-12">
            <h6 className="text-3xl font-semibold text-[#f29269] text-center mb-12">
              Sign In
            </h6>
            <form onSubmit={handleLogin} action="">
              <label className="text-white" htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="your email"
                className="w-full px-3 py-2 border-b-[#e2b29d] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-gray-400"
              />
              <br /> <br />
              <label className="text-white" htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                placeholder="your password"
                className="w-full px-3 py-2 border-b-[#e2b29d] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-gray-400"
              />
              <br />
              <button
                type="submit"
                className="w-full btn btn-primary bg-[#a25737] mt-12 text-lg"
              >
                Sign In
              </button>
            </form>
            <div>
           
             
              <h6 className="my-12 text-center text-white">
                not have account ?{" "}
                <Link className="text-[#f29269] font-semibold" href={"/signup"}>
                  Sign Up
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
