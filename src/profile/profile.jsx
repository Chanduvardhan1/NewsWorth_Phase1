import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/background.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { URL } from "../url";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setshowOTP] = useState(false);
  const [showOTP1, setshowOTP1] = useState(false);
  const [resendAvailable1, setResendAvailable1] = useState(true);
  const [showOtpField1, setShowOtpField1] = useState(false);
  const [resendAvailable2, setResendAvailable2] = useState(true);
  const [showOtpField2, setShowOtpField2] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const [verify, setVerify] = useState(false);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
  const [showRegistr, setShowRegistr] = useState(true);

  const navigate = useNavigate();
 
  const [userName, setUserName] = useState('');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [dob, setDob] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [resendTime1, setResendTime1] = useState(10 * 60);
  const [resendTime2, setResendTime2] = useState(10 * 60);

  const [mobileOTP, setMobileOTP] = useState('');
  const [emailOTP, setEmailOTP] = useState('');


// ----------register--------
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');

  const [orgname, setOrgname] = useState('');
  const [orgnumber, setOrgnumber] = useState('');
  const [gstnumber, setGstnumber] = useState('');

  const [pincode, setPincode] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
const [location , setLocation] = useState('')
const [countryname , setCountryname] = useState('')
const [address ,setAddress] = useState('')
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("");
const [message, setMessage] = useState('');
const [selectedUserType, setSelectedUserType] = useState("");
const [userType, setUserType] = useState([]);

const [locationDetails, setLocationDetails] = useState([]);
const [selectedCity, setSelectedCity] = useState('');
const [selectedDistrict, setSelectedDistrict] = useState('')
const [uniqueDistricts, setUniqueDistricts] = useState([]);





// const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     if (!isChecked) {
//       setErrorMessage('');
//     }
//   };
  const validateName = (userName) => {
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces
    return nameRegex.test(userName);
  };
  const handleMobileChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setMobile(inputValue);
    }
  };


const handleEmailChange = (e) => {
  const value = e.target.value.toLowerCase(); // Convert input to lowercase
  setEmail(value);
};

 
  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin= () => {
    navigate('/login')
   };

