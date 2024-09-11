import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landing from "../landing/landing";
import facebook from "../../src/assets/Images/footer/facebook-app-symbol.png"
import Footer from "../footer/footer";
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
      userName: 'Kung Jiyeon',
      timeAgo: '2 hours ago',
      location: 'Indianapolis',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      imgSrc: 'src/assets/Images/dashboard/NZ.jpg',
      likeImg: 'src/assets/Images/dashboard/like.png',
      chatImg: 'src/assets/Images/dashboard/chat.png',
      bookmarkImg: 'src/assets/Images/dashboard/bookmark.png',
      shareImg: 'src/assets/Images/dashboard/share.png',
      moreImg: 'src/assets/Images/dashboard/more.png',
    },
    {
        id: 2,
        userName: 'Google News',
        timeAgo: '4 hours ago',
        location: 'Indianapolis',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imgSrc: 'src/assets/Images/dashboard/Googlenews.jpeg',
        likeImg: 'src/assets/Images/dashboard/like.png',
        chatImg: 'src/assets/Images/dashboard/chat.png',
        bookmarkImg: 'src/assets/Images/dashboard/bookmark.png',
        shareImg: 'src/assets/Images/dashboard/share.png',
        moreImg: 'src/assets/Images/dashboard/more.png',
      },
      {
        id: 3,
        userName: 'Good News',
        timeAgo: '1 hours ago',
        location: 'Indianapolis',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imgSrc: 'src/assets/Images/dashboard/OIP.jpeg',
        likeImg: 'src/assets/Images/dashboard/like.png',
        chatImg: 'src/assets/Images/dashboard/chat.png',
        bookmarkImg: 'src/assets/Images/dashboard/bookmark.png',
        shareImg: 'src/assets/Images/dashboard/share.png',
        moreImg: 'src/assets/Images/dashboard/more.png',
      },
      {
        id: 4,
        userName: 'Social media',
        timeAgo: '2 hours ago',
        location: 'Indianapolis',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imgSrc: 'src/assets/Images/dashboard/social-media.jpg',
        likeImg: 'src/assets/Images/dashboard/like.png',
        chatImg: 'src/assets/Images/dashboard/chat.png',
        bookmarkImg: 'src/assets/Images/dashboard/bookmark.png',
        shareImg: 'src/assets/Images/dashboard/share.png',
        moreImg: 'src/assets/Images/dashboard/more.png',
      },
   
    
      
    
    // Add more data objects here if needed
  ];
  const cardData1 = [
    {
      id: 1,
      icon: 'src/assets/Images/dashboard/musical-note.png',
      title: 'Social media',
      price: 'RS | 200',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      image: 'src/assets/Images/dashboard/social-media.jpg',
      userName: 'chandu',
      days: '10 days',
      location: 'Bangalore',
      createdBy:'Chandu',
      Date:'6-09-2024',
      cartIcon: 'src/assets/Images/dashboard/grocery-store.png'
    },
    {
        id: 2,
        icon: 'src/assets/Images/dashboard/musical-note.png',
        title: 'Google News',
        price: 'RS | 1000',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        image: 'src/assets/Images/dashboard/Googlenews.jpeg',
        userName: 'Ram',
        days: '1 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon: 'src/assets/Images/dashboard/grocery-store.png'
      },
      {
        id: 3,
        icon: 'src/assets/Images/dashboard/musical-note.png',
        title: 'Good News',
        price: 'RS | 200',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        image: 'src/assets/Images/dashboard/OIP.jpeg',
        userName: 'Vardhan',
        days: '10 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon: 'src/assets/Images/dashboard/grocery-store.png'
      },
      {
        id: 4,
        icon: 'src/assets/Images/dashboard/musical-note.png',
        title: 'Social media',
        price: 'RS | 200',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        image: 'src/assets/Images/dashboard/social-media.jpg',
        userName: 'chandu',
        days: '10 days',
        location: 'Bangalore',
        location: 'Bangalore',
        createdBy:'Chandu',
        Date:'6-09-2024',
        cartIcon: 'src/assets/Images/dashboard/grocery-store.png'
      },
    // You can add more card data objects here
  ];
const dashboard = () => {
    const [flippedCards, setFlippedCards] = useState({});

  // Function to handle flip
  const handleFlip = (cardId) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId], // Toggle the flip state
    }));
  };
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
<div className="font-bold flex justify-between mb-6">
    <p>Home</p>
    <p>General news</p>
    <p>Political</p>
    <p>Social news</p>
    <p>Entertaiment</p>
    <p>Sport</p>
    <p>Business</p>
    <p>Health</p>
    <p>Educational</p>
    <p>Wildlife</p>
    <p>Fashion</p>
