"use client";
// import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("https://hospital-mu-six.vercel.app/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      toast.success("SignUp Successfully");
      event.target.reset();
    }else {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div className="container  px-5 lg:px-24 mx-auto py-24">
      <div className="grid grid-cols-1 gap-12 items-center">
       
        <div className="border-2 bg-[#07332f] p-12">
          <h6 className="text-3xl font-semibold text-[#f29269] text-center mb-12">
            Sign Up
          </h6>
          <form onSubmit={handleSignUp} action="">
            <label className="text-white" htmlFor="email">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="w-full px-3 py-2 border-b-[#e2b29d] rounded-md border-b-2 focus:border-b-2 focus:border-b-[#e2b29d] focus:outline-none bg-transparent text-gray-400"
            />
            <br /> <br />
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
              className="w-full btn btn-primary bg-[#a25737] mt-12 text-lg border-none"
            >
              Sign Up
            </button>
          </form>
          <div>
           
            <h6 className="my-12 text-center text-white">
              Already have account ?{" "}
              <Link className="text-[#f29269] font-semibold" href={"/login"}>
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUpPage;
