import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Slider from "react-slick";
import home from '../../src/assets/Images/home/image.png'
import imgSrc from '../../src/assets/Images/dashboard/HYD.webp';

const testimonialData = [
  {
    id: 1,
    image:home,
    title: `Unfiltered stories`,

    text: `Unfiltered stories, unmatched quality.`,
    textColor: "text-blue-500",
  },
  {
    id: 2,
    image:imgSrc,
    title: `Certify`,
    text: "Certify, protect, and monetize your content on NewsWorth.",
    textColor: "text-green-500",
  },
  {
    id: 3,
    image:home,
    title: `NewsWorth Eye`,
    text: "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
    textColor: "text-yellow-500",
  },
  {
    id: 4,
    image:home,
    title: `NewsWorth Wall`,
    text: "Access the NewsWorth Wall web portal, featuring a content marketplace.",
    textColor: "text-purple-500",
  },
  {
    id: 5,
    image:home,
    title: `pricing`,
    text: "Set your own pricing for your content.",
    textColor: "text-pink-500",
  },
  {
    id: 6,
    image:home,
    title: `NewsWorth`,
    text: "Certify, protect, and monetize your content on NewsWorth.",
    textColor: "text-gray-500",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

const home1 = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var settings = {
    dots: true,
    arrows: true,
    
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
  };
  return (
    <>
         <div className="py-10 order-2 sm:order-1 space-y-8 2xl:relative 2xl:right-[55px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
          <Slider {...settings}>
            {testimonialData.map(({ id, text, textColor ,title,image}) => {
              return (
                <div
                  key={id}
                  className="order-2 sm:order-1 space-y-8"
                  data-aos="fade-up"
                >
                 
                 <div className="p-6 flex">
          <div className="w-1/2 relative">
            <div className="aspect-w-4 aspect-h-3 bg-yellow-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">
              {text}
            </p>
          
          </div>
        </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>

    </>
  );
};

export default home1;