</div>
<div className="flex  gap-[25px] mb-6">
      {cardData.map((card) => (
        <div key={card.id} className="shadow-md flex-wrap rounded-[20px] overflow-hidden w-[100%] h-[100%] justify-center items-center">
          <div className="h-[10%] rounded-[30px]">
            <img src={card.imgSrc} alt="post" className="flex w-[100%] h-[100px]" />
          </div>
          <div className="flex flex-col p-[15px]">
            <div className="flex gap-[5px] p-1 pb-[10px] items-center">
              <p className="font-bold text-[12px]">{card.userName}</p>
              <p>.</p>
              <p className="text-[12px]">{card.timeAgo}</p>
            </div>
            <div className="flex flex-col gap-[5px] pb-[20px]">
              <h1 className="font-bold">{card.location}</h1>
              <p className="text-gray-400">{card.description}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[10px]">
                <div className="rounded-[50px] bg-gray-300 p-[5px]">
                  <img src={card.likeImg} alt="like" className="w-[20px] h-[20px]" />
                </div>
                <div className="rounded-[50px] bg-gray-300 p-[5px]">
                  <img src={card.chatImg} alt="chat" className="w-[20px] h-[20px]" />
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="rounded-[50px] bg-gray-300 p-[5px]">
                  <img src={card.bookmarkImg} alt="bookmark" className="w-[20px] h-[20px]" />
                </div>
                <div className="rounded-[50px] bg-gray-300 p-[5px]">
                  <img src={card.shareImg} alt="share" className="w-[20px] h-[20px]" />
                </div>
                <div className="rounded-[50px] bg-gray-300 p-[5px]">
                  <img src={card.moreImg} alt="more" className="w-[20px] h-[20px]" />
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
         
          <div className="flex flex-wrap gap-[25px] ">
      {cardData1.map((card) => (
        <div key={card.id} className="shadow-md overflow-hidden border-solid border-[1px] border-gray-300 w-[23%] h-[20%]">
          <div className="flex justify-end px-2 pt-1">
            {/* Flip button */}
            <img
              src="src/assets/Images/dashboard/flip.png"
              alt="flip"
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={() => handleFlip(card.id)}
            />
          </div>

          {/* Conditional rendering based on flip state */}
          {!flippedCards[card.id] ? (
            // Front side of the card
            <>
              <div className="flex justify-between p-2">
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <img src={card.icon} alt="icon" className="w-[20px] h-[20px]" />
                </div>
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <h1 className="font-bold">{card.title}</h1>
                </div>
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <h1>{card.price}</h1>
                </div>
              </div>
              <div className="p-2">
                <p className="truncate p-1 border-solid border-[1px] border-blue-300">
                  {card.description}
                </p>
              </div>
              <div>
                <img src={card.image} alt="social media" className="flex w-[100%] h-[150px]" />
              </div>
              <div className="flex justify-between items-center p-2 border-solid border-t-[1px] border-black">
                <h1>{card.userName}</h1>
                <p>|</p>
                <h1>{card.days}</h1>
                <p>|</p>
                <h1>{card.location}</h1>
                <p>|</p>
                <img src={card.cartIcon} alt="cart" className="w-[20px] h-[20px]" />
              </div>
            </>
          ) : (
            // Back side of the card
            <div className="">
                  <div className="flex justify-between p-2">
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <img src={card.icon} alt="icon" className="w-[20px] h-[20px]" />
                </div>
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <h1 className="font-bold">{card.title}</h1>
                </div>
                <div className="p-1 border-solid border-[1px] border-blue-300">
                  <h1>{card.price}</h1>
                </div>
              </div>
              <div className="p-2">
                <p className="truncate p-1 border-solid border-[1px] border-blue-300">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-col w-[100%] h-[150px] p-2">
              <p className=" font-bold">Date: <span className=" font-normal">{card.Date}</span> </p>
              <p className=" font-bold">Created by: <span className=" font-normal">{card.createdBy}</span> </p>
              <p className=" font-bold">Location: <span className=" font-normal">{card.location}</span> </p>
              </div>
              <div className="flex justify-between items-center p-2 border-solid border-t-[1px] border-black">
                <h1>{card.userName}</h1>
                <p>|</p>
                <h1>{card.days}</h1>
                <p>|</p>
                <h1>{card.location}</h1>
                <p>|</p>
                <img src={card.cartIcon} alt="cart" className="w-[20px] h-[20px]" />
              </div>
              {/* <h1 className="font-bold">Additional Details</h1>
              <p>Location: {card.location}</p>
              <p>Created by: {card.createdBy}</p>
              <p>Created on: {card.createdOn}</p> */}
              {/* Add more details here as needed */}
            </div>
          )}
        </div>
      ))}
    </div>

     <div className="flex shadow-md rounded-[20px] overflow-hidden mt-6  h-[20%]">
    <div className="h-[10%] rounded-[20px] ">
        <img src="src\assets\Images\dashboard\NZ.jpg" alt="" className="flex w-[100%] h-[172px] "  />
    </div>
    <div className="flex flex-col p-[15px]">
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
    
</div>
          
   </div>
          <Footer/>
   </div>
    </div>
  );
};

export default dashboard;
