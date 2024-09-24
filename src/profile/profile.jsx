import React, { useState,useEffect } from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/IMG_20240906_161755.jpg'
import Landing from "../landing/landing";
import { useNavigate } from "react-router-dom";
import { URL } from "../url";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom';
import photo from '../../src/assets/Images/landing/pic.jpg'
import camer from '../../src/assets/Images/home/add-photo.png'
const signup = () => {
  const [data1, setdata1] = useState('');
  const [showRegistr, setShowRegistr] = useState(true);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  const [errorMessage, setErrorMessage] = useState('');



// ----------register--------


 
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');

const [message, setMessage] = useState('');
const [userType, setUserType] = useState([]);

const [locationDetails, setLocationDetails] = useState([]);
const [selectedCity, setSelectedCity] = useState('');
const [selectedDistrict, setSelectedDistrict] = useState('')
const [uniqueDistricts, setUniqueDistricts] = useState([]);


const [userid, setUserid] = useState('');
const [firstname, setFirstname] = useState('');
const [middlename, setMiddlename] = useState('');
const [lastname, setLastname] = useState('');
const [useremail, setUseremail] = useState('');
const [userphonenumber, setUserphonenumber] = useState('');
const [country, setCountry] = useState('');
const [gender, setGender] = useState('');
const [dateofbirth, setDateofbirth] = useState('');

const [useraddressline1, setUseraddressline1] = useState('');
const [useraddressline2, setUseraddressline2] = useState('');
const [isEditable, setIsEditable] = useState(false);
const userId = location.state?.user_id || localStorage.getItem("userId");

useEffect(() => {
  fetchUserProfile();
}, []);

const fetchUserProfile = async () => {
  try {
    const response = await fetch(`${URL}/get_prfl_dtls?user_id=${userId}`,{
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGFuZHUgdmFyZGhhbiBrIiwiZXhwIjoyMDQwNzI0NDk4fQ.RnK47QiAmU0Xmt7hv10c8KrWpLz6Uj9Vvtmt4A0G0_M',
      },
      body: ''
    });

    const data = await response.json();
    if (data.response === 'success') {
      setdata1(data.response_message)
      setUserid(data.response_message.user_id);
      setFirstname(data.response_message.first_name);
      setMiddlename(data.response_message.middle_name);
      setLastname(data.response_message.last_name);
      setUseremail(data.response_message.user_email);
      setUserphonenumber(data.response_message.user_phone_number || ''); // Ensure empty value if null
      setCountry(data.response_message.country_name);
      setGender(data.response_message.gender);
      setDateofbirth(data.response_message.date_of_birth);

      setPincode(data.response_message.pin_code);
      setSelectedDistrict(data.response_message.district_name); // Ensure empty value if null
      setState(data.response_message.state_name);
      setSelectedCity(data.response_message.location_name);

      setUseraddressline1(data.response_message.user_address_line_1);
      setUseraddressline2(data.response_message.user_address_line_2);
    } else {
      console.error('Error fetching user profile:', data.message);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};
const handleSaveClick = async () => {
  const userProfileData = {
    user_id:userid,
    first_name:firstname,
    middle_name:middlename,
    last_name:lastname,
    gender:gender,
    user_email:useremail,
    user_phone_number:userphonenumber,
    user_type: "Journalist", // Assuming this is static or dynamically set elsewhere
    date_of_birth:dateofbirth,
    country_name:country,
    user_address_line_1: useraddressline1,
    user_address_line_2: useraddressline2,
    pin_code: pincode,
    location_name: selectedCity,
    district_name: selectedDistrict,
    state_name: state
  };

  try {
    const response = await fetch(`${URL}/edt_prfl_dtls`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGFuZHUgdmFyZGhhbiBrIiwiZXhwIjoyMDQwNzI0NDk4fQ.RnK47QiAmU0Xmt7hv10c8KrWpLz6Uj9Vvtmt4A0G0_M',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userProfileData),
    });

    const data = await response.json();
    if (data.response === 'success') {
      toast.success(data.response_message);

      // Handle success, maybe show a success message or reset the isEditable flag
      setShowRegistr(true)
      setIsEditable(false);
    } else {
      // Handle error response
      console.error('Error updating user profile:', data.message);
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
  }
};
const handleEditClick = () => {
  setIsEditable(true);
  setShowRegistr(false)
};
const handleCancel = () =>{
  setShowRegistr(true)
  setIsEditable(false);
}

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
      setUserphonenumber(inputValue);
    }
  };


const handleEmailChange = (e) => {
  const value = e.target.value.toLowerCase(); // Convert input to lowercase
  setUseremail(value);
};


