import React, { useState, useEffect ,useRef} from "react";

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
      videoSrc: videoSrc, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 2,
      videoSrc: videoSrc,
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 3,
      videoSrc: videoSrc, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 4,
      videoSrc: videoSrc,
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    {
      id: 5,
      videoSrc: videoSrc, // Replace with actual video path or URL
      duration: '03:24',
      title: 'Best News and Best Source, And the Best ...',
    },
    // Add more videos here...
  ];
const watch = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
 
  
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

  return (
    <>
   <Landing/>
   <div className="flex w-full items-center p-4">
      {/* Audio Tab */}
    

      {/* Videos Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Videos' ? 'bg-[#ebcee0] text-[#ce003d] inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Videos')}
      >
        <img src={video} alt="Video Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Videos</h1>
      </div>

      {/* Images Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Images' ? 'bg-[#ebcee0] text-[#ce003d] inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Images')}
      >
        <img src={camera} alt="Image Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Images</h1>
      </div>
      <div
        className={`flex w-full justify-center  items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Audio' ? 'bg-[#ebcee0] text-[#ce003d] inline-block' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Audio')}
      >
        <img src={Auido} alt="Audio Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Audio</h1>
      </div>
    </div>

    <div className="flex  items-center my-4 ">
   

      {/* Buttons container */}
      <div className="flex space-x-3 mx-3">
        {visibleButtons.map((label, index) => (
          <button key={index} className="bg-gray-400 text-white py-1 px-4 rounded">
            {label}
          </button>
        ))}
      </div>
   {/* Less than button */}
   <button 
        className="p-2 text-gray-600" 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      {/* Greater than button */}
      <button 
        className="p-2 text-gray-600" 
        onClick={handleNext}
        disabled={currentIndex + buttonsPerPage >= buttonLabels.length}
      >
        &gt;
      </button>
    </div>
    <div className="flex flex-row justify-between items-start px-4 py-2 gap-4">
  {/* Text Section */}
  <div className="w-[20%]">
    <p className="text-blue-500 font-bold mb-[10px]">
      Best News and Best Source, And the Best
    </p>
    <p className="text-gray-700">
      Best News and Best Source Best News and Best Source Best News and Best Source Best News and Best Source Best News and Best Source Best News and Best Source
    </p>
    <div className="text-sm text-gray-500 mt-2">
      <p className="text-pink-500 font-bold text-[12px]">2 days and 20 hours ago</p>
      <p className="text-[12px]">Bangalore, Karnataka, India</p>
      <p className="font-semibold text-blue-500 text-[12px]">Creator Ram M Reddy</p>
    </div>
  </div>

  {/* Video Section */}
  <div className="w-[60%]">
    <video src={videoSrc} controls className="w-full">
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Price Info Section */}
  <div className="w-[20%] flex flex-col items-end">
    <div className="flex items-center mb-2">
      <img src={Auido} alt="" className="w-8 h-8" />
      <p className="ml-2">MP3. 335 AUC</p>
    </div>
    <div className="text-lg">
      <p className="font-bold text-blue-600">
        Price ₹ 300.00 
        <span className="text-sm text-gray-500">
          <span className="line-through">₹ 369</span> at Discount 23%
        </span>
      </p>
    </div>
    <div className="mt-2">
      <img src={card} alt="" className="w-8 h-8" />
    </div>
  </div>
</div>
<div className="grid grid-cols-5 gap-4 px-4 p-2">
      {videos.map((video) => {
        const videoRef = React.createRef();
        return (
          <div key={video.id}>
            <div className="relative group">
              <video
                ref={videoRef}
                onMouseEnter={() => handleMouseEnter(videoRef)}
                onMouseLeave={() => handleMouseLeave(videoRef)}
                className="w-full h-30 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
                muted
                loop
                src={video.videoSrc}
              ></video>
              
              {/* Video Duration Overlay */}
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                {video.duration}
              </div>
            </div>
            <div>
              <p className="text-center">{video.title}</p>
            </div>
          </div>
        );
      })}
    </div>

    </>
  
  );
};

export default watch;
