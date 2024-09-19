import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    text: `Unfiltered stories, unmatched quality.`,
  },
  {
    id: 2,
    text:
      "Certify, protect, and monetize your content on NewsWorth.",
  },
  {
    id: 3,
    text:
      "Capture content using the NewsWorth Eye mobile app, with cloud storage.",
  },
  {
    id: 4,

    text:
      "Access the NewsWorth Wall web portal, featuring a content marketplace.",
  },
  {
    id: 5,
    text:
      "Set your own pricing for your content.",
  },
  {
    id: 6,

    text:
      "Certify, protect, and monetize your content on NewsWorth.",
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
      <div data-aos-duration="300" className="py-10 order-2 sm:order-1 space-y-8 2xl:relative 2xl:right-[55px]">
        <div className=" mx-auto ">
          {/* heading section */}
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(
                ({
                  id,
                  title,
                  title1,
                  title2,
                  title3,
                  text,
                  text3,
                  text4,
                  image,
                  image1,
                }) => {
                  return (
                    <div key={id} className="order-2 sm:order-1 space-y-8 ">
                      <p className="text-4xl font-medium text-secondary">
                        {title} <br /> {title1}
                      </p>
                      <h1 className="text-3xl font-extrabold text-secondary">
                        {title2}
                      </h1>
                      <p className="flex justify-center items-center xl:w-[550px] 2xl:w-[559px] text-garySecondary font-bold text-[20px]">{text}</p>
                      <div>
                        <img src={image} alt="" className="w-[350px]" />
                      </div>
                      <div className="2xl:w-[559px] xl:w-[409px]">
                        <p className="text-[18px]   text-garySecondary">{text3}</p>
                      </div>
                      <div className="flex flex-col relative bottom-[50px]">
                        <div>
                          <img src={image1} alt="" className="w-[350px]" />
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                          {/* <h1 className="text-3xl font-extrabold text-secondary">
                            {title3}
                          </h1> */}
                          <p className="text-[18px] 2xl:w-[559px] xl:w-[409px] text-garySecondary relative">{text4}</p>
                        </div>
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

export default home1;
