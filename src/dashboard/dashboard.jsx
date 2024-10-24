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
import channelIcon from '../../src/assets/Images/landing/pic.jpg';

import Image1 from '../../src/assets/Images/dashboard/viratkhoil.webp';
import Image2 from '../../src/assets/Images/dashboard/Vig.webp';
import Image3 from '../../src/assets/Images/dashboard/social-media.jpg';
import Image4 from '../../src/assets/Images/dashboard/news1.webp';
import lessthan from '../../src/assets/Images/dashboard/less-than-symbol.png';
import play from '../../src/assets/Images/dashboard/play-button (1).png';
import expanding from '../../src/assets/Images/dashboard/maximize.png'
import imgSrc1 from '../../src/assets/Images/dashboard/HYD.webp';

import { FaPlay,FaArrowDown,FaHeart,FaPause } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";

// const cardData = [
//   {
//     id: 1,
//     imgSrc:imgSrc1,
//     trackTime: '00:17',
//     trackName: 'Hi-Tech Cybernetic Device',
//     artist: 'Art of Sound',
//     category: 'Futuristic Sounds',
//     price: 3,
//     trackBPM: 120,
//     cardIcon: card,
//     audioSrc:audio,
//   },
//   {
//       id: 2,
//     imgSrc:imgSrc1,
//     trackTime: '00:17',
//     trackName: 'Hi-Tech Cybernetic Device',
//     artist: 'Art of Sound',
//     category: 'Futuristic Sounds',
//     price: 3,
//     trackBPM: 120,
//     cardIcon: card,
//     audioSrc:audio,
//     },
//     {
//       id: 3,
//       imgSrc:imgSrc1,
//       trackTime: '00:17',
//       trackName: 'Hi-Tech Cybernetic Device',
//       artist: 'Art of Sound',
//       category: 'Futuristic Sounds',
//       price: 3,
//       trackBPM: 120,
//       cardIcon: card,
//       audioSrc:audio,
//     },
//     {
//       id: 4,
//       imgSrc:imgSrc1,
//       trackTime: '00:17',
//       trackName: 'Hi-Tech Cybernetic Device',
//       artist: 'Art of Sound',
//       category: 'Futuristic Sounds',
//       price: 3,
//       trackBPM: 120,
//       cardIcon: card,
//       audioSrc:audio,
//     },
 
  
    
  
//   // Add more data objects here if needed
// ];
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
// const cardData = [
//     {
//       id: 1,
//       userName: 'World Trade Center',
//       timeAgo: '2 hours ago',
//       location: 'Hyderabad',
//       description: 'Officials in Ranga Reddy district are planning to establish a World Trade Center in the upcoming Future City on the outskirts of Hyderabad. Representatives from the World Trade Centers Association have expressed interest in setting up a center in Hyderabad, similar to the one in the United States. Authorities are considering three locations for this purpose and estimate that around 70 acres of land will be required.',
//       imgSrc: imgSrc,
//       likeImg: likeImg,
//       chatImg: chatImg,
//       bookmarkImg: bookmarkImg,
//       shareImg: shareImg,
//       moreImg:moreImg,
//     },
//     {
//         id: 2,
//         userName: 'High Court',
//         timeAgo: '4 hours ago',
//         location: 'Hyderabad',
//         description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested that the Hyderabad Metropolitan Development Authority (HMDA) be added as a respondent, arguing that it is responsible for the protection of Hussain Sagar. The court stated that it will hear arguments tomorrow, with the Chief Justice bench scheduled to listen to the case.',
//         imgSrc: imgSrc,
//         likeImg: likeImg,
//         chatImg: chatImg,
//         bookmarkImg: bookmarkImg,
//         shareImg: shareImg,
//         moreImg:moreImg,
//       },
//       {
//         id: 3,
//         userName: '1,528 hectares..!',
//         timeAgo: '1 hours ago',
//         location: 'Anakapalli',
//         description: 'Due to heavy rains in Anakapalli district, paddy crops spread across 1,528 hectares belonging to 4,420 farmers have been submerged, according to District Agriculture Officer Mohan Rao. After the water recedes from the fields, he advised farmers to apply 20 kg of urea and 20 kg of potash fertilizers per acre of paddy fields. To prevent pests, he suggested spraying Gram Carbon disulfide powder mixed with water at the rate of one liter per field.',
//         imgSrc: imgSrc,
//         likeImg: likeImg,
//         chatImg: chatImg,
//         bookmarkImg: bookmarkImg,
//         shareImg: shareImg,
//         moreImg:moreImg,
//       },
//       {
//         id: 4,
//         userName: 'flood-affected.',
//         timeAgo: '2 hours ago',
//         location: 'Krishna',
//         description: 'In flood-affected colonies of Vijayawada, thieves are targeting locked houses, stealing cash, gold, and gas cylinders from safes. In Luna Center, thieves took 10 tolas of gold and ₹1.5 lakh in cash, while in Bombay Colony, 3 tolas of gold were stolen. Similar thefts occurred in Singh Nagar and other areas, according to the distressed victims. Many have returned from safer places only to find their belongings looted, leaving them in tears.',
//         imgSrc: imgSrc,
//         likeImg: likeImg,
//         chatImg: chatImg,
//         bookmarkImg: bookmarkImg,
//         shareImg: shareImg,
//         moreImg:moreImg,
//       },
   
    
      
    
//     // Add more data objects here if needed
//   ];
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
  // const videoData = [
  //   {
  //     id: 1,
  //     videoSrc: videoSrc, // Replace with actual video source
  //     price: '₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: '23%',
  //     video: video, // Replace with actual icon path
  //     card: card, // Replace with actual icon path
  //     description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
  //     timeAgo: '1 Days and 20 Hours',
  //     location: 'Bangalore, Karnataka, India',
  //     author: 'Creator Ram M Reddy',
  //   },
  //   {
  //     id: 2,
  //     videoSrc: videoSrc1,
  //     price: '₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: '23%',
  //     video: video, // Replace with actual icon path
  //     card: card,
  //     description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested...',
  //     timeAgo: '2 Day and 15 Hours',
  //     location: 'Mumbai, Maharashtra, India',
  //     author: 'Creator Narasimha Reddy ',
  //   },
  //   {
  //     id: 3,
  //     videoSrc: videoSrc2,
  //     price: '₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: '23%',
  //     video: video, // Replace with actual icon path
  //     card: card,
  //     description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested...',
  //     timeAgo: '3 Day and 15 Hours',
  //     location: 'Mumbai, Maharashtra, India',
  //     author: 'Creator Sruthi',
  //   },
  //   // Add more objects for additional videos...
  // ];
  // const imageData = [
  //   {
  //     id: 1,
  //     imageSrc: Image1,
  //     overlayText: 'New Arrival',
  //     leftIcon: camera,
  //     rightIcon: card,
  //     price:'₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: 23,
  //     description: 'A short description of the image...',
  //     timeAgo: '2 Days',
  //     location: 'New York, USA',
  //     author: 'Creator John Doe',
  //     articleText: 'Some more detailed text about the image or article...'
  //   },
  //   {
  //     id: 2,
  //     imageSrc: Image2,
  //     overlayText: 'New Arrival',
  //     leftIcon: camera,
  //     rightIcon: card,
  //     price:'₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: 23,
  //     description: 'A short description of the image...',
  //     timeAgo: '2 Days',
  //     location: 'New York, USA',
  //     author: 'Creator John Doe',
  //     articleText: 'Some more detailed text about the image or article...'
  //   },
  //   {
  //     id: 3,
  //     imageSrc: Image3,
  //     overlayText: 'New Arrival',
  //     leftIcon: camera,
  //     rightIcon: card,
  //     price:'₹ 300.00',
  //     discountPrice: '₹ 369',
  //     discount: 23,
  //     description: 'A short description of the image...',
  //     timeAgo: '2 days',
  //     location: 'New York, USA',
  //     author: 'Creator John Doe',
  //     articleText: 'Some more detailed text about the image or article...'
  //   },
  //   // More objects
  // ];

  const videoData1 = [
    {
      id: 1,
      videoSrc: Image1,
      description: 'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...',
      timeAgo: '2 Days and 20 Hours',
      location: 'Bangalore, Karnataka, India',
      author: 'Creator Ram M Reddy',
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
      author: 'Creator Ram M Reddy',
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
      author: 'Creator Ram M Reddy',
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

// useEffect(() => {
//   if (!isAuthenticated) {
//     navigate("/login"); // Redirect to login if not authenticated
//     return;
//   }

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch(
//         `${URL}/landing page?user_id=${userId}`,
//         {
//           method: "POST",
//           headers: {
//             "accept": "application/json",
//             Authorization: `Bearer ${authToken}`,
//           },
//           body: JSON.stringify({}) // Empty body for a POST request
//         }
//       );
//       const data = await response.json();

//       if (data.response === "success") {
//         setVideoData(data.data);
//         setImageData(data.data);
//         setCartCount(data.cart_count);
//         localStorage.setItem("cart_count", data.cart_count);

//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     } finally {
//       setLoading(false); // Stop loading once data is fetched
//     }
//   };

//   fetchData();
// }, [isAuthenticated, userId, authToken, navigate]); // Fixed dependency array

// Render loading state
const fetchData = async () => {
  try {
    setLoading(true);
    const response = await fetch(`${URL}/landing page?user_id=${userId}`, {
      method: "POST",
      headers: {
        "accept": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({}) // Empty body for a POST request
    });

    const data = await response.json();

    if (data.response === "success") {
      setVideoData(data.data);
      setImageData(data.data);
      setCardData(data.data)
      setCartCount(data.cart_count);
      localStorage.setItem("cart_count", data.cart_count);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    setLoading(false); // Stop loading once data is fetched
  }
};
useEffect(() => {
  fetchData(); // Fetch data on component mount
}, []); // Add any dependencies if needed

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
const toggleimage = (content_id) => {
  setOpenOptionsId1(openOptionsId1 === content_id ? null : content_id);
};
const deleteContent = async (contentId) => {
  try {
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
        toast.error('This content is already in your cart.');
        return;
      }else if (data.response === `fail` && data.response_message === `The content you're trying to add is locked at the moment. Please try again later.`){
        toast.error(`The content you're trying to add is locked at the moment. Please try again later.`);
        return;
      }
  
      // If none of the above conditions match, log and show a generic error
      console.error('Unexpected response:', data);
      toast.error('Failed to add content to cart.');
  
    } catch (error) {
      // Handle any network or other request-related errors
      console.error('Request error:', error);
      toast.error('An error occurred while adding to the cart.');
    }
  };
  const fetchCartItems = async () => {
    try {
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
    <div className=" relative top-[160px]">
    <div className="flex  items-center my-4 ">
   

      {/* Buttons container */}
      {/* <div className="flex space-x-3 mx-3">
        {visibleButtons.map((label, index) => (
          <button key={index} className="bg-gray-400 text-white py-1 px-4 rounded">
            {label}
          </button>
        ))}
      </div> */}
   {/* Less than button */}
   {/* <button 
        className="p-2 text-gray-600" 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
       <img src={lessthan} alt="" className="w-[20px] h-[20px]" />
      </button> */}
      {/* Greater than button */}
      {/* <button 
        className="p-2 text-gray-600" 
        onClick={handleNext}
        disabled={currentIndex + buttonsPerPage >= buttonLabels.length}
      >
              <img src={lessthan} alt="" className="w-[20px] h-[20px] rotate-180" />
      </button> */}
    </div>


  {activeTab ==='Videos' &&(

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
{loading ? (
  Array.from({ length: 6 }).map((_, index) => (
    <div
      key={index}
      className="w-full max-w-sm bg-gray-200 animate-pulse rounded-lg shadow-lg"
    >
      <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
      <div className="p-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
        <div className="flex space-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  ))
) : (
  videoData
    .filter((videoItem) =>
      videoItem.content_type === "Video"  &&
    videoItem.sold_flag === false && 
    videoItem.purchased_flag === false )
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
              src={videoItem.Video_link}
            ></video>
            <div
              onClick={() => handleVideoClick(videoItem)}
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={play}
                alt="Play"
                className="w-[20px] h-[20px] text-white group-hover:text-black transition-colors duration-300"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="p-4 flex justify-between items-center relative">
            <img src={video} alt="" className="w-[25px] h-[25px]" />
            <div className="text-lg" onClick={() => handleVideoClick(videoItem)}>
              <p className="font-bold text-blue-600">
              ₹{videoItem.price}{' '}
                <span className="text-sm text-gray-500">
                  <span className="line-through text-sm text-gray-500">{videoItem.final_price}</span> at Discount {videoItem.discount}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                onClick={() => handleAddToCart(videoItem.content_id, videoItem.Video_link, videoItem.final_price)}
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
              {/* {openOptionsId === videoItem.content_id && (
                <div className="absolute top-[20px] right-[24px] bg-gray-100 shadow-lg rounded-md p-2 w-32 z-10 clip-path-custom">
                  <button
                    onClick={() => downloadContent(videoItem.content_id)}
                    className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2"
                  >
                    Download
                  </button>
                </div>
              )} */}
            </div>
          </div>

          {/* Description */}
          <div onClick={() => handleVideoClick(videoItem)} className="flex justify-between px-4">
            <p className="text-blue-500 font-semibold line-clamp-2 w-[60%] h-12">
              {videoItem.content_title}
            </p>
            <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
              <p className="text-[12px] line-clamp-1 text-[#ce003d]">{videoItem.age_in_days}</p>
              <p className="text-[12px] line-clamp-1">{videoItem.gps_location}</p>
              <p className="text-[12px] text-blue-500">{videoItem.uploaded_by}</p>
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
    })
)}
</div>
  )}
  
{activeTab ==='Images' && (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
  {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-gray-200 animate-pulse rounded-lg shadow-lg"
            >
              <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
              <div className="p-4">
                <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
imageData
    .filter((imageItem) => 
      imageItem.content_type === "Image"  &&
    imageItem.sold_flag === false && 
      imageItem.purchased_flag === false 

  ) // Filter to show only images
    .map((imageItem) => {
      // console.log("Image Link:", imageItem.Image_link); 
      // console.log("Image :",imageItem); // Check the structure of imageItem in the console

   return (
     <div key={imageItem.content_id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
       {/* Image Section */}
       <div className="relative group">
       <img
            src={imageItem.Image_link}
            alt={imageItem.content_title || "Image not available"}
            className="w-full h-60 "
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "path-to-fallback-image.jpg"; // Add a fallback image
              console.log(`Error loading image: ${imageItem.Image_link}`);
            }}
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
       <div className="p-4 flex justify-between items-center relative">
      {/* Left Icon */}
        {/* Left Icon */}
        <img src={camera}   alt="" className="w-[25px] h-[25px] cursor-pointer" />

{/* Price Info */}
<div className="text-lg" onClick={() => handleImagesClick(imageItem)}>
  <p className="font-bold text-blue-600">
  ₹{imageItem.price}{' '}
    <span className="text-sm text-gray-500">
      <span className="line-through text-sm text-gray-500">{imageItem.final_price}</span> at Discount {imageItem.discount}%
    </span>
  </p>
</div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
      <img src={card} alt="" onClick={() => handleAddToCart(imageItem.content_id, imageItem.Image_link, imageItem.final_price)}
 className="w-[25px] h-[25px] cursor-pointer" />

        
        {/* Three Dots Icon */}
        {/* <img
          src={moreImg}
          alt="More options"
          className="w-[15px] h-[15px] cursor-pointer"
          onClick={() => toggleOptions(imageItem.content_id)} 

        /> */}

        {/* Dropdown Options */}
        {/* {openOptionsId === imageItem.content_id && ( // Only show options if this card is selected
        <div className="absolute top-[20px] right-[24px] bg-gray-100 shadow-lg rounded-md p-2 w-32 z-10 clip-path-custom">
        <button
          onClick={() => downloadContent(imageItem.content_id)}
          className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2"
        >
          Download
        </button>
       
      </div>
        )} */}
      </div>
    </div>
       {/* Image Info */}
     

       {/* Description */}
       <div className="flex justify-between px-4" onClick={() => handleImagesClick(imageItem)}>
       <p className="text-blue-600 font-semibold line-clamp-2 w-[60%] h-12">
           {imageItem.content_title}
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
})
)}
</div>
)}
   {activeTab ==='Audio' && (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
{cardData .filter((card) => 
      card.content_type === "Audio"  &&
      card.sold_flag === false && 
      card.purchased_flag === false 

  ) .map((card) => (
      <div key={card.id}  className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-2">
          <div className="relative ">
            {/* <img
              src={card.imgSrc}
              alt="Album cover"
              layout="fill"
            
              className="w-16 h-12 rounded-md object-cover"
            /> */}
             <div className="w-16 h-12 rounded-md bg-blue-500 text-white flex items-center justify-center text-lg font-bold">
            {card.uploaded_by.charAt(0)}
          </div>
              </div>
            <div onClick={() => togglePlay(card.content_id)} className="">
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
          <span className="text-sm text-gray-500">{remainingTime[card.content_id] || '00:00'}</span>


          </div>
          <div>
          <h2 className="text-lg font-semibold my-1">{card.content_title}</h2>

          </div>
          {/* <div className="flex justify-end gap-[5px] mb-2 items-center space-x-2">
            <div className="flex justify-center items-center">
              <p>Tracks 1 BPM <span>--</span></p>
            </div>
            <FaArrowDown className="w-6 h-6 text-gray-400" />
            <div className="w-[2px] bg-gray-500 h-[35px]"/>
            <HiEllipsisVertical className="w-6 h-6 text-gray-400" />
            <div className="w-[2px] bg-gray-500 h-[35px]"/>
            <FaHeart className="w-6 h-6 text-gray-400" />

          </div> */}

          <div className="flex-grow mb-3">
            <h2 className="text-sm text-gray-600 font-normal line-clamp-2 mb-1">{card.content_description}</h2>
            <p className="text-sm "> {card.uploaded_by}</p>
          </div>
          <div className="w-[100%] bg-gray-500 h-[2px]"/>

        </div>
        <div className="px-4 pb-4">
         
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
            <span className="text-lg font-bold">₹{card.price}</span>

              {/* <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                 <span className="text-sm text-gray-500 ml-1">(53)</span>
                 <span className="text-sm text-gray-500 ml-1">2.8k</span>

              </div> */}
            </div>
            {/* <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Buy
            </button> */}
            <img   onClick={() => handleAddToCart(card.content_id, card.Video_link, card.final_price)}
                src={card1} className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <audio
            ref={(el) => (audioRefs.current[card.content_id] = el)}
            src={card.Audio_link}
            onTimeUpdate={() => handleTimeUpdate(card.content_id)} // Update progress on time update
            onEnded={() => {
              setIsPlaying(null); // Reset playing state when audio ends
              setProgress((prev) => ({ ...prev, [card.content_id]: 0 })); // Reset progress
            }}
          />
      </div>
))}
 </div>
   )}
{showCartNotification && (
  <div
    className="fixed right-0 top-0 transition-transform duration-500 transform translate-x-0 shadow-xl p-4 bg-white lg:w-[25%] z-50"
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
      {cartContent.isVideo ? (
  <video
    src={cartContent.link}
    className="object-cover w-[100px] h-[100px]"
    controls
    autoPlay
    muted
    loop
    type="video/mp4" // Ensure you specify the correct video type
    onError={(e) => {
      console.error('Error loading video:', e);
      // alert('Video failed to load. Please check the video URL or format.');
    }}
  >
    Your browser does not support the video tag.
  </video>
) : (
  <img
    src={cartContent.link}
    alt="Cart Content"
    className="object-cover w-[100px] h-[100px]"
    onError={(e) => console.error('Error loading image:', e)} // Handle errors
  />
)}

      {/* <img src={cartContent} alt="Added Content" className="w-[100px] h-[100px]" /> */}

      <div className="flex items-center gap-[5px]">
        <img src={check} alt="Check" className="w-[15px] h-[15px]" />
        <h2 className="text-xl font-semibold">Added to Cart</h2>
      </div>
    </div>

    <div className="flex flex-col gap-2 mt-4">
      <h1 className="font-semibold text-2xl">Cart Subtotal: {finalprice}</h1>
      {/* <div className="bg-yellow-400 rounded-2xl flex justify-center">
        <button className="text-black p-2">  Proceed to Buy ({cartCount} item{cartCount !== 1 ? 's' : ''})</button>
      </div> */}
      <div onClick={handlecart} className="bg-white border-[1px] border-black rounded-2xl flex justify-center">
        <button className="text-black p-2" onClick={handlecart}>Go to Cart</button>
      </div>
    </div>
  </div>
)}

{/* <div className="flex justify-between shadow-xl p-4 lg:w-[50%]">
  <div className="flex justify-center items-center gap-[5px]">
    <img src={Image1} alt="" className=" w-[100px] h-[100px]" />
    <div className="flex justify-center gap-[3px]">
      <img src={check} alt="" className="w-[15px] h-[15px] mt-2 "/>
      <h2 className="text-xl font-semibold">Added to Cart</h2>
    </div>
  </div>
  <div className="flex flex-col gap-2">
    <div className="p-2">
      <h1 className=" font-semibold text-2xl">Cart Subtotal:₹299.99</h1>
    </div>
    <div className="bg-yellow-400 border-1px rounded-2xl  flex justify-center ">
      <button className="text-black p-2">Proceed to Buy (1 items)</button>
    </div>
    <div className="bg-white border-[1px] flex justify-center border-black rounded-2xl">
      <button className="text-black p-2 ">Go to Cart</button>
    </div>
  </div>
</div> */}

</div>
   </div>
   </div>
    </div>
  );
};

export default dashboard;
