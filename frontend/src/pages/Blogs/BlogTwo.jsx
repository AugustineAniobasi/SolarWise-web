import { useNavigate } from "react-router-dom";
import blogImgTwo from "../../assets/images/blogTwo.png";
import sunKing from "../../assets/images/sunKingBg.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import Button from "../../components/ButtonComponent";

import "./blogs.css";

function SolarPanelBlog() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog__container relative">
        <div className="fixed top-[20px] left-[3rem] z-10 flex items-center rounded-full bg-[#3383ecfa] shadow-lg">
          <i
            onClick={() => navigate("/")}
            className="bx bx-chevron-left cursor-pointer rounded text-[40px] text-[#ffffff]"
          ></i>
        </div>
        <div className="relative h-[620px] w-full">
          <img
            className="h-full w-full object-cover brightness-75"
            src={blogImgTwo}
            alt="Solar Battery Blog"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="absolute bottom-[4rem] left-[3rem]">
          <h3 className="text-[44px]">
            What's the Right Solar Panel for Your Home?
          </h3>
        </div>
      </div>

      <div className="blog__text__container mx-auto mt-[2rem] mb-[4rem] w-full max-w-[1200px] p-2">
        <p>
          Choosing the right solar panel for your home is essential for
          maximizing efficiency, savings, and long-term reliability. With
          various types of panels available, it's important to consider key
          factors like energy needs, budget, and space. This guide will help you
          determine the best solar panel for your home.
        </p>

        <ol className="ml-5 flex list-decimal flex-col gap-8 text-[#2266DE]">
          <li>
            Understanding Solar Panel Types
            <div className="mt-5 text-black">
              <p>
                There are three main types of solar panels, each with its
                advantages and drawbacks:
              </p>
              <p>🔹 Monocrystalline Panels (Best for efficiency & longevity)</p>
              <p>✔ High efficiency (18-22%) – works well in limited space.</p>
              <p>✔ Sleek black design and longer lifespan (25+ years).</p>
              <p> ✔ More expensive but provides the best power output.</p>
              <p>🔹 Polycrystalline Panels (Budget-friendly option)</p>
              <p>
                ✔ Moderate efficiency (15-17%) – requires more panels for the
                same output.
              </p>
              <p>
                ✔ Blue tint and slightly lower durability than monocrystalline.
              </p>
              <p>✔ More affordable but takes up more roof space.</p>
              <p>🔹 Thin-Film Panels (Best for flexibility & portability)</p>
              <p>
                ✔ Lightweight and flexible – suitable for small applications.
              </p>
              <p>✔ Lower efficiency (10-12%) and shorter lifespan.</p>
              <p>
                ✔ Ideal for temporary installations or areas with limited
                structural support.
              </p>
            </div>
          </li>

          <li>
            How to Determine Your Energy Needs
            <div className="mt-5 text-black">
              <p>
                To choose the right panel, you need to calculate your energy
                consumption and roof space availability:
              </p>
              <p>
                ✅ Check your electricity bill - Identify your monthly kWh
                usage.
              </p>
              <p>
                ✅ Consider future energy needs - Will you add appliances or an
                electric car?
              </p>
              <p>
                ✅ Assess roof space & sunlight exposure - More shade requires
                higher-efficiency panels.
              </p>
              <p>
                💡 Example: If your home consumes 500 kWh per month, and a 350W
                solar panel generates 40 kWh per month, you'd need about 13-15
                panels to meet your energy needs.
              </p>
            </div>
          </li>

          <li>
            Factors to Consider When Choosing Solar Panels
            <div className="mt-5 text-black">
              <p>
                📌 Budget & Cost - Monocrystalline is expensive but efficient,
                while polycrystalline is more affordable.
              </p>
              <p>
                📌 Durability & Warranty - Look for 25-year warranties for
                long-term savings.
              </p>
              <p>
                📌 Weather Conditions - High-efficiency panels work better in
                cloudy areas.
              </p>
              <p>
                📌 Battery Compatibility - If storing power, ensure
                compatibility with solar batteries
              </p>
            </div>
          </li>

          <li>
            Should You Go for a Solar Kit or Custom Installation?
            <div className="mt-5 text-black">
              <ul className="mt-2 ml-5 list-disc">
                <li>
                  Solar Kits (DIY or pre-packaged systems) are cheaper but
                  require technical knowledge.
                </li>
                <li>
                  Custom Installations are more efficient, designed for your
                  home, and include professional setup.
                </li>
              </ul>

              <p>
                💡 Tip: If unsure, use the Solar Needs Assessment Tool to
                calculate the perfect system for your home.
              </p>
            </div>
          </li>

          <li>
            Final Thoughts - Make the Right Choice
            <div className="mt-5 text-black">
              <p>
                The best solar panel for your home depends on your budget,
                energy needs, and available space. Investing in high-efficiency
                panels ensures better long-term savings and reliability.
              </p>
              <p>
                👉 Need expert advice? Connect with verified vendors and
                installers on SolarWise Marketplace today! 🌞
              </p>
            </div>
          </li>
        </ol>

        <div>
          <h3 className="mt-5 text-[20px] font-semibold text-[#2266DE]">
            Final Thoughts - Is Solar Worth It?
          </h3>

          <div className="mt-5 text-black">
            <p>
              YES! With long-term savings, reliable power, and environmental
              benefits, solar is one of the best investments you can make.
              Whether for your home or business, every kWh you generate reduces
              your reliance on expensive electricity.
            </p>

            <p>
              👉 Curious to know your exact savings? Use our Solar Savings
              Calculator to find out today! 🌞
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

export default SolarPanelBlog;
