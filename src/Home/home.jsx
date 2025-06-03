import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../src/assets/Images/home/background.png"
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import Image from'../assets/Images/about/Main_Image.png'
import { useNavigate } from "react-router-dom";
import Home1 from "./home1";
import { URL } from "../url";
import City from '../../src/city/city';

const Home = () => {
  const navigate = useNavigate();
  const [visitorsCount, setVisitorsCount] = useState(0); // Initialize state

  const handleContactUs= () => {
    navigate('/contactus')
  };
  const fetchVisitorsCount = async () => {
    try {
      const response = await fetch(`${URL}/visitors_count`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
      const data = await response.json();
      if (data.response === 'success') {
        setVisitorsCount(data.visitors_count); // Update state with the visitors count
      }
    } catch (error) {
      console.error('Error fetching visitors count:', error);
    }
  };

  useEffect(() => {
    fetchVisitorsCount();
  }, []); 

  return (
    <>
    <City/>
   <Navbar/>
   <div className="relative ">
   <main className="h-[500px] w-full overflow-hidden flex px-[5%]">
    <div className="w-[50%] flex flex-col items-center justify-center ">
            <div className="flex flex-col font-semibold">
            <p className="text-[#245FB1] text-[30px] ">Newsworth</p>
            <p className=" text-[30px] mb-4">Engaging enough for the <br/>general public to justify reporting</p>
            <p className="text-[18px] mb-4">Please register to be a part of the website.</p>
            </div>
            <button className=' items-center p-2 w-40 font-bold bg-[#245FB1] text-white rounded-md ml-[-300px]'><Link to="/signup">Register Now</Link></button>
          </div>
          
    {/* <div className="w-[50%] flex flex-col  items-center justify-center">
    <div className="flex flex-col  gap-3"> */}
      {/* <div className=" text-[32px] font-bold items-start justify-start blue-color">
        <h1>Feature</h1>
      </div> */}






            {/* <div className="flex flex-col gap-5">

    < Home1/>
    </div> */}
     {/* <div className="flex flex-col gap-5">
  <p className="animate-slide-left opacity-0"> 
    Unfiltered stories, unmatched quality.<span className=" text-orange-500 font-bold"></span>
  </p>
  <p className="animate-slide-right opacity-0"> 
    Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> 
  </p>
  <p className="animate-slide-left opacity-0"> 
    Capture content using the "<span className="blue-color font-bold">NewsWorth Eye</span>" mobile app, with cloud storage.
  </p>
  <p className="animate-slide-right opacity-0"> 
    Access the "<span className=" text-[#ce003d] font-bold">NewsWorth Wall</span>" web portal, featuring a content marketplace.
  </p>
  <p className="animate-slide-left opacity-0"> 
    Set your own pricing for your content.<span className="red-color font-bold"></span>
  </p>
  <p className="animate-slide-right opacity-0"> 
    Certify, protect, and monetize your content on NewsWorth.<span className=" text-blue-500 font-bold"></span> 
  </p>
</div> */}

        
      
    {/* </div>
    </div> */}
    <div  className="w-[50%] flex justify-end items-center">
      <img src={Image} alt=""  className=" max-w-[525px]"/>
    </div>
   </main>
   <div className="fixed bottom-0 right-0 ">


   <div className="flex justify-end pr-[65px] gap-1 ">
    <p onClick={handleContactUs} className=" cursor-pointer text-[14px] text-[#245FB1] ">Contact Us</p>|
    <p className='text-[14px]'>{visitorsCount} Visited</p>|
    <p className='text-[14px]'>©2024, Circle Of Minds Innovation Pvt Ltd.</p>

   </div>
   </div>
   </div>
    </>
  
  );
};

export default Home;
