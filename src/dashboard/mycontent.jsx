import React, { useState, useEffect,useRef,useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landing from "../landing/landing";
import { Transition } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import facebook from "../../src/assets/Images/footer/facebook-app-symbol.png"
// import Footer from "../footer/footer";
import { useNavigate } from 'react-router-dom';
import { URL } from "../url";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../Authcontext/AuthContext";
import { useTimer } from "../timerContext";
import audio from "../../src/assets/Images/home/breaking-news-in-2029-5994.mp3"
import icon1 from '../../src/assets/Images/dashboard/musical-note.png';
import image1 from '../../src/assets/Images/home/breaking-news-in-2029-5994.mp3';
import cartIcon from '../../src/assets/Images/dashboard/grocery-store.png';
import Dashboard1 from "./dashboard1";
import imgSrc from '../../src/assets/Images/dashboard/HYD.webp';
import chatImg from '../../src/assets/Images/dashboard/chat.png';
import bookmarkImg from '../../src/assets/Images/dashboard/bookmark.png';
import shareImg from '../../src/assets/Images/dashboard/share.png';
import moreImg from '../../src/assets/Images/dashboard/more.png';
import likeImg from '../../src/assets/Images/dashboard/like.png';
import Filters from "../filters/filters";
import x from "../../src/assets/Images/dashboard/cross-button.png"
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import videoSrc from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import videoSrc1 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import videoSrc2 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import videoSrc3 from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import card from '../../src/assets/Images/dashboard/shopping-cart.png'

import card1 from '../../src/assets/Images/dashboard/shopping-cart.png'

import Auido from '../../src/assets/Images/dashboard/voice-control.png'
import video from '../../src/assets/Images/dashboard/camera.png'
import camera from  '../../src/assets/Images/dashboard/camera-c.png';
import check from '../../src/assets/Images/dashboard/check.png'
import play from '../../src/assets/Images/dashboard/play-button (1).png';
import expanding from '../../src/assets/Images/dashboard/maximize.png'

import { FaPlay,FaArrowDown,FaHeart,FaPause } from "react-icons/fa";


  const mycontent = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const [cardData1, setCardData1] = useState([]);
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const location = useLocation();
    const { user_id } = location.state || {};
    const { isAuthenticated, authToken } = useContext(AuthContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [cartCount, setCartCount] = useState(0); // State for cart count

    const [cartContent, setCartContent] = useState(null); // To store the content when added to the cart
    const [showCartNotification, setShowCartNotification] = useState(false); // For showing the cart notification
const [finalprice,setfinalprice] = useState(null);
const [openOptionsId, setOpenOptionsId] = useState(null);
const userId = location.state?.user_id || localStorage.getItem("userId");
const [openOptionsId1, setOpenOptionsId1] = useState(null);
const [loading, setLoading] = useState(true); // Add loading state
const [activeTab, setActiveTab] = useState('Videos'); // Default to Audio
const [currentIndex, setCurrentIndex] = useState(0);
const [buttonsPerPage, setButtonsPerPage] = useState(6); // Default number of visible buttons
const { startTimer } = useTimer(); 
const [showTimer, setShowTimer] = useState(false);
const [cardData, setCardData] = useState([]);
const [showPopup1, setShowPopup1] = useState(false);
const [error, seterror] = useState('');
const [newPrice, setNewPrice] = useState('');
const [newdiscount, setNewdiscount] = useState('');
const [pricingshow, setPricingshow] = useState(false);
const [selectedContentId, setSelectedContentId] = useState(null);

const [errorprice, seterrorprice] = useState('');


// pricing 
const handlePricingClick = (contentId) => {
    setSelectedContentId(contentId);
    setPricingshow(true);
  };
  const updateCancel = () => {
    setNewdiscount('');
    setNewPrice('');
  }
  const handlex = () =>{
    setPricingshow(false);
  
  }
  
  
  const updatePriceAndDiscount = async () => {
    try {
        const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
        if (!authToken) {
          navigate('/login');
          return;
        }
      const response = await fetch(`${URL}/update-price-discount`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          content_id: selectedContentId,
          new_price: newPrice,
          new_discount: newdiscount,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.response === "success") {
        console.log('Price and discount updated:', data);
        setPricingshow(false); 
        navigate(0);// Close the modal on success
      } else if (data.response === "fail") {
        seterrorprice(data.response_message || 'Failed to update price and discount.');
      }
    } catch (error) {
      console.error('Error updating price and discount:', error);
      seterrorprice('An unexpected error occurred. Please try again later.');
    }
  };
  
  // priceing end


// Add any dependencies if needed
const uploadContent = async () => {
    try {
        const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
        if (!authToken) {
          navigate('/login');
          return;
        }
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
        setImageData(data.response_message); 
        setCardData(data.response_message)// Assuming response_message contains video data
  
      } else {
        setVideoData([]);
        setImageData([]);
        setCardData([]); // Handle non-array response
      }
    } catch (error) {
      console.error('Error:', error);
      setVideoData([]);
      setImageData([]);
      setCardData([]); // Ensure fallback to an empty array on error
    } finally {
      setLoading(false); // Ensure loading is false regardless of success or error
    }
  };
  
  
  useEffect(() => {
    uploadContent();
  }, []);
const downloadContent = async (contentId) => {
  try {
    const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
    if (!authToken) {
      navigate('/login');
      return;
    }
    const response = await fetch(`${URL}/download-content?content_id=${contentId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${authToken}`,

      },
      body: '' // No body needed as per your cURL
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Content downloaded:', data);

      // Create a downloadable link and trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = data.url;
      downloadLink.download = ''; // Add this attribute to force download
      document.body.appendChild(downloadLink); // Append link to body
      downloadLink.click(); // Programmatically click the link to trigger download
      document.body.removeChild(downloadLink); // Remove the link after download

    } else {
      console.error('Error downloading content:', response.status);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
const toggleOptions = (content_id) => {
  setOpenOptionsId(openOptionsId === content_id ? null : content_id);
};
const toggleimage = (content_id) => {
  setOpenOptionsId1(openOptionsId1 === content_id ? null : content_id);
};
const deleteContent = async (contentId) => {
  try {
    const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
    if (!authToken) {
      navigate('/login');
      return;
    }
    const response = await fetch(`${URL}/delete content`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        content_id: contentId
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Content deleted successfully:', data);
      // Handle success (e.g., show a success message or update UI)
    } else {
      console.error('Error deleting content:', response.status);
      // Handle error response (e.g., show an error message)
    }
  } catch (error) {
    console.error('Network error:', error);
    // Handle network error (e.g., show a network error message)
  }
};
useEffect(() => {
  const audioElement = audioRef.current;

  if (audioElement) {
    // Ensure the element exists before attaching the listener
    audioElement.addEventListener('play', handlePlay);

    return () => {
      // Clean up the event listener when the component unmounts
      audioElement.removeEventListener('play', handlePlay);
    };
  }
}, []);
    const togglePlayPause = () => {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleProgressChange = (e) => {
      const audio = audioRef.current;
      const newTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    };
  
    // const formatTime = (time) => {
    //   const minutes = Math.floor(time / 60);
    //   const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    //   return `${minutes}:${seconds}`;
    // };
    const handleVideoClick = (videoItem) => {
      navigate("/watch", { state: {  videoData: videoItem } })
    };
    const handleImagesClick = (imageItem) => {
      navigate(`/Watchimages`,{ state: {  imageData: imageItem } });
    };
    const handlecart = () => {
      navigate(`/cart`);
    };
    // Handle video play on hover
    const handleMouseEnter = () => {
      videoRef.current.play();
    };
  
    // Handle video pause when the mouse leaves
    const handleMouseLeave = () => {
      videoRef.current.pause();
    };
  
  // Function to handle flip
  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleFlip1 = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  
  const handleAddToCart = async (contentId, contentLink, finalprice) => {
    try {
        const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
        if (!authToken) {
          navigate('/login');
          return;
        }
      const response = await fetch(`${URL}/add_to_cart`, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          content_id: contentId,
        }),
      });
  
      const data = await response.json();
  
      // Debugging: Log the response and status to ensure the API response is correct
      console.log("Response status:", response.status);
      console.log("Response data:", data);
  
      // Validate if the response is successful
      if (response.ok && data.response === 'success') {
        // console.log("Video successfully added to cart.");
      
        const isVideo = contentLink?.includes('.mp4') || 
                        contentLink?.includes('.webm') || 
                        contentLink?.includes('.ogg');

                      
        setCartContent({ link: contentLink, isVideo });
        setShowCartNotification(true);
        setfinalprice(finalprice);
      
        await fetchCartItems();
        startTimer();
        setShowTimer(true); 
        return;
      }
  
      // Handle known failure cases (content already in cart)
      if (data.response_message === 'Content already added to cart.') {
        // toast.error('This content is already in your cart.');
        setShowPopup1(true)
        seterror(data.response_message)
        return;
      }else if (data.response === `fail` && data.response_message === `The content you're trying to add is locked at the moment. Please try again later.`){
        setShowPopup1(true)
        seterror(data.response_message)
        // toast.error(`The content you're trying to add is locked at the moment. Please try again later.`);
        return;
      }
  
      // If none of the above conditions match, log and show a generic error
      console.error('Unexpected response:', data);
      // toast.error('Failed to add content to cart.');
      setShowPopup1(true)
      seterror('Failed to add content to cart.')
      return;
    } catch (error) {
      // Handle any network or other request-related errors
      console.error('Request error:', error);
      setShowPopup1(true)
      seterror('An error occurred while adding to the cart.')
      return;
      // toast.error('An error occurred while adding to the cart.');
    }
  };
  const fetchCartItems = async () => {
    try {
        const authToken = localStorage.getItem("authToken"); // Retrieve the auth token from localStorage
        if (!authToken) {
          navigate('/login');
          return;
        }
      const response = await fetch(
        `${URL}/total_cart_items?user_id=${userId}`,
        {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            Authorization: `Bearer ${authToken}`,

          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }

      const data = await response.json();
      setCartCount(data.response_message);
      localStorage.setItem('totalCartItems',data.response_message );

    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);
  
  
  


  // Number of buttons visible at once
  const updateButtonsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setButtonsPerPage(13); // Large screens: show 6 buttons
    } else if (screenWidth >= 768) {
      setButtonsPerPage(4); // Medium screens: show 4 buttons
    } else {
      setButtonsPerPage(2); // Small screens: show 2 buttons
    }
  };

  useEffect(() => {
    updateButtonsPerPage(); // Set initial value based on the current screen size
    window.addEventListener("resize", updateButtonsPerPage); // Update on screen resize

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateButtonsPerPage);
  }, [])

  const buttonLabels = [
    "Social", "Political", "Social", "Political", "Social", "Political",
    "Social", "Political", "Social", "Political", "Social", "Political",
    "Social", "Political", "Social", "Political", "Social", "Political",
  ];

  // Function to go to the previous set of buttons
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move one button to the left
    }
  };

  // Function to go to the next set of buttons
  const handleNext = () => {
    if (currentIndex + buttonsPerPage < buttonLabels.length) {
      setCurrentIndex(currentIndex + 1); // Move one button to the right
    }
  };

  // Slice the button array to show only a subset based on the currentIndex
  const visibleButtons = buttonLabels.slice(currentIndex, currentIndex + buttonsPerPage);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [isPlaying1, setIsPlaying1] = useState(null); // Track which card is playing
  const [progress, setProgress] = useState({}); // Store progress for each card
  const audioRefs = useRef({}); // Store audio elements by card ID
  const [remainingTime, setRemainingTime] = useState({}); // Store remaining time for each track

  const togglePlay = (id) => {
    const currentAudio = audioRefs.current[id];

    // Pause any currently playing audio
    if (isPlaying1 && isPlaying1 !== id) {
      audioRefs.current[isPlaying1].pause();
      audioRefs.current[isPlaying1].currentTime = 0; // Reset the previous audio
      setProgress((prev) => ({ ...prev, [isPlaying1]: 0 })); // Reset progress
      setRemainingTime((prev) => ({ ...prev, [isPlaying1]: 0 })); // Reset remaining time

    }

    // Toggle play/pause for the selected audio
    if (isPlaying1 === id) {
      currentAudio.pause();
      setIsPlaying1(null);
    } else {
      currentAudio.play();
      setIsPlaying1(id);
    }
  };

  const handleTimeUpdate = (id) => {
    const currentAudio = audioRefs.current[id];
    if (currentAudio) {
      const currentTime = currentAudio.currentTime;
      const duration = currentAudio.duration || 0;
      setProgress((prev) => ({
        ...prev,
        [id]: (currentTime / duration) * 100,
      }));

      // Calculate remaining time
      const remaining = duration - currentTime;
      setRemainingTime((prev) => ({
        ...prev,
        [id]: remaining > 0 ? formatTime(remaining) : '00:00',
      }));
    }
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  // Seek audio on click
  const handleSeek = (id, e) => {
    const currentAudio = audioRefs.current[id];
    const progressBar = e.target;
    const newTime =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    if (currentAudio) {
      currentAudio.currentTime = newTime * currentAudio.duration;
    }
  };

  const updateProgress = (id) => {
    const audio = audioRefs.current[id];
    const progressPercentage = (audio.currentTime / audio.duration) * 100 || 0;
    setProgress((prev) => ({ ...prev, [id]: progressPercentage }));
  };
  return (
    <div>
   <div className=" relative">
    <Landing/>
    <ToastContainer />
   <Filters/>
 
        
    
    <div className="px-[20px] bg-white relative">
      {/* Button to toggle the sidebar */}
      
      <div className=" fixed z-10 w-full  top-[130px] bg-white">
         <div className="flex w-full items-center pr-[20px]">
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
             </div>
        
             <div className=" relative top-[190px]">
      {activeTab ==='Videos' &&(
     <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
     {loading ? (
       <p>Loading...</p> // Show loading message or spinner
     ) : videoData.length === 0 ? (
       <p>No Content available.</p> // Show message when no video data is available
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
                 <div className="text-lg">
                   <p className="font-bold text-blue-600"
                    onClick={() => handlePricingClick(videoItem.content_id)}>
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
                   {/* <img
                     src={moreImg}
                     alt="More options"
                     className="w-[15px] h-[15px] cursor-pointer"
                     onClick={() => toggleOptions(videoItem.content_id)}
                   /> */}
 
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

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
  {loading ? (
    <p>Loading...</p> // Show loading message or spinner
  ) : imageData.length === 0 ? (
    <p>No Content available.</p> // Show message when no image data is available
  ) : (
    Array.isArray(imageData) &&
    imageData
      .filter((imageItem) => imageItem.content_type === "Image")
      .map((imageItem) => (
        <div key={imageItem.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
          {/* Image Section */}
          <div className="relative group">
            <img
              src={imageItem.Image_link}
              alt={imageItem.title}
              className="w-full h-60 object-cover group-hover:opacity-50 opacity-90 transition-opacity duration-300"
              onClick={() => handleImagesClick(imageItem)}
            />
            <div onClick={() => handleImagesClick(imageItem)} className="absolute top-2 right-2">
              <img
                src={expanding}
                alt=""
                className="w-[20px] h-[20px] text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-125"
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="p-4 flex justify-between items-center">
            <img src={camera} alt="" className="w-[25px] h-[25px] cursor-pointer" />

            <div className="text-lg" >
              <p className="font-bold text-blue-600"
              onClick={() => handlePricingClick(imageItem.content_id)}>
                ₹ {imageItem.price}{' '}
                <span className="text-sm text-gray-500">
                  <span className="line-through">{imageItem.final_price}</span> at Discount {imageItem.discount}%
                </span>
              </p>
            </div>

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
              <p className="text-[12px] text-blue-600">{imageItem.uploaded_by}</p>
            </div>
          </div>

          {/* Article Text */}
          <div className="px-4 py-4">
            <p className="text-gray-600 line-clamp-2">
              {imageItem.content_description}
            </p>
          </div>
        </div>
      ))
  )}
</div>

)}
     {activeTab ==='Audio' && (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
  

  {loading ? (
  <p>Loading...</p> // Show loading message or spinner
) : (

    cardData.length === 0 ? (
    <p>No Content available.</p> // Show message when no video data is available
  ) : (
  Array.isArray(cardData) &&
  cardData
    .filter(
      (card) =>
        card.content_type === "Audio" &&
        card.sold_flag === false &&
        card.purchased_flag === false
    )
    .map((card) => (
      <div key={card.id} className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-16 h-12 rounded-md bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
                {card.uploaded_by.charAt(0)}
              </div>
            </div>
            <div onClick={() => togglePlay(card.content_id)}>
              {isPlaying1 === card.content_id ? (
                <FaPause className="w-4 h-4 text-black" />
              ) : (
                <FaPlay className="w-4 h-4 text-black" />
              )}
            </div>
            <div
              className="w-[60%] bg-gray-200 rounded-full h-1.5 cursor-pointer"
              onClick={(e) => handleSeek(card.content_id, e)}
            >
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{
                  width: `${progress[card.content_id] || 0}%`,
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{remainingTime[card.content_id] || "00:00"}</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold my-1">{card.content_title}</h2>
          </div>

          <div className="flex-grow mb-3">
            <h2 className="text-sm text-gray-600 font-normal line-clamp-2 mb-1">
              {card.content_description}
            </h2>
            <p className="text-sm">{card.uploaded_by}</p>
          </div>

          <div className="w-full bg-gray-500 h-[2px]" />

        </div>
        <div className="px-4 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start" onClick={() => handlePricingClick(card.content_id)}>
              <span className="text-lg font-bold" >₹{card.price}</span>
            </div>
            <img
              onClick={() => handleAddToCart(card.content_id, card.Video_link, card.final_price)}
              src={card1}
              className="w-6 h-6 text-gray-400"
            />
          </div>
        </div>
        <audio
          ref={(el) => (audioRefs.current[card.content_id] = el)}
          src={card.Audio_link}
          onTimeUpdate={() => handleTimeUpdate(card.content_id)}
          onEnded={() => {
            setIsPlaying(null);
            setProgress((prev) => ({ ...prev, [card.content_id]: 0 }));
          }}
        />
      </div>
    ))
))}

 </div>
   )}
   {pricingshow && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div  className="flex justify-end items-end">
          <img  onClick={handlex}  src={x} alt="" className="w-[25px] h-[25px] cursor-pointer" />
          </div>
          <h1 className=" text-[18px] font-bold mb-2">Pricing</h1>
        <div className="relative flex flex-col gap-[10px]">
   
       <TextField
id="newprice" 
label="New Price" 
// type={showPassword ? "text" : "password"}
variant="outlined"
required
className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"

value={newPrice}
onChange={(e) => setNewPrice(e.target.value)}
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
id="New Discount" 
label="New Discount" 
variant="outlined"
// type={showPassword ? "text" : "password"}
required
className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
value={newdiscount}
onChange={(e) => setNewdiscount(e.target.value)}
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
  
   autoComplete: "off",
 }} 
 sx={{
   '& input:-webkit-autofill': {
     WebkitBoxShadow: '0 0 0 1000px white inset', // Change the background color to white or any other color
     WebkitTextFillColor: '#000', // Text color when autofilled
   },
 }} />
       </div>
       <div className="flex justify-end mt-5 space-x-4">
       <button onClick={updateCancel}  type="button" className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full">
         Cancel
       </button>
       <button onClick={updatePriceAndDiscount} type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-red-700 rounded-full">
         Save
       </button>
     </div>
     {errorprice && <p className=" text-red-500">{errorprice}</p>}
        </div>
      </div> 
      )}
  </div> 
   </div>
   </div>
    </div>
  );
};

export default mycontent;
