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
import card from '../../src/assets/Images/dashboard/add-to-cart.png'
import Auido from '../../src/assets/Images/dashboard/voice-assistant.png'
import video from '../../src/assets/Images/dashboard/video-camera.png'
import camera from '../../src/assets/Images/dashboard/photo-device.png'

import channelIcon from '../../src/assets/Images/landing/pic.jpg';

import Image1 from '../../src/assets/Images/dashboard/viratkhoil.webp';
import Image2 from '../../src/assets/Images/dashboard/Vig.webp';
import Image3 from '../../src/assets/Images/dashboard/social-media.jpg';
import Image4 from '../../src/assets/Images/dashboard/news1.webp';


  

  const shoppingItems = [
    {
      id: 1,
      videoSrc: videoSrc,
      duration: "03:24",
      description:
        "A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...",
      time: "2 days and 20 hours ago",
      location: "Bangalore, Karnataka, India",
      author: "By Ram M Reddy",
      price: "$299.99",
    },
    // Add more items if necessary
  ];

  const myorder = () => {
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
const [shoppingItems,setShoppingItems] =useState([]);
const [shoppingItems2, setShoppingItems2] = useState([]); // Ensure it's initialized as an empty array

const userId = location.state?.user_id || localStorage.getItem("userId");
const [isLoading, setIsLoading] = useState(true); // Loading state

    const handledashboard = () => {
      navigate(`/dashboard`);
    };
    const handleImagesClick = () => {
      navigate(`/Watchimages`);
    };
    // useEffect(() => {
    //     // Function to fetch cart data
    //     const fetchCartData = async () => {
    //       try {
    //         const response = await fetch(`${URL}/view_cart?user_id=${userId}`, {
    //           method: 'POST',
    //           headers: {
    //             Accept: "application/json",
    //             Authorization: `Bearer ${authToken}`,
    //           },
    //         });
    
    //         const data = await response.json();
    //         if (data.response === "success") {
    //           // Assuming the items are stored in data.response_message
    //           const items = data.response_message.flatMap(cart => cart.items);
    //           setShoppingItems(items); // Store all items from all carts
    //         } else {
    //           console.error('Error in response:', data);
    //         }
    //       } catch (error) {
    //         console.error('Error fetching cart data:', error);
    //       }
    //     };
    
    //     fetchCartData();
    //   }, [authToken, URL]);
      useEffect(() => {
        const fetchOrderHistory = async () => {
          try {
            const response = await fetch(`${URL}/order-history?user_id=${userId}`, {
              method: 'POST',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${authToken}`,              },
            });
            const data = await response.json();
            // Ensure the response is an array before setting the state
            setShoppingItems2(Array.isArray(data.response_message) ? data.response_message : []);
          } catch (error) {
            console.error('Error fetching order history:', error);
            setShoppingItems2([]); // Set it as an empty array if there is an error
          } finally {
            setIsLoading(false); // Stop loading after data is fetched
          }
        };
    
        fetchOrderHistory();
      }, []);
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
      const handleRemoveItem = async (contentId) => {
        try {
          const response = await fetch(`${URL}/delete_item_in_cart`, { // Replace with your actual endpoint
            method: 'POST',
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cart_id: contentId,
              user_id: 59, // or get this from state if it varies
            }),
          });
    
          const data = await response.json();
          if (data.response === "success") {
            // Update shoppingItems by filtering out the removed item
            setShoppingItems((prevItems) =>
              prevItems.filter(item => item.content_id !== contentId)
            );
            console.log('Item removed successfully:', data);
          } else {
            console.error('Error removing item:', data);
          }
        } catch (error) {
          console.error('Error removing item:', error);
        }
      };
  return (
    <div>
   <div className=" relative">
    <Landing/>
    <div className="p-[20px] bg-white">
     
   

<div className="flex flex-row">


  
<div className="bg-white shadow-md rounded-lg p-6 mt-8 w-[100%]"> 
      <div className="border-b mb-4">
        <h2 className="text-2xl font-semibold blue-color">My Orders</h2>
        {/* <p className=" underline text-blue-500 cursor-pointer" onClick={handledashboard}>Add more items to Cart</p> */}
        <div className="flex justify-between mt-2 px-2">
          <h2 className="text-[14px] font-semibold text-gray-500">Item</h2>
          <h2 className="text-[14px] font-semibold text-gray-500">Price</h2>
        </div>
      </div>

      {/* {shoppingItems.map((item) => (
        <div key={item.content_id}>
          <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-start">
              <div className="relative w-[40%]">
                {item.Video_link && (
                  <video
                    className="media-video w-[150px] h-[150px] object-cover opacity-90 transition-opacity duration-300"
                    controls
                    src={item.Video_link}
                  />
                )}

                {item.Image_link && (
                  <img
                    className="media-image w-[150px] h-[150px] object-cover opacity-90 transition-opacity duration-300"
                    src={item.Image_link}
                    alt="content"
                  />
                )}


                <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                  {item.age_in_days}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-700 line-clamp-2 w-[80%]">
                  {item.content_description} 
                </h3>
                <p className="text-[12px] line-clamp-1 text-[#ce003d]">{item.added_date}</p> 
                <p className="text-[12px] line-clamp-1">{item.gps_location}</p>
                <p className="text-[12px] font-semibold text-blue-500">{item.uploaded_by}</p> 
              </div>
            </div>

            <div className="flex items-center space-x-12">
              <p className="text-lg font-semibold text-gray-700">₹ {item.final_price}</p>
             </div> 
          </div>
           <div className="flex justify-end items-center mt-2 border-b">
            <div className="flex space-x-4 mb-2">
              <button className="text-gray-500 text-sm hover:underline">Download</button>
            </div>
          </div> 
        </div>
      ))} */}
     {isLoading ? (
        // Show skeleton loading cards
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
          {Array(6).fill().map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-40 w-full rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : (
        // Check if there are no shopping items
        Array.isArray(shoppingItems2) && shoppingItems2.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No orders found.
          </div>
        ) : (
          // Render the order items if the array is valid
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
            {shoppingItems2.map((item) => (
              <div key={item.content_id}>
                <div className="flex items-center justify-between border-b py-4">
                  <div className="flex items-start">
                    <div className="relative w-[40%]">
                      {/* Check if the content is a video or image */}
                      {item.Video_link && (
                        <video
                          className="media-video w-[150px] h-[150px] object-cover opacity-90 transition-opacity duration-300"
                         
                          src={item.Video_link}
                        />
                      )}

                      {/* Display Image if available */}
                      {item.Image_link && (
                        <img
                          className="media-image w-[150px] h-[150px] object-cover opacity-90 transition-opacity duration-300"
                          src={item.Image_link}
                          alt="content"
                        />
                      )}
                      <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
                        {item.age_in_days}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-700 line-clamp-2 w-[80%]">
                        {item.content_description || 'No description available'}
                      </h3>
                      <p className="text-[12px] line-clamp-1 text-[#ce003d]">
                        {item.created_date}
                      </p>
                      <p className="text-[12px] line-clamp-1">{item.gps_location}</p>
                      <p className="text-[12px] font-semibold text-blue-500">{item.uploaded_by}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-12">
                    <p className="text-lg font-semibold text-gray-700">
                      ₹ {item.final_price}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end items-center mt-2 border-b">
                  <div className="flex space-x-4 mb-2">
                    <button
                       onClick={() => downloadContent(item.content_id)}
                     className="text-gray-500 text-sm hover:underline">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>

{/* <div className="w-[30%] p-5">
<div className="mb-6">
    <h2 className="text-2xl blue-color font-semibold">Order Summary</h2>
</div>

<div class="bg-white shadow-xl rounded-lg p-6">
<div className="flex justify-between">
    <p>Subtotal <span>{`(1 items)`}</span></p>
    <p>₹299.99</p>
</div>
<div className="flex justify-between">
    <p>Estimated Tax</p>
    <p>₹0.0</p>
</div>
<div className="flex justify-between">
    <p>Total</p>
    <p>₹299.99</p>
</div>
<div className=" mt-5 p-2 px-5 bg-[#0f2b9fd9] flex justify-center">

<button className="text-white font-bold">Buy</button>
</div>
</div>
</div> */}
</div>
{/* <div className="grid grid-cols-1 mt-6">
  <div className="w-full max-w-full h-[200px] rounded overflow-hidden shadow-lg bg-white flex">
    <div className="relative w-[40%]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
        muted
        loop
        src={videoSrc}
      ></video>
      
      <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 m-1 rounded">
        03:24
      </div>
    </div>

    <div className="flex flex-col justify-between w-[60%] p-4">
      <div className="flex gap-[10px] items-center">
        <img src={video} alt="" className="w-[25px] h-[25px]" />
        <div className="text-lg">
          <p className="font-bold text-blue-600">
            Price ₹ 300.00 
            <span className="text-sm text-gray-500">
              <span className="line-through text-sm text-gray-500">₹ 369</span> at Discount 23%
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="text-blue-500 font-bold line-clamp-2 w-[60%] h-12">
          A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...
        </p>
        <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
          <p className="text-[12px] line-clamp-1 text-[#ce003d]">2 days and 20 hours ago</p>
          <p className="text-[12px] line-clamp-1">Bangalore, Karnataka, India</p>
          <p className="text-[12px] font-semibold text-blue-500">By Ram M Reddy</p>
        </div>
      </div>

      <div className="py-2">
        <p className="text-gray-500 line-clamp-2">
          'A hearing took place in the High Court regarding the immersion of Ganesh idols in Hussain Sagar. The petitioner requested the implementation of previous High Court orders that prohibited immersions in Hussain Sagar. The petitioner also requested...
        </p>
      </div>
    </div>
  </div>
</div> */}

   </div>
   </div>
    </div>
  );
};

export default myorder;
