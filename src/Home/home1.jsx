import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Slider from "react-slick";
import home from '../../src/assets/Images/home/image.png'
import imgSrc from '../../src/assets/Images/dashboard/HYD.webp';
import image1 from '../../src/assets/Images/home/Image 1 - Home Page.webp'
import image2 from '../../src/assets/Images/home/Image 2 - Home Page.webp'
import image3 from '../../src/assets/Images/home/Image 3 - Home Page - Newsworth Eye.webp'
import image4 from '../../src/assets/Images/home/Image 4 - Home Page - Monetize News.webp'
import image5 from '../../src/assets/Images/home/Image 5 - Home Page - Newsworth Wall.png'
import image6 from '../../src/assets/Images/home/Image 6 - Home Page - Security 1.png'
const testimonialData = [
  {
    id: 1,
    image:image1,
    title: `Unfiltered stories`,

    text: `Real, unfiltered news—authentic, raw, and factual—keeping you informed with stories that matter, straight from the source.`,
    textColor: "text-blue-500",
  },
  {
    id: 2,
    image:image2,
    title: `Certified Content`,
    text: "Premium, certified news—verified, trustworthy, and ready for monetization, offering both credibility and revenue opportunities.",
    textColor: "text-green-500",
  },
  {
    id: 3,
    image:image3,
    title: `NewsWorth Eye`,
    text: "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
    textColor: "text-yellow-500",
  },
  {
    id: 4,
    image:image4,
    title: `NewsWorth Wall`,
    text: "Access the NewsWorth Wall web portal, featuring a content marketplace.",
    textColor: "text-purple-500",
  },
  {
    id: 5,
    image:image5,
    title: `Pricing & Negotiation`,
    text: "Competitive pricing, flexible negotiation, and top-quality content at reasonable rates.",
    textColor: "text-pink-500",
  },
  {
    id: 6,
    image:image6,
    title: `Security`,
    text: "Encrypted with advanced digital security, ensuring only the creator and buyer can access the content.",
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
            {testimonialData.map(({ id, text, textColor, title, image }) => (
              <div
                key={id}
                className="order-2 sm:order-1 space-y-8"
                data-aos="fade-up"
              >
                {/* Responsive Card with Image and Text */}
                <div className="p-6 flex flex-col  md:flex-row items-center md:items-center h-auto justify-center space-y-6 md:space-y-0">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt="Profile"
                        className="w-full h-[200px] object-cover "
                      />
                    </div>
                  </div>
                  {/* Text Section */}
                  <div className="w-full md:w-1/2 md:pl-6">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

    </>
  );
};

export default home1;
