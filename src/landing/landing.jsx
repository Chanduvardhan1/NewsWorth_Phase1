import React, { useState, useEffect ,useRef} from "react";
import logo from "../../src/assets/Images/dashboard/NEWS WORTH FINAL.png"

import ball from '../../src/assets/Images/landing/notification 1.png'
import defaultPhoto from '../../src/assets/Images/landing/pic.jpg'
import { useNavigate, useLocation } from "react-router-dom";
import card from '../../src/assets/Images/dashboard/cart3.jpeg'
import { URL } from "../url";
import { useTimer } from "../timerContext";

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
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryName, setCategoryName] = useState('Unknown');
  const { timeLeft } = useTimer(); // Access timeLeft from context

  const formatTime = (time) => {
    if (time === null) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(() => {
    const storedCategoryName = localStorage.getItem('categoryName') || 'Unknown';
    console.log('Retrieved Category Name:', storedCategoryName); // Debugging
  
    setCategoryName(storedCategoryName); // Update state with the latest value
  }, []); // Runs once on component mount
  

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const token = 'YOUR_AUTHORIZATION_TOKEN_HERE';
  
    try {
      const response = await fetch(`${URL}/search_content?query=${encodeURIComponent(searchQuery)}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: '',
      });
  
      if (!response.ok) {
        throw new Error('Search request failed');
      }
  
      const data = await response.json();
      
      
      if (data.response === "fail") {
        navigate('/search', { state: {noDataMessage: data.response_message } });
      } else {
        navigate('/search', { state: { videoData: data.response_message, ImageData: data.response_message, cardData: data.response_message } });
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

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
      // setError('Error fetching image: ' + error.message);
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
  const handleorders = () => {
    navigate('/myorder');
  };
  const handlecart = () => {
    navigate('/cart'); // Navigate to the selected path
  };
  // const storedCartCount = localStorage.getItem("cart_count");
  const storedCartCount = localStorage.getItem('totalCartItems');

  return (
    <div className=" fixed w-full top-0 z-50">
   <div className=" relative">
<div className=" w-full flex justify-between p-[5px] px-[20px] shadow-md bg-white ">
    <div className="flex justify-center items-center">
        <div>
        <img src={logo} alt="" onClick={handleNavigation} className=" cursor-pointer w-[150px] h-[50px]" />
        </div>
        <div>
        {/* <h1 className="text-[25px] font-bold cursor-pointer text-[#0f2b9fd9] " onClick={handleNavigation}>News<span className="text-[25px] font-bold cursor-pointer text-[#ce003d]" >Worth</span></h1> */}

        </div>
    </div>
  
    <div className="flex justify-center items-center gap-5 ">
    <div className=" grid-flow-row grid items-center">
        
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          id="default-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:w-[400px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </form>
    </div>
    
        </div>
      <div>
        <img src={ball} className="w-[20px] h-[20px]" alt="" />
      </div>
      <div
      onClick={toggleDropdown}
       className="flex cursor-pointer justify-center gap-[10px] bg-gray-100 rounded-xl p-1 px-4">
      <div   onClick={toggleDropdown} >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img
        src={photo} 
          alt="Profile"
          className=" w-[45px] h-[45px] cursor-pointer rounded-full z-10"
           onClick={toggleDropdown} 
        />
      )}
        </div>
        <div>
            <h1 className=" cursor-pointer red-color" ><span  className=" text-[14px] font-bold cursor-pointer blue-color">{userName}</span> </h1>
            <p className=" cursor-pointer text-[14px]"   >User ID: {userId}</p>
        </div>
        </div>
        <div className=" flex flex-col justify-center items-center">

       
       <div className="relative w-[40px] h-[35px] cursor-pointer" onClick={handlecart}>
  <img src={card} alt="" className="w-full h-full object-cover" />
  <p className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold">
    {storedCartCount}
  </p>
</div>
{timeLeft !== null && storedCartCount > 0 &&(
        <p className="text-red-500 text-[12px]">Time Left: {formatTime(timeLeft)}</p>
      )}  </div>
    </div>
</div>
{isDropdownOpen && (
        <div ref={dropdownRef} className=" w-[16%] text-[14px] inline-block text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none absolute z-50 right-[0px] top-[70px]">
          <div>
            <button className="flex  items-center w-full px-4 py-2 text-sm font-medium text-gray-700">
              <img
                src={photo}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="flex flex-col items-start">
                <div className="text-sm font-bold">{userName}</div>
                <div className="text-xs text-gray-500">{categoryName}</div>
              </div>
            </button>
          </div>
          <div className="border-t border-gray-200"></div>

          <div className="flex justify-start px-4 m-2">
            <button className="flex justify-start" onClick={handleProfile}>View Profile</button>
          </div>
          {/* <div className="border-t border-gray-200"></div>

          <div className="flex justify-start px-4 m-2">
            <button className="flex justify-start" onClick={handleorders}>My Orders</button>
          </div> */}
          <div className="border-t border-gray-200 "></div>
          <div className=" flex justify-start m-2 px-4 ">
            <button onClick={handleBackToLogin} className="block px-4 py-2 text-sm text-white font-semibold hover:bg-blue-300 bg-red-500 rounded-full p-2 my-2">
              LogOut
            </button>
          </div>
        </div>
      )}

   </div>
    </div>
  );
};

export default landing;
