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
import imgSrc1 from '../../src/assets/Images/dashboard/HYD.webp';


import videoSrc from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import videoSrc1 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import videoSrc2 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import videoSrc3 from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';

import Filters from "../filters/filters";
import channelIcon from '../../src/assets/Images/landing/pic.jpg';
import card from '../../src/assets/Images/dashboard/shopping-cart.png'

import flip from '../../src/assets/Images/dashboard/flip.png';
import musical from '../../src/assets/Images/dashboard/musical-note.png';
import grocery from '../../src/assets/Images/dashboard/grocery-store.png'
// import { PlayIcon, ArrowDownTrayIcon, EllipsisVerticalIcon, HeartIcon } from '@heroicons/react/24/outline';
import { FaPlay,FaArrowDown,FaHeart } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";


const cardData = [
    {
      id: 1,
      imgSrc:imgSrc1,
      trackTime: '00:17',
      trackName: 'Hi-Tech Cybernetic Device',
      artist: 'Art of Sound',
      category: 'Futuristic Sounds',
      price: 3,
      trackBPM: 120,
      cardIcon: card,
    },
    {
        id: 2,
      imgSrc:imgSrc1,
      trackTime: '00:17',
      trackName: 'Hi-Tech Cybernetic Device',
      artist: 'Art of Sound',
      category: 'Futuristic Sounds',
      price: 3,
      trackBPM: 120,
      cardIcon: card,
      },
      {
        id: 3,
        imgSrc:imgSrc1,
        trackTime: '00:17',
        trackName: 'Hi-Tech Cybernetic Device',
        artist: 'Art of Sound',
        category: 'Futuristic Sounds',
        price: 3,
        trackBPM: 120,
        cardIcon: card,
      },
      {
        id: 4,
        imgSrc:imgSrc1,
        trackTime: '00:17',
        trackName: 'Hi-Tech Cybernetic Device',
        artist: 'Art of Sound',
        category: 'Futuristic Sounds',
        price: 3,
        trackBPM: 120,
        cardIcon: card,
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
const audio = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const [cardData1, setCardData1] = useState([]);
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const location = useLocation();
    const { user_id } = location.state || {};
    const { isAuthenticated, authToken } = useContext(AuthContext);

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
    <h1 className="font-bold text-[30px] my-[20px]">Audio</h1>
</div>
{/* <div>
  <Dashboard1/>
</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
{cardData2.map((card) => (
    <div key={card.id}   className=" shadow-md overflow-hidden border border-gray-300 rounded-lg flex flex-col h-full">
      <div  className="flex justify-end px-2 pt-1" >
        {/* Flip button */}
        <img
          src={flip}
          alt="flip"
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleFlip1(card.id)}
        />
      </div>

      {/* Conditional rendering based on flip state */}
      {!flippedCards[card.id] ? (
        // Front side of the card
        <>
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src={musical} alt="icon" className="w-5 h-5" />
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
  </audio>
          </div>
          <div className="flex justify-between items-center gap-[5px] p-2 border-t border-black text-sm">
            <h1 className=" ">{card.userName}</h1>
            <p>|</p>
            <h1 className=" ">{card.days}</h1>
            <p>|</p>
            <h1 className="">{card.location}</h1>
            <p>|</p>
            <img src={grocery} alt="cart" className="w-5 h-5" />
          </div>
        </>
      ) : (
        // Back side of the card
        <div className="flex flex-col ">
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src={musical} alt="icon" className="w-5 h-5" />
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
            <img src={grocery} alt="cart" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  ))}
</div>

<div className="flex items-center justify-center  ">
{cardData.map((card) => (
      <div key={card.id}  className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col p-4">
          <div className="flex items-center gap-2">
          <div className="relative ">
            <img
              src={card.imgSrc}
              alt="Album cover"
              layout="fill"
            
              className="w-16 h-12 rounded-md object-cover"
            />
              </div>
            <div className="">
              <FaPlay className="w-4 h-4 text-black" />
            </div>
            <div className="w-[60%] bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full w-1/3  "></div>
          </div>
          <span className="text-sm text-gray-500">{card.trackTime}</span>

          </div>
          <div className="flex justify-end gap-[5px] mb-2 items-center space-x-2">
            <div className="flex justify-center items-center">
              <p>Tracks 1 BPM <span>--</span></p>
            </div>
            <FaArrowDown className="w-6 h-6 text-gray-400" />
            <div className="w-[2px] bg-gray-500 h-[35px]"/>
            <HiEllipsisVertical className="w-6 h-6 text-gray-400" />
            <div className="w-[2px] bg-gray-500 h-[35px]"/>
            <FaHeart className="w-6 h-6 text-gray-400" />

          </div>

          <div className="flex-grow mb-3">
            <h2 className="text-lg font-semibold">{card.trackName}</h2>
            <p className="text-sm text-gray-600"> {card.artist} {card.category}</p>
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
            <img src={card.cardIcon} className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
))}
    </div>


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

export default audio;
