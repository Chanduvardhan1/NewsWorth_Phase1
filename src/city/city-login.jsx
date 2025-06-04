import React, { useState, useEffect, useRef,useContext} from 'react';
import axios from 'axios';
import { MapPinned } from 'lucide-react';
import { Haze } from 'lucide-react';
import { Power } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";
import { URL } from "../url";
import { AuthContext } from "../Authcontext/AuthContext";

function cityLogin(){
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDate, setCurrentDate]=useState(new Date());
  const navigate = useNavigate();
  // const userName = location.state?.user_name ||localStorage.getItem("userName");
  const userName = location?.state?.user_name || localStorage.getItem("userName") || "Default User";
  const userId = location?.state?.user_id || localStorage.getItem("userId");
const [isDropdownOpen, setDropdownOpen] = useState(false);
const dropdownRef = useRef(null); // Create a ref for the dropdown
const [categoryName, setCategoryName] = useState('Unknown');
 const { isAuthenticated, authToken, logout } = useContext(AuthContext);
const storedCartCount = localStorage.getItem('totalCartItems');

const handlecart = () => {
    navigate('/cart'); // Navigate to the selected path
  };

const handleProfile = () => {
    navigate('/profile'); // Navigate to the selected path
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
          logout();
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
    const storedCategoryName = localStorage.getItem('categoryName') || 'Unknown';
    console.log('Retrieved Category Name:', storedCategoryName); // Debugging
  
    setCategoryName(storedCategoryName); // Update state with the latest value
  }, []); // Runs once on component mount

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


  useEffect( ()=>{
    const intervalId= setInterval(()=>{
        setCurrentDate(new Date());
    },1000);
     return () => clearInterval(intervalId);
  },[])
    const formattedDateTime = currentDate.toLocaleDateString('en-GB', {
  weekday: 'long',  // full name of the day (e.g. 'Monday')
  day: 'numeric',   // numeric day (e.g. '3')
  month: 'long',    // full month name (e.g. 'June')
  year: 'numeric',  // full year (e.g. '2025')
}); // You can customize the format
  // Function to get the user's location
  const dateWithComma = `${formattedDateTime.split(' ')[0]}, ${formattedDateTime.split(' ').slice(1).join(' ')}`;
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          setError('Failed to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Fetch the weather data when location is available
  useEffect(() => {
    getLocation();
  }, []);

  // Function to fetch weather data
  const fetchWeather = async () => {
    if (location) {
      try {
        setLoading(true);
        setError(null);

        const apiKey = 'f7ff2e93d1e383c91b8de7ce65375ed0';  // Replace with your OpenWeatherMap API key
        const { latitude, longitude } = location;

        // Fetch weather data from OpenWeatherMap
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; // units=metric for Celsius
        const weatherResponse = await axios.get(weatherUrl);

        setWeatherData(weatherResponse.data);

        // Extract city name from the weather data response
        setCity(weatherResponse.data.name);

      } catch (err) {
        setError('Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Set up a polling mechanism to refresh the weather data at regular intervals
  useEffect(() => {
    if (location) {
      fetchWeather(); // Initial fetch on load

      const intervalId = setInterval(() => {
        fetchWeather(); // Refresh the data every 5 minutes
      }, 5 * 60 * 1000); // 5 minutes

      // Cleanup the interval on unmount or when location changes
      return () => clearInterval(intervalId);
    }
  }, [location]);

  if (loading) {
    return <div>Loading your location and weather...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  const { main } = weatherData;

  return (
    <div className="fixed top-0 left-0 w-full bg-[#EFF7FF] h-14 flex items-center z-50 shadow-md justify-between">
    <div className="weather flex ml-32 items-center space-x-2 text-sm text-gray-800">
           <p className='ml-2 mr-2'><Haze/></p>
            <p>{main.temp}°C  <span  className='mr-2 ml-1'> {city} </span></p>
            {/* <p>{<MapPinned className='ml-2 mr-2'/>}</p>
            <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p> */}
            <p>{<Calendar size={20} className='mr-1 ' />}</p>
            <p>{dateWithComma}</p>
        </div>
        <div className="items flex gap-6 justify-center items-center">
          <div className='w-36 h-10 bg-white text-black rounded-md flex items-center justify-center space-x-2  cursor-pointer'
        onClick={handleProfile}>
          <User/>
          <span>{userName}</span>
        </div>
         <div className="cart flex  gap-2 cursor-pointer bg-white w-auto h-10 items-center justify-center rounded-md p-2" onClick={handlecart} >
          <ShoppingCart/>
          <p className='bg-[#245FB1] text-white w-5 h-5 rounded-3xl flex items-center justify-center'>{storedCartCount}</p>
        </div>
        <div className='log-out flex w-24 mr-12 h-10 justify-center items-center  '>
          <button onClick={handleBackToLogin} className='flex '><Power size={18} className='mr-2 mt-1'/>LogOut</button>
        </div>
        </div>
        
        {/* {isDropdownOpen && (
        <div ref={dropdownRef} className=" w-[16%] text-[14px] inline-block text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none absolute z-50 right-[10cm] top-[70px]">
          <div>
            <button className="flex  items-center w-full px-4 py-2 text-sm font-medium text-gray-700">
              <img
                src={<User/>}
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
          <div className="border-t border-gray-200"></div>

          <div className="flex justify-start px-4 m-2">
            <button className="flex justify-start" onClick={handleorders}>My Orders</button>
          </div>
          <div className="border-t border-gray-200 "></div>
          <div className=" flex justify-start m-2 px-4 ">
            <button onClick={handleBackToLogin} className="block px-4 py-2 text-sm text-white font-semibold hover:bg-blue-300 bg-red-500 rounded-full p-2 my-2">
              LogOut
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
export default cityLogin;