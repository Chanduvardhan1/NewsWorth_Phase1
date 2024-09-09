import React from "react";
import logo from "../../src/assets/Images/home/background.png"
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/IMG_20240906_161755.jpg'
import { useNavigate } from "react-router-dom";

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
    <div className="w-[50%] flex flex-col pt-[50px] items-center">
    <div className="flex flex-col  gap-3">
      {/* <div className=" text-[32px] font-bold items-start justify-start blue-color">
        <h1>Feature</h1>
      </div> */}
     
        <div className="flex flex-col gap-5 ">
         <li> Unfiltered stories, unmatched quality.<span className=" text-orange-500 font-bold"></span> </li>
          <li>Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> </li>
          <li>Capture content using the "<span className="blue-color font-bold">NewsWorth Eye</span>" mobile app, with cloud storage.</li>
          <li> Access the "<span className=" text-[#ce003d] font-bold">NewsWorth Wall</span>"  web portal, featuring a content marketplace.</li>
          <li> Set your own pricing for your content.<span className="red-color font-bold"></span> </li>
          <li>Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> </li>

         
        </div>
        
      
    </div>
    </div>
    <div  className="w-[50%] flex justify-end items-center">
      <img src={home} alt="" width={500}  height={500} className="hover:duration-300 hover:scale-105 "/>
    </div>
   </main>
   <div className="fixed bottom-0 right-0 ">


   <div className="flex justify-end pr-10 gap-1">
    <p onClick={handleContactUs} className=" cursor-pointer font-bold blue-color hover:red-color">Contact Us</p>|
    <p>11111 Visited</p>|
    <p>Circle Of Minds Innovation Pvt Ltd.</p>

   </div>
   </div>
   </div>
    </>
  
  );
};

export default Home;
