import React, { useState, useEffect ,useRef} from "react";
import logo from '../../src/assets/Images/home/NewsWorth.png'
import ball from '../../src/assets/Images/landing/bell.png'
import defaultPhoto from '../../src/assets/Images/landing/pic.jpg'
import { useNavigate, useLocation } from "react-router-dom";
import card from '../../src/assets/Images/dashboard/add-to-cart.png'
import { URL } from "../url";

const landing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.user_id || localStorage.getItem("userId");
  const userName = location.state?.user_name ||localStorage.getItem("userName");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown
  const [photo, setPhoto] = useState(''); // State to store the image URL
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle error


  const fetchProfileImage = async () => {
    const authToken = localStorage.getItem('authToken') || null;

    try {
      const response = await fetch(`${URL}/view-image?user_id=${userId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`,
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
        setPhoto(defaultPhoto);
      }
    } catch (error) {
      setError('Error fetching image: ' + error.message);
      setPhoto(defaultPhoto);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProfileImage();
  }, []);
  
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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleNavigation = () => {
    navigate('/dashboard'); // Navigate to the selected path
  };
  const handleProfile = () => {
    navigate('/profile'); // Navigate to the selected path
  };
  const handlecart = () => {
    navigate('/cart'); // Navigate to the selected path
  };
  return (
    <div>
   <div className=" relative">
<div className=" w-full flex justify-between p-[5px] shadow-md ">
    <div className="flex justify-center items-center">
        <div>
        <img src={logo} alt="" onClick={handleNavigation} className=" cursor-pointer" />
        </div>
        <div>
        <h1 className="text-[25px] font-bold cursor-pointer blue-color  " onClick={handleNavigation}>News<span className="text-[25px] font-bold cursor-pointer red-color  ">Worth</span></h1>

        </div>
    </div>
  
    <div className="flex justify-center items-center gap-5 ">
    <div className=" grid-flow-row grid items-center">
        
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class=" w-full lg:w-[500px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        </div>
    
        </div>
      <div>
        <img src={ball} className="w-[20px] h-[20px]" alt="" />
      </div>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img
        src={photo} 
          alt="Profile"
          className=" w-[45px] h-[45px] cursor-pointer rounded-full" onClick={toggleDropdown} 
        />
      )}
        </div>
        <div>
            <h1 className=" cursor-pointer red-color" >Welcome <span  className=" font-bold cursor-pointer blue-color">{userName}</span> </h1>
            <p className=" cursor-pointer"   >User ID: {userId}</p>
        </div>
       
        <div>
            <img src={card} onClick={handlecart} alt="" className=" w-[25px] h-[25px] cursor-pointer" />
        </div>
    </div>
</div>
{isDropdownOpen && (
        <div     ref={dropdownRef} className=" w-[25%] inline-block text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none absolute z-10 right-[180px] top-[70px]">
          <div>
            <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700">
              <img
                src={photo}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <div className="text-sm font-bold">{userName}</div>
                <div className="text-xs text-gray-500">Content Creator</div>
              </div>
            </button>
          </div>

          <div className="flex justify-center px-4 py-1 border-[1px] border-blue-500 rounded-full m-2">
            <button className="flex justify-center" onClick={handleProfile}>View Profile</button>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="py-1">
            <button onClick={handleBackToLogin} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sign Out
            </button>
          </div>
        </div>
      )}

   </div>
    </div>
  );
};

export default landing;
