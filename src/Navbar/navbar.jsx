import React from "react";
import logo from "../../images/home/NewsWorth.png"
import { useNavigate } from "react-router-dom";


const navbar = () => {
  const navigate = useNavigate();
  const handlehome= () => {
   navigate('/')
  };
  const handleContactUs= () => {
    navigate('/contactus')
  };
  const handleSignup= () => {
     navigate('/signup')
   };
   const handleLogin= () => {
    navigate('/login')
  };

  return (
    <div className=" flex justify-between p-5 ">
<div>
<img src={logo} alt="NewsWorth" />
</div>
<div className="flex text-[16px] gap-[5px]  font-bold justify-center items-center cursor-pointer ">

<div className="p-2">
    <h1 onClick={handlehome}  className="primary-btn">Home</h1>
</div>
<div className=" p-2">
    <h1 onClick={handleContactUs} className="primary-btn">Contact Us</h1>
</div>
<div className=" p-2">
<h1 onClick={handleSignup} className="primary-btn">Sign Up</h1>
</div>
<div className=" p-2">
<h1 onClick={handleLogin} className="primary-btn">Login</h1>
</div>

</div>
    </div>
  );
};

export default navbar;
