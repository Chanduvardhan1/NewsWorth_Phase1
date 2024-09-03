import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Images/home/NewsWorth.png"


const navbar = () => {
  const navigate = useNavigate();
  const handlehome= () => {
   navigate('/')
  };
 
  const handleSignup= () => {
     navigate('/signup')
   };
   const handleLogin= () => {
    navigate('/login')
  };

  return (
    <div className=" flex justify-between p-5 px-[5%]">
<div>
<img src={logo} alt="NewsWorth" width={100} height={100} className="transition-transform duration-300 ease-in-out  cursor-pointer " onClick={handlehome}/>
</div>
<div className="flex text-[16px] gap-[45px]  font-bold justify-center items-center cursor-pointer ">

<div className="p-2">
    <h1 onClick={handlehome}  className=" underline transition-transform duration-300 ease-in-out transform hover:scale-105 blue-color hover:red-color ">Home</h1>
</div>
{/* <div className=" p-2">
    <h1 onClick={handleContactUs} className="underline hover:text-blue-400">Contact Us</h1>
</div> */}
<div className=" p-2">
<h1 onClick={handleSignup} className="underline transition-transform duration-300 ease-in-out transform red-color  hover:blue-color  hover:scale-105">Sign Up</h1>
</div>
<div className=" p-2">
<h1 onClick={handleLogin} className=" underline text-sky-500 hover:text-purple-600 transition-transform duration-300 ease-in-out transform hover:scale-105">Login</h1>
</div>
</div>
    </div>
  );
};

export default navbar;
