import React, { useState, useEffect,useRef,useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landing from "../landing/landing";
import { Transition } from "@headlessui/react";

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

import Image1 from '../../src/assets/Images/dashboard/viratkhoil.webp';
import Image2 from '../../src/assets/Images/dashboard/Vig.webp';
import Image3 from '../../src/assets/Images/dashboard/social-media.jpg';
import Image4 from '../../src/assets/Images/dashboard/news1.webp';

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
  // const videoData = [
  //   {
  //     id: 1,
  //     videoSrc: videoSrc, // video file or URL
  //     thumbnail: 'your-thumbnail-1.jpg', // thumbnail URL if needed
  //     title: 'YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024',
  //     channelIcon: channelIcon, // channel icon image
  //     views: '9.2M views',
  //     duration: '2:29',
  //     postedTime: '18 hours ago',
  //     channelName: 'SakshiTV'
  //   },
  //   {
  //     id: 2,
  //     videoSrc: videoSrc1, // video file or URL

  //     thumbnail: 'your-thumbnail-2.jpg',
  //     title: '10:30 PM | 12th September 2024 | ETV News | News Headlines | ETV Andhra Pradesh',
  //     channelIcon: channelIcon, // channel icon image
  //     views: '280 views',
  //     duration: '1:31',
  //     postedTime: '2 days ago',
  //     channelName: 'ETV Andhra Pradesh'
  //   },
  //   {
  //       id: 3,
  //       videoSrc: videoSrc2, // video file or URL
  
  //       thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',

  //       title: 'CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation',
  //       channelIcon: channelIcon, // channel icon image
  //       views: '1.5M views',
  //       duration: '1:22',
  //       postedTime: '2 days ago',
  //       channelName: 'XYZ Productions'
  //     },
  //     {
  //       id: 4,
  //       videoSrc: videoSrc3, // video file or URL
  
  //       thumbnail: 'src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4',
  //       title: 'Some Other Trailer | Actor | Actress',
  //       channelIcon: channelIcon, // channel icon image
  //       views: '1.5M views',
  //       duration: '3:10',
  //       postedTime: '2 days ago',
  //       channelName: 'XYZ Productions'
  //     },
    
   
  //   // Add more video objects here
  // ];
  const videoData = [
    {
      id: 1,
      videoSrc: videoSrc, // Replace with actual video source
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: '23%',
      video: video, // Replace with actual icon path
      card: card, // Replace with actual icon path
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
      timeAgo: '1 Days and 20 Hours',
      location: 'Bangalore, Karnataka, India',
      author: 'Owner Ram M Reddy',
    },
    {
      id: 2,
      videoSrc: videoSrc1,
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: '23%',
      video: video, // Replace with actual icon path
      card: card,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested...',
      timeAgo: '2 Day and 15 Hours',
      location: 'Mumbai, Maharashtra, India',
      author: 'Owner Narasimha Reddy ',
    },
    {
      id: 3,
      videoSrc: videoSrc2,
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: '23%',
      video: video, // Replace with actual icon path
      card: card,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested...',
      timeAgo: '3 Day and 15 Hours',
      location: 'Mumbai, Maharashtra, India',
      author: 'Owner Sruthi',
    },
    // Add more objects for additional videos...
  ];
  const imageData = [
    {
      id: 1,
      imageSrc: Image1,
      overlayText: 'New Arrival',
      leftIcon: camera,
      rightIcon: card,
      price:'₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      description: 'A short description of the image...',
      timeAgo: '2 Days',
      location: 'New York, USA',
      author: 'Owner John Doe',
      articleText: 'Some more detailed text about the image or article...'
    },
    {
      id: 2,
      imageSrc: Image2,
      overlayText: 'New Arrival',
      leftIcon: camera,
      rightIcon: card,
      price:'₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      description: 'A short description of the image...',
      timeAgo: '2 Days',
      location: 'New York, USA',
      author: 'Owner John Doe',
      articleText: 'Some more detailed text about the image or article...'
    },
    {
      id: 3,
      imageSrc: Image3,
      overlayText: 'New Arrival',
      leftIcon: camera,
      rightIcon: card,
      price:'₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      description: 'A short description of the image...',
      timeAgo: '2 days',
      location: 'New York, USA',
      author: 'Owner John Doe',
      articleText: 'Some more detailed text about the image or article...'
    },
    // More objects
  ];

  const videoData1 = [
    {
      id: 1,
      videoSrc: Image1,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
      timeAgo: '2 Days and 20 Hours',
      location: 'Bangalore, Karnataka, India',
      author: 'Owner Ram M Reddy',
      articleText: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders...',
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      audioIcon: Auido,
      rightIcon: card,
    },
    {
      id: 2,
      videoSrc: Image4,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
      timeAgo: '2 Days and 20 Hours',
      location: 'Bangalore, Karnataka, India',
      author: 'Owner Ram M Reddy',
      articleText: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders...',
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      audioIcon: Auido,
      rightIcon: card,
    },
    {
      id: 3,
      videoSrc: Image3,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
      timeAgo: '2 Days and 20 Hours',
      location: 'Bangalore, Karnataka, India',
      author: 'Owner Ram M Reddy',
      articleText: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders...',
      price: '₹ 300.00',
      discountPrice: '₹ 369',
      discount: 23,
      audioIcon: Auido,
      rightIcon: card,
    },
    // More video objects can be added here
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
    const [isOpen, setIsOpen] = useState(false);

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
    <div className="p-[20px] bg-white">
   <Filters/>
      {/* Button to toggle the sidebar */}
      

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="mb-4">
              <select
                name="Sort By"
                id="Sort By"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Sort By</option>
              </select>
            </div>
            <div className="mb-4">
              <select
                name="Filter By"
                id="Filter By"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Filter By</option>
              </select>
            </div>
            <div className="mb-4">
              <select
                name="Price Range"
                id="Price Range"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Price Range</option>
              </select>
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <img src={card} alt="Cart Icon" className="w-8 h-8 mr-2" />
            <p className="text-lg">2 items</p>
          </div>
        </div>
      </div>
   
<div className="flex w-full items-center p-4">
      {/* Audio Tab */}
      <div
        className={`flex w-full justify-center  items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Audio' ? 'bg-[#ce003d] text-white' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Audio')}
      >
        <img src={Auido} alt="Audio Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Audio</h1>
      </div>

      {/* Videos Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Videos' ? 'bg-[#ce003d] text-white' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Videos')}
      >
        <img src={video} alt="Video Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Videos</h1>
      </div>

      {/* Images Tab */}
      <div
        className={`flex w-full justify-center items-center space-x-2 cursor-pointer shadow-xl ${activeTab === 'Images' ? 'bg-[#ce003d] text-white' : 'bg-white text-[#ce003d]'} p-2 rounded`}
        onClick={() => setActiveTab('Images')}
      >
        <img src={camera} alt="Image Icon" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">Images</h1>
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


  {activeTab ==='Videos' &&(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {videoData.map((videoItem) => {
        const videoRef = React.createRef();
        return (
          <div key={videoItem.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* Video Section */}
            <div className="relative group">
              <video
                ref={videoRef}
                onMouseEnter={() => handleMouseEnter(videoRef)}
                onMouseLeave={() => handleMouseLeave(videoRef)}
                className="w-full h-60 object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
                muted
                loop
                onClick={handleVideoClick}
                src={videoItem.videoSrc}
              ></video>

              {/* Video Duration Overlay */}
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                03:24 {/* You can make this dynamic if you have a duration in your data */}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 flex justify-between items-center">
              {/* Left Icon */}
              <img src={videoItem.video} alt="" className="w-[25px] h-[25px]" />

              {/* Price Info */}
              <div className="text-lg">
                <p className="font-bold text-blue-600">
                  Price {videoItem.price}{' '}
                  <span className="text-sm text-gray-500">
                    <span className="line-through text-sm text-gray-500">{videoItem.discountPrice}</span> at Discount {videoItem.discount}
                  </span>
                </p>
              </div>

              {/* Right Icon */}
              <img  onClick={toggleSidebar} src={videoItem.card} alt="" className="w-[25px] h-[25px] cursor-pointer" />
            </div>

            {/* Description */}
            <div className="flex justify-between px-4">
              <p className="text-blue-500 font-semibold line-clamp-2 w-[60%] h-12">
                {videoItem.description}
              </p>
              <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
                <p className="text-[12px] line-clamp-1 text-[#ce003d]">{videoItem.timeAgo}</p>
                <p className="text-[12px] line-clamp-1">{videoItem.location}</p>
                <p className="text-[12px]  text-blue-500">{videoItem.author}</p>
              </div>
            </div>

            {/* Article Text */}
            <div className="px-4 py-4">
              <p className="text-gray-500 line-clamp-2">
                {videoItem.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )}
  
{activeTab ==='Images' && (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
 {imageData.map((imageItem) => {
   return (
     <div key={imageItem.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
       {/* Image Section */}
       <div className="relative group">
         <img
           src={imageItem.imageSrc}
           alt={imageItem.title}
           className="w-full h-60  group-hover:opacity-100 opacity-90 transition-opacity duration-300"
         />

         {/* Image Duration Overlay or Other Overlay Info */}
         <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
           {imageItem.overlayText || 'Overlay Text'}
         </div>
       </div>

       {/* Image Info */}
       <div className="p-4 flex justify-between items-center">
         {/* Left Icon */}
         <img src={imageItem.leftIcon}   alt="" className="w-[25px] h-[25px] cursor-pointer" />

         {/* Price Info */}
         <div className="text-lg">
           <p className="font-bold text-blue-600">
             Price {imageItem.price}{' '}
             <span className="text-sm text-gray-500">
               <span className="line-through text-sm text-gray-500">{imageItem.discountPrice}</span> at Discount {imageItem.discount}%
             </span>
           </p>
         </div>

         {/* Right Icon */}
         <img src={imageItem.rightIcon} alt="" onClick={toggleSidebar} className="w-[25px] h-[25px] cursor-pointer" />
       </div>

       {/* Description */}
       <div className="flex justify-between px-4">
       <p className="text-blue-600 font-semibold line-clamp-2 w-[60%] h-12">
           {imageItem.description}
         </p>
         <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
           <p className="text-[12px] line-clamp-1 text-[#ce003d]">{imageItem.timeAgo}</p>
           <p className="text-[12px] line-clamp-1">{imageItem.location}</p>
           <p className="text-[12px]  text-blue-600">{imageItem.author}</p>
         </div>
       </div>

       {/* Article Text */}
       <div className="px-4 py-4">
         <p className="text-gray-600 line-clamp-2">
           {imageItem.articleText}
         </p>
       </div>
     </div>
   );
 })}
</div>
)}
   {activeTab ==='Audio' && (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
   {videoData1.map((item) => (
     <div key={item.id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
       {/* Video Section */}
       <div className="relative group">
     
<img src={item.videoSrc} alt=""  className="w-full h-60  group-hover:opacity-100 opacity-90 transition-opacity duration-300"
/>
         {/* Duration Overlay */}
         {/* <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">03:24</div> */}
       </div>

       {/* Description */}
       <div className="flex justify-between px-4">
         <p className="text-blue-500 font-semibold line-clamp-2 w-[60%] h-12">
           {item.description}
         </p>
         <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
           <p className="text-[12px] line-clamp-1 text-[#ce003d]">{item.timeAgo}</p>
           <p className="text-[12px] line-clamp-1">{item.location}</p>
           <p className="text-[12px]  text-blue-500">{item.author}</p>
         </div>
       </div>

       {/* Article Text */}
       <div className="px-4 py-4">
         <p className="text-gray-500 line-clamp-2">
           {item.articleText}
         </p>
       </div>

       {/* Price Info */}
       <div className="px-4 flex justify-between items-center">
         <img src={item.audioIcon} alt="" className="w-[25px] h-[25px]" />
         <div className="text-lg">
           <p className="font-bold text-blue-600">
             Price {item.price} <span className="text-sm text-gray-500"><span className="line-through text-sm text-gray-500">{item.discountPrice}</span> at Discount {item.discount}%</span>
           </p>
         </div>
         <img onClick={toggleSidebar}  src={item.rightIcon} alt="" className="w-[25px] h-[25px] cursor-pointer" />
       </div>

       <div className="px-4 p-2 w-full flex items-center">
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
               <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
             </svg>
           ) : (
             <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
               <path d="M5 3v18l15-9L5 3z" />
             </svg>
           )}
         </button>

         {/* Audio Element */}
         <audio ref={audioRef} src="your-audio-file.mp3" preload="metadata"></audio>
       </div>
     </div>
   ))}
 </div>
   )}




   </div>
   </div>
    </div>
  );
};

export default dashboard;