const showdropdwon = () =>{
  setShowRegistrationSuccess(true)
}













  
  const [address1, setAddress1] = useState({});

   

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleUserType = (event) => {
    setUserType(event.target.value);
  };
  const handleemailOTPChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/; // Regular expression to match only numbers
  
    // Check if the value contains only numbers and is not longer than 6 digits
    if (regex.test(value) && value.length <= 6) {
      setEmailOTP(value);
    }
  };
  const handlemobileOTPChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/; // Regular expression to match only numbers
  
    // Check if the value contains only numbers and is not longer than 6 digits
    if (regex.test(value) && value.length <= 6) {
      setMobileOTP(value);
    }
  };
  return (
    <>
   <Navbar/>
   <ToastContainer />
   <main className="w-full h-[500px]  flex px-10">
   
   

    <div className="w-[50%]">
      <div className=" flex flex-col gap-[20px] ">

    <div className="flex justify-center">
      <h1 className="blue-color font-bold text-[32px]">Registration</h1>
    </div>



  <div className="flex flex-col gap-[10px]">
    <div className=" flex gap-[5px] justify-center">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    InputProps={{
                      style: {             
                        
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
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                   
                
                    InputProps={{
                      style: {
                       
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
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    InputProps={{
                      style: {
                        
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}
                    name="last_name"
                  />
                </div>
                <div className=" flex gap-[5px] justify-center">
<TextField
      type="date"
      id="Date of Birth" 
      label="Date of Birth" 
      focused
      value={dob}
      onChange={(e) => setDob(e.target.value)} 
     variant="outlined"
     className="w-full  px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
      InputProps={{
        style: {
       
        
          height: "50px",
          borderRadius: "10px",
        },
        endAdornment: (
          <div
            
          >
        {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

          </div>
        ),
        autoComplete: "off",
      }} />
       <FormControl variant="outlined" required className="w-full mb-4">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            label="Gender"
            className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

            style={{
              
              height: "50px",
              borderRadius: "10px",
            }}
            name="gender"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
</div>
<div className=" flex gap-[5px] justify-center">
<TextField
     id="Country" 
     label="Country" 
     variant="outlined"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={country}
     onChange={(e) => setCountry(e.target.value)} 
      InputProps={{
        style: {
       
          
          height: "50px",
          borderRadius: "10px",
        },
        endAdornment: (
          <div
            
          >
        {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

          </div>
        ),
        autoComplete: "off",
      }} />
      
</div>
                <div className=" flex gap-[5px] justify-center items-center">
<TextField
     id="Mobile" 
     label="Mobile" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     variant="outlined"
     value={mobile}
     onChange={handleMobileChange}  
      InputProps={{
        style: {
       
          
          height: "50px",
          borderRadius: "10px",
        },
        endAdornment: (
          <div
            
          >
        <img src="src\assets\Images\signup\iphone.png" alt="" className="w-[18px] text-blue-800" />

          </div>
        ),
        autoComplete: "off",
      }} />
      <p>Or</p>
       <TextField
     id="Email" 
     label="Email" 
     variant="outlined"
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={email}
     onChange={handleEmailChange} 
      InputProps={{
        style: {
       
          
          height: "50px",
          borderRadius: "10px",
        },
        endAdornment: (
          <div
            
          >
        <img src="src\assets\Images\login\envelope.png" alt="" className="w-[25px] text-blue-800" />

          </div>
        ),
        autoComplete: "off",
      }} />

</div>

<div className="flex justify-between"> 
  <div className="">

   {message && <p className="text-red-500  w-[320px]">{message}</p>}
  </div>

   {!showOtpField1 ? (
    <div className="flex justify-end  ">
    <button className="primary-btn" onClick={sendOtp}>Send OTP</button>
  </div>
    
  ) : (
    <div className="flex justify-end space-x-4  items-center ">
      <span className={`text-sm ${resendAvailable1 ? 'text-gray-500' : 'text-red-500'}`}>
        {resendAvailable1 ? "" : ` (${formatTime(resendTime1)})`}
      </span>
      <button
       onClick={sendOtp}
        disabled={!resendAvailable1}
        className={`p-[5px] px-4 rounded-[50px] ${resendAvailable1 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
      >
        {resendAvailable1 ? "Resend OTP" : "Resend OTP"}
      </button>
    </div>
  )}
</div>
  {showOTP && (
  <div className=" flex gap-[5px] justify-center">
  <TextField
       id="Mobile OTP" 
       label="Mobile OTP" 
       variant="outlined"
       required
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       value={mobileOTP}
       onChange={handlemobileOTPChange}
        InputProps={{
          style: {
         
            
            height: "50px",
            borderRadius: "10px",
          },
          endAdornment: (
            <div
              
            >
          {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}
  
            </div>
          ),
          autoComplete: "off",
        }} />
         <TextField
       id="Email OTP" 
       label="Email OTP" 
       variant="outlined"
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       required
       value={emailOTP}
     onChange={handleemailOTPChange}
        InputProps={{
          style: {
         
           
            height: "50px",
            borderRadius: "10px",
          },
          endAdornment: (
            <div
              
            >
          {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}
  
            </div>
          ),
          autoComplete: "off",
        }} />
  </div>
  )}
{verify &&(
    <div className="flex justify-end  ">
    <button className="primary-btn" onClick={verifySignup}>Verify</button>
  </div>
)}
<div className=" flex gap-[5px] justify-center">
<TextField
     id="Password" 
     label="Password" 
     type={showPassword ? "text" : "password"}
     variant="outlined"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={password}
     onChange={(e) => setPassword(e.target.value)}
      InputProps={{
        style: {
       
         
          height: "50px",
          borderRadius: "10px",
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
       <TextField
     id="Confirm Password" 
     label="Confirm Password" 
     variant="outlined"
     type={showPassword ? "text" : "password"}
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={confirmPassword}
     onChange={(e) => setConfirmPassword(e.target.value)}
      InputProps={{
        style: {
          
          height: "50px",
          borderRadius: "10px",
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

{errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}


{showRegistr ?(
           <div className="flex justify-end">
           <button className="p-[5px] px-4 rounded-[50px] text-white font-bold  cursor-not-allowed bg-gray-500">Register</button>
         </div>

):(
  <div className="flex justify-end ">
           <button className="primary-btn" onClick={handleRegister}>Register</button>
         </div>
)}
  </div>



      
  
   
    </div>
  </div>

 <div  className="w-[50%] flex justify-center items-center">
      <img src={home} alt="" width={500}  height={500} className="hover:duration-300 hover:scale-105 "/>
    </div>
   </main>

    </>
  
  );
};

export default signup;
