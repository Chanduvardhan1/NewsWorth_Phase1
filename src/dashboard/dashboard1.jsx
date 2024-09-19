import React from "react";
import Slider from "react-slick";
import Image1 from '../../src/assets/Images/home/10_30 PM _ 12th September 2024 _ ETV News _ News Headlines _ ETV Andhra Pradesh.mp4';
import Image2 from '../../src/assets/Images/home/CM Mamata Banerjee Responds to RG Kar Medical College Case_ Appeals for Doctors  Cooperation.mp4';
import Image3 from '../../src/assets/Images/home/YS Jagan Takes Oath as MLA _ AP Assembly Sessions 2024 @SakshiTV.mp4';

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

const dashboard1 = () => {
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
          <div className="grid grid-cols-1 max-w-[800px]  gap-6">
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
                      <video
  
          className="w-full object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-300"
          muted
          loop
          src={image}
        >
        
        </video>
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

export default dashboard1;
