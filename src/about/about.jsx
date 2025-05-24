import React from 'react';
import Navbar from "../Navbar/navbar";
import Image from '../assets/Images/about/Main_Image.png';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <main className="h-[500px] w-full overflow-hidden flex px-[5%]">
          {/* Left content */}
          <div className="w-[50%] flex flex-col items-center justify-center ">
            <div className="flex flex-col font-semibold">
            <p className="text-[#245FB1] text-[30px] ">About</p>
            <p className=" text-[30px] mb-4">Engaging enough for the <br/>general public to justify reporting</p>
            <p className="text-[18px]">Please register to be a part of the website.</p>
            </div>
          </div>

          {/* Right image */}
          <div className="w-[50%] flex justify-end items-center">
            <img src={Image} alt="News Image" className="max-w-[525px]" />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