const fetchLocationDetails = async () => {
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
  if (pincode && pincode.length === 6) {
    fetchLocationDetails();
  }
}, [pincode]);

  return (
    <>
   <Landing/>
   <ToastContainer />
   
   

    <div className="">

    <div className="flex p-4 pl-[60px] ">
      <h1 className="blue-color font-bold text-[32px]">My Profile</h1>
    </div>
    <div className=" flex flex-row w-full  gap-[20px] ">

<div className="flex flex-col items-center gap-3 w-[20%]">
<div className="relative w-[100px] h-[100px]">
  <img src={photo} alt="" className="w-full h-full rounded-[50px]" />
  
  {/* Camera icon */}
  <img
    src={camer} 
    alt="camera icon"
    className="absolute bottom-0 right-0 w-[25px] h-[25px] rounded-full"
  />
</div>
  <div>
    <h1 className=" font-bold text-[18px]">{data1.first_name} {data1.middle_name} {data1.last_name} </h1>
  </div>
</div>

  <div className="flex flex-col gap-[10px] ">
    <div className=" flex gap-[5px] justify-center">
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="standard"
                    className="w-full mb-4 px-7 py-4  bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    disabled={!isEditable}


                  />

                  <TextField
                    id="middleName"
                    label="Middle Name"
                    variant="standard"
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

                    value={middlename}
                    onChange={(e) => setMiddlename(e.target.value)}
                    disabled={!isEditable}
                
                    
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="standard"
                    required            
                    className="w-full mb-4 px-7 py-4  bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    disabled={!isEditable}
                    // InputProps={{
                    //   style: {
                        
                    //     height: "50px",
                    //     border: "none",
                    //     borderRadius: "10px",
                    //   },
                    //   autoComplete: "off",
                    // }}
                    name="last_name"
                  />
                </div>
                <div className=" flex gap-[5px] justify-center">
<TextField
      type="date"
      id="Date of Birth" 
      label="Date of Birth" 
      focused
      value={dateofbirth}
      onChange={(e) => setDateofbirth(e.target.value)}
      disabled={!isEditable}
     variant="standard"
     className="w-full  px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
      // InputProps={{
      //   style: {
       
        
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }}
       />
       <FormControl variant="standard" required className="w-full mb-4">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={!isEditable}
            label="Gender"
            className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

            // style={{
              
            //   height: "50px",
            //   borderRadius: "10px",
            // }}
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
     id="Pincode" 
     label="Pincode" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
     value={pincode}
     disabled={!isEditable}
     onChange={handlePincodeChange}
     onBlur={fetchLocationDetails}
     variant="standard"
     required
      // InputProps={{
      //   style: {
       
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }}
       />
      
      <FormControl variant="standard" required className="w-full mb-4">
          <InputLabel id="gender-label">City</InputLabel>
          <Select
         className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
         value={selectedCity}
         onChange={(e) => setSelectedCity(e.target.value)}
            labelId="City"
            label="City"
            disabled={!isEditable}
            // style={{
              
            //   height: "50px",
            //   borderRadius: "10px",
            // }}
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
<div className=" flex gap-[5px] justify-center">
       <FormControl variant="standard" required className="w-full mb-4">
          <InputLabel id="gender-label">District</InputLabel>
          <Select
         className="w-full  rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

            labelId="District"
            label="District"
            disabled={!isEditable}
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
        
          
          >
            <MenuItem value="">
              {/* <em>None</em> */}
            </MenuItem>
            {uniqueDistricts.map((district, index) => (
              <MenuItem key={index} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
       <TextField
     id="State" 
     label="State" 
     value={state}
     disabled={!isEditable}
     onChange={(e) => setState(e.target.value)}

     variant="standard"
    

     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     required
      // InputProps={{
      //   style: {
       
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }}
       />
</div>

<div className=" flex gap-[5px] justify-center">
<TextField
     id="Country" 
     label="Country" 
     variant="standard"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={country}
     onChange={(e) => setCountry(e.target.value)}
     disabled={!isEditable}
      // InputProps={{
      //   style: {
       
          
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }} 
      />
      
</div>
                <div className=" flex gap-[5px] justify-end items-end">
<TextField
     id="Mobile" 
     label="Mobile" 
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC]"

     variant="standard"
     value={userphonenumber}
     onChange={handleMobileChange}
     disabled={!isEditable} 
      // InputProps={{
      //   style: {
       
          
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   <img src="src\assets\Images\signup\iphone.png" alt="" className="w-[18px] text-blue-800" />

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }} 
      />
      <p>or</p>
       <TextField
     id="Email" 
     label="Email" 
     variant="standard"
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={useremail}
     onChange={handleEmailChange}
     disabled={!isEditable}
      // InputProps={{
      //   style: {
       
          
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   <img src="src\assets\Images\login\envelope.png" alt="" className="w-[25px] text-blue-800" />

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }} 
      />

</div>
<div className=" flex gap-[5px] justify-center">
<TextField
     id="Country" 
     label="User address line 1" 
     variant="standard"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={useraddressline1}
     onChange={(e) => setUseraddressline1(e.target.value)}
     disabled={!isEditable}
      // InputProps={{
      //   style: {
       
          
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }} 
      />
      
</div>
<div className=" flex gap-[5px] justify-center">
<TextField
     id="Country" 
     label="User address line 2" 
     variant="standard"
     required
     className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

     value={useraddressline2}
     onChange={(e) => setUseraddressline2(e.target.value)}
     disabled={!isEditable}
      // InputProps={{
      //   style: {
       
          
      //     height: "50px",
      //     borderRadius: "10px",
      //   },
      //   endAdornment: (
      //     <div
            
      //     >
      //   {/* <img src="images\home\signup\password.png" alt="" className="w-[25px] text-blue-800" /> */}

      //     </div>
      //   ),
      //   autoComplete: "off",
      // }} 
      />
      
</div>
{showRegistr ?(
           <div className="flex justify-end">
           <button className="primary-btn" onClick={handleEditClick}>Edit</button>
         </div>

):(
  <div className="flex justify-between ">
  <div className="">
  <button className="primary-btn"onClick={handleCancel}>Cancel</button>
</div>
  <div className="">
           <button className="primary-btn"onClick={handleSaveClick} >Save</button>
         </div>
         </div>
)}
<div className="flex justify-between"> 
  <div className="">

   {message && <p className="text-red-500  w-[320px]">{message}</p>}
  </div>


</div>



{errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}



  </div>



      
  
   
    </div>
  </div>

 {/* <div  className="w-[50%] flex justify-center items-center">
      <img src={home} alt="" width={500}  height={500} className="hover:duration-300 hover:scale-105 "/>
    </div> */}

    </>
  
  );
};

export default signup;
