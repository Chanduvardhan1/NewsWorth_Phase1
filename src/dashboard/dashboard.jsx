import React, { useState, useEffect,useRef,useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landing from "../landing/landing";
import facebook from "../../src/assets/Images/footer/facebook-app-symbol.png"
// import Footer from "../footer/footer";
import { useNavigate } from 'react-router-dom';
import { URL } from "../url";
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../Authcontext/AuthContext";
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

import videoSrc from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import videoSrc1 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import videoSrc2 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import videoSrc3 from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import card from '../../src/assets/Images/dashboard/grocery-store.png'
import Auido from '../../src/assets/Images/dashboard/voice-assistant.png'
import video from '../../src/assets/Images/dashboard/video-camera.png'
import camera from '../../src/assets/Images/dashboard/photo-device.png'

import channelIcon from '../../src/assets/Images/landing/pic.jpg';


// const testimonialData = [
//     {
//       id: 1,
//       title: facebook
    
//     },
//     {
//       id: 2,
//       title1: "Mission",
//       text1: "Transforming business operations with AI-powered software, enabling advanced analytics, automation, and augmented decision-making. Driving operational efficiency, strategic innovation, and intelligence for businesses, ushering in a new era of data-driven operations.",
//     },
//     {
//       id: 3,
//       title1: "Values",
//       text1: "Excellence is our standard the growth and well-being of our team members is our priority. We embrace innovation, encourage open debate, and strive for big dreams while fostering teamwork to achieve success.",
//     },
//   ];
const cardData = [
    {
      id: 1,
      userName: 'World Trade Center',
      timeAgo: '2 hours ago',
      location: 'Hyderabad',
      description: 'Officials in Ranga Reddy district are planning to establish a World Trade Center in the upcoming Future City on the outskirts of Hyderabad. Representatives from the World Trade Centers Association have expressed interest in setting up a center in Hyderabad, similar to the one in the United States. Authorities are considering three locations for this purpose and estimate that around 70 acres of land will be required.',
      imgSrc: imgSrc,
      likeImg: likeImg,
      chatImg: chatImg,
      bookmarkImg: bookmarkImg,
      shareImg: shareImg,
      moreImg:moreImg,
    },
    {
        id: 2,
        userName: 'High Court',
        timeAgo: '4 hours ago',
        location: 'Hyderabad',
        description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested that the Hyderabad Metropolitan Development Authority (HMDA) be added as a respondent, arguing that it is responsible for the protection of Hussain Sagar. The court stated that it will hear arguments tomorrow, with the Chief Justice bench scheduled to listen to the case.',
        imgSrc: imgSrc,
        likeImg: likeImg,
        chatImg: chatImg,
        bookmarkImg: bookmarkImg,
        shareImg: shareImg,
        moreImg:moreImg,
      },
      {
        id: 3,
        userName: '1,528 hectares..!',
        timeAgo: '1 hours ago',
        location: 'Anakapalli',
        description: 'Due to heavy rains in Anakapalli district, paddy crops spread across 1,528 hectares belonging to 4,420 farmers have been submerged, according to District Agriculture Officer Mohan Rao. After the water recedes from the fields, he advised farmers to apply 20 kg of urea and 20 kg of potash fertilizers per acre of paddy fields. To prevent pests, he suggested spraying Gram Carbon disulfide powder mixed with water at the rate of one liter per field.',
        imgSrc: imgSrc,
        likeImg: likeImg,
        chatImg: chatImg,
        bookmarkImg: bookmarkImg,
        shareImg: shareImg,
        moreImg:moreImg,
      },
      {
        id: 4,
        userName: 'flood-affected.',
        timeAgo: '2 hours ago',
        location: 'Krishna',
        description: 'In flood-affected colonies of Vijayawada, thieves are targeting locked houses, stealing cash, gold, and gas cylinders from safes. In Luna Center, thieves took 10 tolas of gold and ₹1.5 lakh in cash, while in Bombay Colony, 3 tolas of gold were stolen. Similar thefts occurred in Singh Nagar and other areas, according to the distressed victims. Many have returned from safer places only to find their belongings looted, leaving them in tears.',
        imgSrc: imgSrc,
        likeImg: likeImg,
        chatImg: chatImg,
        bookmarkImg: bookmarkImg,
        shareImg: shareImg,
        moreImg:moreImg,
      },
   
    
      
    
    // Add more data objects here if needed
  ];
  const cardData2 = [
    {
      id: 1,
      icon: icon1,
      title: 'Vinesh Phogat',
      price: 'RS | 100',
      description: 'The Congress candidate for Julana, Vinesh Phogat, has mentioned in her affidavit that she owns a Volvo XC 60 (₹35 lakhs), a Hyundai Creta, and an Innova car. She has taken a loan of ₹13 lakhs for the Innova and is paying EMIs. She owns a plot worth ₹2 crore in Sonipat. She also has ₹1.95 lakhs in cash. According to her IT returns, she earned ₹13,85,000 in the last financial year. Her husband, Somveer, owns a Mahindra Scorpio.',
      image: image1,
      userName: 'chandu',
      days: '10 days',
      location: 'Bangalore',
      createdBy:'Chandu',
      Date:'6-09-2024',
      cartIcon: cartIcon
    },
    {
        id: 2,
        icon: icon1,
        title: 'Cricket practice',
        price: 'RS | 300',
        description: ' Cricketers practiced at the RDT Stadium in Anantapur. Players arrived at the stadium from their hotels in special buses and sweated it out in the nets...',
        image: image1,

        userName: 'Ram',
        days: '1 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon:cartIcon
      },
      {
        id: 3,
        icon: icon1,
        title: 'Virat Kohli',
        price: 'RS | 500',
        description: 'Cricketer Virat Kohli is on the brink of achieving a rare record. He has scored 26,952 runs in 591 international innings so far. With just 58 more runs, he will become the first player to reach 27,000 runs in the fewest innings. Currently, the record is held by Sachin Tendulkar with 27,000 runs in 623 innings. In international cricket, only Sachin Tendulkar, Ricky Ponting, and Kumar Sangakkara have scored over 27,000 runs.',
        image: image1,

        userName: 'Vardhan',
        days: '10 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon: cartIcon
      },
      {
        id: 4,
        icon: icon1,
        title: ' Asia Champions Trophy',
        price: 'RS | 150',
        description: 'In the Asia Champions Trophy, the Indian hockey team has advanced to the semifinals. They secured a 3-1 victory over Korea in todays match, ensuring their place in the semifinals with one league match still remaining. As the defending champions, India has remained unbeaten in the league stage so far. Notably, the Indian team, led by Harmanpreet Singh, will play their final league match against Pakistan on the 14th of this month.',
        image: image1,
      
        userName: 'chandu',
        days: '10 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon:cartIcon
      },
    // You can add more card data objects here
  ];
  const videoData = [
    {
      id: 1,
      videoSrc: videoSrc, // video file or URL
      thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
      title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
      channelIcon: channelIcon, // channel icon image
      views: '9.2M views',
      duration: '2:29',
      postedTime: '18 hours ago',
      channelName: 'SakshiTV'
    },
    {
      id: 2,
      videoSrc: videoSrc1, // video file or URL

      thumbnail: 'your-thumbnail-2.jpg',
      title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',
      channelIcon: channelIcon, // channel icon image
      views: '280 views',
      duration: '1:31',
      postedTime: '2 days ago',
      channelName: 'ETV Andhra Pradesh'
    },
    {
        id: 3,
        videoSrc: videoSrc2, // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',

        title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
        channelIcon: channelIcon, // channel icon image
        views: '1.5M views',
        duration: '1:22',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
      {
        id: 4,
        videoSrc: videoSrc3, // video file or URL
  
        thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
        title: 'Some Other Trailer | Actor | Actress',
        channelIcon: channelIcon, // channel icon image
        views: '1.5M views',
        duration: '3:10',
        postedTime: '2 days ago',
        channelName: 'XYZ Productions'
      },
    
   
    // Add more video objects here
  ];
const dashboard = () => {
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
  
    useEffect(() => {
      const audio = audioRef.current;
  
      // Set audio duration when metadata is loaded
      const onLoadedMetadata = () => {
        setDuration(audio.duration);
      };
  
      // Update current time while audio is playing
      const onTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
        if (progressRef.current) {
          progressRef.current.value = (audio.currentTime / audio.duration) * 100;
        }
      };
  
      audio.addEventListener('loadedmetadata', onLoadedMetadata);
      audio.addEventListener('timeupdate', onTimeUpdate);
  
      return () => {
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        audio.removeEventListener('timeupdate', onTimeUpdate);
      };
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
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };
    const handleVideoClick = () => {
      navigate(`/watch`);
    };
    const handleImagesClick = () => {
      navigate(`/Watchimages`);
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
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }
    const fetchData = async () => {
      try {

  
        const response = await fetch(
          `${URL}/landing page?user_id=95`,
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
          setCardData1(data.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [user_id]);
  const [activeTab, setActiveTab] = useState('Audio'); // Default to Audio
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonsPerPage, setButtonsPerPage] = useState(6); // Default number of visible buttons

  // Number of buttons visible at once
  const updateButtonsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setButtonsPerPage(12); // Large screens: show 6 buttons
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

    // var settings = {
    //     dots: true,
    //     arrows: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     cssEase: "linear",
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //   };
  return (
    <div>
   <div className=" relative">
    <Landing/>
    <div className="p-[20px] bg-white">
   <Filters/>
   <div>
    <h1 className="font-bold text-[30px] my-[20px]">Videos</h1>
</div> 
<div className="flex w-full items-center p-4">
      {/* Audio Tab */}
      <div
        className={`flex w-full justify-center  items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Audio' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} p-2 rounded`}
        onClick={() => setActiveTab('Audio')}
      >
        <h1 className="text-[18px]">Audio</h1>
        <img src={Auido} alt="Audio Icon" className="w-[25px] h-[25px]" />
      </div>

      {/* Videos Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Videos' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} p-2 rounded`}
        onClick={() => setActiveTab('Videos')}
      >
        <h1 className="text-[18px]">Videos</h1>
        <img src={video} alt="Video Icon" className="w-[25px] h-[25px]" />
      </div>

      {/* Images Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Images' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} p-2 rounded`}
        onClick={() => setActiveTab('Images')}
      >
        <h1 className="text-[18px]">Images</h1>
        <img src={camera} alt="Image Icon" className="w-[25px] h-[25px]" />
      </div>
    </div>

    <div className="flex  items-center my-4 ">
   

      {/* Buttons container */}
      <div className="flex space-x-2 mx-2">
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



{/* <div className="">
  <Dashboard1/>
</div> */}


<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">

{videoData.map((video) => (

<div key={video.id} 
          onClick={handleVideoClick}

className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Video Thumbnail / Video Clip */}
      <div
        className="relative group"
     
      >
        <video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-48 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
          muted
          loop
          src={video.videoSrc}
        //   poster={video.thumbnail} // Show thumbnail image until the video is played
        >
        
        </video>

        {/* Video Duration Overlay */}
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 flex">
        {/* Channel Icon */}
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={video.channelIcon}
          alt="Channel Icon"
        />
        <div>
          {/* Title and Details */}
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 md:line-clamp-2">{video.title}</h2>
          <p className="text-sm text-gray-500">
            {video.channelName}
          </p>
          <p className="text-sm text-gray-500"> {video.views} • {video.postedTime}</p>
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
       ))}
    </div>


    <div>
    <h1 className="font-bold text-[30px] my-[20px]">Latest</h1>
</div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">

{videoData.map((video) => (

<div key={video.id} 
          onClick={handleVideoClick}

className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Video Thumbnail / Video Clip */}
      <div
        className="relative group"
     
      >
        <video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-48 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
          muted
          loop
          src={video.videoSrc}
        //   poster={video.thumbnail} // Show thumbnail image until the video is played
        >
        
        </video>

        {/* Video Duration Overlay */}
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 flex">
        {/* Channel Icon */}
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={video.channelIcon}
          alt="Channel Icon"
        />
        <div>
          {/* Title and Details */}
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 md:line-clamp-2">{video.title}</h2>
          <p className="text-sm text-gray-500">
            {video.channelName}
          </p>
          <p className="text-sm text-gray-500"> {video.views} • {video.postedTime}</p>
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
       ))}
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
  <div className="w-full max-w-md rounded overflow-hidden shadow-lg bg-white">
    {/* Video Section */}
    <div className="relative group">
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-60 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
        muted
        loop
        src={videoSrc}
      ></video>
      
      {/* Expand Icon */}
      {/* <div className="absolute top-2 right-2 bg-black bg-opacity-75 p-1 rounded-full">
        <img src="/expand-icon.png" alt="Expand" className="w-4 h-4"/>
      </div> */}
      
      {/* Video Duration Overlay */}
      <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
        03:24
      </div>
    </div>

    {/* Video Info */}
    <div className="p-4 flex justify-between items-center">
      {/* Left Icon */}
      <img src={video} alt="" className="w-10 h-10"/>
      
      {/* Price Info */}
      <div className="text-lg">
        <p className="font-bold text-blue-600">Price ₹ 300.00 <span className="text-sm text-gray-500"><span className="line-through text-sm text-gray-500">₹ 369</span> at Discount 23%
        </span></p>
     
      </div>
      
      {/* Right Icon */}
      <img src={card} alt="" className="w-10 h-10"/>
    </div>

    {/* Description */}
    <div className="flex justify-between px-4">
      <p className="text-blue-500 font-bold  line-clamp-2 w-[40%] h-12">
      A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...

      </p>
      <div className="text-sm text-gray-500 flex flex-col  w-[60%] truncate">
        <p className="flex justify-end">2 days and 20 hours ago</p>
        <p className="flex justify-end truncate line-clamp-1">Bangalore, Karnataka, India</p>
        <p className="flex justify-end font-semibold text-blue-500 ">By Ram M Reddy</p>
      </div>
    </div>

    {/* Article Text */}
    <div className="px-4 py-4">
      <p className="text-gray-700 line-clamp-2">
        'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...
      </p>
    </div>
  </div>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
  <div className="w-full max-w-md rounded overflow-hidden shadow-lg bg-white">
    {/* Video Section */}
    <div className="relative group">
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-60 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
        muted
        loop
        src={videoSrc}
      ></video>
      
      {/* Expand Icon */}
      {/* <div className="absolute top-2 right-2 bg-black bg-opacity-75 p-1 rounded-full">
        <img src="/expand-icon.png" alt="Expand" className="w-4 h-4"/>
      </div> */}
      
      {/* Video Duration Overlay */}
      <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
        03:24
      </div>
    </div>

    {/* Video Info */}
   

    {/* Description */}
    <div className="flex justify-between px-4 p-2">
      <p className="text-blue-500 font-bold  line-clamp-2 w-[40%] h-12">
      A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...

      </p>
      <div className="text-sm text-gray-500 flex flex-col  w-[60%] truncate">
        <p className="flex justify-end">2 days and 20 hours ago</p>
        <p className="flex justify-end truncate line-clamp-1">Bangalore, Karnataka, India</p>
        <p className="flex justify-end font-semibold text-blue-500 ">By Ram M Reddy</p>
      </div>
    </div>

    {/* Article Text */}
    <div className="px-4 py-4">
      <p className="text-gray-700 line-clamp-2">
        'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...
      </p>
    </div>
    <div className="p-2 flex justify-between items-center">
      {/* Left Icon */}
      <img src={video} alt="" className="w-10 h-10"/>
      
      {/* Price Info */}
      <div className="text-lg">
        <p className="font-bold text-blue-600">Price ₹ 300.00 <span className="text-sm text-gray-500"><span className="line-through text-sm text-gray-500">₹ 369</span> at Discount 23%
        </span></p>
     
      </div>
      
      {/* Right Icon */}
      <img src={card} alt="" className="w-10 h-10"/>
    </div>
    <div className="w-64 flex items-center">
      {/* Time Display */}
      <span className="text-xs text-pink-500">{formatTime(currentTime)}</span>
      
      {/* Progress Bar */}
      <div className="relative flex-grow mx-2">
        <input
          ref={progressRef}
          type="range"
          defaultValue="0"
          max="100"
          className="w-full h-1 bg-blue-500 rounded-full"
          onChange={handleProgressChange}
        />
      </div>

      {/* Play/Pause Button */}
      <button onClick={togglePlayPause} className="text-blue-500">
        {isPlaying ? (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3v18l15-9L5 3z"/>
          </svg>
        )}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="your-audio-file.mp3" preload="metadata"></audio>
    </div>
  </div>
</div>

    {/* <div>
    <h1 className="font-bold cur text-[30px] my-[20px]">Images</h1>
</div> */}

{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
{cardData1
        .filter((card) => card.content_type === "Image") // Filter by content_type
        .map((card, index) => (
    <div key={index}   className=" shadow-md overflow-hidden border border-gray-300 rounded-lg flex flex-col h-full">
      <div  className="flex justify-end px-2 pt-1" >
        <img
          src="src/assets/Images/dashboard/flip.png"
          alt="flip"
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleFlip(index)}
        />
      </div>

      {!flippedCards[index] ? (
        <>
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src="src/assets/Images/dashboard/musical-note.png" alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.content_title}</h1>
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="text-sm">{card.final_price}</h1>
            </div>
          </div>
          <div className="p-2">
            <p className="truncate text-gray-500 p-1 border border-blue-300 rounded-md text-sm">
              {card.content_description}
            </p>
          </div>
          <div onClick={handleImagesClick} className="flex justify-center cursor-pointer">
            <img src={card.content_link} alt="social media" className="w-full h-40 " />
          </div>
          <div className="flex justify-between items-center gap-[5px] p-2 border-t border-black text-sm">
            <h1 className=" lg:truncate lg:w-[20%]">{card.uploaded_by}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[20%]">{card.age_in_days}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[60%]">{card.gps_location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </>
      ) : (
        <div className="flex flex-col ">
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src='src/assets/Images/dashboard/musical-note.png' alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.content_title}</h1>
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="text-sm">{card.final_price}</h1>
            </div>
          </div>
          <div className="p-2">
            <p className="truncate p-1 border border-blue-300 rounded-md text-sm">
              {card.content_description}
            </p>
          </div>
          <div className="flex flex-col w-full h-40 p-2 text-sm">
            <p className="font-bold">Date: <span className="font-normal">{card.uploaded_time}</span></p>
            <p className="font-bold">Created by: <span className="font-normal">{card.uploaded_by}</span></p>
            <p className="font-bold">Location: <span className="font-normal">{card.final_price}</span></p>
          </div>
          <div className="flex justify-between items-center gap-[5px] p-2 border-t border-black text-sm">
          <h1 className=" lg:truncate lg:w-[20%]">{card.uploaded_by}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[20%]">{card.age_in_days}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[60%]">{card.gps_location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  ))}
</div> */}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
  {cardData.map((card) => (
    <div key={card.id} className="shadow-md rounded-xl overflow-hidden flex flex-col items-center">
      <div onClick={handleImagesClick} className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 rounded-t-xl overflow-hidden">
        <img src={card.imgSrc} alt="post" className="w-full h-full cursor-pointer" />
      </div>
      <div className="flex flex-col p-4 w-full">
        <div className="flex gap-1 pb-2 items-center text-xs sm:text-sm text-gray-600">
          <p className="font-bold ">{card.userName}</p>
          <span>.</span>
          <p>{card.timeAgo}</p>
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <h1 className="font-bold text-base sm:text-lg">{card.location}</h1>
          <p className="text-sm text-gray-700 line-clamp-2 md:line-clamp-2">{card.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="flex gap-2">
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.likeImg} alt="like" className="w-5 h-5" />
            </div>
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.likeImg} alt="like" className="w-5 h-5 rotate-180" />
            </div>
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.chatImg} alt="chat" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.bookmarkImg} alt="bookmark" className="w-5 h-5" />
            </div>
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.shareImg} alt="share" className="w-5 h-5" />
            </div>
            <div className="rounded-full bg-gray-300 p-2">
              <img src={card.moreImg} alt="more" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div> */}
{/* <div>
    <h1 className="font-bold text-[30px] my-[20px]">Audio</h1>
</div> */}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
{cardData2.map((card) => (
    <div key={card.id}   className=" shadow-md overflow-hidden border border-gray-300 rounded-lg flex flex-col h-full">
      <div  className="flex justify-end px-2 pt-1" >
        <img
          src="src/assets/Images/dashboard/flip.png"
          alt="flip"
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleFlip1(card.id)}
        />
      </div>

      {!flippedCards[card.id] ? (
        <>
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src="src/assets/Images/dashboard/musical-note.png" alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.title}</h1>
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="text-sm">{card.price}</h1>
            </div>
          </div>
          <div className="p-2">
            <p className="truncate text-gray-500 p-1 border border-blue-300 rounded-md text-sm">
              {card.description}
            </p>
          </div>
          <div  className="flex justify-center cursor-pointer">
          <audio  controls className="w-full h-40 pb-16">
    <source src={card.image} type="audio/mp3" /> {/* Assuming the audio file is in MP3 format */}
  {/* </audio>
          </div>
          <div className="flex justify-between items-center gap-[5px] p-2 border-t border-black text-sm">
            <h1 className=" ">{card.userName}</h1>
            <p>|</p>
            <h1 className=" ">{card.days}</h1>
            <p>|</p>
            <h1 className="">{card.location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </>
      ) : (
        <div className="flex flex-col ">
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src='src/assets/Images/dashboard/musical-note.png' alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.title}</h1>
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="text-sm">{card.price}</h1>
            </div>
          </div>
          <div className="p-2">
            <p className="truncate p-1 border border-blue-300 rounded-md text-sm">
              {card.description}
            </p>
          </div>
          <div className="flex flex-col w-full h-40 p-2 text-sm">
            <p className="font-bold">Date: <span className="font-normal">{card.Date}</span></p>
            <p className="font-bold">Created by: <span className="font-normal">{card.createdBy}</span></p>
            <p className="font-bold">Location: <span className="font-normal">{card.location}</span></p>
          </div>
          <div className="flex justify-between items-center gap-[5px] p-2 border-t border-black text-sm">
          <h1 className=" ">{card.userName}</h1>
            <p>|</p>
            <h1 className=" ">{card.days}</h1>
            <p>|</p>
            <h1 className=" ">{card.location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  ))}
</div> */}




{/* <div className="shadow-md rounded-[20px] overflow-hidden w-[20%] h-[20%]">
    <div className="h-[10%]rounded-[20px] ">
        <img src="src\assets\Images\dashboard\NZ.jpg" alt="" className="flex w-[100%] h-[100px] "  />
    </div>
    <div className=" flex flex-col p-[15px]">
    <div className="flex gap-[5px] p-1 pb-[10px] items-center">
        <p className=" font-bold text-[12px]">Kung Jiyeon</p>
        <p>.</p>
        <p className="text-[12px]">2 hours ago</p>
    </div>
    <div className=" flex flex-col gap-[5px] pb-[20px]">
        <h1 className=" font-bold">Indianapolis</h1>
        <p className=" text-gray-400">Lorem lpsum is simply dummy text of the printing and typesetting</p>
    </div>
<div className=" flex justify-between">
    <div className=" flex gap-[10px] ">
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

        <img src="src\assets\Images\dashboard\like.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\chat.png" alt="" className="w-[20px] h-[20px]" />
</div>

    </div>
    <div className="flex gap-[10px]">
    <div className=" rounded-[50px] bg-gray-300 p-[5px]">

        <img src="src\assets\Images\dashboard\bookmark.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\share.png" alt="" className="w-[20px] h-[20px]" />
</div>
<div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\more.png" alt="" className="w-[20px] h-[20px]" />
</div>
       
    </div>
</div>
    </div>
</div> */}

{/* <div data-aos-duration="300" className="py-1">
        <div className=" mx-auto">
    
          <div className="grid grid-cols-1   gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, title, text, title1, text1 }) => {
                return (
                  <div
                    key={id}
                    className="bg-white rounded-3xl p-6 mt-6 min-h-[400px]  shadow-md xl:h-[370px]  2xl:min-h-[400px] items-center justify-center "
                  >
                    <h1 className="text-2xl font-bold text-secondary mt-16">
                      {title}
                    </h1>
                   
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div> */}
         
     


     {/* <div className="flex shadow-md rounded-[20px] overflow-hidden mt-6  h-[20%] pb-[10px]">
    <div className="h-[10%] rounded-[20px] ">
        <img src="src\assets\Images\dashboard\NZ.jpg" alt="" className="flex w-[100%] h-[172px] "  />
    </div>
    <div className="flex flex-col p-[15px] ">
    <div className="flex gap-[5px] p-1 pb-[10px] items-center">
        <p className=" font-bold text-[12px]">Kung Jiyeon</p>
        <p>.</p>
        <p className="text-[12px]">2 hours ago</p>
    </div>
    <div className=" flex flex-col gap-[5px] pb-[20px]">
        <h1 className=" font-bold">Indianapolis</h1>
        <p className=" text-gray-400">Lorem lpsum is simply dummy text of the printing and typesetting</p>
    </div>
<div className=" flex justify-between">
    <div className=" flex gap-[10px] ">
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

        <img src="src\assets\Images\dashboard\like.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\chat.png" alt="" className="w-[20px] h-[20px]" />
</div>

    </div>
    <div className="flex gap-[10px]">
    <div className=" rounded-[50px] bg-gray-300 p-[5px]">

        <img src="src\assets\Images\dashboard\bookmark.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\share.png" alt="" className="w-[20px] h-[20px]" />
</div>
<div className=" rounded-[50px] bg-gray-300 p-[5px]">

<img src="src\assets\Images\dashboard\more.png" alt="" className="w-[20px] h-[20px]" />
</div>
       
    </div>
</div>
    </div>
    
</div> */}


   </div>
          {/* <Footer/> */}
   </div>
    </div>
  );
};

export default dashboard;
