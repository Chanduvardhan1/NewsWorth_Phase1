import React, { useState,useEffect ,useContext} from "react";
import Navbar from "../Navbar/navbar";
import home from '../../src/assets/Images/home/IMG_20240906_161755.jpg'
import Landing from "../landing/landing";
import { useNavigate } from "react-router-dom";
import { URL } from "../url";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom';
import defaultPhoto from '../../src/assets/Images/landing/pic.jpg'
import camer from '../../src/assets/Images/home/add-photo.png'
import logout1 from '../../src/assets/Images/dashboard/power-off.png'
import x from '../../src/assets/Images/dashboard/cross-button.png'
import check from '../../src/assets/Images/dashboard/check.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Authcontext/AuthContext";
import play from '../../src/assets/Images/dashboard/play-button (1).png';
import card from '../../src/assets/Images/dashboard/shopping-cart.png';
import Auido from '../../src/assets/Images/dashboard/voice-control.png';
import video from '../../src/assets/Images/dashboard/camera.png';
import camera from  '../../src/assets/Images/dashboard/camera-c.png';
import expanding from '../../src/assets/Images/dashboard/maximize.png'

// import check from '../../src/assets/Images/dashboard/check.png';
import moreImg from '../../src/assets/Images/dashboard/more.png';

const signup = () => {
  const { isAuthenticated, authToken } = useContext(AuthContext);

  const [data1, setdata1] = useState('');
  const [showRegistr, setShowRegistr] = useState(true);

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [openOptionsId, setOpenOptionsId] = useState(null);


  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


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
const [selectedFile, setSelectedFile] = useState(null);

const [photo, setPhoto] = useState(''); // State to store the image URL
const [loading, setLoading] = useState(true); // State to manage loading status
const [error, setError] = useState(null); // State to handle error
const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
const [userType1, setUserType1] = useState("Email");
const [loginMethod, setLoginMethod] = useState('email');
const userId = location.state?.user_id || localStorage.getItem("userId");
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [responseMessage, setResponseMessage] = useState('');
const [oldPassword, setOldPassword] = useState(localStorage.getItem('password'));
const [videoData, setVideoData] = useState([]);
const [imageData, setImageData] = useState([]);
const [activeTab, setActiveTab] = useState('Videos'); // Default to Audio
const [message1, setMessage1] = useState('');
const [orgname, setorgname] = useState('');
const [orgnumber, setorgnumber] = useState('');
const [gstnumber, setgstnumber] = useState('');


// localStorage.setItem('categoryName', 'Newsworth Creator');
// console.log(localStorage.getItem('categoryName')); // Should log: Newsworth Creator

const [categoryName, setCategoryName] = useState('Unknown');

useEffect(() => {
  const storedCategoryName = localStorage.getItem('categoryName') || 'Unknown';
  console.log('Retrieved Category Name:', storedCategoryName); // Debugging

  setCategoryName(storedCategoryName); // Update state with the latest value
}, []); // Runs once on component mount

const handleChangePassword = async (event) => {
  event.preventDefault(); // Prevent page refresh

  const requestBody = {
    user_id: userId,
    old_password: oldPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
  };

  try {
    const response = await fetch(`${URL}/ChangeUserPassword`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok) {
      setResponseMessage('Password changed successfully!');
      setOldPassword(newPassword);
      localStorage.setItem('password', newPassword); // Update the password in local storage
      setNewPassword(''); // Clear new password input
      setConfirmPassword('');
      
    } else {
      setResponseMessage(`Error: ${data.message || 'Failed to change password'}`);
    }
  } catch (error) {
    console.error('Error:', error);
    setResponseMessage('An error occurred while changing password.');
  }
};
const handleChangePasswordCancel =()=>
{
  setNewPassword('');
  setConfirmPassword('');
}
// Fetch profile image from the server
const fetchProfileImage = async () => {
  try {
    const response = await fetch(`${URL}/view-image?user_id=${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'accept': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.response === 'success') {
        setPhoto(data.url); // Set the image URL from the response
      } else {
        setPhoto(defaultPhoto);
      }
    } else {
      setError('Failed to fetch image');
      setPhoto(defaultPhoto);
    }
  } catch (error) {
    setError('Error fetching image: ' + error.message);
    setPhoto(defaultPhoto);
  } finally {
    setLoading(false);
  }
};
const handlePopupToggle = () => {
  setShowPopup(!showPopup);
};
// Upload image to the server
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${URL}/upload-image?user_id=${userId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
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
        Authorization: `Bearer ${authToken}`,
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
        Authorization: `Bearer ${authToken}`,
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
      setorgname(data.response_message.org_name)

      setorgnumber(data.response_message.org_number)     
      setgstnumber(data.response_message.gst_number)
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
    state_name: state,
    user_address_id: 0,
    org_name: orgname,
    org_number: orgnumber,
    gst_number: gstnumber
  };

  try {
    const response = await fetch(`${URL}/edt_prfl_dtls?user_id=${userId}`, {
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
      setMessage1(data.response_message);

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
        localStorage.removeItem("categoryName");

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
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
// Close the modal
const closeModal = () => {
  setIsModalOpen(false);
};

// const uploadContent = async () => {
//   try {
//     const response = await fetch(`${URL}/uploaded_content?user_id=${userId}`, {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${authToken}`,
//       },
//       body: '', // Add payload here if necessary
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     if (data.response === 'success') {
//       setVideoData(data.response_message); 
//       setImageData(data.response_message); // Assuming response_message contains video data
//     }
//     setLoading(false);  // Set loading to false after data is fetched
//     console.log('Response Data:', data);
//   } catch (error) {
//     console.error('Error:', error);
//     setLoading(false);  // Set loading to false in case of an error
//   }
// };

const uploadContent = async () => {
  try {
    const response = await fetch(`${URL}/uploaded_content?user_id=${userId}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.response === 'success' && Array.isArray(data.response_message)) {
      setVideoData(data.response_message);
      setImageData(data.response_message); // Assuming response_message contains video data

    } else {
      setVideoData([]);
      setImageData([]); // Handle non-array response
    }
  } catch (error) {
    console.error('Error:', error);
    setVideoData([]);
    setImageData([]); // Ensure fallback to an empty array on error
  } finally {
    setLoading(false); // Ensure loading is false regardless of success or error
  }
};


useEffect(() => {
  uploadContent();
}, []);

const toggleOptions = (content_id) => {
  setOpenOptionsId(openOptionsId === content_id ? null : content_id);
};
const toggleSidebar = () => {
  setIsOpen(!isOpen);
};
  return (
    <>
   <Landing/>
   <ToastContainer />
   
   

    <div className="">

    <div className="flex p-4 pl-[60px] justify-between items-center ">
      <h1 className="blue-color  text-[25px]">My Profile</h1>
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
    
    <h2 class="text-center text-xl  mt-4">Profile photo</h2>
    
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
    <h1 className="  text-[18px]">{data1.first_name} {data1.middle_name} {data1.last_name} </h1>
    <p className="  text-[14px]">User ID: {userId}</p>
  </div>
</div>

<div className="w-full p-5">
  <div className=" shadow-xl rounded-2xl p-5">
  <div className="relative items-start justify-start flex w-[70%] font-bold">
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'email' ? '' : ''}`}
        onClick={() => setUserType1('Email')}
      >
        Profile
      </div>
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'mobile' ? '' : ''}`}
        onClick={() => setUserType1('Mobile')}
      >
        Address
      </div>
      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'gmail' ? '' : ''}`}
        onClick={() => setUserType1('User Id')}
      >
      Change Password
      </div>
      {categoryName === "Newsworth Creator" && (

      <div
        className={`cursor-pointer blue-color text-[14px] flex-1 text-center py-2 ${loginMethod === 'Content' ? '' : ''}`}
        onClick={() => setUserType1('Content')}
      >
      Content
      </div>
      )}
          {categoryName === "Newsworth Buyer" && (

<div
className={`absolute bottom-0 h-[2px] w-1/3 transition-all duration-300 ${
  userType1 === 'Email' ? 'left-0 bg-blue-500' :
  userType1 === 'Mobile' ? 'left-1/3 bg-blue-500' :
  userType1 === 'User Id' ? 'left-2/3 bg-blue-500' :''

 
}`}
/>
        )}
            {categoryName === "Newsworth Creator" && (

      <div
    className={`absolute bottom-0 h-[2px] w-1/4 transition-all duration-300 ${
      userType1 === 'Email' ? 'left-0 bg-blue-500' :
      userType1 === 'Mobile' ? 'left-1/4 bg-blue-500' :
      userType1 === 'User Id' ? 'left-2/4 bg-blue-500' :

      userType1 === 'Content' ? 'left-3/4 bg-blue-500' : ''
     
    }`}
  />
            )}
    </div>
    <div className="border-[1px] w-[70%] border-gray-100"/>
    {userType1 === 'Email' && (
    <div className="flex w-full items-start mt-5 py-5">
          {categoryName === "Newsworth Creator" && (

        <div className="space-y-1  ">
          <div>
          <h2 className="  text-gray-800">Name</h2>
          <div className="flex gap-[50px] mb-5 items-center">
          <p className=" text-gray-500  ">{data1.first_name} {data1.middle_name} {data1.last_name} </p>

          {/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button> */}
          </div>
      
          </div>
         
          <div className="">
          <div className="flex items-center ">
              <p className=" text-gray-800">  {useremail ? 'Verified email' : userphonenumber ? 'Verified mobile' : 'No contact verified'}</p>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{useremail ? useremail : userphonenumber ? userphonenumber : 'No contact information available'}</p>
              {/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button> */}
              {showPopup && (
               
                <div className="flex flex-col gap-[10px] absolute bg-white p-5 shadow-2xl rounded-xl top-[75px] right-[400px]">
                    <div className="flex justify-end items-center mb-4">
          {/* <h2 className="text-xl  text-gray-800">Change password</h2> */}
          <button  onClick={handlePopupToggle} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
           
            <div className=" flex gap-[15px] justify-end items-end">
            <TextField
                 id="Mobile" 
                 label="Mobile" 
                 className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC]"
            
                 variant="standard"
                 value={userphonenumber}
                 onChange={handleMobileChange}
                 disabled={!isEditable} 
               
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
              {message1 && <p className="text-green-500  w-[320px]">{message1}</p>}

               {message && <p className="text-red-500  w-[320px]">{message}</p>}
              </div>
            
            
            </div>
            
            
            
            {errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}
            
            
            
              </div>
              
              )}            
            </div>
            <div className="flex items-center space-x-2">
              <p className=" text-gray-800">Gender</p>
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{gender}</p>

{/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</button> */}
     
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Data of Birth</p>
              
            </div>
            <div className="flex gap-[50px]">
              <p className=" text-gray-500 ">{dateofbirth}</p>
              <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</button>   
            </div>
 

          </div>
        </div>
)}
    {categoryName === "Newsworth Buyer" && (

        <div className="space-y-1  ">
          <div>
          <h2 className="  text-gray-800">Name</h2>
          <div className="flex gap-[50px] mb-5 items-center">
          <p className=" text-gray-500  ">{data1.first_name} {data1.middle_name} {data1.last_name} </p>

          {/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button> */}
          </div>
      
          </div>
         
          <div className="">
          <div className="flex items-center ">
              <p className=" text-gray-800">  {useremail ? 'Verified email' : userphonenumber ? 'Verified mobile' : 'No contact verified'}</p>
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{useremail ? useremail : userphonenumber ? userphonenumber : 'No contact information available'}</p>
              {/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button> */}
              {showPopup && (
               
                <div className="flex flex-col gap-[10px] absolute bg-white p-5 shadow-2xl rounded-xl top-[75px] right-[400px]">
                    <div className="flex justify-end items-center mb-4">
          {/* <h2 className="text-xl  text-gray-800">Change password</h2> */}
          <button  onClick={handlePopupToggle} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
           
            <div className=" flex gap-[15px] justify-end items-end">
            <TextField
                 id="Mobile" 
                 label="Mobile" 
                 className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC]"
            
                 variant="standard"
                 value={userphonenumber}
                 onChange={handleMobileChange}
                 disabled={!isEditable} 
               
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
              {message1 && <p className="text-green-500  w-[320px]">{message1}</p>}

               {message && <p className="text-red-500  w-[320px]">{message}</p>}
              </div>
            
            
            </div>
            
            
            
            {errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}
            
            
            
              </div>
              
              )}            
            </div>
            
            <div className="flex items-center space-x-2">
              <p className=" text-gray-800">Gender</p>
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{gender}</p>

{/* <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</button> */}
     
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Data of Birth</p>
              
            </div>
            <div className="flex gap-[50px]">
              <p className=" text-gray-500 ">{dateofbirth}</p>
              <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</button>   
            </div>
 

          </div>
        </div>
    )}
      </div>
    )}
    {userType1 === 'Mobile' && (
    <div className="flex w-full items-start mt-5 py-5">
        <div className="  ">
        {categoryName === "Newsworth Creator" && (

          <div className="">
        
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Address Line 1</p>
              
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{pincode},{selectedCity},{selectedDistrict},{state},{country}</p>
                    
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Address Line 2</p>
              
            </div>
            <div className="flex gap-[50px]">
              <p className=" text-gray-500 ">{useraddressline1},{useraddressline2}</p>
              <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              {showPopup && (
               
                <div className="flex flex-col gap-[10px] absolute bg-white p-5 shadow-2xl rounded-xl top-[75px] right-[400px]">
                    <div className="flex justify-end items-center mb-4">
          {/* <h2 className="text-xl  text-gray-800">Change password</h2> */}
          <button  onClick={handlePopupToggle} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
              {message1 && <p className="text-green-500  w-[320px]">{message1}</p>}

               {message && <p className="text-red-500  w-[320px]">{message}</p>}
              </div>
            
            
            </div>
            
            
            
            {errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}
            
            
            
              </div>
              
              )}  
            </div>

          </div>
        )}
    {categoryName === "Newsworth Buyer" && (

          <div className="">
          <div className="flex items-center mt-5">
              <p className=" text-gray-800">Organization Name</p>
              
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{orgname}</p>
                    
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Oeganization Number</p>
              
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{orgnumber}</p>
                    
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">GST Number</p>
              
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{gstnumber}</p>
                    
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Address Line 1</p>
              
            </div>
            <div className="flex mb-5 gap-[50px]">
              <p className=" text-gray-500 ">{pincode},{selectedCity},{selectedDistrict},{state},{country}</p>
                    
            </div>
            <div className="flex items-center mt-5">
              <p className=" text-gray-800">Address Line 2</p>
              
            </div>
            <div className="flex gap-[50px]">
              <p className=" text-gray-500 ">{useraddressline1},{useraddressline2}</p>
              <button   onClick={handlePopupToggle} className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              {showPopup && (
               
                <div className="flex flex-col gap-[10px] absolute bg-white p-5 shadow-2xl rounded-xl top-[75px] right-[400px]">
                    <div className="flex justify-end items-center mb-4">
          {/* <h2 className="text-xl  text-gray-800">Change password</h2> */}
          <button  onClick={handlePopupToggle} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className=" flex gap-[15px] justify-center">
            <TextField
                 id="Organization Name" 
                 label="Organization Name" 
                 className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                 value={orgname}
                 disabled={!isEditable}
                 onChange={(e) => setorgname(e.target.value)}

                 variant="standard"
                 required
              
                   />
                     <TextField
                 id="Organization Name" 
                 label="Organization Number" 
                 className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                 value={orgnumber}
                 disabled={!isEditable}
                 onChange={(e) => setorgnumber(e.target.value)}

                 variant="standard"
                 required
              
                   />
                
            </div>
            <div className=" flex gap-[15px] justify-center">
            <TextField
                 id="Country" 
                 label="GST Number" 
                 variant="standard"
                 required
                 className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
            
                 value={gstnumber}
                 onChange={(e) => setgstnumber(e.target.value)}
                 disabled={!isEditable}
               
                      
                
                  />
                  
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
              {message1 && <p className="text-green-500  w-[320px]">{message1}</p>}

               {message && <p className="text-red-500  w-[320px]">{message}</p>}
              </div>
            
            
            </div>
            
            
            
            {errorMessage && <p className="text-red-500  w-[320px]">{errorMessage}</p>}
            
            
            
              </div>
              
              )}  
            </div>

          </div>
    )}
        </div>
       

       
      </div>
    )}
      {userType1 === 'User Id' && (
      <div className="w-full max-w-md mt-5 py-5 items-start ">
   <div className="flex justify-between items-center mb-4">
     <h2 className="text-xl  text-gray-800">Change password</h2>
 
   </div>

   <form>
     <div className="mb-4">
     
       <div className="relative flex flex-col gap-[10px]">
       <TextField
id="Password" 
label="Old Password" 
type={showPassword ? "text" : "password"}
variant="outlined"
required
className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
value={oldPassword}

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
id="Password" 
label="New Password" 
type={showPassword ? "text" : "password"}
variant="outlined"
required
className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

value={newPassword}
onChange={(e) => setNewPassword(e.target.value)}
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
     </div>
    
     <div className="flex justify-end space-x-4">
       <button onClick={handleChangePasswordCancel}  type="button" className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full">
         Cancel
       </button>
       <button onClick={handleChangePassword} type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 rounded-full">
         Save
       </button>
     </div>
   </form>
 </div>
      )}
       {userType1 === 'Content' && (
      <div className="p-5 ">
        <div className="flex w-full items-center pr-[20px] mb-2">
      {/* Audio Tab */}
    

      {/* Videos Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Videos' ? 'bg-[#e70c0ce0] text-white inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Videos')}
      >
        <img src={video} alt="Video Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Videos</h1>
      </div>

      {/* Images Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Images' ? 'bg-[#e70c0ce0] text-white inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Images')}
      >
        <img src={camera} alt="Image Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Images</h1>
      </div>
      <div
        className={`flex w-full justify-center  items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Audio' ? 'bg-[#e70c0ce0] text-white inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Audio')}
      >
        <img src={Auido} alt="Audio Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Audio</h1>
      </div>
    </div>
    
      {activeTab ==='Videos' &&(
     <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6 cursor-pointer">
     {loading ? (
       <p>Loading...</p> // Show loading message or spinner
     ) : videoData.length === 0 ? (
       <p>No videos available.</p> // Show message when no video data is available
     ) : (
      Array.isArray(videoData) &&
       videoData
         .filter((videoItem) => videoItem.content_type === 'Video') // Filter for videos
         .map((videoItem) => {
           const videoRef = React.createRef();
           return (
             <div
               key={videoItem.content_id}
               className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white"
             >
               {/* Video Section */}
               <div className="relative group">
                 <video
                   ref={videoRef}
                   onMouseEnter={() => handleMouseEnter(videoRef)}
                   onMouseLeave={() => handleMouseLeave(videoRef)}
                   className="w-full h-60 object-cover group-hover:opacity-50 opacity-90 transition-opacity duration-300"
                   muted
                   loop
                   src={videoItem.Video_link}
                 ></video>
                 <div
                   onClick={() => handleVideoClick(videoItem)}
                   className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 >
                   <img
                     src={play}
                     onClick={() => handleVideoClick(videoItem)}
                     alt=""
                     className="w-[20px] h-[20px] text-white group-hover:text-black transition-colors duration-300"
                   />
                 </div>
               </div>
 
               {/* Video Info */}
               <div className="p-4 flex justify-between items-center relative">
                 <img src={video} alt="" className="w-[25px] h-[25px]" />
                 <div className="text-lg" onClick={() => handleVideoClick(videoItem)}>
                   <p className="font-bold text-blue-600">
                     ₹ {videoItem.price}{' '}
                     <span className="text-sm text-gray-500">
                       <span className="line-through text-sm text-gray-500">
                         {videoItem.final_price}
                       </span>{' '}
                       at Discount {videoItem.discount}
                     </span>
                   </p>
                 </div>
 
                 <div className="flex items-center space-x-4">
                   <img
                     onClick={() =>
                       handleAddToCart(
                         videoItem.content_id,
                         videoItem.content_link,
                         videoItem.final_price
                       )
                     }
                     src={card}
                     alt="Add to Cart"
                     className="w-[25px] h-[25px] cursor-pointer"
                   />
                   <img
                     src={moreImg}
                     alt="More options"
                     className="w-[15px] h-[15px] cursor-pointer"
                     onClick={() => toggleOptions(videoItem.content_id)}
                   />
 
                   {openOptionsId === videoItem.content_id && (
                     <div className="absolute top-[20px] right-[24px] bg-gray-100 shadow-lg rounded-md p-2 w-32 z-10 clip-path-custom">
                       <button
                         onClick={() => downloadContent(videoItem.content_id)}
                         className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2"
                       >
                         Download
                       </button>
                       <button
                         onClick={() => deleteContent(videoItem.content_id)}
                         className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2"
                       >
                         Delete
                       </button>
                     </div>
                   )}
                 </div>
               </div>
 
               {/* Description */}
               <div className="flex justify-between px-4">
                 <p className="text-blue-500 font-semibold line-clamp-2 w-[60%] h-12">
                   {videoItem.content_description}
                 </p>
                 <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
                   <p className="text-[12px] line-clamp-1 text-[#ce003d]">
                     {videoItem.age_in_days}
                   </p>
                   <p className="text-[12px] line-clamp-1">{videoItem.gps_location}</p>
                   <p className="text-[12px] text-blue-500">{videoItem.uploaded_by}</p>
                 </div>
               </div>
               <div onClick={() => handleVideoClick(videoItem)} className="px-4 py-4">
              <p className="text-gray-500 line-clamp-2">
                {videoItem.content_description}
              </p>
            </div>
             </div>
           );
         })
     )}
   </div>
     )}
     {activeTab ==='Images' && (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6 cursor-pointer">
  {
    Array.isArray(imageData) &&
  imageData
    .filter((imageItem) => imageItem.content_type === "Image") // Filter to show only images
    .map((imageItem) => {
   return (
     <div key={imageItem.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
       {/* Image Section */}
       <div className="relative group">
         <img
           src={imageItem.Image_link}
           alt={imageItem.title}
           className="w-full h-60 object-cover group-hover:opacity-50 opacity-90 transition-opacity duration-300"
           onClick={() => handleImagesClick(imageItem)}
         />
  <div onClick={() => handleImagesClick(imageItem)} className="absolute top-2 right-2 ">
   <img onClick={() => handleImagesClick(imageItem)} src={expanding} className="w-[20px] h-[20px] text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-125"
 alt="" />
  </div>
         {/* Image Duration Overlay or Other Overlay Info */}
         {/* <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
           {imageItem.overlayText || 'Overlay Text'}
         </div> */}
       </div>

       {/* Image Info */}
       <div className="p-4 flex justify-between items-center">
         {/* Left Icon */}
         <img src={camera}   alt="" className="w-[25px] h-[25px] cursor-pointer" />

         {/* Price Info */}
         <div className="text-lg" onClick={() => handleImagesClick(imageItem)}>
           <p className="font-bold text-blue-600">
           ₹ {imageItem.price}{' '}
             <span className="text-sm text-gray-500">
               <span className="line-through text-sm text-gray-500">{imageItem.final_price}</span> at Discount {imageItem.discount}%
             </span>
           </p>
         </div>

         {/* Right Icon */}
         <img src={card} alt="" onClick={toggleSidebar} className="w-[25px] h-[25px] cursor-pointer" />
       </div>

       {/* Description */}
       <div className="flex justify-between px-4" onClick={() => handleImagesClick(imageItem)}>
       <p className="text-blue-600 font-semibold line-clamp-2 w-[60%] h-12">
           {imageItem.content_description}
         </p>
         <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
           <p className="text-[12px] line-clamp-1 text-[#ce003d]">{imageItem.age_in_days}</p>
           <p className="text-[12px] line-clamp-1">{imageItem.gps_location}</p>
           <p className="text-[12px]  text-blue-600">{imageItem.uploaded_by}</p>
         </div>
       </div>

       {/* Article Text */}
       <div className="px-4 py-4">
         <p className="text-gray-600 line-clamp-2">
           {imageItem.content_description}
         </p>
       </div>
     </div>
   );
 })}
</div>
)}
   </div>
      )}
  </div>

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
