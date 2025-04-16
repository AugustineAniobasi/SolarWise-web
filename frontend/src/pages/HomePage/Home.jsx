import React, { useState, useEffect } from "react";
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

export default function Home() {
  const [slides, setSlides] = useState(
    showSlides(document.documentElement.clientWidth),
  );

  function showSlides(screenWidth) {
    return screenWidth < 576
      ? 1
      : screenWidth < 768
        ? 2
        : screenWidth < 1200
          ? 3
          : screenWidth < 1440
            ? 4
            : 5;
  }

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = document.documentElement.clientWidth;
      setSlides(showSlides(screenWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      {/* Hero section */}
      <div className="section">
        <div className="m-auto flex w-fit items-center gap-6 max-lg:flex-col">
          <div>
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
            className="max-w-full max-lg:w-full max-lg:max-w-full"
            src={hero}
            alt="A solar energy technician wearing a blue hard hat and high-visibility vest, inspecting solar panels while holding a tablet."
          />
        </div>
      </div>

      {/* Education section */}
      <div className="full-bleed home_education-section section relative z-2">
        <h2 className="mb-2 text-center text-5xl font-semibold text-white">
          Solar Facts & Insights
        </h2>
        <p className="mb-14 text-center text-[32px] font-semibold text-white">
          Do You Know?
        </p>
        <div>
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>

      {/* Assessment section */}
      <div className="section">
        <h2 className="text-primary-500 mb-20 text-[32px] font-semibold">
          Solar Need Assessment Tool
        </h2>
        <div className="flex items-center gap-6 max-lg:flex-col">
          <img
            className="max-w-[588px] max-lg:w-full max-lg:max-w-full"
            src={assessment}
            alt="A modern house with solar panels installed on the roof, surrounded by greenery and a landscaped yard."
          />
          <div>
            <h3 className="mb-10 text-[64px] font-semibold">
              Find the <span className="text-primary-500">Perfect Solar</span>{" "}
              Solution for your <span className="text-primary-500">Need</span>"
            </h3>
            <div className="flex items-center gap-2">
              <Button type="secondary" link="/assessment-tool">
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
      <div className="section">
        <h2 className="text-primary-500 mb-4 text-[32px] font-semibold">
          Our Vendors
        </h2>
        <div className="flex shrink-1 items-center justify-center gap-[124px] max-lg:gap-[2rem] max-md:flex-wrap">
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
