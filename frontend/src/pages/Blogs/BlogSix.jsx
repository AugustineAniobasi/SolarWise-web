import { useNavigate } from "react-router-dom";
import solarTempBg from "../../assets/images/blogSix.png";
import sunKing from "../../assets/images/sunKingBg.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import Button from "../../components/ButtonComponent";

import "./blogs.css";

function SolarPanelFAQBlog() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog__container relative">
        <div className="fixed top-[20px] left-[3rem] z-[999] flex items-center rounded-full bg-[#1d7efc] shadow-lg">
          <i
            onClick={() => navigate("/")}
            className="bx bx-chevron-left cursor-pointer rounded text-[40px] text-[#f7faff]"
          ></i>
        </div>
        <div className="relative h-[520px] w-full">
          <img
            className="h-full w-full object-cover brightness-90"
            src={solarTempBg}
            alt="Solar Battery Blog"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[150px] bg-[#2266DE]/20"></div>
        </div>

        <div className="absolute bottom-[4rem] left-[3rem]">
          <h3 className="text-[44px]">
            Can Solar Panels Work During Rainy or Cloudy Days?
          </h3>
        </div>
      </div>

      <div className="blog__text__container mx-auto mt-[2rem] mb-[4rem] w-full max-w-[1200px] p-2">
        <p>
          Solar energy is a great alternative to traditional power sources, but
          a common concern is whether solar panels can generate electricity on
          rainy or cloudy days. If you've ever wondered whether solar panels
          work when the sun isn't shining brightly, this article will clear up
          the facts
        </p>

        <div className="ml-5 flex flex-col gap-8 text-[#2266DE]">
          <div className="heading__text ">
            Do Solar Panels Work When It's Cloudy or Raining?
            <div className="mt-5 text-black">
              <p>
                ✅ Yes, solar panels still generate electricity on cloudy or
                rainy days! Solar panels rely on light, not heat to produce
                electricity. Even when the sky is overcast, some sunlight still
                reaches the panels, though at a reduced intensity. On a cloudy
                day, solar panels typically operate at 10% to 25% efficiency
                compared to full sunlight.
              </p>
              <p>
                💡 Fun Fact: Countries like Germany and the UK, which experience
                frequent cloudy weather, still successfully use solar power on a
                large scale!
              </p>
            </div>
          </div>

          <div className="heading__text"
          >
            How Do Solar Panels Produce Energy Without Direct Sunlight?
            <div className="mt-5 text-black">
              <p>
                Solar panels work by converting photons (light particles) into
                electricity. While direct sunlight provides the most energy,
                diffused sunlight (which passes through clouds) can still be
                captured and converted into power.
              </p>
              <p>🌦 Performance on Different Weather Conditions:</p>
              <ul className="ml-5">
                <li>Bright Sunny Day: ☀️ 100% efficiency</li>
                <li>Partly Cloudy Day: 🌤 50% to 70% efficiency</li>
                <li>Overcast/Rainy Day: ☁️ 10% to 25% efficiency</li>
              </ul>
            </div>
          </div>

          <div className="heading__text">
            What Happens to Solar Power Output When It Rains?
            <div className="mt-5 text-black">
              <p>
                Rain itself does not stop solar panels from working. In fact,
                rain can be beneficial because it helps clean dust and dirt off
                the panels, improving efficiency. However, heavy rain clouds may
                reduce energy production more significantly compared to light
                clouds.
              </p>
              <p>🌧 Key Benefits of Rain for Solar Panels:</p>
              <p>
                {" "}
                ✔ Washes away dirt and dust, keeping panels clean for better
                performance.
              </p>
              <p>
                ✔ Cools down the panels, which can improve efficiency (solar
                panels work best in cooler temperatures).
              </p>
            </div>
          </div>

          <div className="heading__text">
            How to Maximize Solar Energy on Cloudy or Rainy Days
            <div className="mt-5 text-black">
              <ul className="mt-2 list-disc pl-4">
                <li>
                  Since solar panels produce less power in cloudy weather, it's
                  important to have backup solutions.
                </li>
                <li>
                  ⚡ Best Strategies to Maintain Power:
                  <div>
                    <p>
                      🔋 Use Solar Batteries - Store excess energy generated on
                      sunny days for use when sunlight is limited.
                    </p>
                    <p>
                      ⚡ Net Metering - If available, connect to the grid to
                      sell excess energy on sunny days and draw power when
                      needed.
                    </p>
                    <p>
                      ☀️ High-Efficiency Panels - Some solar panels are designed
                      to capture more light even in low-light conditions.
                    </p>
                  </div>
                </li>
                <li>
                  💡 Tip: If you live in an area with frequent rain or cloudy
                  weather, consider adding battery storage to ensure
                  uninterrupted power.
                </li>
              </ul>
            </div>
          </div>

          <div className="heading__text">
            Solar Power Works in All Weather Conditions!
            <div className="mt-5 text-black">
              <p>
                Rainy and cloudy days don't stop solar panels from working—they
                just operate at lower efficiency. With proper system design,
                battery storage, and high-efficiency panels, you can still enjoy
                reliable solar power even in less-than-perfect weather.
              </p>
              <p>
                {" "}
                🌞 Want to get started with solar? Use our Solar Needs
                Assessment Tool to find the best solar system for your home! 🚀
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mt-5 text-[20px] font-semibold text-[#2266DE]">
            Final Thoughts - Keep Your Solar System Running at Peak Performance
          </h3>

          <div className="mt-5 text-black">
            <p>
              Regular maintenance ensures your solar panels stay efficient,
              providing maximum energy savings and a long lifespan. By keeping
              them clean, monitoring performance, and scheduling professional
              inspections, you can enjoy uninterrupted solar power for decades.
            </p>

            <p>
              🌞 Need expert maintenance support? Find trusted solar
              professionals on
              <span
                className="text-underline"
                onClick={() => navigate("/assessment-tool")}
              >
                SolarWise Marketplace
              </span>{" "}
              today! 🚀
            </p>
          </div>
        </div>

        {/* Top Vendors */}
        <div className="p-[5rem_2rem]">
          <h2 className="text-primary-500 mb-4 text-[32px] font-semibold">
            Our Vendors
          </h2>
          <div className="flex flex-col items-center justify-center gap-[124px] md:flex-row">
            <img src={lumos} alt="" />
            <img src={sunKing} alt="" />
            <img src={solynta} alt="" />
          </div>
          <div className="m-[2rem_0] flex items-end justify-end">
            <Button type="secondary" link="#">
              View all
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarPanelFAQBlog;
