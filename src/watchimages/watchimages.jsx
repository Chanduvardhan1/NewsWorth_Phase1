import React, { useState, useEffect ,useRef,useContext} from "react";
import { AuthContext } from "../Authcontext/AuthContext";
import { useTimer } from "../timerContext";

import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Landing from "../landing/landing";
import { useParams } from 'react-router-dom';
import videoSrc from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import videoSrc6 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import videoSrc7 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import shareImg from '../../src/assets/Images/dashboard/share.png';
import moreImg from '../../src/assets/Images/dashboard/more.png';
import likeImg from '../../src/assets/Images/dashboard/like.png';
import NewsWorth from '../../src/assets/Images/home/NewsWorth.png';
import pic from '../../src/assets/Images/landing/pic.jpg';
import Auido from '../../src/assets/Images/dashboard/voice-control.png'
import video from  '../../src/assets/Images/dashboard/camera.png';
import camera from '../../src/assets/Images/dashboard/camera-c.png';
import card from '../../src/assets/Images/dashboard/shopping-cart.png';
import src from '../../src/assets/Images/dashboard/crickit.webp';
import { useLocation } from 'react-router-dom';
import { URL } from "../url";

import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
const videos1 = [
    {
       id: 1,
       src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
      title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
      channel: "iDream Trending",
      views: "1.8M views",
      uploadDate: "1 month ago",
      moreIconSrc: "src/assets/Images/dashboard/more.png",
    },
    {
        id: 2,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 3,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 4,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 5,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 6,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 7,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 8,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
      {
        id: 9,
        src:"src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4",
        title: "YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024",
        channel: "iDream Trending",
        views: "1.8M views",
        uploadDate: "1 month ago",
        moreIconSrc: "src/assets/Images/dashboard/more.png",
      },
    // Add more video objects as needed
  ];
  const videoData = [
    {
      id: 1,
      videoSrc: videoSrc, // video file or URL
      thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
      title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
      channelIcon: pic, // channel icon image
      views: '9.2M views',
      duration: '2:29',
      postedTime: '18 hours ago',
      channelName: 'SakshiTV'
    },
    {
      id: 2,
      videoSrc: videoSrc, // video file or URL

      thumbnail: 'your-thumbnail-2.jpg',
      title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',
      channelIcon: pic,
      views: '280 views',
      duration: '1:31',
      postedTime: '2 days ago',
      channelName: 'ETV Andhra Pradesh'
    },
    {
        id: 3,
        videoSrc: videoSrc, // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',

        title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
        channelIcon: pic,
        views: '1.5M views',
        duration: '1:22',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
      {
        id: 4,
        videoSrc: videoSrc, // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
        title: 'Some Other Trailer | Actor | Actress',
        channelIcon: pic,
        views: '1.5M views',
        duration: '3:10',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
      {
        id: 5,
        videoSrc: videoSrc, // video file or URL

        thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
        title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
        channelIcon: pic,
        views: '9.2M views',
        duration: '2:29',
        postedTime: '18 hours ago',
        channelName: 'SakshiTV'
      },
      {
        id: 6,
        videoSrc: videoSrc6, // video file or URL
  
        thumbnail: 'your-thumbnail-2.jpg',
        title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',

        channelIcon: pic,
              views: '280 views',
        duration: '1:31',
        postedTime: '2 days ago',
        channelName: 'ETV Andhra Pradesh'
      },
      {
          id: 7,
          videoSrc:videoSrc7, // video file or URL
    
          thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
  
          title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
          channelIcon: pic,
          views: '1.5M views',
          duration: '1:22',
          postedTime: '2 days ago',
          channelName: 'XYZ Productions'
        },
        {
          id: 8,
          videoSrc: videoSrc, // video file or URL
    
          thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
          title: 'Some Other Trailer | Actor | Actress',
          channelIcon: pic,
          views: '1.5M views',
          duration: '3:10',
          postedTime: '2 days ago',
          channelName: 'XYZ Productions'
        },
   
    // Add more video objects here
  ];
  const videos = [
    {
      id: 1,
      videoSrc: src, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 2,
      videoSrc: src,
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 3,
      videoSrc: src, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 4,
      videoSrc: src,
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 5,
      videoSrc: src, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    // Add more videos here...
  ];
const watchimages = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const location = useLocation();
  const { isAuthenticated, authToken } = useContext(AuthContext);
  const userId = location.state?.user_id || localStorage.getItem("userId");
  const { imageData } = location.state; 
  const imageContainerRef = useRef(null);
  const [imageData1, setImageData1] = useState([]);
  const [selectedimage, setSelectedimage] = useState(null); // Store the selected video
  const { startTimer } = useTimer(); 
  const [showPopup1, setShowPopup1] = useState(false);
  const [error, seterror] = useState('');

  const handleimageClick = (video) => {
    setSelectedimage(video); // Set the selected video in state
 
  };
  // Function to trigger fullscreen
  const handleExpandClick = () => {
    if (imageContainerRef.current) {
      if (imageContainerRef.current.requestFullscreen) {
        imageContainerRef.current.requestFullscreen();
      } else if (imageContainerRef.current.webkitRequestFullscreen) { // for Safari
        imageContainerRef.current.webkitRequestFullscreen();
      } else if (imageContainerRef.current.msRequestFullscreen) { // for IE11
        imageContainerRef.current.msRequestFullscreen();
      }
    }
  };

  // Function to exit fullscreen mode
  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // for Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // for IE11
      document.msExitFullscreen();
    }
  };
  
  // Function to play the video on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to pause the video when the mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to start from the beginning
    }
  };
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      username: '@chandu',
      timeAgo: '5 days ago',
      content: 'This is a comment',
      likes: 12,
      replies: [],
    },
    // Add more comments as needed
  ]);
  const [comment, setComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeReplyId, setActiveReplyId] = useState(null); // Track active reply comment ID
  const [replyText, setReplyText] = useState(''); // Handle reply input

  // Handles comment input change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handles form submission to add a new comment
  const handleSubmit = () => {
    if (comment.trim()) {
      setCommentsList([
        ...commentsList,
        {
          id: commentsList.length + 1,
          username: '@chandu',
          timeAgo: 'Just now',
          content: comment,
          likes: 0,
          replies: [],
        },
      ]);
      setComment('');
      setIsExpanded(false);
    }
  };

  // Handles reply submission for a specific comment
  const handleReplySubmit = (commentId) => {
    if (replyText.trim()) {
      setCommentsList((prevComments) =>
        prevComments.map((commentItem) =>
          commentItem.id === commentId
            ? {
                ...commentItem,
                replies: [
                  ...commentItem.replies,
                  { id: commentItem.replies.length + 1, content: replyText },
                ],
              }
            : commentItem
        )
      );
      setReplyText('');
      setActiveReplyId(null); // Close the reply input after submitting
    }
  };

  // Handles reply click
  const handleReplyClick = (commentId) => {
    setActiveReplyId(commentId);
  };

  // Handles cancel button for reply input
  const handleCancelReply = () => {
    setActiveReplyId(null);
    setReplyText('');
  };
  const [activeTab, setActiveTab] = useState('Images'); // Default to Audio
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
    "Social", "Political", "Movies", "India", "Cricket", "Web Stories",
    "Lifestyle", "Viral", "World", "Videos", "Educational", "Wildlife",
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
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }
  
    const fetchData = async () => {
      try {
    
  
        const response = await fetch(
          `${URL}/landing page?user_id=${userId}`,
          {
            method: "POST",
            headers: {
              "accept": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({}) // Empty body for a POST request
          }
        );
        const data = await response.json();
  
        if (data.response === "success") {
          setImageData1(data.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } 
    };
  
    fetchData();
  }, [isAuthenticated, userId, authToken, navigate]); // Fixed dependency array
  
  const handleAddToCart = async (contentId, contentLink,finalprice) => {
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
      if (response.ok && data.response === 'success') {
        // Set the content and navigate to the cart
        navigate('/cart');
        startTimer();
      } else if (data.response === 'fail' && data.response_message === 'Content already added to cart.') {
        // Handle the case when the content is already in the cart
        setShowPopup1(true)
        seterror(data.response_message)
        // console.error('Content already added to cart');
        seterror('This content is already in your cart.');
      } else if (data.response === `fail`){
        setShowPopup1(true)
        seterror(data.response_message)
        // toast.error(`The content you're trying to add is locked at the moment. Please try again later.`);
        return;
      }else {
        console.error('Error adding to cart:', data);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };
  return (
    <>
   <Landing/>
   {/* <div className="flex w-full items-center p-4">
     
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Videos' ? 'bg-[#e70c0ce0] text-white inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Videos')}
      >
        <img src={video} alt="Video Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Videos</h1>
      </div>

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
   

      <div className="flex space-x-3 mx-3">
        {visibleButtons.map((label, index) => (
          <button key={index} className="bg-gray-400 text-white py-1 px-4 rounded">
            {label}
          </button>
        ))}
      </div>
   <button 
        className="p-2 text-gray-600" 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <button 
        className="p-2 text-gray-600" 
        onClick={handleNext}
        disabled={currentIndex + buttonsPerPage >= buttonLabels.length}
      >
        &gt;
      </button>
    </div> */}
        <div className=" relative top-[65px]">
    {selectedimage ? (
 <div className="flex flex-row justify-between items-start px-4 py-2 gap-4">
 {/* Text Section */}
 <div className="w-[20%]">
   <p className="text-blue-500 font-bold mb-[10px]">
     {selectedimage.content_title}
   </p>
   <p className="text-gray-700">
   {selectedimage.content_description}
   </p>
   <div className="text-sm text-gray-500 mt-2">
     <p className="text-pink-500 font-bold text-[12px]">{selectedimage.uploaded_time}</p>
     <p className="text-[12px]">{selectedimage.gps_location}</p>
     <p className="font-semibold text-blue-500 text-[12px]">Creator {selectedimage.uploaded_by}</p>
   </div>
 </div>

 {/* Video Section */}
 <div className="relative w-[60%]">
     <div
       ref={imageContainerRef}
       className="w-full h-[400px] cursor-pointer"
       onClick={handleExpandClick}
     >
       <img
         src={selectedimage.Image_link}
         className="w-full h-full"
         alt="expandable"
       />
     </div>
     {/* <div className="absolute top-2 right-2">
       <button
         className="p-2 bg-black text-white rounded-md"
         onClick={handleExitFullScreen}
       >
         Exit Fullscreen
       </button>
     </div> */}
   </div>

 {/* Price Info Section */}
 <div className="w-[20%] flex flex-col items-end">
   <div className="flex items-center mb-2">
     <img src={video} alt="" className="w-8 h-8" />
     <p className="ml-2">{selectedimage.file_type}</p>
   </div>
   <div className=" text-[14px]">
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Price ₹{selectedimage.price} 
       <span className="text-[12px] text-gray-500 ml-[2px]">
         <span className="line-through text-[12px]">₹{selectedimage.discount}</span> at Discount {selectedimage.discount}%
       </span>
     </p>
     <p className="font-bold text-[14px] mb-2 text-blue-600">
     Latitude: <span className=" text-gray-500 text-[14px]">{selectedimage.latitude}</span> 
     </p>
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Longitude: <span className=" text-gray-500 text-[14px]">{selectedimage.longitude}</span>
     </p>
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Altitude: <span className=" text-gray-500 text-[14px]">{selectedimage.altitude}</span> 
     </p>
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Incident Time: <span className=" text-gray-500 text-[14px]">{selectedimage.incident_time}</span> 
     </p>
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     File Size: <span className=" text-gray-500 text-[14px]">{selectedimage.file_size}</span> 
     </p>
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Aging Bucket: <span className=" text-gray-500 text-[14px]">{selectedimage.aging_bucket}</span> 
     </p>
    
     <p className="font-bold mb-2 text-blue-600 text-[14px]">
     Purchased Flag: <span className=" text-gray-500 text-[14px]">   {selectedimage.purchased_flag ? "True" : "False"}</span> 
     </p>
   </div>
   <div className="mt-2">
     <img src={card} alt="" className="w-8 h-8"  onClick={() => handleAddToCart(selectedimage.content_id, selectedimage.Image_link, selectedimage.final_price)}  />
   </div>
 </div>
</div>
    ):(
      <div className="flex flex-row justify-between items-start px-4 py-2 gap-4">
      {/* Text Section */}
      <div className="w-[20%]">
        <p className="text-blue-500 font-bold mb-[10px]">
          {imageData.content_title}
        </p>
        <p className="text-gray-700">
        {imageData.content_description}
        </p>
        <div className="text-sm text-gray-500 mt-2">
          <p className="text-pink-500 font-bold text-[12px]">{imageData.uploaded_time}</p>
          <p className="text-[12px]">{imageData.gps_location}</p>
          <p className="font-semibold text-blue-500 text-[12px]">Creator {imageData.uploaded_by}</p>
        </div>
      </div>
    
      {/* Video Section */}
      <div className="relative w-[60%]">
          <div
            ref={imageContainerRef}
            className="w-full h-[400px] cursor-pointer"
            onClick={handleExpandClick}
          >
            <img
              src={imageData.Image_link}
              className="w-full h-full"
              alt="expandable"
            />
          </div>
          {/* <div className="absolute top-2 right-2">
            <button
              className="p-2 bg-black text-white rounded-md"
              onClick={handleExitFullScreen}
            >
              Exit Fullscreen
            </button>
          </div> */}
        </div>
    
      {/* Price Info Section */}
      <div className="w-[20%] flex flex-col items-end">
        <div className="flex items-center mb-2">
          <img src={video} alt="" className="w-8 h-8" />
          <p className="ml-2">{imageData.file_type}</p>
        </div>
        <div className=" text-[14px]">
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Price ₹{imageData.price} 
            <span className="text-[12px] text-gray-500 ml-[2px]">
              <span className="line-through text-[12px]">₹{imageData.discount}</span> at Discount {imageData.discount}%
            </span>
          </p>
          <p className="font-bold text-[14px] mb-2 text-blue-600">
          Latitude: <span className=" text-gray-500 text-[14px]">{imageData.latitude}</span> 
          </p>
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Longitude: <span className=" text-gray-500 text-[14px]">{imageData.longitude}</span>
          </p>
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Altitude: <span className=" text-gray-500 text-[14px]">{imageData.altitude}</span> 
          </p>
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Incident Time: <span className=" text-gray-500 text-[14px]">{imageData.incident_time}</span> 
          </p>
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          File Size: <span className=" text-gray-500 text-[14px]">{imageData.file_size}</span> 
          </p>
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Aging Bucket: <span className=" text-gray-500 text-[14px]">{imageData.aging_bucket}</span> 
          </p>
         
          <p className="font-bold mb-2 text-blue-600 text-[14px]">
          Purchased Flag: <span className=" text-gray-500 text-[14px]">   {imageData.purchased_flag ? "True" : "False"}</span> 
          </p>
        </div>
        <div className="mt-2">
          <img src={card} alt="" className="w-8 h-8" onClick={() => handleAddToCart(imageData.content_id, imageData.Image_link, imageData.final_price)} />
        </div>
      </div>
    </div>
    )}


   
<div className="grid grid-cols-5 gap-4 px-4 p-2">
      {imageData1.filter((video) =>   video.content_type === "Image"  &&
    video.sold_flag === false && 
    video.purchased_flag === false ) // Filter to show only images
    .map((video) => {
        const videoRef = React.createRef();
        return (
          <div key={video.content_id}>
            <div className="relative group cursor-pointer"
          onClick={() => handleimageClick(video)}
>
          <img src={video.Image_link}
            onClick={() => handleimageClick(video)} alt=""
          className="w-full h-[150px] object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300 cursor-pointer"
 />
             
              
              {/* Video Duration Overlay */}
              {/* <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                {video.duration}
              </div> */}
            </div>
            <div>
              <p className="text-center line-clamp-2 h-12">{video.content_description}</p>
            </div>
          </div>
        );
      })}
    </div>
    {showPopup1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          {/* <div  onClick={() => setShowPopup1(false)} className="flex justify-end items-end">
          <img  onClick={() => setShowPopup1(false)} src={x} alt="" className="w-[25px] h-[25px]" />
          </div> */}
          {/* <h2 className="text-2xl font-semibold mb-4 text-red-600">Hurry up!</h2> */}
          <p className="text-lg">{error}</p>
          <button 
          onClick={() => setShowPopup1(false)}  
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div> 
      )}
    </div>
    </>
  
  );
};

export default watchimages;
