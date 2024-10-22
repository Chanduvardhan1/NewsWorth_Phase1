import React, { useState, useEffect,useRef,useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landing from "../landing/landing";
import { Transition } from "@headlessui/react";

import { useNavigate } from 'react-router-dom';
import { URL } from "../url";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../Authcontext/AuthContext";

import moreImg from '../../src/assets/Images/dashboard/more.png';
import Filters from "../filters/filters";


import card from '../../src/assets/Images/dashboard/shopping-cart.png'
import Auido from '../../src/assets/Images/dashboard/voice-control.png'
import video from '../../src/assets/Images/dashboard/camera.png'
import camera from  '../../src/assets/Images/dashboard/camera-c.png';
import check from '../../src/assets/Images/dashboard/check.png'

import play from '../../src/assets/Images/dashboard/play-button (1).png';
import expanding from '../../src/assets/Images/dashboard/maximize.png'



  const search = () => {
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
    // const [videoData, setVideoData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [cartCount, setCartCount] = useState(0); // State for cart count

    const [cartContent, setCartContent] = useState(null); // To store the content when added to the cart
    const [showCartNotification, setShowCartNotification] = useState(false); // For showing the cart notification
const [finalprice,setfinalprice] = useState(null);
const [openOptionsId, setOpenOptionsId] = useState(null);
const userId = location.state?.user_id || localStorage.getItem("userId");
// const location = useLocation();

const {noDataMessage} = location.state || {};
  const { videoData } = location.state || {};
  
  const { ImageData } = location.state || {};
  // if (!videoData) {
  //   return <div>No search results available</div>;
  // }
  // if (!ImageData) {
  //   return <div>No search results available</div>;
  // }

const downloadContent = async (contentId) => {
  try {
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
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login"); // Redirect to login if not authenticated
//       return;
//     }
//     const fetchData = async () => {
//       try {

  
//         const response = await fetch(
//           `${URL}/landing page?user_id=${userId}`,
//           {
//             method: "POST",
//             headers: {
//               "accept": "application/json",
//               Authorization: `Bearer ${authToken}`,

//             },
//             body: JSON.stringify({}) // Empty body for a POST request
//           }
//         );
//         const data = await response.json();

//         if (data.response === "success") {
//           setVideoData(data.data);
//           setImageData(data.data);
//           setCartCount(data.cart_count);
//         }
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, [userId],isAuthenticated, authToken, navigate);

  const handleAddToCart = async (contentId, contentLink,finalprice) => {
    try {
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
      if (response.ok && data.response === 'success') {
        // Set the content and show the notification
        setCartContent(contentLink);
        // navigate('/cart'); 
        setShowCartNotification(true);
        setfinalprice(finalprice)
        
        // Optionally, navigate to the cart
        // setTimeout(() => navigate('/cart'), 3000); // navigate after 3 seconds
      } else {
        console.error('Error adding to cart:', data);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  const [activeTab, setActiveTab] = useState('Videos'); // Default to Audio
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonsPerPage, setButtonsPerPage] = useState(6); // Default number of visible buttons

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
  return (
    <div>
   <div className=" relative">
    <Landing/>
  {!videoData && !ImageData ? (
    <div>
      <div className="p-[20px] bg-white">No content found</div>
    </div>
  ):(
    <div className="p-[20px] bg-white">
    <Filters/>
       {/* Button to toggle the sidebar */}
       
 
       {/* Sidebar */}
     
    
       <div className="flex w-full items-center pr-[30px]">
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
 
     <div className="flex  items-center my-4 ">
    
 
     </div>
 
 
   {activeTab ==='Videos' &&(
     <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
      {videoData
     .filter((videoItem) => videoItem.content_type === "Video"&&
     !videoItem.cart_flag && 
     !videoItem.purchased_flag && // Exclude purchased videos
     !videoItem.sold_flag) // Filter to show only videos
     .map((videoItem) => {
         const videoRef = React.createRef();
         return (
           <div key={videoItem.content_id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
             {/* Video Section */}
             <div className="relative group">
               <video
                 ref={videoRef}
                 onMouseEnter={() => handleMouseEnter(videoRef)}
                 onMouseLeave={() => handleMouseLeave(videoRef)}
                 className="w-full h-60 object-cover group-hover:opacity-50 opacity-90 transition-opacity duration-300"
 
                 muted
                 loop
                 // onClick={handleVideoClick}
                 src={videoItem.content_link}
               ></video>
   <div onClick={() =>handleVideoClick(videoItem)} className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img src={play} onClick={() => handleVideoClick(videoItem)} alt=""  className="w-[20px] h-[20px] text-white group-hover:text-black transition-colors duration-300"
  />
   </div>
               {/* <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                 03:24 
               </div> */}
             </div>
 
             {/* Video Info */}
             <div className="p-4 flex justify-between items-center relative">
       {/* Left Icon */}
       <img src={video} alt="" className="w-[25px] h-[25px]" />
 
       {/* Price Info */}
       <div className="text-lg" onClick={() => handleVideoClick(videoItem)}>
         <p className="font-bold text-blue-600">
         ₹ {videoItem.price}{' '}
           <span className="text-sm text-gray-500">
             <span className="line-through text-sm text-gray-500">{videoItem.final_price}</span> at Discount {videoItem.discount}
           </span>
         </p>
       </div>
 
       {/* Right Icons */}
       <div className="flex items-center space-x-4">
         <img
           onClick={() => handleAddToCart(videoItem.content_id, videoItem.content_link, videoItem.final_price)}
           src={card}
           alt="Add to Cart"
           className="w-[25px] h-[25px] cursor-pointer"
         />
         
         {/* Three Dots Icon */}
         {/* <img
           src={moreImg}
           alt="More options"
           className="w-[15px] h-[15px] cursor-pointer"
           onClick={() => toggleOptions(videoItem.content_id)} // Pass content_id to toggle options
 
         /> */}
 
         {/* Dropdown Options */}
         {/* {openOptionsId === videoItem.content_id && ( // Only show options if this card is selected
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
         )} */}
       </div>
     </div>
 
             {/* Description */}
             <div onClick={() => handleVideoClick(videoItem)} className="flex justify-between px-4">
               <p className="text-blue-500 font-semibold line-clamp-2 w-[60%] h-12">
                 {videoItem.content_description}
               </p>
               <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
                 <p className="text-[12px] line-clamp-1 text-[#ce003d]">{videoItem.age_in_days}</p>
                 <p className="text-[12px] line-clamp-1">{videoItem.gps_location}</p>
                 <p className="text-[12px]  text-blue-500">{videoItem.uploaded_by}</p>
               </div>
             </div>
 
             {/* Article Text */}
             <div onClick={() => handleVideoClick(videoItem)} className="px-4 py-4">
               <p className="text-gray-500 line-clamp-2">
                 {videoItem.content_description}
               </p>
             </div>
           </div>
         );
       })}
     </div>
   )}
   
 {activeTab ==='Images' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
   {ImageData
     .filter((imageItem) => imageItem.content_type === "Image"&&
     !imageItem.cart_flag && 
     !imageItem.purchased_flag && // Exclude purchased videos
     !imageItem.sold_flag) // Filter to show only images
     .map((imageItem) => {
    return (
      <div key={imageItem.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={imageItem.content_link}
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
 
 {showCartNotification && (
   <div
     className="fixed right-0 top-0 transition-transform duration-500 transform translate-x-0 shadow-xl p-4 bg-white lg:w-[50%]"
     style={{ transform: showCartNotification ? 'translateX(0)' : 'translateX(100%)' }} // Sliding effect
   >
     <div className="flex items-center gap-[5px]">
       {/* Close button */}
       <button 
         className="absolute top-2 right-2 text-xl font-bold" 
         onClick={() => setShowCartNotification(false)} // Close on click
       >
         X
       </button>
 
       {/* Show the image from content_link */}
       <video src={cartContent} className=" object-cover w-[100px] h-[100px]"></video>
       {/* <img src={cartContent} alt="Added Content" className="w-[100px] h-[100px]" /> */}
 
       <div className="flex items-center gap-[5px]">
         <img src={check} alt="Check" className="w-[15px] h-[15px]" />
         <h2 className="text-xl font-semibold">Added to Cart</h2>
       </div>
     </div>
 
     <div className="flex flex-col gap-2 mt-4">
       <h1 className="font-semibold text-2xl">Cart Subtotal: ₹{finalprice}</h1>
       <div className="bg-yellow-400 rounded-2xl flex justify-center">
         <button className="text-black p-2">  Proceed to Buy ({cartCount} item{cartCount !== 1 ? 's' : ''})</button>
       </div>
       <div className="bg-white border-[1px] border-black rounded-2xl flex justify-center">
         <button className="text-black p-2" onClick={handlecart}>Go to Cart</button>
       </div>
     </div>
   </div>
 )}
 
 
 
    </div>
  
  )}
  
 
   </div>
    </div>
  );
};

export default search;
