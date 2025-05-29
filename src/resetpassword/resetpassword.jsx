import React, { useState,useEffect } from "react";
import logo from "../assets/Images/home/NewsWorth.png"
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import Image from '../assets/Images/about/Main_Image.png';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate,useLocation } from "react-router-dom";
import forgotPasswordIcon from "../../src/assets/Images/login/back1.png";
import { URL } from "../url";

const resetpassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
const [showforgat ,setForgat] = useState(true)
const [resendTime1, setResendTime1] = useState(600);
const [resendAvailable1, setResendAvailable1] = useState(true);
const [showOtpField1, setShowOtpField1] = useState(false);
const [resendAvailable, setResendAvailable] = useState(false);
const [resendTime, setResendTime] = useState(600);

// ----------*resetpassword*---------

const location = useLocation();
const userId = location.state?.userId;
const email = location.state?.email;

const [otp, setOtp] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmNewPassword, setConfirmNewPassword] = useState('');
const [showError, setShowError] = useState('');


const handleResetPassword = async () => {
  if (!otp) {
    setShowError('Please fill in the OTP');
    
    return;
  }
  if (!newPassword || !confirmNewPassword) {
    setShowError('Please enter new password and confirm password.');
    return;
  }
  // Check if the new password and confirm new password match
  if (newPassword !== confirmNewPassword) {
    setShowError('New password and confirm password do not match.');
    return;
  }
  try {
    const response = await fetch(`${URL}/resetpassword`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        otp: otp,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response:', data);

    if (data.response === 'success') {
      navigate('/login');  // Redirect to login page after successful password reset
    }else if(data.response ==="fail") {
      setShowError( data.response_message)
    }
     else {
      setShowError('Failed to reset password. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
const handleOtpChange = (e) => {
  const value = e.target.value;
  const regex = /^[0-9]*$/; // Regular expression to match only numbers

  // Check if the value contains only numbers and is not longer than 6 digits
  if (regex.test(value) && value.length <= 6) {
    setOtp(value);
  }
};
useEffect(() => {
    if (!resendAvailable) {
      const timer = setInterval(() => {
        setResendTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setResendAvailable(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [resendAvailable]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleForgotPassword = async () => {
    setResendAvailable(false);
    setResendTime1(5 * 60);
    try {
      const response = await fetch(`${URL}/forgotpassword`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Forogot_option: 'email',
          email_or_mobile: email,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Response:', data);
  
      if (data.response === 'success' ) {
        setResendAvailable(false);
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  };

 
  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCancel= () => {
    navigate('/login')
   };
   const showForgat = () =>{
    setForgat(true)
   };
   const showForgatback = () =>{
    setForgat(false)
   };
  return (
    <>
   <Navbar/>
   <main className="w-full h-[500px]  flex px-10">
   
  
<div className="w-[50%]">
   <div className="pr-[10px] flex flex-col justify-center items-center">
 
     <div className="flex flex-col gap-[10px]  ">
   
<div className="flex flex-col gap-[15px] pt-[20px]"> 

<div className="  bg-[#245FB1] rounded-[28px] shadow-lg p-7 pb-5 border-solid border-[1px] ">
<div>
    <h1 className=" flex text-[25px] text-white font-bold mt-[-12px] mb-4 justify-center items-center blue-color ">Reset Password</h1>
</div>
<div className="flex flex-col  gap-[10px]">
  <div>
<TextField
                       id="email"
                       label="Email"
                       required
                       value={email}
                       variant="outlined"   
                       InputLabelProps={{
    shrink: email ? true : false,
    style: {
      color: email ? 'white' : 'black',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      top: email ? '-10px' : '10%',
      left: email ? '10px' : '12px',
      transform: email ? 'translateY(-50%)' : 'translateY(50%)',
      fontWeight: email ? 'semibold' : 'normal',
    }
  }}                    
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
                           <div className=" text-blue-400">
                            <img src="images\home\login\envelope.png" alt="" className="w-[25px] text-blue-800" />
                           </div>
                         ),
                         autoComplete: "off",
                       }}
                     />
                     </div>
                     <div>
                      {!showOtpField1 && (
   
    <div className="flex justify-end items-center space-x-4">
      <span className={`text-sm ${resendAvailable ? 'text-white' : 'text-white'}`}>
        {resendAvailable ? "" : ` (${formatTime(resendTime)})`}
      </span>
      <button
       onChangeCapture={handleForgotPassword}
        disabled={!resendAvailable}
        className={`${resendAvailable ? 'bg-white text-[#245FB1] font-bold  p-[5px] px-4 rounded-[50px]' : 'bg-white text-[#245FB1] font-bold cursor-not-allowed p-[5px] px-4 rounded-[50px]'}`}
      >
        {resendAvailable ? "Resend OTP" : "Resend OTP"}
      </button>
    </div>
  )}
  </div>
  <div className="mb-4">
                      <TextField
     id="Verification Code" 
     label="Verification Code" 
     variant="outlined"
     required
     value={otp}
     onChange={handleOtpChange}
InputLabelProps={{
    shrink: otp ? true : false,
    style: {
      color: otp ? 'white' : 'black',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      top: otp ? '-10px' : '10%',
      left: otp ? '10px' : '12px',
      transform: otp ? 'translateY(-50%)' : 'translateY(50%)',
      fontWeight: otp ? 'semibold' : 'normal',
    }
  }}
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
        <img src="src\assets\Images\signup\password.png" alt="" className="w-[25px] text-blue-800" />

          </div>
        ),
        autoComplete: "off",
      }} />
       </div>
       <div className="mb-4">
   <TextField
    id="password" 
    label="New Password" 
    variant="outlined"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    type={showPassword ? "text" : "password"}
    required
    InputLabelProps={{
    shrink: newPassword ? true : false,
    style: {
      color: newPassword ? 'white' : 'black',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      top: newPassword ? '-10px' : '10%',
      left: newPassword ? '10px' : '12px',
      transform: newPassword ? 'translateY(-50%)' : 'translateY(50%)',
      fontWeight: newPassword ? 'semibold' : 'normal',
    }
  }}
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
          className=" text-[#a7a3ff] cursor-pointer" 
         >
                 {showPassword ? <FaEye/> : <FaEyeSlash />}

         </div>
       ),
       autoComplete: "off",
       
     }}
     sx={{
                           // Disable autofill background
                            width: { xs: '100%', lg: '325px' },

    // Outermost box
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      borderRadius: '10px',
      height: '50px',
      paddingRight: '10px', // for icon spacing
      '& fieldset': {
        borderColor: 'transparent', // or your custom color
      },
      '&:hover fieldset': {
        borderColor: '#aaa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4a90e2',
        //  borderColor: '#ccc', // Keep the same color on focus
        // borderWidth: '1px', // Keep the same thickness on focus
      },
    },

    // Actual input element
    '& input': {
      backgroundColor: 'white',
      fontSize: '14px',
      padding: '10px',
      borderRadius:'10px',
    },
                           '& input:-webkit-autofill': {
                             WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                             WebkitTextFillColor: '#000', // Text color when autofilled
                           },
                         }} />
     </div>
     <div>
 <TextField
    id="Confirm Password" 
    label="Confirm Password" 
    variant="outlined"
    value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
    type={showPassword ? "text" : "password"}
    required
    InputLabelProps={{
    shrink: confirmNewPassword ? true : false,
    style: {
      color: confirmNewPassword ? 'white' : 'black',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      top: confirmNewPassword ? '-10px' : '10%',
      left: confirmNewPassword ? '10px' : '12px',
      transform: confirmNewPassword ? 'translateY(-50%)' : 'translateY(50%)',
      fontWeight: confirmNewPassword ? 'semibold' : 'normal',
    }
  }}
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
         className=" text-[#a7a3ff] cursor-pointer" 
         >
                 {showPassword ? <FaEye/> : <FaEyeSlash />}

         </div>
       ),
       autoComplete: "off",
     }} />
     </div>
     <div>{showError && <p className="text-white w-[315px] justify-center flex">{showError}</p>}
     </div>
  <div>
    <div className=" flex justify-between">
        <button className="p-[5px] px-4 rounded-[50px] text-[#245FB1] font-bold  bg-white " onClick={handleCancel}>
Cancel
        </button>
        <button className="p-[5px] px-4 rounded-[50px] text-[#245FB1] font-bold  bg-white " onClick={handleResetPassword} >
Submit
        </button>
    </div>
    </div>
  
   
</div>
</div>
</div>

 
 

</div>

 </div>
 </div>
 <div className="w-[50%] flex justify-center items-center">
  
            <img src={Image} alt="News Image" className="max-w-[525px]" />

 </div>


   </main>

    </>
  
  );
};

export default resetpassword;
