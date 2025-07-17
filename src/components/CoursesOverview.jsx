import React from "react";
import { FaReact } from "react-icons/fa";
import ss1 from "../assets/s1.png";
import ss2 from "../assets/s2.png";
import ss3 from "../assets/s3.png";


const verticalText = "origin-center rotate-270 text-center w-max";

const CoursesOverview = () => {
  return (
    <section className="my-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[22px] text-gray-800 mb-0">Explore our classes and master trending skills!</p>
        <h2 className="font-bold text-3xl md:text-4xl mt-2 mb-10">
          Dive Into <span className="text-emerald-500">What's Hot Right Now!</span><img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png" alt="Fire" width={40}
            height={40}
            className="inline-block align-middle ml-2"
            style={{ verticalAlign: 'middle' }} />
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Main Card */}
          <div className="md:col-span-2 bg-[#c03943] bg-gradient-to-br from-[#c03943] to-[#e17055] rounded-3xl p-10 flex flex-col justify-between min-h-[380px] shadow-xl  transition-transform">
            <div className="flex text-white justify-end font-medium text-lg mb-6 opacity-90 cursor-pointer hover:text-black transition-colors">
              View all Courses <span className="ml-2">→</span>
            </div>
            <div className="flex items-center mb-10">
              <div className="w-14 h-14 rounded-xl bg-sky-500 flex items-center justify-center text-3xl mx-3 hover:rotate-[-8deg] transition-transform -translate-y-2 animate-bounce [animation-delay:0ms]">
                <FaReact />
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mx-3 hover:scale-110 hover:rotate-[-8deg] transition-transform translate-y-1 animate-bounce [animation-delay:200ms]">
                <img src={ss1} alt="" />
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mx-3 hover:scale-110 hover:rotate-[-8deg] transition-transform -translate-y-1 animate-bounce [animation-delay:400ms]">
                <img src={ss2} alt="" />
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mx-3 hover:scale-110 hover:rotate-[-8deg] transition-transform translate-y-2 animate-bounce [animation-delay:600ms]">
                <img src={ss3} alt="" />
              </div>
            </div>
            <div>
              <div className="flex items-center md:items-start md:flex-row flex-col gap-4">
                <div className="flex ">
                  <span className="text-[72px] text-white md:text-[120px] font-extrabold leading-none">23</span>
                  <span className="text-7xl text-white font-extrabold ml-1 align-top">+</span>
                </div>
                <div className="flex flex-col justify-center md:ml-6">
                  <span className="text-2xl text-white md:text-3xl font-bold">All Courses</span>
                  <span className="text-lg md:text-xl mt-2 text-white/90">courses you're powering through right now.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Side Card 1 */}
          <div className="bg-[#fbeaec] rounded-3xl p-6 relative min-h-[220px] shadow  transition-transform overflow-hidden">
            {/* Icon - top */}
           
            {/* Rotated text - absolutely centered */}
            <div className="absolute left-1/2 top-[10%] -translate-x-1/2">
              <div className={ verticalText + " flex flex-col "}>
                <div className="font-bold text-2xl md:text-3xl  text-red-600 max-w-2 mb-1">Upcoming Courses</div>
                <div className="text-xs md:text-lg text-start  text-red-600 max-w-[300px] opacity-80">exciting new courses waiting to boost your skills.</div>
              </div>
            </div>
            {/* Number - bottom */}
            <div className="font-extrabold  text-red-600 text-5xl md:text-8xl absolute left-1/2 -translate-x-1/2 bottom-6">05<span className="text-4xl font-extrabold ml-1 align-top">+</span></div>
          </div>
          {/* Side Card 2 */}
          <div className="bg-[#fbeaec] rounded-3xl p-6 relative min-h-[220px] shadow  transition-transform overflow-hidden">
            {/* Icon - top */}
           
            {/* Rotated text - absolutely centered */}
            <div className="absolute left-1/2 top-[10%] -translate-x-1/2">
              <div className={verticalText + " flex flex-col "}>
                <div className="font-bold text-red-600 text-2xl md:text-3xl max-w-2 mb-1">Ongoing Courses</div>
                <div className="text-lg  text-red-600 md:text-lg text-start max-w-[300px]">currently happening—don't miss out on the action!</div>
              </div>
            </div>
            {/* Number - bottom */}
            <div className="font-extrabold  text-red-600 text-4xl md:text-8xl absolute left-1/2 -translate-x-1/2 bottom-6">10<span className="text-4xl font-extrabold ml-1 align-top">+</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CoursesOverview; 