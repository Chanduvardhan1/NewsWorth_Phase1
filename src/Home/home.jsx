import React from "react";
import logo from "../../images/home/NewsWorth.png"
import Navbar from "../Navbar/navbar";
import home from '../../images/home/NW-image.png'

const Home = () => {
  return (
    <>
   <Navbar/>
   <main className="flex justify-between mx-5 px-5">
    <div className="flex flex-col justify-center gap-3">
      <div className=" text-[20px] font-bold items-start justify-start">
        <h1>Feture</h1>
      </div>
     
        <div className="flex flex-col gap-5">
         <li>This is the <span className=" text-orange-500 font-bold">Fist</span> point</li>
          <li>This is the <span className=" text-blue-500 font-bold">Second</span> point</li>
          <li>This is the <span className=" text-green-500 font-bold">Third</span> point</li>
          <li>This is the <span className=" text-yellow-500 font-bold">Fourth</span> point</li>
          <li>This is the <span className=" text-red-500 font-bold">Fifth</span> point</li>

         
        </div>
        
      
    </div>
    <div>
      <img src={home} alt="" width={500}  height={500}/>
    </div>
   </main>
   <div className="flex justify-end pr-10 gap-1">
    <p>Contact US</p>|
    <p>11111 visited</p>|
    <p>© CopyRight cricle of IND PVTLTD</p>

   </div>
    </>
  
  );
};

export default Home;
