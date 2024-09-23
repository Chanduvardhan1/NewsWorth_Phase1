import React from "react";
import Slider from "react-slick";
import Image1 from '../../src/assets/Images/dashboard/viratkhoil.webp';
import Image2 from '../../src/assets/Images/dashboard/Vig.webp';
import Image3 from '../../src/assets/Images/dashboard/social-media.jpg';
import Image4 from '../../src/assets/Images/dashboard/news1.webp';
const testimonialData = [
  {
    id: 1,
    // text: `Unfiltered stories, unmatched quality.`,
    image:Image1,
  },
  {
    id: 2,
    // text: "Certify, protect, and monetize your content on NewsWorth.",
      image:Image2,

  },
  {
    id: 3,
    // text: "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
      image:Image3,

  },
  {
    id: 4,
    // text: "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
      image:Image4,

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

const dashboardimg = () => {
  var settings = {
    dots: true,
    arrows: true,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos-duration="300" className="py-10 pl-5 order-2 sm:order-1 space-y-8 2xl:relative 2xl:right-[55px]">
        <div className=" mx-auto ">
          {/* heading section */}
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-full gap-6">
            <Slider {...settings}>
              {testimonialData.map(
                ({
                  id,
                  text,
                  image,
                  image1,
                }) => {
                  return (
                    <div key={id} className="order-2 sm:order-1 space-y-8 ">
                    
                      <div>
                
        <img     className="w-full lg:h-[500px]  group-hover:opacity-100 opacity-90 transition-opacity duration-300"  src={image} alt="" />
                      </div>
                 
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboardimg;
