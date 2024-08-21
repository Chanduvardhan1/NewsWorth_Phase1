import React, { useState } from "react";
import logo from "../../images/home/NewsWorth.png"
import Navbar from "../Navbar/navbar";
import home from '../../images/home/NW-image.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setshowOTP] = useState(false);
  const [resendAvailable1, setResendAvailable1] = useState(true);
  const [showOtpField1, setShowOtpField1] = useState(false);

  const [loginMethod, setLoginMethod] = useState('email');
  const [verify, setVerify] = useState(false);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
  const navigate = useNavigate();
 
  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin= () => {
    navigate('/login')
   };
  return (
    <>
   <Navbar/>
   <main className="flex justify-between  px-5">
   
    <div>
      <img src={home} alt="" width={500}  height={500} className="hover:duration-300 hover:scale-105 "/>
    </div>
{!showRegistrationSuccess && (


    <div className="pr-[10px]">
      <div  className="flex text-[30px] font-extrabold justify-center items-center pb-5">
        <h1>Sign Up</h1>
      </div>
    <div className=" bg-white rounded-[28px] shadow-lg p-7 pb-10 border-solid border-[1px]">
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
<div className="flex flex-col gap-[10px] pt-[10px]"> 

<TextField
                          id="Name"
                          label="Name"
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
                               <img src="images\home\signup\user.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
      <TextField
       id="Email" 
       label="Email" 
       variant="outlined"

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
          endAdornment: (
            <div
              
            >
                               <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />

            </div>
          ),
          autoComplete: "off",
        }} />

{showOTP &&(
     <TextField
     id="Verification Code" 
     label="Verification Code" 
     variant="outlined"

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
        endAdornment: (
          <div
            
          >
        <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" />

          </div>
        ),
        autoComplete: "off",
      }} />
)}
  </div>
    )}
     {loginMethod === 'mobile' && (
  <div className="flex flex-col gap-[10px] pt-[20px]"> 

<TextField
                          id="Name"
                          label="Name"
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
                               <img src="images\home\signup\user.png" alt="" className="w-[25px] text-blue-800" />
                              </div>
                            ),
                            autoComplete: "off",
                          }}
                        />
      <TextField
       id="Mobile" 
       label="Mobile" 
       variant="outlined"

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
          endAdornment: (
            <div
              
            >
<img src="images\home\signup\iphone.png" alt=""  className="w-[20px] text-blue-800" />
            </div>
          ),
          autoComplete: "off",
        }} />

{showOTP &&(
     <TextField
     id="Verification Code" 
     label="Verification Code" 
     variant="outlined"

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
        endAdornment: (
          <div
            
          >
        <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" />

          </div>
        ),
        autoComplete: "off",
      }} />
)}
  </div>
      )}
      {loginMethod === 'gmail' && (
  <div className="flex flex-col gap-[10px] pt-[20px]"> 

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
  <div className="flex justify-center  text-blue-500 gap-[5px]  items-center">
    <input type="checkbox" className="w-[15px] h-[15px] border-solid border-[1px] flex " />

  <p >I agree with the <span>terms and conditions</span> </p>
  </div>
  <div className="flex justify-end space-x-4">
  {!showOtpField1 ? (
    <div className="flex justify-end ">
    <button className="primary-btn">Send OTP</button>
  </div>
    
  ) : (
    <div className="flex justify-end space-x-4">
      <span className={`text-sm ${resendAvailable1 ? 'text-gray-500' : 'text-red-500'}`}>
        {resendAvailable1 ? "" : ` (${formatTime(resendTime1)})`}
      </span>
      <button
       
        disabled={!resendAvailable1}
        className={`px-4 py-2 rounded ${resendAvailable1 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        {resendAvailable1 ? "Resend OTP" : "Resend OTP"}
      </button>
    </div>
  )}
</div>

 
  <div className=" flex justify-center items-center pt-[10px]">
    <p>Already having an account? <span className=" text-blue-500 cursor-pointer" onClick={handleLogin}>Login</span></p>
  </div>
{ verify &&(

  <div className="flex justify-center ">
    <button className="primary-btn">Verify</button>
  </div>
)}
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
)}
{showRegistrationSuccess&& (
    <div className="pr-[10px]">
    <div  className="flex text-[30px] font-extrabold justify-center items-center pb-5">
      <h1>Register</h1>
    </div>
 <div className=" flex flex-col gap-[15px]">
 <div className=" flex gap-3">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    required

                    InputProps={{
                      style: {             
                        width: "120px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}

                  />

                  <TextField
                    id="middleName"
                    label="Middle Name"
                    variant="outlined"
                   
                   
                
                    InputProps={{
                      style: {
                        width: "120px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    required                 
                 
                    InputProps={{
                      style: {
                        width: "120px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}
                    name="last_name"
                  />
                </div>
                <div className="flex justify-between">
                <TextField
                    type="date"
                    label="Date of birth"
                    required
                    focused
                    variant="outlined"      
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",                     
                      },
                      autoComplete: "off",
                 
                    }}
                    name="date_of_birth"
                  />
                   <TextField
                    id="Gender"
                    label="Gender"
                    variant="outlined"
                   
                   
                
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}
                  />
                </div>
                <div className="flex justify-between">
                <TextField
                    // type="date"
                    label="User Type"
                    required
                  
                    variant="outlined"      
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",                     
                      },
                      autoComplete: "off",
                 
                    }}
                   
                  />
                   <TextField
                    id="Mobile"
                    label="Mobile"
                    variant="outlined"
                   
                   
                
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      endAdornment: (
                        <div
                          
                        >
            <img src="images\home\signup\iphone.png" alt=""  className="w-[20px] text-blue-800" />
                        </div>
                      ),
                      autoComplete: "off",
                    }}
                  />
                </div>
                <div className="flex justify-between">
                <TextField
                    // type="date"
                    label="Email"
                    required
                  
                    variant="outlined"      
                    InputProps={{
                      style: {
                        width: "380px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",                     
                      },
                      endAdornment: (
                        <div
                          
                        >
                      <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
            
                        </div>
                      ),
                      autoComplete: "off",
                 
                    }}
                   
                  />
                  
                </div>
                <div className="flex justify-between">
                <TextField
                    // type="date"
                    label="Password"
                    required
                  
                    variant="outlined"      
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",                     
                      },
                      endAdornment:showPassword !== undefined && (
                        <div
                        onClick={togglePasswordVisibility}
                          
                        >
                                {showPassword ? <FaEye/> : <FaEyeSlash />}
            
                        </div>
                      ),
                      autoComplete: "off",
                 
                    }}
                   
                  />
                   <TextField
                    id="Confirm Password"
                    label="Confirm Password"
                    variant="outlined"
                   
                   
                
                    InputProps={{
                      style: {
                        width: "185px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      endAdornment:showPassword !== undefined && (
                        <div
                        onClick={togglePasswordVisibility}
                          
                        >
                                {showPassword ? <FaEye/> : <FaEyeSlash />}
            
                        </div>
                      ),
                      autoComplete: "off",
                    }}
                  />
                </div>
                <div>
                <div className="flex justify-end ">
    <button className="primary-btn">Register</button>
  </div>
                </div>
 </div>
  </div>
)}
   </main>

    </>
  
  );
};

export default signup;
