import React, { useState,useContext } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import { AuthContext } from "../Authcontext/AuthContext.jsx"


import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import forgotPasswordIcon from "../../src/assets/Images/login/back1.png";
import { URL } from "../url";

const login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Email");
  const [showPassword, setShowPassword] = useState(false);
  const [showforgat ,setForgat] = useState(false)
  // --------*forgotPassword*-----
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('')
const { login } =  useContext(AuthContext);

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignup= () => {
    navigate('/signup')
   };
   const showForgat = () =>{
    setForgat(true)
   };
   const showForgatback = () =>{
    setForgat(false)
   };

   const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

 
   
  const handleLogin = async () => {
    if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password");
      return;
    }
    try {
      const platform = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? "mobile" // If any of the identifiers are found, return 'Mobile'.
      : "Web";
      const tokenResponse = await fetch(`${URL}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          accept: 'application/json',
        },
        body: new URLSearchParams({
          username: email, // Use the fixed username
          password: password, // Use the fixed password
        }),
      });
  
      
  
      const tokenData = await tokenResponse.json();
      if (!tokenResponse.ok) {
        if (tokenData.detail === "Incorrect username or password" || 
            tokenData.detail === "Incorrect email/phone number/User ID or password") {
          setErrorMessage("Incorrect email or password. Please try again.");
        } else {
          setErrorMessage("Failed to retrieve access token. Please try again.");
        }
        return; 
      }
      const accessToken = tokenData.access_token;
  
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          login_option: userType,
          email_or_mobile_or_user_id: email,
          password: password,
          platform:platform,
        }),
      });
  
      const data = await response.json();
  
      if (data.response === 'success') {
        const userId = data.data[0].user_id; // Get the user_id from the response
        const userName = data.data[0].user_name;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        localStorage.setItem('password', password);
        login(accessToken);
        navigate('/dashboard', { state: { user_id: userId,user_name:userName } });
      } else if (data.detail === "Incorrect username or password") {
        setErrorMessage("Incorrect username or password. Please try again.");
      } else {
        setErrorMessage(data.response_message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error here (e.g., show an error message to the user)
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch(`${URL}/forgotpassword`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Forogot_option: userType,
          email_or_mobile: userType === "Email" ? email : email,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Response:', data);
  
      if (data.response === 'success' && data.response_message === "OTP Sent Successfully, Please reset your password") {
        navigate('/resetpassword', { state: { userId: data.data[0].user_id, email } });
      } else if (data.response === 'success' && data.response_message === "OTP Succuessfully Sent") {
        navigate('/resetmobile', { state: { userId: data.data[0].user_id,email  } });
      } else {
        setErrorMessage(data.response_message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <>
    <Navbar/>
    <div className="relative">
       <main className="w-full h-auto lg:h-[500px] flex flex-col lg:flex-row px-4 lg:px-[5%]">
          <div className="w-full lg:w-[50%]">
             {!showforgat && (
                <div className="pr-0 lg:pr-[10px]">
                   <div className="flex text-[24px] lg:text-[30px] font-extrabold justify-center items-center pb-5 blue-color">
                      <h1>Login</h1>
                   </div>
                   <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col gap-[10px] bg-white rounded-[28px] shadow-lg p-5 lg:p-7 pb-5 border-solid border-[1px]">
                      <div className="relative flex justify-between w-full font-bold">
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'email' ? '' : ''}`}
        onClick={() => setUserType('Email')}
      >
        Email
      </div>
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'mobile' ? '' : ''}`}
        onClick={() => setUserType('Mobile')}
      >
        Mobile
      </div>
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'gmail' ? '' : ''}`}
        onClick={() => setUserType('User Id')}
      >
        User ID
      </div>
      <div
    className={`absolute bottom-0 h-[2px] w-1/3 transition-all duration-300 ${
      userType === 'Email' ? 'left-0 bg-red-500' : 
      userType === 'Mobile' ? 'left-1/3 bg-blue-500' : 
      'left-2/3 bg-green-500'
    }`}
  />
    </div>
                         <div className="flex flex-col gap-[20px] pt-[10px]">
             
                            {/* <FormControl variant="outlined" required>
                               <InputLabel id="gender-label">Login Option</InputLabel>
                               <Select
                                  labelId="Login Option"
                                  value={userType}
                                  onChange={handleUserTypeChange}
                                  label="User Type"
                                  className="w-full lg:w-[325px] h-[50px] "
                                  name="UserType"
                                  style={{ height: "50px", borderRadius: "10px" }}
                               >
                                  <MenuItem value=""></MenuItem>
                                  <MenuItem value="Email">Email</MenuItem>
                                  <MenuItem value="User Id">User Id</MenuItem>
                                  <MenuItem value="Mobile">Mobile</MenuItem>
                               </Select>
                            </FormControl> */}
                            {userType === "Email" && (
                         <TextField
                         id="email"
                         label="Email"
                         required
                         style={{ height: "50px", borderRadius: "10px" }}
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         variant="outlined"
                         InputLabelProps={{
                           style: {
                             color: '#666666', // Reduced label color
                             fontSize: '14px', // Reduced label font size
                           },
                         }}
                         InputProps={{
                           style: {
                             fontSize: '14px',
                             height: "50px",
                             borderRadius: "10px",
                           },
                           className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                           endAdornment: (
                             <div className="text-blue-400">
                               <img src="src/assets/Images/login/envelope.png" alt="" className="w-[25px] text-blue-800" />
                             </div>
                           ),
                           autoComplete: "off",
                         }}
                         sx={{
                           // Disable autofill background
                           '& input:-webkit-autofill': {
                             WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                             WebkitTextFillColor: '#000', // Text color when autofilled
                           },
                         }}
                       />
                            )}
                            {userType === "User Id" && (
                            <TextField
                               id="User id"
                               label="User ID"
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               variant="outlined"
                               InputLabelProps={{
                                style: {
                                  color: '#666666', // Reduced label color
                                  fontSize: '14px', // Reduced label font size
                                },
                              }}
                               InputProps={{
                                style: {
                                  fontSize: '14px',
                                  height: "50px",
                                  borderRadius: "10px",
                                },
                                  className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                                  endAdornment: (
                                  <div className="text-blue-400">
                                     <img src="images/home/login/envelope.png" alt="" className="w-[25px] text-blue-800" />
                                  </div>
                                  ),
                                  autoComplete: "off",
                               }}
                               sx={{
                                // Disable autofill background
                                '& input:-webkit-autofill': {
                                  WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                                  WebkitTextFillColor: '#000', // Text color when autofilled
                                },
                              }}
                            />
                            )}
                            {userType === "Mobile" && (
                            <TextField
                               id="Mobile"
                               label="Mobile"
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               variant="outlined"
                               InputLabelProps={{
                                style: {
                                  color: '#666666', // Reduced label color
                                  fontSize: '14px', // Reduced label font size
                                },
                              }}
                               InputProps={{
                                style: {
                                  fontSize: '14px',
                                  height: "50px",
                                  borderRadius: "10px",
                                },
                                  className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                                  endAdornment: (
                                  <div className="text-blue-400">
                                     <img src="src/assets/Images/signup/iphone.png" alt="" className="w-[20px] text-blue-800" />
                                  </div>
                                  ),
                                  autoComplete: "off",
                               }}
                               sx={{
                                // Disable autofill background
                                '& input:-webkit-autofill': {
                                  WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                                  WebkitTextFillColor: '#000', // Text color when autofilled
                                },
                              }}
                            />
                            
                            )}
                            <TextField
                               id="password" 
                               label="Password" 
                               variant="outlined"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               type={showPassword ? "text" : "password"}
                               required
                               InputLabelProps={{
                                style: {
                                  color: '#666666', // Reduced label color
                                  fontSize: '14px', // Reduced label font size
                                },
                              }}
                               InputProps={{
                                style: {
                                  fontSize: '14px', 
                                  height: "50px",
                                  borderRadius: "10px",
                                },
                                  className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                                  endAdornment:showPassword !== undefined && (
                                  <div
                                     onClick={togglePasswordVisibility}
                                     className="text-[#a7a3ff] cursor-pointer"
                                  >
                                     {showPassword ? <FaEye/> : <FaEyeSlash />}
                                  </div>
                                  ),
                                  autoComplete: "off",
                               }}
                               sx={{
                                // Disable autofill background
                                '& input:-webkit-autofill': {
                                  WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                                  WebkitTextFillColor: '#000', // Text color when autofilled
                                },
                              }}
                            />
                         </div>
                         <div className="flex justify-end items-end text-blue-500">
                            <p onClick={showForgat} className="cursor-pointer">Forgot Password?</p>
                         </div>
                         <div className="flex justify-center items-center pt-[10px]">
                            <p>Don't have an account yet? Please <span className="text-blue-500 cursor-pointer" onClick={handleSignup}>Sign Up</span></p>
                         </div>
                         <div className="flex justify-center">
                            <button className="primary-btn" onClick={handleLogin}>Login</button>
                         </div>
                         {errorMessage && <p className="text-red-500 w-[315px] justify-center flex">{errorMessage}</p>}
                      </div>
                   </div>
                </div>
             )}
             {showforgat && (
             <div className="flex w-full h-[500px] justify-center items-center">
                <div className="flex flex-col justify-center gap-[10px]">
                   <div className="flex gap-[10px]">
                      <img
                         src={forgotPasswordIcon}
                         alt="Go Back"
                         width={12}
                         height={17}
                         className="cursor-pointer"
                         onClick={showForgatback} 
                      />
                      <p onClick={showForgatback} className="text-[25px] cursor-pointer font-bold red-color">Go Back</p>
                   </div>
                   <div className="text-[30px] font-bold text-[#1c3c9ff5]">
                      <h1>Forgot Password</h1>
                   </div>
                   <p className="font-bold"> Reset using {userType === "Email" && (<span>email</span>)} {userType === "Mobile" && (<span>mobile</span>)}  {userType === "User Id" && (<span>User id</span>)}</p>
                   {userType === "Email"&& (
                   <div>
                      <TextField
                         id="email"
                         label="Email"
                         required
                         variant="outlined"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         InputLabelProps={{
                          style: {
                            color: '#666666', // Reduced label color
                            fontSize: '14px', // Reduced label font size
                          },
                        }}
                         InputProps={{
                          style: {
                            fontSize: '14px', 
                            height: "50px",
                            borderRadius: "10px",
                          },
                            className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                            endAdornment: (
                            <div className="text-blue-400">
                               <img src="images/home/login/envelope.png" alt="" className="w-[25px] text-blue-800" />
                            </div>
                            ),
                            autoComplete: "off",
                         }}
                         sx={{
                          // Disable autofill background
                          '& input:-webkit-autofill': {
                            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                            WebkitTextFillColor: '#000', // Text color when autofilled
                          },
                        }}
                      />
                   </div>
                   )}
                   {userType === "Mobile" && (
                   <div>
                      <TextField
                         id="Mobile Number"
                         label="Mobile Number"
                         required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         variant="outlined"
                         InputLabelProps={{
                          style: {
                            color: '#666666', // Reduced label color
                            fontSize: '14px', // Reduced label font size
                          },
                        }}
                         InputProps={{
                          style: {
                            fontSize: '14px',
                            height: "50px",
                            borderRadius: "10px",
                          },
                            className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                            endAdornment: (
                            <div className="text-blue-400">
                               <img src="images/home/login/envelope.png" alt="" className="w-[25px] text-blue-800" />
                            </div>
                            ),
                            autoComplete: "off",
                         }}
                         sx={{
                          // Disable autofill background
                          '& input:-webkit-autofill': {
                            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                            WebkitTextFillColor: '#000', // Text color when autofilled
                          },
                        }}
                      />
                   </div>
                   )}
                   {userType === "User Id" && (
                   <div>
                      <TextField
                         id="User id"
                         label="User id"
                         required
                         variant="outlined"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         InputLabelProps={{
                          style: {
                            color: '#666666', // Reduced label color
                            fontSize: '14px', // Reduced label font size
                          },
                        }}
                         InputProps={{
                          style: {
                            fontSize: '14px',
                            height: "50px",
                            borderRadius: "10px",
                          },
                            className: "w-full lg:w-[325px] h-[50px] bg-white rounded-[10px] gap-[5px]",
                            endAdornment: (
                            <div className="text-blue-400">
                               <img src="images/home/login/envelope.png" alt="" className="w-[25px] text-blue-800" />
                            </div>
                            ),
                            autoComplete: "off",
                         }}
                         sx={{
                          // Disable autofill background
                          '& input:-webkit-autofill': {
                            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                            WebkitTextFillColor: '#000', // Text color when autofilled
                          },
                        }}
                      />
                   </div>
                   )}
                   <div className="flex justify-end">
                      <p className="primary-btn cursor-pointer" onClick={handleForgotPassword}>Send OTP</p>
                   </div>
                </div>
             </div>
             )}
          </div>
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
             <img src={home} alt="" className="w-[300px] lg:w-[500px] h-auto hover:duration-300 hover:scale-105" />
          </div>
       </main>
    </div>

    

   
       
 </>
 
  
  );
};

export default login;
