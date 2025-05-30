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
            <p className="text-[#245FB1] text-[30px] mt-[-20px]">WHO ARE <br/>THE NEWSWORTH ?</p>
            <p style={{ width: '100%', height: '2px', backgroundColor: '#245FB1', marginBottom:'5px'}}></p>
            {/* <p style={{ width: '77%', height: '2px', backgroundColor: '#245FB1', marginBottom:'6px',marginLeft:'150px'}}></p> */}
            <p className=" text-[15px] mb-4 text-black text-justify font-medium">At NewsWorth, we connect people with media companies for real-time news distribution. Our platform enables faster delivery of news by allowing people to upload photos, and videos for immediate purchase by media outlets.
By empowering individuals to share their news, we help media outlets access fresh, relevant content quickly. People are also compensated for their work, ensuring fair payment for the content they provide.</p>
            {/* <p className="text-[15px] font-medium">Please register to be a part of the website.</p> */}
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
