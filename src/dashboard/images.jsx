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
import imgSrc from '../../src/assets/Images/dashboard/HYD.webp';
import chatImg from '../../src/assets/Images/dashboard/chat.png';
import bookmarkImg from '../../src/assets/Images/dashboard/bookmark.png';
import shareImg from '../../src/assets/Images/dashboard/share.png';
import moreImg from '../../src/assets/Images/dashboard/more.png';
import likeImg from '../../src/assets/Images/dashboard/like.png';


import videoSrc from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';
import videoSrc1 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import videoSrc2 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import videoSrc3 from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';

import Filters from "../filters/filters";
import channelIcon from '../../src/assets/Images/landing/pic.jpg';


import Dashboardimg from "./dashboardimg";
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
const images = () => {
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
    <h1 className="font-bold cur text-[30px] my-[20px]">Images</h1>
</div>
<div>
  <Dashboardimg/>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
{cardData1
        .filter((card) => card.content_type === "Image") // Filter by content_type
        .map((card, index) => (
    <div key={index}   className=" shadow-md overflow-hidden border border-gray-300 rounded-lg flex flex-col h-full">
      <div  className="flex justify-end px-2 pt-1" >
        {/* Flip button */}
        <img
          src="src/assets/Images/dashboard/flip.png"
          alt="flip"
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleFlip(index)}
        />
      </div>

      {/* Conditional rendering based on flip state */}
      {!flippedCards[index] ? (
        // Front side of the card
        <>
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src="src/assets/Images/dashboard/musical-note.png" alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.content_title}</h1>
            </div>
            <div className="p-1 border border-red-300 rounded-md">
              <h1 className="text-sm blue-color">{card.final_price}</h1>
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
          <h1 className="lg:truncate lg:w-[40%] hover:overflow-visible hover:whitespace-nowrap hover:w-auto">
  {card.uploaded_by}
</h1>       
{/* <h1 className="absolute hidden group-hover:block lg:w-auto top-full left-0 bg-white text-black">
    {card.uploaded_by}
  </h1>  */}
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[20%] hover:overflow-visible hover:whitespace-nowrap hover:w-auto">{card.age_in_days}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[30%] hover:overflow-visible hover:whitespace-nowrap hover:w-auto">{card.gps_location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </>
      ) : (
        // Back side of the card
        <div className="flex flex-col ">
          <div className="flex justify-between p-2 border-b border-blue-300">
            <div className="p-1 border border-blue-300 rounded-md">
              <img src='src/assets/Images/dashboard/musical-note.png' alt="icon" className="w-5 h-5" />
            </div>
            <div className="p-1 border border-blue-300 rounded-md">
              <h1 className="font-bold text-sm">{card.content_title}</h1>
            </div>
            <div className="p-1 border border-red-300 rounded-md">
              <h1 className="text-sm blue-color">{card.final_price}</h1>
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
          <h1 className=" lg:truncate lg:w-[40%] hover:overflow-visible hover:whitespace-normal ">{card.uploaded_by}</h1>
        <h1 className="cursor-pointer hidden group-hover:inline-block absolute left-2 top-0 w-auto max-w-[280px] z-30 bg-black text-white py-1 px-1 border border-black-300 rounded leading-tight">
        {card.uploaded_by}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[20%] hover:overflow-visible hover:whitespace-normal">{card.age_in_days}</h1>
            <p>|</p>
            <h1 className=" lg:truncate lg:w-[30%] hover:overflow-visible hover:whitespace-normal">{card.gps_location}</h1>
            <p>|</p>
            <img src='src/assets/Images/dashboard/grocery-store.png' alt="cart" className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  ))}
</div>
<div>
    <h1 className="font-bold cur text-[30px] my-[20px]">Latest</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
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

export default images;
