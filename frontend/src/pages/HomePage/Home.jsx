import React from "react";
import hero from "../../assets/images/hero.png";
import assessment from "../../assets/images/vendor-assessment.png";
import arrowRight from "../../assets/icons/arrow-sm-right.svg";
import Button from "../../components/ButtonComponent";
import Card from "../../components/CardComponent";
import educationPost from "../../data/educationPost";
import Slider from "react-slick";
import sunKing from "../../assets/images/sun-king.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import { useRef } from "react";



export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  const swiperRef = useRef(null);
  
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };
  

  return (
    <>
      {/* Hero section */}
      <div className="p-[5rem_2rem]">
        <div className="m-auto flex w-fit flex-col items-center gap-6 md:flex-row">
          <div className="max-w-[560px]">
            <h1 className="mb-10 text-[64px] font-semibold">
              Find the <span className="text-primary-500">Right Solar</span>{" "}
              Solution Today"
            </h1>
            <div className="flex items-center gap-2">
              <Button type="primary" link="#">
                Sign in
              </Button>
              <Button type="secondary" link="#">
                Sign up-it's free
              </Button>
            </div>
          </div>
          <img
            className="max-w-[588px]"
            src={hero}
            alt="A solar energy technician wearing a blue hard hat and high-visibility vest, inspecting solar panels while holding a tablet."
          />
        </div>
      </div>

      {/* Education section */}
      <div className="home_education-section relative z-2 p-[5rem_2rem]">
        <h2 className="mb-2 text-center text-5xl font-semibold text-white">
          Solar Facts & Insights
        </h2>
        <p className="mb-14 text-center text-[32px] font-semibold text-white">
          Do You Know?
        </p>
        <div>
          {/* <Slider {...settings}>
            {educationPost.map((post) => (
              <Card
                key={post.id}
                for="blog"
                image={post.image}
                title={post.title}
                content={post.summary}
                link={post.link}
              />
            ))}
          </Slider> */}

          <div className="relative mx-auto w-full px-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={3.5}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // modules={[Autoplay, Navigation, Mousewheel]}
              mousewheel={{ forceToAxis: true }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 10 },
              }}
              className="swiper-container"
            >
              {educationPost.map((post, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[400px] w-full max-w-[578px] overflow-hidden rounded-[1rem] text-white">
                    <Card
                      key={post.id}
                      for="blog"
                      image={post.image}
                      title={post.title}
                      content={post.summary}
                      link={post.link}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button
              type="button"
              className="absolute top-1/2 -left-4 z-[10] flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <span className="text-sm font-bold">&lt;</span>
            </button>
            <button
              type="button"
              className="absolute top-1/2 -right-4 z-[10] flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <span className="text-sm font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Assesment section */}
      <div className="p-[5rem_2rem]">
        <h2 className="text-primary-500 mb-20 text-[32px] font-semibold">
          Solar Need Assessment Tool
        </h2>
        <div className="m-auto flex w-fit flex-col items-center gap-6 md:flex-row">
          <img
            className="max-w-[588px]"
            src={assessment}
            alt="A modern house with solar panels installed on the roof, surrounded by greenery and a landscaped yard."
          />
          <div className="max-w-[560px]">
            <h3 className="mb-10 text-[64px] font-semibold">
              Find the <span className="text-primary-500">Perfect Solar</span>{" "}
              Solution for your <span className="text-primary-500">Need</span>"
            </h3>
            <div className="flex items-center gap-2">
              <Button type="secondary" link="#">
                Start Assessment
                <img
                  src={arrowRight}
                  alt=""
                  aria-hidden="true"
                  className="ml-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Vendors */}
      <div className="p-[5rem_2rem]">
        <h2 className="text-primary-500 mb-4 text-[32px] font-semibold">
          Our Vendors
        </h2>
        <div className="flex flex-col items-center justify-center gap-[124px] md:flex-row">
          <img src={sunKing} alt="" />
          <img src={lumos} alt="" />
          <img src={solynta} alt="" />
        </div>
        <div className="m-[2rem_0] flex items-center justify-center">
          <Button type="secondary" link="#">
            View all
          </Button>
        </div>
      </div>
    </>
  );
}