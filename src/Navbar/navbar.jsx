import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Images/dashboard/NEWS WORTH FINAL.png"
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


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
<div>
<img  src={logo} alt="NewsWorth" width={150} height={50} className="transition-transform duration-300 ease-in-out  cursor-pointer object-cover" onClick={handlehome}/>
</div>
<div className="flex text-[16px] gap-[45px]  font-bold justify-center items-center cursor-pointer ">

<div className="p-2 px-4 bg-blue-300 rounded-full shadow-sm">
<NavLink
to="/"
          onClick={() => handleNavigation('/')}
          className={` transition-transform duration-300 ease-in-out transform hover:scale-105 text-white hover:text-red-500 ${
            activePage === '/' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Home
        </NavLink>
</div>
{/* <div className=" p-2">
    <h1 onClick={handleContactUs} className="underline hover:text-blue-400">Contact Us</h1>
</div> */}

<div className="p-2 px-4 bg-blue-300 rounded-full shadow-sm">
        <NavLink
          to="/signup"
          onClick={() => handleNavigation('signup')}
          className={` transition-transform duration-300 ease-in-out transform hover:scale-105 text-white hover:text-red-500 ${
            activePage === 'signup' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Sign Up
        </NavLink>
      </div>

      <div className="p-2 px-4 bg-blue-300 rounded-full shadow-sm">
        <NavLink
          to="/login"
          onClick={() => handleNavigation('login')}
          className={` transition-transform duration-300 ease-in-out transform hover:scale-105 text-white hover:text-red-600 ${
            activePage === 'login' ? 'font-extrabold' : 'font-normal'
          }`}
        >
          Login
        </NavLink>
      </div>
</div>
    </div>
  );
};

export default navbar;
