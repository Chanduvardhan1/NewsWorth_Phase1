import React, { useState, useEffect ,useRef} from "react";

import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Landing from "../landing/landing";
import { useParams } from 'react-router-dom';

import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
const videos = [
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
      videoSrc: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4', // video file or URL
      thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
      title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
      channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
      views: '9.2M views',
      duration: '2:29',
      postedTime: '18 hours ago',
      channelName: 'SakshiTV'
    },
    {
      id: 2,
      videoSrc: 'src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4', // video file or URL

      thumbnail: 'your-thumbnail-2.jpg',
      title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',
      channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
      views: '280 views',
      duration: '1:31',
      postedTime: '2 days ago',
      channelName: 'ETV Andhra Pradesh'
    },
    {
        id: 3,
        videoSrc: 'src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4', // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',

        title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
        channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
        views: '1.5M views',
        duration: '1:22',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
      {
        id: 4,
        videoSrc: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4', // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
        title: 'Some Other Trailer | Actor | Actress',
        channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
        views: '1.5M views',
        duration: '3:10',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
      {
        id: 5,
        videoSrc: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4', // video file or URL
        thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
        title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
        channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
        views: '9.2M views',
        duration: '2:29',
        postedTime: '18 hours ago',
        channelName: 'SakshiTV'
      },
      {
        id: 6,
        videoSrc: 'src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4', // video file or URL
  
        thumbnail: 'your-thumbnail-2.jpg',
        title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',
        channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
        views: '280 views',
        duration: '1:31',
        postedTime: '2 days ago',
        channelName: 'ETV Andhra Pradesh'
      },
      {
          id: 7,
          videoSrc: 'src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4', // video file or URL
    
          thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
  
          title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
          channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
          views: '1.5M views',
          duration: '1:22',
          postedTime: '2 days ago',
          channelName: 'XYZ Productions'
        },
        {
          id: 8,
          videoSrc: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4', // video file or URL
    
          thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
          title: 'Some Other Trailer | Actor | Actress',
          channelIcon: 'src/assets/Images/landing/pic.jpg', // channel icon image
          views: '1.5M views',
          duration: '3:10',
          postedTime: '2 days ago',
          channelName: 'XYZ Productions'
        },
   
    // Add more video objects here
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

  return (
    <>
   <Landing/>
   <div className="relative p-[20px] ">
  
   {/* <div className="xl:flex xl:flex-row md:flex md:flex-col justify-center"> */}
   <div className="flex flex-col justify-center">

    <div className="p-[10px]">
        <div>
        <video  src="src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4" controls>
        </video>
        </div>
        <div className="text-[18px] font-bold p-[5px] ">

            <h1 >YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024</h1>
        </div>
        <div className="flex flex-row justify-between p-[5px]">
        <div className="flex gap-[10px] items-center">
            <div className="mx-[5px]">
                <img src="src\assets\Images\home\NewsWorth.png" alt="" className="w-[25px] h-[25px] " />
            </div>
            <div>
            <div className="flex gap-[10px]">
                <h1>NewsWorth Arts</h1>
                   <p>?</p>
            </div>
            <p className="text-[12px] text-gray-300">136K subscribers</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="flex flex-row gap-[5px] bg-gray-300 rounded-[28px] p-[4px] px-[10px] items-center">
                <img src="src\assets\Images\dashboard\like.png" alt="" className="w-[20px] h-[20px]" />
                <p>83k</p>
                <p>|</p>
                <img src="src\assets\Images\dashboard\like.png" className="w-[20px] h-[20px] rotate-180" alt="" />
            </div>
            <div className="flex gap-[5px] ml-[8px]  bg-gray-300 rounded-[28px] p-[4px] px-[10px] items-center "> 
                <div >
                    <img src="src\assets\Images\dashboard\share.png" alt="" className="w-[20px] h-[20px]" />
                </div>
                <p>Share</p>
            </div>
            <div className="flex gap-[5px] ml-[8px]  bg-gray-300 rounded-[50px] p-[5px] items-center "> 
                <div >
                    <img src="src\assets\Images\dashboard\more.png" alt="" className="w-[25px] h-[20px]" />
                </div>
            </div>
            </div>
            </div>

            <div className="flex flex-col">
                <div>
                    <h1>1111 <span className="font-bold">Comments</span></h1>
                </div>
              
           

            <div className=" p-[5px]" >
                
<div>

                        <img src="src\assets\Images\landing\pic.jpg" alt=""  className="w-[50px] h-[50px]"/>
</div>
                
                    
                    <div className="flex flex-col ">
                        <div className="ml-[8px] pb-[5px]">
                    <TextField
     id="GST Number" 
     label="Add a Comment..." 
     onClick={() => setIsExpanded(true)}
     onChange={handleCommentChange}
     variant="standard"
    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
 />
 </div>
 {isExpanded && (
        <div className="flex justify-between">
          <img src="src/assets/Images/landing/pic.jpg" alt="User" className="w-[30px] h-[30px]" />
          <div className="flex gap-[10px]">
            <button className="primary-btn" onClick={() => setIsExpanded(false)}>Cancel</button>
            <button className="primary-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
                    </div>
                </div>
                </div>
                {commentsList.map((commentItem, index) => (
        <div key={index} className="flex relative justify-between p-4 border-b">
          <div className="flex">
            <div>
              <img src="src/assets/Images/landing/pic.jpg" alt="User" className="w-[50px] h-[50px]" />
            </div>
            <div>
              <div className="flex p-[4px] font-bold">
                <p>{commentItem.username}</p>
                <p className="ml-4">{commentItem.timeAgo}</p>
              </div>
              <div className="flex-wrap box-content whitespace-pre-wrap w-full p-[4px] font-light">
                {commentItem.content}
              </div>
              <div className="flex p-[4px] items-center">
                <img src="src/assets/Images/dashboard/like.png" alt="like" className="w-[20px] h-[20px]" />
                <p className="mx-[8px]">{commentItem.likes}k</p>
                <img src="src/assets/Images/dashboard/like.png" alt="dislike" className="w-[20px] h-[20px] rotate-180 ml-[10px]" />
                <p className="ml-[20px] cursor-pointer" onClick={() => handleReplyClick(commentItem.id)}>Reply</p>

              </div>

              <div className="text-blue-700">
                {commentItem.replies.length > 0 && (
                  <p className="hover:rounded-[28px] hover:bg-sky-200 p-[5px] cursor-pointer">
                    {commentItem.replies.length} replies
                  </p>
                )}
              </div>
              

              {activeReplyId === commentItem.id && (
                <div className="ml-[8px] pb-[5px]">
                  <TextField
                    id="reply-input"
                    label="Reply"
                    variant="standard"
                    onChange={(e) => setReplyText(e.target.value)}
                    value={replyText}
                    className="w-full mb-4 px-7 py-4 rounded-[10px] bg-[#FFFFFF] placeholder:text-[#CCCCCC]"
                  />
                  <div className="flex justify-between">
                    <img
                      src="src/assets/Images/landing/pic.jpg"
                      alt=""
                      className="w-[30px] h-[30px]"
                    />
                    <div className="flex gap-[10px]">
                      <button className="primary-btn" onClick={handleCancelReply}>
                        Cancel
                      </button>
                      <button className="primary-btn" onClick={() => handleReplySubmit(commentItem.id)}>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <img src="src/assets/Images/dashboard/more.png" alt="more" className="w-[20px] h-[20px]" />
          </div>
        </div>
      ))}
    </div>
    <div>
    {/* {videos.map((video) => (
    <div key={video.id} className="flex shadow-md rounded-[10px] overflow-hidden mt-4 max-w-[600px]">
  {/* Thumbnail Section */}
  {/* <div className="w-[40%] h-auto">
    <video
          ref={videoRef}
          
          src={video.src}

          className="w-full h-full object-cover cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
        />

  </div>
  <div className="flex flex-col w-[60%] p-[15px]">
     
        <div className="flex flex-col gap-[8px] mb-[15px]">
          
          <div className="flex">
            <div>
              <h1 className="font-bold text-[14px]">{video.title}</h1>
            </div>
            <div>
              <img src={video.moreIconSrc} alt="More" className="w-[30px] h-[20px]" />
            </div>
          </div>
          <div className="flex flex-col text-[12px] text-gray-500">
            <p className="font-semibold">{video.channel}</p>
            <div className="flex">
              <p>{video.views}</p>
              <span className="px-1">•</span>
              <p>{video.uploadDate}</p>
            </div>
          </div>
        </div>
    
    </div>
</div>
  ))}  */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">

  {videoData.map((video) => (
    <div
      key={video.id}
      // onClick={handleVideoClick}
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white group"
    >
      {/* Video Thumbnail / Video Clip */}
      <div className="relative">
        <video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-48 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
          muted
          loop
          src={video.videoSrc}
        >
          {/* Add poster attribute to show the image initially */}
        </video>

        {/* Video Duration Overlay */}
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Hover Effect: Full Card with Details */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 bg-white">
        {/* Channel Icon */}
        <div className="flex ">

       
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={video.channelIcon}
          alt="Channel Icon"
        />
        <div>
          {/* Title and Details */}
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 md:line-clamp-2">
            {video.title}
          </h2>
          <p className="text-sm text-gray-500">{video.channelName}</p>
          <p className="text-sm text-gray-500">
            {video.views} • {video.postedTime}
          </p>
        </div>
     
        {/* Options Icon */}
        <div className="ml-auto">
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
   </div>
   </div>
    </>
  
  );
};

export default watch;
