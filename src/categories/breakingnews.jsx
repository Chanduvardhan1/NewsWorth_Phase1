import FilterCategories from '../filters/filter-categories';
import CityLogin from '../city/city-login';
import Landing from '../landing/landing';
import { URL } from '../url';
import { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { AuthContext } from "../Authcontext/AuthContext";
import expanding from '../../src/assets/Images/dashboard/maximize.png';
import card from '../../src/assets/Images/dashboard/shopping-cart.png';
import { useTimer } from "../timerContext";
import { useNavigate } from 'react-router-dom';
import check from '../../src/assets/Images/dashboard/check.png';
import LogoOnly from '../city/logo';

function BreakingNews() {
  const [finalprice,setfinalprice] = useState(null);
  const navigate = useNavigate();
  const [imageData, setImageData] = useState([]);
  const { isAuthenticated, authToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const userId = location.state?.user_id || localStorage.getItem("userId");
  const [cartContent, setCartContent] = useState(null); 
  const [showPopup1, setShowPopup1] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [error, setError] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const { startTimer } = useTimer();
  const [showTimer, setShowTimer] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Fetch image data for Breaking News
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/landing page?user_id=${userId}`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({}),
      });
  
      const data = await response.json();
  
      if (data.response === "success") {
        console.log("Fetched data: ", data);
        setImageData(data.data);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  }, [authToken, userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoize filtered content to avoid recalculating on every render
  const filteredContent = useMemo(() => {
  const filtered = imageData.filter(item => item.content_categories === "Breaking News");
  console.log("Filtered Breaking News content (your name): ", filtered);  // Log the filtered content
  return filtered;
}, [imageData]);

  // Add content to cart
  const handleAddToCart = useCallback(async (contentId, contentLink, finalPrice) => {
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
        const isVideo = contentLink?.includes('.mp4') || 
                        contentLink?.includes('.webm') || 
                        contentLink?.includes('.ogg');
  
        setCartContent({ link: contentLink, isVideo });
        setShowCartNotification(true);
        setFinalPrice(finalPrice);
        await fetchCartItems();
        startTimer();
        setShowTimer(true);
        return;
      }
  
      if (data.response_message === 'Content already added to cart.') {
        setShowPopup1(true);
        setError(data.response_message);
        return;
      } else if (data.response === 'fail' && data.response_message === 'The content is locked.') {
        setShowPopup1(true);
        setError(data.response_message);
        return;
      }
  
      setShowPopup1(true);
      setError('Failed to add content to cart.');
    } catch (error) {
      console.error('Request error:', error);
      setShowPopup1(true);
      setError('An error occurred while adding to the cart.');
    }
  }, [authToken, userId]);

  // Fetch cart items
  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch(`${URL}/total_cart_items?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
  
      const data = await response.json();
      setCartCount(data.response_message);
      localStorage.setItem('totalCartItems', data.response_message);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [authToken, userId]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

    const handleImagesClick = (imageItem) => {
      navigate(`/Watchimages`,{ state: {  imageData: imageItem } });
    };
     const handleVideoClick = (videoItem) => {
      navigate("/watch", { state: {  videoData: videoItem } })
    };
     const handlecart = () => {
      navigate(`/cart`);
    };

  return (
    <>
      <FilterCategories />
      <CityLogin />
      <Landing />
      <div className="mt-[160px] ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full max-w-sm bg-gray-200 animate-pulse rounded-lg shadow-lg">
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
            filteredContent
              .filter((content) => content.sold_flag === false && content.purchased_flag === false)
              .map((contentItem) => (
                <div key={contentItem.content_id} className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
                  {/* Image Section (for images) */}
                  {contentItem.content_type === "Image" && (
                    <div className="relative group">
                      <img
                        src={contentItem.Image_link || "path-to-fallback-image.jpg"}
                        alt={contentItem.content_title || "Image not available"}
                        className="w-full h-60 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "path-to-fallback-image.jpg";
                        }}
                        onClick={() => handleImagesClick(contentItem)}
                      />
                      <div onClick={() => handleImagesClick(contentItem)} className="absolute top-2 right-2">
                        <img
                          src={expanding}
                          alt="Expand"
                          className="w-[20px] h-[20px] text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-125"
                        />
                      </div>
                    </div>
                  )}

                  {/* Video Section (for videos) */}
                  {contentItem.content_type === "Video" && (
                    <div className="relative group">
                      <video
                        controls
                        className="w-full h-60 object-cover"
                        onClick={() => handleVideoClick(contentItem)}
                      >
                        <source
                          src={contentItem.Video_link || "path-to-fallback-video.mp4"}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div onClick={() => handleVideoClick(contentItem)} className="absolute top-2 right-2">
                        <img
                          src={expanding}
                          alt="Expand"
                          className="w-[20px] h-[20px] text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-125"
                        />
                      </div>
                    </div>
                  )}

                  {/* Other Content Types (e.g., Articles, PDFs, etc.) */}
                  {contentItem.content_type === "Article" && (
                    <div className="px-4 py-2">
                      <h2 className="font-bold">{contentItem.content_title}</h2>
                      <p className="text-gray-600 line-clamp-2">
                        {contentItem.content_description || "No description available."}
                      </p>
                    </div>
                  )}

                  {/* Price Info Section */}
                  <div className="p-4 flex justify-between items-center relative">
                    <div className="text-lg">
                      <p className="font-bold text-blue-600">
                        ₹{contentItem.price}{" "}
                        <span className="text-sm text-gray-500">
                          <span className="line-through text-sm text-gray-500">
                            {contentItem.final_price || "N/A"}
                          </span>{" "}
                          at Discount {contentItem.discount || "0"}%
                        </span>
                      </p>
                    </div>

                    {/* Add to Cart */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={card}
                        alt="Add to Cart"
                        onClick={() =>
 handleAddToCart(
      contentItem.content_id,
      contentItem.content_type === "Video" ? contentItem.Video_link : contentItem.Image_link,
      contentItem.final_price
    )                        }
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex justify-between px-4" onClick={() => handleImagesClick(contentItem)}>
                    <p className="text-blue-600 font-semibold line-clamp-2 w-[60%] h-12">
                      {contentItem.content_title || "No title available"}
                    </p>
                    <div className="text-gray-500 flex flex-col justify-end items-end w-[40%]">
                      <p className="text-[12px] line-clamp-1 text-[#ce003d]">{contentItem.age_in_days}</p>
                      <p className="text-[12px] line-clamp-1">{contentItem.gps_location || "Location not available"}</p>
                      <p className="text-[12px] text-blue-600">{contentItem.uploaded_by || "Unknown"}</p>
                    </div>
                  </div>

                  {/* Content Description */}
                  <div className="px-4 py-4">
                    <p className="text-gray-600 line-clamp-2">
                      {contentItem.content_description || "No description available."}
                    </p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
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
    </>
  );
}

export default BreakingNews;
