import React, { useState } from "react";
import logo from "../../images/home/NewsWorth.png"
import Navbar from "../Navbar/navbar";
import home from '../../images/home/NW-image.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignup= () => {
    navigate('/signup')
   };
  return (
    <>
   <Navbar/>
   <main className="flex justify-between  px-5">
   
    <div>
      <img src={home} alt="" width={500}  height={500}/>
    </div>
    <div className="pr-[10px]">
      <div  className="flex text-[30px] font-extrabold justify-center items-center pb-5">
        <h1>Login</h1>
      </div>
    <div className=" bg-white rounded-[28px] shadow-lg p-7 pb-5 border-solid border-[1px]">
        <div className="flex flex-col gap-[10px]  ">
        <div className="relative flex justify-between w-full font-bold">
      <div
        className={`cursor-pointer flex-1 text-center py-2 ${loginMethod === 'email' ? '' : ''}`}
        onClick={() => handleLoginMethodChange('email')}
      >
        Email
      </div>
      <div
        className={`cursor-pointer flex-1 text-center py-2 ${loginMethod === 'mobile' ? '' : ''}`}
        onClick={() => handleLoginMethodChange('mobile')}
      >
        Mobile
      </div>
      {/* <div
        className={`cursor-pointer flex-1 text-center py-2 ${loginMethod === 'gmail' ? '' : ''}`}
        onClick={() => handleLoginMethodChange('gmail')}
      >
        Gmail
      </div> */}
      <div
        className={`absolute bottom-0 h-[2px] w-1/2 transition-all duration-300 ${
          loginMethod === 'mobile' ? 'left-1/2 bg-blue-500' : 'left-0 bg-red-500'
        }`}
      />
    </div>
    {loginMethod === 'email' && (
<div className="flex flex-col gap-[10px] pt-[20px]"> 

<TextField
                          id="email"
                          label="Email"
                          required
                        
                          variant="outlined"
                     
                          
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              gap:"5px"
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                               <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
      <TextField
       id="password" 
       label="Password" 
       variant="outlined"
       type={showPassword ? "text" : "password"}

       required
        InputProps={{
          style: {
            backgroundSize: "19px 16px",
            backgroundPosition: "295px center",
            backgroundRepeat: "no-repeat",
            width: "325px",
            height: "50px",
            backgroundColor: "white",
            border: "none",
            fontFamily: "poppins",
            paddingLeft: "0px",
            borderRadius: "10px",
            gap:"5px"
          },
          endAdornment:showPassword !== undefined && (
            <div
            onClick={togglePasswordVisibility}
              
            >
                    {showPassword ? <FaEye/> : <FaEyeSlash />}

            </div>
          ),
          autoComplete: "off",
        }} />


  </div>
    )}
     {loginMethod === 'mobile' && (
  <div className="flex flex-col gap-[10px] pt-[20px]"> 

<TextField
                          id="Mobile"
                          label="Mobile"
                          required
                        
                          variant="outlined"
                     
                          
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              gap:"5px"
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                               <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
      <TextField
       id="password" 
       label="Password" 
       variant="outlined"
       type={showPassword ? "text" : "password"}

       required
        InputProps={{
          style: {
            backgroundSize: "19px 16px",
            backgroundPosition: "295px center",
            backgroundRepeat: "no-repeat",
            width: "325px",
            height: "50px",
            backgroundColor: "white",
            border: "none",
            fontFamily: "poppins",
            paddingLeft: "0px",
            borderRadius: "10px",
            gap:"5px"
          },
          endAdornment:showPassword !== undefined && (
            <div
            onClick={togglePasswordVisibility}
              
            >
                    {showPassword ? <FaEye/> : <FaEyeSlash />}

            </div>
          ),
          autoComplete: "off",
        }} />


  </div>
      )}
      {loginMethod === 'gmail' && (
  <div className="flex flex-col gap-[10px] pt-[10px]"> 

<TextField
                          id="Gmail"
                          label="Gmail"
                          required
                        
                          variant="outlined"
                     
                          
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "295px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              backgroundColor: "white",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                              gap:"5px"
                            },
                            endAdornment: (
                              <div className=" text-blue-400"
                               
                                
                              >
                               <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
      <TextField
       id="password" 
       label="Password" 
       variant="outlined"
       type={showPassword ? "text" : "password"}

       required
        InputProps={{
          style: {
            backgroundSize: "19px 16px",
            backgroundPosition: "295px center",
            backgroundRepeat: "no-repeat",
            width: "325px",
            height: "50px",
            backgroundColor: "white",
            border: "none",
            fontFamily: "poppins",
            paddingLeft: "0px",
            borderRadius: "10px",
            gap:"5px"
          },
          endAdornment:showPassword !== undefined && (
            <div
            onClick={togglePasswordVisibility}
              
            >
                    {showPassword ? <FaEye/> : <FaEyeSlash />}

            </div>
          ),
          autoComplete: "off",
        }} />


  </div>
      )}
  <div className="flex justify-end items-end text-blue-500">

  <p >Forgot Password?</p>
  </div>
  <div className=" flex justify-center items-center pt-[10px]">
    <p>Don't have an account yet? Please <span className=" text-blue-500 cursor-pointer" onClick={handleSignup}>Sign Up</span></p>
  </div>
  <div className="flex justify-center ">
    <button className="primary-btn">Login</button>
  </div>
  <div className=" flex justify-between gap-5 items-center">
    <div className=" w-full h-[1px] border-solid border-[1px]"></div>
    <div>Or</div>
    <div className=" w-full h-[1px] border-solid border-[1px]"></div>
</div>
<div className="flex gap-[23%] cursor-pointer  transition-all hover:duration-300 hover:scale-105  bg-white  shadow-lg p-[8px] bor1der-solid border-[1px]">
    <img src="images\home\signup\google.png" alt=""  className=" w-[25px] h-[25px] flex justify-start items-start"/>
    <div className="flex justify-center ">Login With Google</div>
</div>
  </div>
    </div>
    </div>
   </main>

    </>
  
  );
};

export default login;
