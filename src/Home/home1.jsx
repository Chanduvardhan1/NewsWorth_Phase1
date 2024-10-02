import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    title: `Unfiltered stories`,

    text: `Unfiltered stories, unmatched quality.`,
    textColor: "text-blue-500",
  },
  {
    id: 2,
    title: `Certify`,
    text: "Certify, protect, and monetize your content on NewsWorth.",
    textColor: "text-green-500",
  },
  {
    id: 3,
    title: `NewsWorth Eye`,
    text: "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
    textColor: "text-yellow-500",
  },
  {
    id: 4,
    title: `NewsWorth Wall`,
    text: "Access the NewsWorth Wall web portal, featuring a content marketplace.",
    textColor: "text-purple-500",
  },
  {
    id: 5,
    title: `pricing`,
    text: "Set your own pricing for your content.",
    textColor: "text-pink-500",
  },
  {
    id: 6,
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
            {testimonialData.map(({ id, text, textColor ,title}) => {
              return (
                <div
                  key={id}
                  className="order-2 sm:order-1 space-y-8"
                  data-aos="fade-up"
                >
                 
                  <div className="p-5 bg-white flex justify-center items-center flex-col"> {/* Neutral background */}
                  <div className="pb-2 flex justify-center items-center flex-col">
                    <h1 className={`xl:w-[550px] 2xl:w-[559px] font-semibold text-[25px]  flex justify-center items-center flex-col`}>
                      {title}
                    </h1>
                    </div>
                    <div className="py-5 flex justify-center items-center flex-col">
                    <h1 className={`xl:w-[550px] 2xl:w-[559px] font-bold text-[20px] flex justify-center items-center flex-col  `}>
                      {title}
                    </h1>
                    </div>
                    <p className={`xl:w-[550px] 2xl:w-[559px]  text-[16px] flex justify-center items-center flex-col `}>
                      {text}
                    </p>
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
