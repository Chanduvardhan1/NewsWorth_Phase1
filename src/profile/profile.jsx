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
import logout1 from '../../src/assets/Images/dashboard/power-off.png'
import x from '../../src/assets/Images/dashboard/cross-button.png'
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
const [selectedFile, setSelectedFile] = useState(null);

const [photo, setPhoto] = useState(''); // State to store the image URL
const [loading, setLoading] = useState(true); // State to manage loading status
const [error, setError] = useState(null); // State to handle error
const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

// Fetch profile image from the server
const fetchProfileImage = async () => {
  try {
    const response = await fetch(`${URL}/view-image?user_id=${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGFuZHUgdmFyZGhhbiBrIiwiZXhwIjoyNTM0MDIzMDA3OTl9.CRxkCosImYs7S4rSYKl8ISvNqTadNTVx7aeKcs_aV0E',
        'accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.response === 'success') {
        setPhoto(data.url); // Set the image URL from the response
      } else {
        setError('Failed to load image');
      }
    } else {
      setError('Failed to fetch image');
    }
  } catch (error) {
    setError('Error fetching image: ' + error.message);
  } finally {
    setLoading(false);
  }
};

// Upload image to the server
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${URL}/upload-image?user_id=${userId}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGFuZHUgdmFyZGhhbiBrIiwiZXhwIjoyNTM0MDIzMDA3OTl9.CRxkCosImYs7S4rSYKl8ISvNqTadNTVx7aeKcs_aV0E',
      },
      body: formData,
    });

    if (response.ok) {
      // After successfully uploading, fetch the updated image
      fetchProfileImage();
    } else {
      setError('Failed to upload image');
    }
  } catch (error) {
    setError('Error uploading image: ' + error.message);
  }
};

const handleIconClick = () => {
  document.getElementById('fileInput').click();
};

// Handle file selection
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadImage(file);
  }
};

useEffect(() => {
  fetchProfileImage();
}, []);

useEffect(() => {
  fetchUserProfile();
}, []);

const deleteImage = async () => {
  try {
    const response = await fetch(`${URL}/remove-image?user_id=${userid}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGFuZGhhbiBrIiwiZXhwIjoyNTM0MDIzMDA3OTl9.CRxkCosImYs7S4rSYKl8ISvNqTadNTVx7aeKcs_aV0E',
        'accept': 'application/json',
      },
    });

    if (response.ok) {
      // Clear the photo state after successful deletion
      setPhoto('');
      setError(null); // Reset any errors
    } else {
      setError('Failed to delete image');
    }
  } catch (error) {
    setError('Error deleting image: ' + error.message);
  }
};
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
const handleBackToLogin = () => {
  // Retrieve the authentication token from AuthContext or localStorage
  const authToken = localStorage.getItem('authToken') || null;

  fetch(`${URL}/usr_logout/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`, // Include the authentication token
    },
    body: JSON.stringify({
      user_id: userId, // Ensure user.userId is available
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Logout response:', data);
      if (data.response === 'success') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user_id');
        navigate("/login");// Redirect to login page
      } else {
        console.error('Logout failed:', data.response_message);
        // Handle unsuccessful logout (optional)
      }
    })
    .catch(error => {
      console.error('Error logging out:', error);
      // Handle errors appropriately
    });
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
const openModal = () => {
  setIsModalOpen(true);
};

// Close the modal
const closeModal = () => {
  setIsModalOpen(false);
};
  return (
    <>
   <Landing/>
   <ToastContainer />
   
   

    <div className="">

    <div className="flex p-4 pl-[60px] justify-between items-center ">
      <h1 className="blue-color font-bold text-[32px]">My Profile</h1>
      <img src={logout1} alt="" onClick={handleBackToLogin} className="w-[25px] h-[25px] cursor-pointer" />
    </div>
    <div className=" flex flex-row w-full  gap-[20px] ">

<div className="flex flex-col items-center gap-3 w-[20%]">
<div className="relative w-[100px] h-[100px]">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img
          src={photo}
          alt="Profile"
          onClick={openModal}
          className="w-full h-full rounded-[50px]"
        />
      )}

      {/* Hidden file input for selecting image */}
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      
      {/* Camera icon to trigger file input */}
      {/* <img
         src={camer} 
        alt="camera icon"
         
        className="absolute bottom-0 right-0 w-[25px] h-[25px] rounded-full cursor-pointer"
        onClick={handleIconClick}
      /> */}
      {/* <button
        onClick={deleteImage}
        className="absolute bottom-0 left-0 w-[25px] h-[25px] rounded-full bg-red-500 text-white"
        title="Delete Image"
      >
        X
      </button> */}
       {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
         <div class="flex items-center justify-center min-h-screen ">
  <div class="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-xs">
    <div class="relative">
      <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
        <img src={photo} alt="Profile" class="w-full h-full object-cover"/>
      </div>
      
      <div class="absolute top-[-15px] right-[-15px] flex space-x-2">
        <button class="bg-gray-600 p-2 rounded-full text-white hover:bg-gray-500">
        
          <img src={x} alt="" class="h-5 w-5" />
        </button>
      </div>
    </div>
    
    <h2 class="text-center text-xl font-semibold mt-4">Profile photo</h2>
    
    <div class="mt-4 flex justify-between">
      <button class="bg-gray-700 px-4 py-2 rounded text-sm text-white hover:bg-gray-600"  onClick={handleIconClick}>Add photo</button>
      {/* <button class="bg-gray-700 px-4 py-2 rounded text-sm text-white hover:bg-gray-600">Add photo</button> */}
      {/* <button class="bg-gray-700 px-4 py-2 rounded text-sm text-white hover:bg-gray-600">Frames</button> */}
      <button class="bg-red-600 px-4 py-2 rounded text-sm text-white hover:bg-red-500">Delete</button>
    </div>
  </div>
</div>

        </div>
      )}
    </div>
  <div>
    <h1 className=" font-bold text-[18px]">{data1.first_name} {data1.middle_name} {data1.last_name} </h1>
  </div>
</div>

  <div className="flex flex-col gap-[10px] ">
    <div className=" flex gap-[15px] justify-center">
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
                <div className=" flex gap-[15px] justify-center">
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
            className="w-full  rounded-[10px]   placeholder:text-[#CCCCCC]"

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
<div className=" flex gap-[15px] justify-center">
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
          <InputLabel id="City">City</InputLabel>
          <Select
         className="w-full  rounded-[10px]   placeholder:text-[#CCCCCC]"
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
<div className=" flex gap-[15px] justify-center">
       <FormControl variant="standard" required className="w-full mb-4">
          <InputLabel id="District" className="bg-[#FFFFFF] placeholder:text-[#CCCCCC]">District</InputLabel>
          <Select
         className="w-full  rounded-[10px]  placeholder:text-[#CCCCCC]"

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

<div className=" flex gap-[15px] justify-center">
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
                <div className=" flex gap-[15px] justify-end items-end">
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
<div className=" flex gap-[15px] justify-center">
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
<div className=" flex gap-[15px] justify-center">
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
