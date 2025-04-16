"use client";

import { useRef, useState } from "react";

import solarHubImage from "../../assets/images/solarhub.png";
import SearchBox from "../../components/Search/searchBox";
import "./solarHub.css";
import categoryOne from "../../assets/images/categoryOne.png";
import categoryTwo from "../../assets/images/categoryTwo.png";
import categoryThree from "../../assets/images/categoryThree.png";
import categoryFour from "../../assets/images/categoryFour.png";
import categoryFive from "../../assets/images/categoryFive.png";
import categorySix from "../../assets/images/categorySix.png";
import categorySeven from "../../assets/images/categorySeven.png";
import categoryEight from "../../assets/images/categoryEight.png";

import videoOne from "../../assets/videos/solarVidOne.mp4";
import videoTwo from "../../assets/videos/solarVidTwo.mp4";
import videoThree from "../../assets/videos/solarVidThree.mp4";
import videoFour from "../../assets/videos/solarVidFour.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import articleOne from "../../assets/images/articleOne.png";
import articleTwo from "../../assets/images/articleTwo.png";
import articleThree from "../../assets/images/articleThree.png";
import articleFour from "../../assets/images/articleFour.png";
import Card from "@/components/CardComponent";

const videosSection = [
  {
    vid: videoOne,
    description: "Reason why you should join our movement",
  },
  {
    vid: videoTwo,
    description: "Solar History",
  },
  {
    vid: videoThree,
    description: "Solar Panel",
  },
  {
    vid: videoFour,
    description: "Solar For All",
  },
  {
    vid: videoOne,
    description: "Reason why you should join our movement",
  },
  {
    vid: videoTwo,
    description: "Solar History",
  },
  {
    vid: videoThree,
    description: "Solar Panel",
  },
  {
    vid: videoFour,
    description: "Solar For All",
  },
];

const articlesSection = [
  {
    photo: articleOne,
    description: "Reason why you should join our movement",
  },
  {
    photo: articleTwo,
    description: "Solar History",
  },
  {
    photo: articleThree,
    description: "Solar Panel",
  },
  {
    photo: articleFour,
    description: "Solar For All",
  },
  {
    photo: articleOne,
    description: "Reason why you should join our movement",
  },
  {
    photo: articleTwo,
    description: "Solar History",
  },
  {
    photo: articleThree,
    description: "Solar Panel",
  },
  {
    photo: articleFour,
    description: "Solar For All",
  },
];

function SolarHub() {
  const CategorySection = () => (
    <div className="section">
      <h1 className="text-primary-500 mb-8 text-3xl font-bold">Categories</h1>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_304px))] gap-4">
        {[
          {
            image: categoryOne,
            title: "Getting Started",
            description: "(Solar Basics & How it Works)",
          },
          {
            image: categoryTwo,
            title: "Installation & Setup",
            description: "(Step-by-Step Guides & DIY Tips)",
          },
          {
            image: categoryThree,
            title: "Maintenance & Care",
            description: "(Keeping Your Solar System Efficient)",
          },
          {
            image: categoryFour,
            title: "FInancing & Incentives",
            description: "(Payment Plans & Government Policies)",
          },
          {
            image: categoryFive,
            title: "Troubleshooting & FAQs",
            description: "(Common Issues & Fixes)",
          },
          {
            image: categorySix,
            title: "Solar Technology",
            description: "(Latest Innovations & Trends)",
          },
          {
            image: categorySeven,
            title: "Solar Energy Policy",
            description: "(Regulations & Incentives)",
          },
          {
            image: categoryEight,
            title: "Solar Community",
            description: "(Connect with Other Solar Enthusiasts)",
          },
        ].map((category, index) => (
          <Card
            for="category"
            key={index}
            image={category.image}
            title={category.title}
            content={category.description}
            link="#"
          />
        ))}
      </div>
    </div>
  );

  const BlogsSection = () => (
    <div className="section">
      <h1 className="text-primary-500 mb-8 text-3xl font-bold">Blogs</h1>

      <div className="grid w-full grid-cols-1 place-items-stretch justify-items-center gap-4 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          {
            image: categoryOne,
            title: "Getting Started",
            description: "(Solar Basics & How it Works)",
          },
          {
            image: categoryTwo,
            title: "Installation & Setup",
            description: "(Step-by-Step Guides & DIY Tips)",
          },
          {
            image: categoryThree,
            title: "Maintenance & Care",
            description: "(Keeping Your Solar System Efficient)",
          },
          {
            image: categoryFour,
            title: "FInancing & Incentives",
            description: "(Payment Plans & Government Policies)",
          },
        ].map((category, index) => (
          <Card
            for="category"
            key={index}
            image={category.image}
            title={category.title}
            content={category.description}
            link="#"
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section className="solar__hub full-bleed relative">
        <div className="h-[520px]">
          <img
            className="h-full w-screen object-cover"
            src={solarHubImage || "/placeholder.svg"}
          />
        </div>

        <div className="absolute top-8 right-30">
          <SearchBox />
        </div>

        <div className="absolute bottom-[5rem] left-[4rem] text-white">
          <h1 className="text__one w-full max-w-[736px]">
            Empower Yourself with Solar Knowledge
          </h1>
          <p className="text__two mt-10 w-full max-w-[750px]">
            Learn everything about solar energy—from choosing the right system
            to installation and maintenance.
          </p>
        </div>
      </section>

      <CategorySection />

      <VideosArticlesSection />

      <BlogsSection />
    </>
  );
}

export default SolarHub;

// Reusable carousel component
function MediaCarousel({ title, items, isVideo = false }) {
  const swiperRef = useRef(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  const handleWatchNow = (media) => {
    setCurrentMedia(media);
    setOpenDialog(true);
  };

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
    <section className="videos__article__section full-bleed relative">
      <div className="h-full w-full bg-gradient-to-r from-[#2267de] via-[#2267de9c] to-[#2267de] px-[1rem] py-[2rem]">
        <div className="m-auto w-full pl-[5.5rem]">
          <h1 className="mb-3 text-3xl font-bold text-white">{title}</h1>

          <div className="relative w-full px-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={3.5}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Mousewheel]}
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
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[315px] w-full max-w-[578px] overflow-hidden rounded-[1rem] text-white">
                    {isVideo ? (
                      <video
                        src={item.vid}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.photo || "/placeholder.svg"}
                        alt={item.description}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 z-[1] bg-black/40" />
                    <div className="relative z-[2] flex h-full flex-col justify-end p-4">
                      <h3 className="mb-2 text-[14px]">{item.description}</h3>
                      <button
                        onClick={() =>
                          handleWatchNow(isVideo ? item.vid : item.photo)
                        }
                        className="flex w-full max-w-[150px] cursor-pointer items-center gap-3 rounded-md px-4 py-2 font-medium text-[#fff] transition-colors hover:bg-gray-100"
                        style={{ border: "1px solid white" }}
                      >
                        {isVideo ? "Watch Now" : "Read Now"}
                        <span>
                          <i className="bx bx-right-arrow-alt"></i>
                        </span>
                      </button>
                    </div>
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

      {/* Media Dialog */}
      {isVideo && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="overflow-hidden bg-black p-0 sm:max-w-[800px]">
            {currentMedia && (
              <video
                key={currentMedia}
                src={currentMedia}
                autoPlay
                className="h-full w-full"
                controls={false}
                onEnded={() => setOpenDialog(false)}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

function VideosArticlesSection() {
  return (
    <>
      <MediaCarousel title="Videos" items={videosSection} isVideo={true} />
      <MediaCarousel title="Articles" items={articlesSection} isVideo={false} />
    </>
  );
}
