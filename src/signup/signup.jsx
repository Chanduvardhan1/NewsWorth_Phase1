import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/image.png'
import Image from'../assets/Images/about/Main_Image.png'
import info from '../../src/assets/Images/dashboard/info.png'
import City from '../../src/city/city';

import{Link} from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { URL } from "../url";
import { TextField, Select, MenuItem, FormControl, InputLabel,OutlinedInput } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(true);
  const [showRegistr, setShowRegistr] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());


  const navigate = useNavigate();
 
  const [userName, setUserName] = useState('');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [dob, setDob] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [resendTime1, setResendTime1] = useState(5 * 60);
  const [resendTime2, setResendTime2] = useState(5 * 60);

  const [mobileOTP, setMobileOTP] = useState('');
  const [emailOTP, setEmailOTP] = useState('');


// ----------register--------
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('India');

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
const [hideOtpButtons, setHideOtpButtons] = useState(false); // New state to control OTP buttons visibility
const [pincodeMessage, setPincodeMessage] = useState('');
const [success, setSuccess] = useState('');
const [isChecked1, setIsChecked1] = useState(false); 
const [showPassword1, setShowPassword1] = useState(false);
const [showreset, setResset] = useState(false);
const [showreset1, setResset1] = useState(false);

const [otpButtonEnabled, setOtpButtonEnabled] = useState(false);

const [isEditable, setIsEditable] = useState(true);
const [showMobileOTP, setShowMobileOTP] = useState(false);
  const [showEmailOTP, setShowEmailOTP] = useState(false);
//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const [error, setError] = useState(false);
const [error1, setError1] = useState(false);
const [error2, setError2] = useState(false);


const handleDateChange = (e) => {
  const selectedDate = dayjs(e.target.value);
  const currentDate = dayjs();
  const age = currentDate.diff(selectedDate, 'year');

  setDob(selectedDate.format('YYYY-MM-DD')); // Always update
  setError(age < 18);
};

// Set maximum date to 18 years ago
const maxDate = dayjs().subtract(18, 'year').format('YYYY-MM-DD');

const handleMobileChange = (e) => {
  const value = e.target.value.replace(/\D/g, "").slice(0, 10);


  // Regex to validate a 10-digit mobile number
  const mobileRegex = /^[0-9]{10}$/;

  // Update the mobile value
  setMobile(value);

  // Show an error if the entered value is not valid
  if (value && !mobileRegex.test(value)) {
    setError1("Mobile number is not valid.");
  } else if (value.length < 10){
    setError1("Mobile number must be exactly 10 digits.");

  }

  
    else {
    setError1(""); // Clear error if the number is valid
  }
};

