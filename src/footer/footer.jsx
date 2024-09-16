import React, { useState, useEffect } from "react";

const footer = () => {


  return (
    <div>
   <div className=" relative">
<div className=" flex justify-between p-[25px] shadow-md border-[1px] border-gray-300">
    <div className=" flex flex-col gap-[80px]">
        <div className="w-[35%]">
<h1 className=" font-bold text-[25px]">NewsWorth</h1>
<p className=" text-gray-400 ">Newsworth is a platform to 
    connect journakist 
    (Cictizens,Stringers and Professionals)
     with Media Houses, We provide Content
      Certification, Content Copyrighr and 
      Marketplace to buy and sell stories</p>
    </div>
    <div>
    <div className=" flex gap-[20px] font-bold">

    <h1>Terms & Conditions</h1>
    <h1>Privacy Policy</h1>
    <h1>Help & FAQ</h1>
    </div>
    <div className="mt-[50px]">
    <p>© Circle Of Minds Innovation Pvt Ltd.</p>
</div>
</div>
    </div>
    <div className="flex flex-col  gap-[80px]">
    <div className=" flex flex-col gap-[20px]">
        <div className="flex flex-col">
<h1 className="text-[20px] font-bold">Contact Us</h1>
<p>Contact@newsworth.com</p>
</div>
<div className="flex  items-center gap-[20px]">
    <img src="src\assets\Images\footer\twitter.png" alt="" className="w-[20px] h-[20px]" />
    <img src="src\assets\Images\footer\facebook-app-symbol.png" alt="" className="w-[20px] h-[20px]"/>
    <img src="src\assets\Images\footer\instagram.png" alt="" className="w-[20px] h-[20px]"/>
    <img src="src\assets\Images\footer\youtube.png" alt="" className="w-[25px] h-[25px]"/>
</div>

    </div>
    <div>
    <p>Download our app to upload on the go and recevie paid video briefs from news organisations.</p>
</div>
</div>
</div>

   </div>
    </div>
  );
};

export default footer;
