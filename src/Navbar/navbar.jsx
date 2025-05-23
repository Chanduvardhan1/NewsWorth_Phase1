import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Images/dashboard/newlogo.NewsWorth.jpg"
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Haze } from 'lucide-react';

const navbar = () => {
  const [activePage, setActivePage] = useState('home'); 
 
  const navigate = useNavigate();
  const handlehome= () => {
   navigate('/');

  };
 
  // const handleSignup= () => {
  //    navigate('/signup')
  //    setActive("signup");

  //  };
  //  const handleLogin= () => {
  //   navigate('/login')
  //   setActive("login");

  // };
  const handleNavigation = (page) => {
    setActivePage(page); // sets the clicked page as active
  };
  return (
    
    <div className=" flex justify-between p-5 px-[5%]">
      {/* <p><Haze/></p> */}
<div>
<img  src={logo} alt="NewsWorth" width={150} height={50} className="transition-transform duration-300 ease-in-out  cursor-pointer object-cover" onClick={handlehome}/>
</div>
<div className="flex text-[16px] gap-[45px]  font-bold justify-center items-center cursor-pointer ">

<div className="p-2 px-4 group">
<NavLink
to="/"
          onClick={() => handleNavigation('/')}
          className={` relative text-black  pb-1 ${
            activePage === '/' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Home
<span className="absolute left-0 bottom-0 h-[3px] w-0 bg-red-500 transition-[width] duration-500 ease-in-out group-hover:w-full"></span>
        </NavLink>
</div>
{/* <div className=" p-2">
    <h1 onClick={handleContactUs} className="underline hover:text-blue-400">Contact Us</h1>
</div> */}
<div className="p-2 px-4 group ">
        <NavLink
          to="/about"
          onClick={() => handleNavigation('signup')}
          className={` relative text-black  pb-1 ${
            activePage === 'signup' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          About
<span className="absolute left-0 bottom-0 h-[3px] w-0 bg-red-500 transition-[width] duration-500 ease-in-out group-hover:w-full"></span>
        </NavLink>
      </div>

<div className="p-2 px-4 group">
        <NavLink
          to="/signup"
          onClick={() => handleNavigation('signup')}
          className={` relative text-black pb-1 ${
            activePage === 'signup' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Sign Up
<span className="absolute left-0 bottom-0 h-[3px] w-0 bg-red-500 transition-[width] duration-500 ease-in-out group-hover:w-full"></span>
        </NavLink>
      </div>

      <div className="p-2 px-4 group ">
        <NavLink
          to="/login"
          onClick={() => handleNavigation('login')}
          className={` relative text-black  pb-1 ${
            activePage === 'login' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Login
<span className="absolute left-0 bottom-0 h-[3px] w-0 bg-red-500 transition-[width] duration-500 ease-in-out group-hover:w-full"></span>

        </NavLink>
      </div>
</div>
    </div>
  );
};

export default navbar;
