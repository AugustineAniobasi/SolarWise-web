import React, { useRef, useState } from "react";
import video from "../../assets/videos/about-us.mp4";
import "./aboutUs.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function AboutUs() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0); // Keep track of volume

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };
  return (
    <>
      <div className="video-container h-[520px]">
        <video
          ref={videoRef}
          src={video}
          className="h-full w-full object-fill"
          autoPlay
          muted={true} // Sound enabled
          controls={false} // Hide all native controls
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0; // Reset to the beginning
              videoRef.current.play(); // Play the video again
            }
          }}
        />

        {/* Custom Volume Control */}
        <div className="bg-gray/80 absolute right-5 bottom-5 flex items-center gap-2 rounded-md px-3 py-2 shadow-md backdrop-blur-md">
          <div className="w-[140px]">
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              trackStyle={{ backgroundColor: "#2266DE", height: 6 }}
              handleStyle={{
                backgroundColor: "#2266DE",
                borderColor: "#2266DE",
                height: 16,
                width: 16,
                marginTop: -5,
              }}
              railStyle={{ backgroundColor: "#ddd", height: 6 }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="about-us_blog m-auto max-w-[1200px] p-[2rem_4rem]">
          <p className="mb-6">
            At SolarWise, we understand the daily challenges faced by millions
            across Africa due to unreliable electricity. Businesses pause,
            families struggle, and the cost of alternative power sources
            continues to rise. But there’s a better way—a smarter, cleaner, and
            more sustainable way to power your life.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">Who We Are</h2>
          <p className="mb-6">
            SolarWise is more than just a platform—it’s a movement. We are a
            digital bridge connecting individuals, businesses, and communities
            to the best solar solutions, ensuring access to reliable energy
            without confusion or exploitation.
          </p>

          <h3 className="mb-2 text-lg font-semibold">Our mission is simple:</h3>
          <ul className="mx-4 mb-6 list-disc">
            <li>
              To simplify solar adoption—whether you’re new to solar or looking
              for an upgrade.
            </li>
            <li>
              To empower you with knowledge—so you can make informed decisions.
            </li>
            <li>
              To connect you with trusted vendors—because quality and
              affordability should go hand in hand.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-semibold">What We Do</h2>
          <p className="mb-1">
            We bring clarity and accessibility to solar energy adoption through:
          </p>
          <ul className="mx-4 mb-6 list-disc">
            <li>
              Solar Needs Assessment Tool – Not sure where to start? Our
              easy-to-use calculator helps you determine the right solar system
              for your needs, budget, and power consumption.
            </li>
            <li>
              Verified Solar Marketplace – We’ve done the hard work for you.
              Browse through a selection of trusted vendors with certified
              products, transparent pricing, and real customer reviews.
            </li>
            <li>
              Educational Hub – Knowledge is power! Our collection of articles,
              tutorials, and videos will guide you through everything—from
              choosing the right solar panels to understanding installation and
              maintenance.
            </li>
            <li>
              Vendor Matching & Installation Support – No more guesswork! We
              connect you with certified solar technicians near you for
              hassle-free installation and ongoing support.
            </li>
            <li>
              Flexible Financing Options – Concerned about upfront costs? We
              partner with microfinance institutions to offer flexible payment
              plans, including Buy Now, Pay Later (BNPL) and leasing options.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-semibold">Why Choose SolarWise?</h2>
          <ul className="mx-4 mb-6 list-disc">
            <li>
              Tailored to Your Needs – We don’t just sell solar; we help you
              find what’s right for you.
            </li>
            <li>
              Transparency & Trust – No hidden fees, no unreliable vendors—just
              quality, verified solar solutions.
            </li>
            <li>
              Accessible Across Africa – From major cities to remote villages,
              we’re here to serve you.
            </li>
            <li>
              Sustainability at Heart – We believe in a greener, cleaner Africa
              powered by the sun.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-semibold">
            Join the SolarWise Movement
          </h2>
          <p>
            Electricity shouldn’t be a privilege—it should be a right. Whether
            you're a homeowner, business owner, or just exploring your options,
            SolarWise is here to guide you every step of the way.
          </p>
        </div>
      </div>
    </>
  );
}
