import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Images/home/newsworthlogo.png"
import { NavLink } from 'react-router-dom';


const navbar = () => {
  const [activePage, setActivePage] = useState('home'); // default is 'home'

  const navigate = useNavigate();
  // const handlehome= () => {
  //  navigate('/')
  //  setActive("/");

  // };
 
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
<img  src={logo} alt="NewsWorth" width={100} height={100} className="transition-transform duration-300 ease-in-out  cursor-pointer " />
</div>
<div className="flex text-[16px] gap-[45px]  font-bold justify-center items-center cursor-pointer ">

<div className="p-2">
<NavLink
to="/"
          onClick={() => handleNavigation('/')}
          className={`underline transition-transform duration-300 ease-in-out transform hover:scale-105 text-blue-500 hover:text-red-500 ${
            activePage === '/' ? 'font-bold' : 'font-normal'
          }`}
        >
          Home
        </NavLink>
</div>
{/* <div className=" p-2">
    <h1 onClick={handleContactUs} className="underline hover:text-blue-400">Contact Us</h1>
</div> */}

<div className="p-2">
        <NavLink
          to="/signup"
          onClick={() => handleNavigation('signup')}
          className={`underline transition-transform duration-300 ease-in-out transform hover:scale-105 text-red-500 hover:text-blue-500 ${
            activePage === 'signup' ? 'font-bold' : 'font-normal'
          }`}
        >
          Sign Up
        </NavLink>
      </div>

      <div className="p-2">
        <NavLink
          to="/login"
          onClick={() => handleNavigation('login')}
          className={`underline transition-transform duration-300 ease-in-out transform hover:scale-105 text-sky-500 hover:text-purple-600 ${
            activePage === 'login' ? 'font-bold' : 'font-normal'
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
