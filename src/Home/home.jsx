import React from "react";
import logo from "../../src/assets/Images/home/background.png"
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import { useNavigate } from "react-router-dom";
import Home1 from "./home1";

const Home = () => {
  const navigate = useNavigate();

  const handleContactUs= () => {
    navigate('/contactus')
  };
  return (
    <>
   <Navbar/>
   <div className="relative ">
   <main className="h-[500px] w-full overflow-hidden  flex px-[5%]">
    <div className="w-[50%] flex flex-col  items-center justify-center">
    <div className="flex flex-col  gap-3">
      {/* <div className=" text-[32px] font-bold items-start justify-start blue-color">
        <h1>Feature</h1>
      </div> */}
<div className="flex flex-col gap-5">
  {/* First line - Each word animates with delays */}
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '0s' }}>Unfiltered</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '0.5s' }}>stories,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '1s' }}>unmatched</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '1.5s' }}>quality.</span>
  </li>

  {/* Second line - Appears after the first line is fully visible */}
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_3s_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '3.5s' }}>Certify,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '4s' }}>protect,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '4.5s' }}>and</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '5s' }}>monetize</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '5.5s' }}>your</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '6s' }}>content</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '6.5s' }}>on</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '7s' }}>NewsWorth.</span>
  </li>

  {/* Third line - Appears after the second line is fully visible */}
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_7.5s_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '8s' }}>Capture</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '8.5s' }}>content</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '9s' }}>using</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '9.5s' }}>the</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '10s' }}>"<span className="blue-color font-bold">NewsWorth Eye</span>"</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '10.5s' }}>mobile</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '11s' }}>app,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '11.5s' }}>with</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '12s' }}>cloud</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '12.5s' }}>storage.</span>
  </li>

  {/* Fourth line */}
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_12s_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '11.5s' }}>Access</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '12s' }}>the</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '12.5s' }}>"<span className="red-color font-bold">NewsWorth Wall</span>"</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '13s' }}>web</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '13.5s' }}>portal,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '14s' }}>featuring</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '14.5s' }}>a</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '15s' }}>content marketplace.</span>
  </li>

  {/* Fifth line */}
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_14.5s_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '15s' }}>Set</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '15.5s' }}>your</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '16s' }}>own</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '16.5s' }}>pricing</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '17s' }}>for</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '17.5s' }}>your</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '18s' }}>content.</span>
  </li>
  <li className="opacity-0 animate-[fadeIn_3s_ease-out_16.5s_forwards]">
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '8s' }}>Certify,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '8.5s' }}>protect,</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '9s' }}>and</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '9.5s' }}>monetize</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '10s' }}>your</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '10.5s' }}>content</span>
    <span className="inline-block animate-slide-in-right mr-1" style={{ animationDelay: '11s' }}>on</span>
    <span className="inline-block animate-slide-in-right" style={{ animationDelay: '11.5s' }}>NewsWorth.</span>

  </li>
</div>





            {/* <div className="flex flex-col gap-5">

    < Home1/>
    </div> */}
     {/* <div className="flex flex-col gap-5">
  <li className="animate-slide-left opacity-0"> 
    Unfiltered stories, unmatched quality.<span className=" text-orange-500 font-bold"></span>
  </li>
  <li className="animate-slide-right opacity-0"> 
    Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> 
  </li>
  <li className="animate-slide-left opacity-0"> 
    Capture content using the "<span className="blue-color font-bold">NewsWorth Eye</span>" mobile app, with cloud storage.
  </li>
  <li className="animate-slide-right opacity-0"> 
    Access the "<span className=" text-[#ce003d] font-bold">NewsWorth Wall</span>" web portal, featuring a content marketplace.
  </li>
  <li className="animate-slide-left opacity-0"> 
    Set your own pricing for your content.<span className="red-color font-bold"></span>
  </li>
  <li className="animate-slide-right opacity-0"> 
    Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> 
  </li>
</div> */}

        
      
    </div>
    </div>
    <div  className="w-[50%] flex justify-end items-center">
      <img src={home} alt="" width={500}  height={500} className="hover:duration-300 hover:scale-105 "/>
    </div>
   </main>
   <div className="fixed bottom-0 right-0 ">


   <div className="flex justify-end pr-10 gap-1">
    <p onClick={handleContactUs} className=" cursor-pointer font-bold blue-color hover:red-color">Contact Us</p>|
    <p>0 Visited</p>|
    <p>©2024, Circle Of Minds Innovation Pvt Ltd.</p>

   </div>
   </div>
   </div>
    </>
  
  );
};

export default Home;