const handleEmailChange = (e) => {
  const value = e.target.value.toLowerCase();


  // Regex to validate an email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setEmail(value);

  // Show an error if the entered email is not valid
  if (value && !emailRegex.test(value)) {
    setError2("Email is not valid.");
  } else {
    setError2(""); // Clear error if the email is valid
  }
};
useEffect(() => {
    let timer;
    if (resendTime1 > 0) {
      timer = setTimeout(() => {
        setResendTime1((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setResendAvailable1(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [resendTime1]);

  useEffect(() => {
    let timer;
    if (resendTime2 > 0) {
      timer = setTimeout(() => {
        setResendTime2((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setResendAvailable2(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [resendTime2]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

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
  // const handleMobileChange = (e) => {
  //   const inputValue = e.target.value;
  //   if (/^\d*$/.test(inputValue)) {
  //     setMobile(inputValue);
  //   }
  // };

//   const handleSendOTP = async () => {
//     let hasError = false;
   
//     setErrorMessage("");
  
//     if (userName.trim() === "" || email.trim() === "") {
//         setErrorMessage("Please enter all fields");
//       hasError = true;
//     } else if (!validateName(userName.trim())) {
//         setErrorMessage("Names can only contain alphabetic characters");
//       hasError = true;
//     } else {
//         setErrorMessage("");
//     }
//     if (!isChecked) {
//         setErrorMessage('Please agree to the terms and conditions');
//         hasError = true;
//       } else {
//         setErrorMessage('');
//       }

// if (hasError) {
//     return;
// }
   
//     setResendAvailable1(false); // Disable resend button after sending OTP
//     setResendTime1(10 * 60);
//     const data = {
//       signup_option: loginMethod,
//       user_name: userName,
//       email_or_mobile:email,
//       dob: dob,
//     };
  
//     try {
//       const response = await fetch(`${URL}/signup`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         if (result.response === 'success') {
//             console.log('Signup successful:', result);

//             if (result.response === "success" && result.response_message === 'Please verify your email to proceed') {
//               setVerify(true);
//               setshowOTP(true);
//               setShowOtpField1(true);
              
//               setErrorMessage(result.response_message); // Display message to user
//             }else if (result.response === "success" && result.response_message ==='Account created successfully. Please check your email to verify your account.') {
//                 setVerify(true);
//                 setshowOTP(true);
//                 setShowOtpField2(true);
//                 setErrorMessage(result.response_message); // Display message to user
//               }
//           } else if (result.response === 'fail') {
//             if (result.response_message === "Email is already registered. Please log in or use a different email.") {
//               setErrorMessage(result.response_message);
//             } else if (result.data === 'registered') {
//               setShowRegistrationSuccess(true);
//             } else {
//               console.error('Signup failed:', result.response_message);
//               setErrorMessage(result.response_message); // Display general error message
//             }
//           }
//         } else {
//           console.error('Signup failed:', response.statusText);
//           setErrorMessage('An error occurred. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setErrorMessage('A network error occurred. Please try again.');
//       }
//     };

//     const handleSendOTP1 = async () => {
//         let hasError = false;
      
//         setErrorMessage("");
      
//         if (userName.trim() === "" || mobile.trim() === "") {
//           setErrorMessage("Please enter all fields");
//           hasError = true;
//         } else if (!validateName(userName.trim())) {
//           setErrorMessage("Names can only contain alphabetic characters");
//           hasError = true;
//         } else {
//           setErrorMessage("");
//         }
      
//         if (!isChecked) {
//           setErrorMessage('Please agree to the terms and conditions');
//           hasError = true;
//         } else {
//           setErrorMessage('');
//         }
      
//         if (hasError) {
//           return;
//         }
      
//         setResendAvailable2(false); // Disable resend button after sending OTP
//         setResendTime2(10 * 60);
      
//         const data = {
//           signup_option: loginMethod,
//           user_name: userName,
//           email_or_mobile: mobile,
//           dob: dob,
//         };
      
//         try {
//           const response = await fetch(`${URL}/signup`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Accept': 'application/json',
//             },
//             body: JSON.stringify(data),
//           });
      
//           if (response.ok) {
//             const result = await response.json();
      
//             if (result.response === 'success') {
//               console.log('Signup successful:', result);
      
//               if (result.response_message === 'Account created successfully. Please check your mobile to verify your account.' || result.response_message === 'Please verify your mobile to proceed') {
//                 setVerify(true);
//                 setshowOTP1(true);
//                 setShowOtpField2(true);
//                 setErrorMessage(result.response_message); // Display message to user
//               }
//             } else if (result.response === 'fail') {
//               if (result.response_message === "Email is already registered. Please log in or use a different email.") {
//                 setErrorMessage(result.response_message);
//               } else if (result.data === 'registered') {
//                 setShowRegistrationSuccess(true);
//               } else {
//                 console.error('Signup failed:', result.response_message);
//                 setErrorMessage(result.response_message); // Display general error message
//               }
//             }
//           } else {
//             console.error('Signup failed:', response.statusText);
//             setErrorMessage('An error occurred. Please try again.');
//           }
//         } catch (error) {
//           console.error('Error:', error);
//           setErrorMessage('A network error occurred. Please try again.');
//         }
//       };
      
//   const handleVerify = async () => {

//     const data = {
//       verify_option: loginMethod,
//       email_or_mobile: loginMethod === "email" ? email : mobile,
//       otp: otp,
//     };

//     try {
//       const response = await fetch(`${URL}/sgnup_verification`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Verification successful:', result);
//         setShowRegistrationSuccess(true);
//         setErrorMessage(''); // Clear any previous error message
//       } else {
//         const result = await response.json();
//         setErrorMessage(result.response_message || 'Verification failed.');
//         setSuccessMessage(''); // Clear any previous success message
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('An error occurred during verification.');
//     }
//   };

// const handleEmailChange = (e) => {
//   const value = e.target.value.toLowerCase(); // Convert input to lowercase
//   setEmail(value);
// };

 
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

//    ----------register-------
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/user_dropdowns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (data.response === "success") {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

const handleCategoryChange = (event) => {
  const categoryId = event.target.value;
  setSelectedCategory(categoryId);

  const selectedCategory = categories.find(
    (category) => category.category_id === categoryId
  );
  setUserType(selectedCategory ? selectedCategory.user_types : []);
  setSelectedUserType(""); // Reset user type selection
};

const handleUserTypeChange = (event) => {
  const selectedId = event.target.value;
  const selectedType = userType.find(type => type.user_type_id === selectedId)?.user_type;
  setSelectedUserType(selectedType);  // Store the actual user type value (e.g., "Journalist")
};
const handleRest = () => {
  setIsEditable((prevState) => !prevState); 
  setResset(true);
  setResset1(true);// Toggle the value of isEditable
};
const handleRest1 = () => {
  setIsEditable((prevState) => !prevState); 
  setResset1(false);// Toggle the value of isEditable
};
const sendOtp = async () => {
  setMessage('');
  setSuccess('');
  if (!email && !mobile) {
    setMessage('Please enter either mobile number or email.');
    return; 
  }
 
  setResendAvailable1(false);
  setResendTime1(5 * 60);
  // setOtpButtonEnabled(false);
  const data = {
    first_name: firstName,
    mobile: mobile,
    email: email,
  };

  try {
    const response = await fetch(`${URL}/Send_OTP`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setMessage('');
    setSuccess('');
    if  (result.response === 'fail' && result.response_message ==="Please click here to complete your registration and activate your account." && result.data === "verified") {
      setSuccess(result.response_message);
      setVerify(false);
      setshowOTP(false);
      setResset(true);
      setShowRegistr(false);
      setShowOtpField1(true);
      setHideOtpButtons(true);
      setShowPassword1(true);
      setIsEditable(false);
    } else if(result.response === 'success' && result.response_message ==="Please complete your registration and activate your account." && result.data === "verified") {
      setSuccess(result.response_message);
      setVerify(false);
      setshowOTP(false);
      setResset(true);
      setShowRegistr(false);
      setShowOtpField1(true);
      setHideOtpButtons(true);
      setShowPassword1(true);
      setIsEditable(false);
    } else if(result.response === 'success' && result.response_message ==="Mobile is already registered. Please log in or use a different mobile number." && result.data === "logged_in") {
      setSuccess(result.response_message);
    } else if(result.response === 'fail' && result.response_message ==="Email is already registered. Please log in or use a different email." && result.data === "logged_in") {
      setSuccess(result.response_message);
    }  else if (result.response === 'success') {
      setSuccess(result.response_message);
      setMessage('');
      setSuccess(result.response_message);
      setshowOTP(true);
      setResset(true);
      setShowOtpField1(true);
      setVerify(true);
      setIsEditable(false);
      if (result.response_message.includes('Mobile') && result.response_message.includes('Email')) {
       
        setMessage('');
        setSuccess(result.response_message);
        setshowOTP(true);
        setResset(true);
        setShowOtpField1(true);
        setVerify(true);
        setIsEditable(false);
        setShowMobileOTP(true);
        setShowEmailOTP(true);
      } else if(result.response_message.includes('email') && result.response_message.includes('mobile')) {
        setMessage('');
        setSuccess(result.response_message);
        setshowOTP(true);
        setResset(true);
        setShowOtpField1(true);
        setVerify(true);
        setIsEditable(false);
        setShowMobileOTP(true);
        setShowEmailOTP(true);
      } else if (result.response_message.includes('Mobile')) {
        setMessage('');
        setSuccess(result.response_message);
        setshowOTP(true);
        setResset(true);
        setShowOtpField1(true);
        setVerify(true);
        setIsEditable(false);
        setShowMobileOTP(true);
        setShowEmailOTP(false);
      } else if (result.response_message.includes('email')) {
        setMessage('');
        setSuccess(result.response_message);
        setshowOTP(true);
        setResset(true);
        setShowOtpField1(true);
        setVerify(true);
        setIsEditable(false);
        setShowMobileOTP(false);
        setShowEmailOTP(true);
      }else if (result.response_message.includes('Email')) {
        setMessage('');
        setSuccess(result.response_message);
        setshowOTP(true);
        setResset(true);
        setShowOtpField1(true);
        setVerify(true);
        setIsEditable(false);
        setShowMobileOTP(false);
        setShowEmailOTP(true);
      }
    }else if (result.response === 'failure' && result.response_message === "Email already registered. Please use a different email address.") {
      setMessage(result.response_message);
    }else {
      setMessage(result.response_message);
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
    setOtpButtonEnabled(true); 
    // Handle error (e.g., show an error message)
  }
};

const verifySignup = async () => {
  setMessage('');
  setSuccess('');
  if ((!email && !mobile) || (email && !emailOTP) || (mobile && !mobileOTP)) {
    setMessage('Please provide both email and email OTP, or mobile and mobile OTP.');
    return;
  }

  const data = {
    email: email,
    mobile: mobile,
    email_otp: emailOTP,
    mobile_otp: mobileOTP,
  };

  try {
    const response = await fetch(`${URL}/sgnup_verification`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setMessage('');
    setSuccess('');
    if (result.response === 'success') {
     
      setSuccess(result.response_message);
      setVerify(false);
      setShowRegistr(false);
      setShowPassword1(true);
      setIsEditable(false);
      setShowMobileOTP(false);
      setShowEmailOTP(false);
      setHideOtpButtons(true);
      // setResset(false);
    }  else if (result.response === 'fail' && result.response_message === 'Invalid or incorrect OTP.') {
      setMessage('Invalid or incorrect OTP. Please check and try again.');
      setSuccess('');
    } else {
      setMessage(result.response_message);
    }
  } catch (error) {
    console.error('Error during signup verification:', error);
    setMessage('An error occurred during signup verification.');
  }
};
const fetchLocationDetails = async () => {
  setPincodeMessage('')
  try {
    const response = await fetch(`${URL}/location_details/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pincode })
    });
    const result = await response.json();
    if (result.response === 'fail' && result.response_message === 'Failed to fetch location details.') {
      setPincodeMessage('Failed to fetch location details. Please try again.');
      return; // Stop further execution if the fetch fails
    }
    const data = result.data;

    // Remove duplicate locations and districts
    const uniqueLocations = [...new Map(data.map(item => [item.location, item])).values()];
    const uniqueDistrictsList = [...new Map(data.map(item => [item.district, item.district])).values()];

    setLocationDetails(uniqueLocations);
    setUniqueDistricts(uniqueDistrictsList);
    
    setSelectedDistrict(uniqueLocations[0]?.district || '');
    setState(uniqueLocations[0]?.state || '');
    setCountry(uniqueLocations[0]?.country || '');
     // Reset district selection when pincode changes

  } catch (error) {
    setPincodeMessage('An error occurred while fetching location details.');

    console.error('Error fetching location details:', error);
  }
};

const handlePincodeChange = (event) => {
  const value = event.target.value;

  // Allow only numbers and limit to 6 characters
  if (/^\d*$/.test(value) && value.length <= 6) {
    setPincode(value);
  }
};
useEffect(() => {
  if (pincode.length === 6) {
    fetchLocationDetails();
  }
}, [pincode]);

const handleOrgNameChange = (e) => {
  setOrgname(e.target.value);
  if (e.target.value) {
    setErrorMessage("");
    setHasError(false);
  }
};

const handleOrgNumberChange = (e) => {
  setOrgnumber(e.target.value);
  if (e.target.value) {
    setErrorMessage("");
    setHasError(false);
  }
};

const handleGSTNumberChange = (e) => {
  setGstnumber(e.target.value);
  if (e.target.value) {
    setErrorMessage("");
    setHasError(false);
  }
};

const handleFirstNameChange = (e) => {
  setFirstName(e.target.value);
  if (e.target.value && lastName) {
    setErrorMessage("");
    setHasError(false);
  }
};

const handleLastNameChange = (e) => {
  setLastName(e.target.value);
  if (e.target.value && firstName) {
    setErrorMessage("");
    setHasError(false);
  }
};

const handleRegister = async () => {
  const platform = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? "mobile"
    : "Web";
    setMessage('');
    setSuccess('');
  // Validate required fields
  if (!firstName || !lastName) {
    setErrorMessage("Please enter first name and last name.");
    return;
  }
  if (!dob) {
    setErrorMessage("Please enter date of birth.");
    return;
  }

  // Check if user is above 18 years old
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if the birthday hasn't occurred this year yet
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 18) {
    setErrorMessage("You must be at least 18 years old to register.");
    return;
  }

  if (!gender) {
    setErrorMessage("Please select the gender.");
    return;
  }
  if (!country) {
    setErrorMessage("Please enter country.");
    return;
  }
  if (!password || !confirmPassword) {
    setErrorMessage("Please enter a new password and confirm password.");
    return;
  }
  if (password !== confirmPassword) {
    setErrorMessage("Passwords and confirmPassword do not match.");
    return;
  }
  if (!isChecked1) {
    setErrorMessage("Please agree to the terms and conditions to proceed.");
    return;
  }
  // Prepare data for submission
  const data = {
    platform: platform,
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    gender: gender,
    user_email: email,
    user_phone_number: mobile,
    password: password,
    confirm_password: confirmPassword,
    country: country,
    user_type: selectedUserType,
    dob: dob,
  };

  try {
    const response = await fetch(`${URL}/rgstr_dtls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);

    if (response.ok && result.response === 'success') {
      toast.success(result.response_message);
      navigate('/login');
    } else if (result.response === 'fail') {
      if (result.detail && Array.isArray(result.detail)) {
        const firstError = result.detail[0];

        if (firstError.loc && firstError.loc.includes("dob") && firstError.msg) {
          setErrorMessage(firstError.msg);
        } else {
          setErrorMessage(result.response_message || 'Failed to register. Please check your input.');
        }
      } else {
        setErrorMessage(result.response_message || 'Failed to register. Please try again.');
      }
    } else {
      setErrorMessage('Failed to register. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    setErrorMessage('An error occurred during registration.');
  }
};






const handleRegister1 = async () => {
  
  const platform = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ? "mobile"
  : "Web";
  let hasError = false;

  setMessage('');
  setSuccess('');

  // if (!dob) {
  //   setErrorMessage("Please enter date of birth.");
  //   return;
  // }

  // Check if user is above 18 years old
  // const birthDate = new Date(dob);
  // const today = new Date();
  // const age = today.getFullYear() - birthDate.getFullYear();
  // const monthDiff = today.getMonth() - birthDate.getMonth();
  // const dayDiff = today.getDate() - birthDate.getDate();

  // // Adjust age if the birthday hasn't occurred this year yet
  // if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  //   age--;
  // }

  // if (age < 18) {
  //   setErrorMessage("You must be at least 18 years old to register.");
  //   return;
  // }
  // if (!gender) {
  //   setErrorMessage("Please select the gender.");
  //   return;
  // }
 

  if (!orgname) {
    setErrorMessage("Please enter organization name.");
    setHasError(true);
    return;
  }
  if (!orgnumber) {
    setErrorMessage("Please enter organization number.");
    setHasError(true);
    return;
  }
  if (!gstnumber) {
    setErrorMessage("Please enter GST number.");
    setHasError(true);
    return;
  }

  // Validate name
  if (!firstName || !lastName) {
    setErrorMessage("Please enter first name and last name.");
    setHasError(true);
    return;
  }

  // Validate other fields
  if (!country) {
    setErrorMessage("Please enter country.");
    setHasError(true);
    return;
  }
  if (!password || !confirmPassword) {
    setErrorMessage("Please enter a new password and confirm password.");
    setHasError(true);
    return;
  }
  if (password !== confirmPassword) {
    setErrorMessage("Passwords and confirmPassword do not match.");
    setHasError(true);
    return;
  }

  // Check terms and conditions
  if (!isChecked1) {
    setErrorMessage("Please agree to the terms and conditions.");
    setHasError(true);
    return;
  }

  // Proceed with submission if there are no errors
  setErrorMessage("");
  // Continue with form submission logic


if (hasError) {
    return;
}
  const data = {
    platform: platform,
    org_name: orgname,
    org_number: orgnumber,
    gst_number: gstnumber,
  
    pin_code: pincode,
    location_name: selectedCity,
    district_name: selectedDistrict,
    state_name: state,
    country_name: country,
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,

    user_email: email,
    user_phone_number: mobile,
    password: password,
    confirm_password: confirmPassword,
    user_type: selectedUserType,
   
  };

  try {
    const response = await fetch(`${URL}/org_rgstr_dtls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.response === 'success') {
      toast.success(result.response_message);
      navigate('/login');
    } else if (result.response === 'fail') {
      // Check for specific error messages in the detail array
      if (result.detail && Array.isArray(result.detail)) {
        // Look for the DOB-related error
        const dobError = result.detail.find(error => 
          error.loc && error.loc.includes("dob") && error.msg.includes("You must be at least 18 years old")
        );
        if (dobError) {
          setErrorMessage(dobError.msg);  // Show the specific DOB error message
        } else {
          setErrorMessage(result.response_message);  // General error message
        }
      } else {
        setErrorMessage(result.response_message);
      }
    } else {
      setErrorMessage('Failed to register. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    setErrorMessage('An error occurred during registration.');
  }
};

const handleCheckboxChange = (e) => {
  setIsChecked1(e.target.checked);
};
useEffect(() => {
  // Enable the button if either mobile or email is filled
  setOtpButtonEnabled(mobile.trim() !== '' || email.trim() !== '');
}, [mobile, email]);

  const [address1, setAddress1] = useState({});

   
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log("Latitude:", latitude, "Longitude:", longitude);

  //       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  //       fetch(url)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const address = data.address;
  //           setAddress1(address);
  //           setPincode(address.postcode || '');
  //           setLocation(address.city || address.town || address.village || address.suburb || '');
  //           setDistrict(address.state_district || '');
  //           setState(address.state || '');
  //           setCountryname(address.country || '');
  //         })
  //         .catch((error) => console.error("Error fetching address:", error));
  //     },
  //     (error) => {
  //       console.error("Error getting geolocation:", error);
  //     }
  //   );
  // }, []);

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
    <City/>
   <Navbar/>
   <ToastContainer />
   <main className="w-full h-[500px]  flex px-[5%]">
   
   

    <div className="w-[50%]">
      <div className=" flex flex-col gap-[20px] ">

    {/* <div className="flex justify-center">
      <h1 className="blue-color font-bold text-[25px]">Registration</h1>
    </div> */}
    {!showRegistrationSuccess ?  (
 <div className="flex justify-center">
 <button className="primary-btn" onClick={showdropdwon}>Sign Up</button>
</div>
    ):(
      <div className="flex flex-col gap-[15px] text-[14px] shadow-xl rounded-2xl p-5 py-7 border-[1px] border-gray-100  bg-[#245FB1]  mt-24 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-white font-bold">Welcome to <span class="text-[#FFF500]">Newsworth</span></h2>
          <h1 className="text-white text-[25px] font-bold mb-4">Register NOW!</h1>
        </div>
<div className=" flex gap-[10px] justify-center mb-4 ">
<FormControl variant="outlined" required className="w-full mb-4 text-[14px] font-col">
  <InputLabel id="user-category-label" 
      //  className="absolute top-0 left-2  text-white text-[14px] transform-none  px-1" 
        style={{
      color: selectedCategory ? 'white' : 'black', // Color changes based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for both color and position
      top: selectedCategory ? '-10px' : '10%', // Moves the label above when selected
      left: selectedCategory ? '10px' : '12px', // Adjusts the left positioning
      transform: selectedCategory ? 'translateY(-50%)' : 'translateY(50%)', // Keeps the label centered when floated
      fontWeight: selectedCategory ? 'semibold' : 'normal', // Bold font weight when selected
    }}
    shrink={selectedCategory || false} // Ensures label shrinks when there's a selection

>User Category</InputLabel>
  <Select
    labelId="user-category-label"
    className="w-full rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC] text-[14px] pt-1 "
    value={selectedCategory}
    onChange={handleCategoryChange}
    label="User Category"
    style={{ height: "50px", borderRadius: "10px", fontSize:"14px" }} /* For input box*/
    name="UserCategory"
  >
    
    {categories.map((category) => (
      <MenuItem key={category.category_id} value={category.category_id} >
        {category.category_name} 
      </MenuItem>
    ))}
  </Select>
</FormControl>

<FormControl variant="outlined" required className="w-full mb-4 relative">
          <InputLabel id="gender-label"
          style={{  color: selectedUserType ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px',
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: selectedUserType ? '-10px' : '10%', // Moves the label above when selected
      left: selectedUserType ? '10px' : '12px', // Adjusts the left positioning
      transform: selectedUserType ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: selectedUserType ? 'semibold' : 'normal'}} shrink={selectedUserType || false}>User Type</InputLabel>
          <Select
         className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

            labelId="User Type"
            value={userType.find(type => type.user_type === selectedUserType)?.user_type_id || ""}
            onChange={handleUserTypeChange}
            label="User Type"
            style={{
              fontSize: '14px',
              height: "50px",
              borderRadius: "10px",
              fontSize: '14px'
            }}
            name="UserType"
          >
           
            {userType.map((type) => (
            <MenuItem key={type.user_type_id} value={type.user_type_id}>
              {type.user_type}
            </MenuItem>
          ))}
          </Select>
        </FormControl>

</div>
{selectedCategory === 1 && selectedUserType &&(
  <div className="flex flex-col gap-[15px] ">
<div className=" flex gap-[10px] justify-center mb-4">
<TextField
     id="Organization Name" 
     label="Organization Name" 
     variant="outlined"
      value={orgname}
      onChange={handleOrgNameChange} 
         disabled={!isEditable}

    //  className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
     InputLabelProps={{
      shrink: orgname ? true : false, // Shrinks the label when there is a value
      style: {
               color: orgname ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: orgname ? '-10px' : '10%', // Moves the label above when selected
      left: orgname ? '10px' : '12px', // Adjusts the left positioning
      transform: orgname ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: orgname ? 'semibold' : 'normal',
      },

    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
       <TextField
     id="Organization Number" 
     label="Organization Number" 
     variant="outlined"
      value={orgnumber}
      onChange={handleOrgNumberChange}
         disabled={!isEditable}

         className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
     InputLabelProps={{
     shrink: orgnumber ? true : false, // Shrinks the label when there is a value
    style: {
      color: orgnumber ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: orgnumber ? '-10px' : '10%', // Moves the label above when selected
      left: orgnumber ? '10px' : '12px', // Adjusts the left positioning
      transform: orgnumber ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: orgnumber ? 'semibold' : 'normal', // Adjusts font weight based on value
    },
    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }}
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }}  />
</div>
<div className=" flex gap-[10px] justify-center mb-4">
<TextField
     id="GST Number" 
     label="GST Number" 
      value={gstnumber}
      onChange={handleGSTNumberChange}
     variant="outlined"
     disabled={!isEditable}

     //  className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
     InputLabelProps={{
       shrink: gstnumber ? true : false, // Shrinks the label when there is a value
    style: {
      color: gstnumber ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: gstnumber ? '-10px' : '10%', // Moves the label above when selected
      left: gstnumber ? '10px' : '12px', // Adjusts the left positioning
      transform: gstnumber ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: gstnumber ? 'semibold' : 'normal', // Adjusts font weight based on value
    },
                      
    }}
      InputProps={{
        style: {
          fontSize: '14px', 
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
       {/* <TextField
     id="Address" 
     label="Address" 
     variant="outlined"
          value={address}
         onChange={(e) => setAddress(e.target.value)}
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     disabled={!isEditable}

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

          {/* </div>
        ),
        autoComplete: "off",
      }} />  */}
</div>
<div className=" flex gap-[10px] justify-center mb-4">
<TextField
     id="Pincode" 
     label="Pincode" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     value={pincode}
     onChange={handlePincodeChange}
     onBlur={fetchLocationDetails}
     disabled={!isEditable}

     variant="outlined"
     required
     InputLabelProps={{
      shrink: pincode ? true : false, // Shrinks the label when there is a value
    style: {
      color: pincode ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: pincode ? '-10px' : '10%', // Moves the label above when selected
      left: pincode ? '10px' : '12px', // Adjusts the left positioning
      transform: pincode ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: pincode ? 'semibold' : 'normal', // Adjusts font weight based on value
    },
    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
      
      <FormControl variant="outlined" required className="w-full mb-4 relative ">
          <InputLabel id="gender-label"   
       shrink={selectedCity ? true : false} // Shrinks the label when there is a value
    style={{
      color: selectedCity ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: selectedCity ? '-10px' : '10%', // Moves the label above when selected
      left: selectedCity ? '10px' : '12px', // Adjusts the left positioning
      transform: selectedCity ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: selectedCity ? 'semibold' : 'normal', // Adjusts font weight based on selection
    }}>City</InputLabel>
          <Select
         className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
         value={selectedCity}
         disabled={!isEditable}

         onChange={(e) => setSelectedCity(e.target.value)}
            labelId="City"
            label="City"
            style={{
              fontSize: '14px',
              height: "50px",
              borderRadius: "10px",
            }}
            name="UserType"
          >
            <MenuItem value="">
              {/* <em>None</em> */}
            </MenuItem>
            {locationDetails.map((location) => (
              <MenuItem key={location.location_id} value={location.location}>
                {location.location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
</div>
{pincodeMessage && <div className=" text-white">{pincodeMessage}</div>} {/* Display error message */}

<div className=" flex gap-[10px] justify-center mb-4">
    
        <TextField
     id="District" 
     label="District" 
     value={selectedDistrict}
     onChange={(e) => setSelectedDistrict(e.target.value)}
     disabled={!isEditable}

     variant="outlined"
    

     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
     InputLabelProps={{
       shrink: selectedDistrict ? true : false, // Shrinks the label when there is a value
    style: {
      color: selectedDistrict ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: selectedDistrict ? '-10px' : '10%', // Moves the label above when selected
      left: selectedDistrict ? '10px' : '12px', // Adjusts the left positioning
      transform: selectedDistrict ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: selectedDistrict ? 'semibold' : 'normal', // Adjusts font weight based on selection
    },
    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
       <TextField
     id="State" 
     label="State" 
     value={state}
     onChange={(e) => setState(e.target.value)}
     disabled={!isEditable}

     variant="outlined"
    

     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
     InputLabelProps={{
       shrink: state ? true : false, // Shrinks the label when there is a value
    style: {
      color: state ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: state ? '-10px' : '10%', // Moves the label above when selected
      left: state ? '10px' : '12px', // Adjusts the left positioning
      transform: state ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: state ? 'semibold' : 'normal', // Adjusts font weight based on selection
    },
    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
</div>
<div className=" flex gap-[10px] justify-center">
<TextField
     id="Country" 
     value={country}
     onChange={(e) => setCountry(e.target.value)}
     disabled={!isEditable}

     label="Country" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     variant="outlined"
     required
     InputLabelProps={{
     shrink: country ? true : false, // Shrinks the label when there is a value
    style: {
      color: country ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: country ? '-10px' : '10%', // Moves the label above when selected
      left: country ? '10px' : '12px', // Adjusts the left positioning
      transform: country ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: country ? 'semibold' : 'normal', // Adjusts font weight based on selection
    },
                      
    }}
      InputProps={{
        style: {
        fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
     
</div>
<div className=" flex  items-center gap-[5px] text-white font-bold mb-4">
  <div className="w-[550px] h-[3px] rounded-2xl bg-white"></div>
  <p className="w-[350px] "> Point of Contact</p>
 
  <div className="w-full h-[3px] rounded-2xl bg-white"></div>

  </div>
<div className=" flex gap-[10px] justify-center relative mb-4">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                    InputLabelProps={{
                      shrink: firstName ? true : false, // Shrinks the label when there is a value
    style: {
      color: firstName ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: firstName ? '-10px' : '10%', // Moves the label above when selected
      left: firstName ? '10px' : '12px', // Adjusts the left positioning
      transform: firstName ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: firstName ? 'semibold' : 'normal', // Adjusts font weight based on selection
    },
                    }}
                      InputProps={{
                        
                        style: {
                        fontSize: '14px',
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
                      }}
                      sx={{
                        // Disable autofill background
                        '& input:-webkit-autofill': {
                          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                          WebkitTextFillColor: '#000', // Text color when autofilled
                        },
                      }} 
                  />

                  <TextField
                    id="middleName"
                    label="Middle Name"
                    variant="outlined"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                   
                
                    InputLabelProps={{
                      shrink: middleName ? true : false, // Shrinks the label when there's a value
    style: {
      color: middleName ? 'white' : 'black', // Change label color based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: middleName ? '-10px' : '10%', // Moves the label above when selected
      left: middleName ? '10px' : '12px', // Adjusts the left positioning
      transform: middleName ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: middleName ? 'semibold' : 'normal', // Adjusts font weight based on selection
    },
                    }}
                      InputProps={{
                        style: {
                        fontSize: '14px',
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
                      }}
                      sx={{
                        // Disable autofill background
                        '& input:-webkit-autofill': {
                          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                          WebkitTextFillColor: '#000', // Text color when autofilled
                        },
                      }} 
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    required            
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}
                    value={lastName}
                    onChange={handleLastNameChange}
                    InputLabelProps={{
                    shrink: lastName ? true : false, // Shrinks the label when there's a value
    style: {
      color: lastName ? 'white' : 'black', // Changes label color based on field value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: lastName ? '-10px' : '10%', // Moves label above when there's a value
      left: lastName ? '10px' : '12px', // Adjusts left positioning when floating
      transform: lastName ? 'translateY(-50%)' : 'translateY(50%)', // Keeps label centered when floated
      fontWeight: lastName ? 'semibold' : 'normal', // Adjusts font weight when selected
    },
                    }}
                      InputProps={{
                        style: {
                        fontSize: '14px',
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
                      }}
                      sx={{
                        // Disable autofill background
                        '& input:-webkit-autofill': {
                          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                          WebkitTextFillColor: '#000', // Text color when autofilled
                        },
                      }} 
                    name="last_name"
                  />
                </div>
                {/* <div className=" flex gap-[5px] justify-center">
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

          {/* </div>
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
</div>  */}

                <div className=" flex gap-[10px] justify-center items-center">
<TextField
     id="Mobile" 
     label="Mobile" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     disabled={!isEditable}
     variant="outlined"
     value={mobile}
     onChange={handleMobileChange} 
     error={Boolean(error1)} // Apply error styling when there's an error
     helperText={error1} //
     InputLabelProps={{
       shrink: mobile ? true : false, // Shrinks the label when the mobile number is entered
    style: {
      color: mobile ? 'white' : 'black', // Label color changes based on the input
      fontSize: '14px',
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: mobile ? '-10px' : '10%', // Moves label above when mobile number is entered
      left: mobile ? '10px' : '12px', // Adjusts left positioning when floating
      transform: mobile ? 'translateY(-50%)' : 'translateY(50%)', // Keeps label centered when floated
      fontWeight: mobile ? 'semibold' : 'normal', // Font weight change when selected
    },
    }} 
      InputProps={{
        style: {
       
          fontSize: '14px',
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
      }}
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }}  />
      {/* <div className="relative group">
  <img src={info} alt="" className="w-8 h-4" />
  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
  Please enter either an email or a mobile number, or both.
  </span>
</div> */}
       <TextField
     id="Email" 
     label="Email" 
     variant="outlined"
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     disabled={!isEditable}
     value={email}
     onChange={handleEmailChange} 
     error={Boolean(error2)} // Apply error styling when there's an error
     helperText={error2}
     InputLabelProps={{
      shrink: email ? true : false, // Shrink the label when there's a value in the input
    style: {
      color: email ? 'white' : 'black', // Label color changes based on the value of email
      fontSize: '14px',
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: email ? '-10px' : '10%', // Moves label above when input has value
      left: email ? '10px' : '12px', // Adjusts the left positioning when floated
      transform: email ? 'translateY(-50%)' : 'translateY(50%)', // Keeps label centered when floating
      fontWeight: email ? 'semibold' : 'normal', // Font weight change when floated
    },
    }} 
      InputProps={{
        style: {
       
          fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />

</div>

<div className="flex justify-between mb-4"> 
  <div className="">
  {success && <p className=" text-white  w-[320px]">{success}</p>}

   {message && <p className="text-white  w-[320px]">{message}</p>}
  </div>
  <div className="flex gap-[10px]">
  {showreset && (
    showreset1 ? (
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold " onClick={handleRest1}>Save</button>

  ):(
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold  " onClick={handleRest}>Edit Details</button>
  
  )
    )}
   {!hideOtpButtons && (
  !showOtpField1 ? (
    <div className="flex justify-end">
      <button className={`bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold  ${!otpButtonEnabled ? 'cursor-not-allowed ' : ''}`} onClick={sendOtp} disabled={!otpButtonEnabled}>Send OTP</button>
    </div>
  ) : (
    <div className="flex justify-end space-x-4 items-center">
      <span className={`text-sm ${resendAvailable1 ? 'text-gray-500' : 'text-white'}`}>
        {resendAvailable1 ? "" : ` (${formatTime(resendTime1)})`}
      </span>
      <button
        onClick={sendOtp}
        disabled={!resendAvailable1}
        className={`bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold  ${resendAvailable1 ? 'bg-white text-[#245FB1]' : 'bg-white text-[#245FB1] cursor-not-allowed'}`}
      >
        {resendAvailable1 ? "Resend OTP" : "Resend OTP"}
      </button>
    </div>
  )
)}
  </div>

</div>
<div className=" flex gap-[10px] justify-center mb-4">
  {showMobileOTP && (

  <TextField
       id="Mobile OTP" 
       label="Mobile OTP" 
       variant="outlined"
       required
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       value={mobileOTP}
       onChange={handlemobileOTPChange}
       InputLabelProps={{
         shrink: mobileOTP ? true : false, // Shrink label when there's a value
    style: {
      color: mobileOTP ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: mobileOTP ? '-10px' : '10%', // Move label above when value is entered
      left: mobileOTP ? '10px' : '12px', // Adjust left position for floating label
      transform: mobileOTP ? 'translateY(-50%)' : 'translateY(50%)', // Center label when floating
      fontWeight: mobileOTP ? 'semibold' : 'normal', // Bold label when floating
    },
                      
      }} 
        InputProps={{
          style: {
         
            fontSize: '14px',
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
        }} 
        sx={{
          // Disable autofill background
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
            WebkitTextFillColor: '#000', // Text color when autofilled
          },
        }} />
      )}
            {showEmailOTP && (

         <TextField
       id="Email OTP" 
       label="Email OTP" 
       variant="outlined"
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       required
       value={emailOTP}
     onChange={handleemailOTPChange}
     InputLabelProps={{
     shrink: emailOTP ? true : false, // Shrink label when there's a value
    style: {
      color: emailOTP ? 'white' : 'black', // Label color based on the value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: emailOTP ? '-10px' : '10%', // Move label above when value is entered
      left: emailOTP ? '10px' : '12px', // Adjust the left position when floated
      transform: emailOTP ? 'translateY(-50%)' : 'translateY(50%)', // Center the label when floating
      fontWeight: emailOTP ? 'semibold' : 'normal', // Bold label when floating
    },
    }} 
        InputProps={{
          style: {
         
            fontSize: '14px',
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
        }}
        sx={{
          // Disable autofill background
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
            WebkitTextFillColor: '#000', // Text color when autofilled
          },
        }}  />
            )}
  </div>
{verify &&(
    <div className="flex justify-end">
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold " onClick={verifySignup}>Verify</button>
  </div>
)}
{showPassword1 &&(
  <div className=" flex gap-[10px] justify-center">
<TextField
     id="Password" 
     label="Password" 
     type={showPassword ? "text" : "password"}
     variant="outlined"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={password}
     onChange={(e) => { setPassword(e.target.value); setErrorMessage(""); }}
     InputLabelProps={{
       shrink: password ? true : false, // Shrink label when there's a value
    style: {
      color: password ? 'white' : 'black', // Label color changes based on field value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: password ? '-10px' : '10%', // Move label above when value is entered
      left: password ? '10px' : '12px', // Adjust the left position when floating
      transform: password ? 'translateY(-50%)' : 'translateY(50%)', // Center label when floating
      fontWeight: password ? 'semibold' : 'normal', // Font weight for floating label
    },

    }} 
      InputProps={{
        style: {
       
          fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
       <TextField
     id="Confirm Password" 
     label="Confirm Password" 
     variant="outlined"
     type={showPassword ? "text" : "password"}
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={confirmPassword}
     onChange={(e) => { setConfirmPassword(e.target.value); setErrorMessage(""); }} 
     InputLabelProps={{
       shrink: confirmPassword ? true : false, // Shrink label if value is filled
    style: {
      color: confirmPassword ? 'white' : 'black', // Label color based on value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for floating label
      top: confirmPassword ? '-10px' : '10%', // Move label above when input has value
      left: confirmPassword ? '10px' : '12px', // Adjust left position for floating label
      transform: confirmPassword ? 'translateY(-50%)' : 'translateY(50%)', // Center label when floating
      fontWeight: confirmPassword ? 'semibold' : 'normal', // Font weight for floating label
    },
    }}  
     InputProps={{
        style: {
          fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
</div>
)}

<div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="termsCheckbox"
      checked={isChecked1}

      onChange={(e) => { setIsChecked1(e.target.checked); setErrorMessage(""); }} 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      required
    />
    <label htmlFor="termsCheckbox" className="ml-2 text-sm text-white">
      I agree with the{" "}
      <a href="#" className="text-white underline">
        Terms and Conditions
      </a>
    </label>
  </div>
{errorMessage && <p className="text-white w-[320px]">{errorMessage}</p>}

{showRegistr ?(
           <div className="flex justify-center">
           <button className="p-[5px] w-1/2 px-4 rounded-[50px] text-[#245FB1] font-bold  cursor-not-allowed bg-white">Register</button>
         </div>

):(
  <div className="flex justify-center ">
           <button className="p-[5px] w-1/2 px-4 rounded-[50px] text-[#245FB1] font-bold  bg-white" onClick={handleRegister1}>Register</button>
         </div>
)}

</div>
)}
{selectedCategory === 2 && selectedUserType &&(
  <div className="flex flex-col gap-[20px] mb-4">
    <div className=" flex gap-[15px] justify-center mb-4">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                
                    InputLabelProps={{
                       shrink: firstName ? true : false, // Label will float when input has value
    style: {
      color: firstName ? 'white' : 'black', // Floating label color changes to white
      fontSize: '14px', // Font size for the label
      transition: 'all 0.3s ease', // Smooth transition for label movement
      top: firstName ? '-10px' : '10%', // Move label above when input has value
      left: firstName ? '10px' : '12px', // Adjust left position for floating label
      transform: firstName ? 'translateY(-50%)' : 'translateY(50%)', // Adjust for floating effect
      fontWeight: firstName ? 'semibold' : 'normal', // Bold label when floating
    },
                      
                    }}  
                    InputProps={{
                      style: {             
                        fontSize: '14px', 
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                        
                      },
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

                  <TextField
                    id="middleName"
                    label="Middle Name"
                    variant="outlined"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                   
                    InputLabelProps={{
                      shrink: middleName ? true : false, // Label shrinks when there's a value
    style: {
      color: middleName ? 'white' : 'black', // Change label color to white when floating
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition for the label's position
      top: middleName ? '-10px' : '10%', // Adjust top position when the label floats
      left: middleName ? '10px' : '12px', // Adjust left position for floating effect
      transform: middleName ? 'translateY(-50%)' : 'translateY(50%)', // Smooth transition effect
      fontWeight: middleName ? 'semibold' : 'normal', // Make label bold when floating
    },

                    }} 
                    InputProps={{
                      style: {
                        fontSize: '14px',
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
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
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    required            
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    disabled={!isEditable}  
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    InputLabelProps={{
                       shrink: lastName ? true : false, // Label shrinks when there's a value
    style: {
      color: lastName ? 'white' : 'black', // Label color changes when floating
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition when the label moves
      top: lastName ? '-10px' : '10%', // Adjusts the position of the label when it's floating
      left: lastName ? '10px' : '12px', // Adjusts the label's left position for a floating effect
      transform: lastName ? 'translateY(-50%)' : 'translateY(50%)', // Smooth label transition
      fontWeight: lastName ? 'semibold' : 'normal', // Makes the label bold when floating
    },
                    }} 
                    InputProps={{
                      style: {
                        fontSize: '14px', 
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                      },
                      autoComplete: "off",
                    }}
                    name="last_name"
                    sx={{
                      // Disable autofill background
                      '& input:-webkit-autofill': {
                        WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
                        WebkitTextFillColor: '#000', // Text color when autofilled
                      },
                    }} 
                  />
                </div>
                <div className=" flex gap-[15px] justify-center items-center mb-4">
               
      {/* <label htmlFor="dob">Date of Birth</label> */}
      <TextField
        type="date"
        id="Date of Birth"
        label="Date of Birth"
        disabled={!isEditable}
        value={dob ? dayjs(dob).format('YYYY-MM-DD') :  ''}
        onChange={handleDateChange}
        variant="outlined"
        className="w-full px-7 py-4 rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC]"
        required
        InputLabelProps={{
          shrink: true,
          style: {
            color: 'white', // Focused label color (when input is focused)
      top: '-10px', // Moves label above when focused
      left: '10px', // Adjusts left position when focused
      fontWeight: 'semibold', // Bold font when focused
      fontSize: '14px', // Font size when focused
      transform: 'translateY(-50%)', // Smooth transition for focus
          },
                      
        }}
        InputProps={{
          style: {
            fontSize: '14px',
            height: "50px",
            borderRadius: "10px",
          },
          autoComplete: "off",
        }}
        sx={{
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset',
            WebkitTextFillColor: '#000',
          },
        }}
        inputProps={{
          max: maxDate, // Disable selecting dates beyond today minus 18 years
        }}
        error={error}
        helperText={error ? "You must be 18 years or older" : ""}
      />
   
      {/* <div className="relative group">
  <img src={info} alt="" className="w-8 h-4" />
  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
    You must be 18 years old
  </span>
</div> */}

       <FormControl variant="outlined" required className="w-full mb-4 text-[14px] font-col">
          <InputLabel id="gender-label" 
          style={{
      color: gender ? 'white' : 'black', // Color changes based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for both color and position
      top: gender ? '-10px' : '10%', // Moves the label above when selected
      left: gender ? '10px' : '12px', // Adjusts the left positioning
      transform: gender ? 'translateY(-50%)' : 'translateY(50%)', // Keeps the label centered when floated
      fontWeight: gender ? 'semibold' : 'normal', // Bold font weight when selected
    }}
    shrink={gender || false}
          >Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            label="Gender"
            className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
            disabled={!isEditable}
            style={{
              
              height: "50px",
              borderRadius: "10px",
            }}
            name="gender"
          >
            <MenuItem value="">
              {/* <em>None</em> */}
            </MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
            <MenuItem value="I prefer not to say">Prefer not to say</MenuItem>

          </Select>
        </FormControl>
</div>
{/* <div className=" flex gap-[10px] justify-center">
<TextField
     id="Country" 
     label="Country" 
     variant="outlined"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     disabled={!isEditable}
     value={country}
     onChange={(e) => setCountry(e.target.value)} 
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
        endAdornment: (
          <div
            
          >
        {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

          {/* </div>
        ),
        autoComplete: "off",
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
      
</div> */}
                <div className=" flex gap-[15px] justify-center items-center">
<TextField
     id="Mobile" 
     label="Mobile" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     disabled={!isEditable}
     variant="outlined"
     value={mobile}
     onChange={handleMobileChange} 
     error={Boolean(error1)} // Apply error styling when there's an error
     helperText={error1} //
     InputLabelProps={{
      style: {
      color: mobile ? 'white' : 'black', // Color changes based on selection
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for both color and position
      top: mobile ? '-10px' : '10%', // Moves the label above when selected
      left: mobile ? '10px' : '12px', // Adjusts the left positioning
      transform: mobile ? 'translateY(-50%)' : 'translateY(50%)', // Keeps the label centered when floated
      fontWeight: mobile ? 'semibold' : 'normal', // Bold font weight when selected
    },
    shrink: mobile || false,
    }}
      InputProps={{
        style: {
       
          fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
            {/* <div className="relative group">
  <img src={info} alt="" className="w-8 h-4" />
  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
  Please enter either an email or a mobile number, or both.
  </span>
</div> */}
       <TextField
     id="Email" 
     label="Email" 
     variant="outlined"
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
 disabled={!isEditable}
     value={email}
     onChange={handleEmailChange}
     error={Boolean(error2)} // Apply error styling when there's an error
     helperText={error2} 
     InputLabelProps={{
      style: {
      color: email ? 'white' : 'black', // Color changes based on input value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for both color and position
      top: email ? '-10px' : '10%', // Moves the label above when selected
      left: email ? '10px' : '12px', // Adjusts the left positioning when email is filled
      transform: email ? 'translateY(-50%)' : 'translateY(50%)', // Smooth transition for the label's position
      fontWeight: email ? 'semibold' : 'normal', // Bold font weight when email has a value
    },
    shrink: email || false,
    }}
      InputProps={{
        style: {
       
          fontSize: '14px',
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
      }}
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />

</div>

<div className="flex justify-between mb-4"> 
  <div className="">
  {success && <p className=" text-white  w-[320px]">{success}</p>}

   {message && <p className="text-white  w-[320px]">{message}</p>}
  </div>
  <div className="flex gap-[10px]">
    {showreset && (
    showreset1 ? (
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold " onClick={handleRest1}>Save</button>

  ):(
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold " onClick={handleRest}>Edit Details</button>
  
  )
    )}
  
     
   
    {!hideOtpButtons && (
  !showOtpField1 ? (
    <div className="flex justify-end">
      <button className={`bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold ${!otpButtonEnabled ? 'cursor-not-allowed ' : ''}`} onClick={sendOtp}        
             disabled={!otpButtonEnabled}  >Send OTP</button>
    </div>
  ) : (
    <div className="flex justify-end space-x-4 items-center">
      <span className={`text-sm ${resendAvailable1 ? 'text-gray-500' : 'text-white'}`}>
        {resendAvailable1 ? "" : ` (${formatTime(resendTime1)})`}
      </span>
      <button
        onClick={sendOtp}
        disabled={!resendAvailable1}
        className={`bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold   ${resendAvailable1 ? 'bg-white text-[#245FB1] ' : 'bg-white text-[#245FB1] cursor-not-allowed'}`}
      >
        {resendAvailable1 ? "Resend OTP" : "Resend OTP"}
      </button>
    </div>
  )
)}
  </div>


</div>
 
  <div className=" flex gap-[15px] justify-center">
  {showMobileOTP && (

  <TextField
       id="Mobile OTP" 
       label="Mobile OTP" 
       variant="outlined"
       required
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       value={mobileOTP}
       onChange={handlemobileOTPChange}
       InputLabelProps={{
          shrink: mobileOTP ? true : false, // Shrink the label when there is a value in the input
    style: {
      color: mobileOTP ? 'white' : 'black', // Label color based on the value of mobileOTP
      fontSize: '14px',
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: mobileOTP ? '-10px' : '10%', // Moves the label above when there's input
      left: mobileOTP ? '10px' : '12px', // Adjusts the left positioning when floated
      transform: mobileOTP ? 'translateY(-50%)' : 'translateY(50%)', // Keeps label centered when floating
      fontWeight: mobileOTP ? 'semibold' : 'normal', // Font weight change when floated
    },
      }}
        InputProps={{
          style: {
         
            fontSize: '14px',
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
        }} 
        sx={{
          // Disable autofill background
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
            WebkitTextFillColor: '#000', // Text color when autofilled
          },
        }} />
      )}
            {showEmailOTP && (

         <TextField
       id="Email OTP" 
       label="Email OTP" 
       variant="outlined"
       className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

       required
       value={emailOTP}
     onChange={handleemailOTPChange}
     InputLabelProps={{
      shrink: emailOTP ? true : false, // Shrink the label when there's a value
    style: {
      color: emailOTP ? 'white' : 'black', // Change label color when there's a value
      fontSize: '14px', // Reduced label font size
      transition: 'all 0.3s ease', // Smooth transition for color and position
      top: emailOTP ? '-10px' : '10%', // Moves label above when value is present
      left: emailOTP ? '10px' : '12px', // Adjusts left position for floated label
      transform: emailOTP ? 'translateY(-50%)' : 'translateY(50%)', // Keeps it centered when floated
      fontWeight: emailOTP ? 'semibold' : 'normal', // Font weight change when label floats
    },
                     
    }}
        InputProps={{
          style: {
         
            fontSize: '14px',
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
        }} 
        sx={{
          // Disable autofill background
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
            WebkitTextFillColor: '#000', // Text color when autofilled
          },
        }} />
            )}
  </div>
  
{verify &&(
    <div className="flex justify-end  mb-4">
    <button className="bg-white   rounded-xl p-1 text-[#245FB1] text-[12px] font-bold " onClick={verifySignup}>Verify</button>
  </div>
)}
{showPassword1 &&(
  <div className=" flex gap-[15px] justify-center">
<TextField
     id="Password" 
     label="Password" 
     type={showPassword ? "text" : "password"}
     variant="outlined"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={password}
     onChange={(e) => setPassword(e.target.value)}
     InputLabelProps={{
       shrink: password ? true : false, // Shrink label when there's a value
    style: {
      color: password ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition when label moves
      top: password ? '-10px' : '10%', // Move label above when value is entered
      left: password ? '10px' : '12px', // Adjust left position for floating label
      transform: password ? 'translateY(-50%)' : 'translateY(50%)', // Keep label centered when floating
      fontWeight: password ? 'semibold' : 'normal', // Font weight for floating label
    },
                      
    }}
     InputProps={{
        style: {
       
          fontSize: '14px', 
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
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
     
     InputLabelProps={{
      shrink: confirmPassword ? true : false, // Shrink label when there's a value
    style: {
      color: confirmPassword ? 'white' : 'black', // Change label color based on value
      fontSize: '14px', // Label font size
      transition: 'all 0.3s ease', // Smooth transition when label moves
      top: confirmPassword ? '-10px' : '10%', // Move label above when value is entered
      left: confirmPassword ? '10px' : '12px', // Adjust left position for floating label
      transform: confirmPassword ? 'translateY(-50%)' : 'translateY(50%)', // Keep label centered when floating
      fontWeight: confirmPassword ? 'semibold' : 'normal', // Font weight for floating label
    },

    }}
     InputProps={{
        style: {
          fontSize: '14px',
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
      }} 
      sx={{
        // Disable autofill background
        '& input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
          WebkitTextFillColor: '#000', // Text color when autofilled
        },
      }} />
</div>
)}

<div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="termsCheckbox"
      onChange={handleCheckboxChange}
      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      required
    />
    <label htmlFor="termsCheckbox" className="ml-2 text-[12px] text-white">
      I agree with the{" "}
      <a href="#" className="text-white underline text-[12px]">
        Terms and Conditions
      </a>
    </label>
  </div>
{errorMessage && <p className="text-white  w-[320px]">{errorMessage}</p>}


{showRegistr ?(
           <div className="flex w-full items-center px-[120px]">
           <button className="w-full  items-center p-2 font-bold bg-white  inline-block text-[#245FB1] cursor-not-allowed rounded-full">Register</button>
         </div>

):(
  <div className="flex w-full items-center px-[120px]">
           <button className="w-full  items-center p-2 font-bold bg-white  inline-block text-[#245FB1] rounded-full" onClick={handleRegister}>Register</button>
         </div>
)}
  </div>
)}
<div className="text-white font-bold flex items-center justify-center"><h2>Have an account ? <Link to="/login"><span class="text-[#FFF500] underline decoration-2">Login</span></Link></h2></div>


      </div>
    )
    }
   
    </div>
  </div>

 <div  className="w-[50%] flex justify-end items-center">
      <img src={Image} alt="" className=" max-w-[525px]"/>
    </div>
   </main>
    </>
  
  );
};

export default signup;
