import React from "react";
import "./comp.css"

const Newsletter = () => {
  return (
    <div className="bgc2 w-full py-16 text-[#000300] lg:px-4 sm:px-[10%]  ">
      <div className="justify-items-center bgc3 max-w-[1240px] mx-auto grid lg:grid-cols-3 shadow-2xl shadow-[#000300] border-solid border-8 border-[#000300]">
        <div className="lg:col-span-2 my-4 w-[75%]">
          <h1 className="mt-[2.5%] ml-[8%] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want weekly tips and tricks?
          </h1>
          <p className="ml-[9%] font-bold">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="lg:mr-[65%] lg:w-[100%] sm:w-[75%]">
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center w-full">
            <input
              className="p-3 flex w-full rounded-md text-black font-bold"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#000300] hover:bg-[#adb5bd] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify Me!</button>
          </div>
          <div className="border-solid border-4 border-[#000300]">
          <p className="font-bold">We care about the protection of your data. Read our {''}</p><p><span className="text-[#adb5bd] font-bold">Privacy Policy.</span></p>
          </div>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
