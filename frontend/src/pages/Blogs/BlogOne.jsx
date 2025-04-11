import { useNavigate } from "react-router-dom";
import blogImgOne from "../../assets/images/blogOne.png";
import sunKing from "../../assets/images/sunKingBg.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import Button from "../../components/ButtonComponent";

import "./blogs.css";

function SolarEnergyBlog() {
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
        <div className="relative h-[620px] w-full">
          <img
            className="h-full w-full object-cover brightness-85"
            src={blogImgOne}
            alt="Solar Battery Blog"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="absolute bottom-[4rem] left-[3rem]">
          <h3 className="text-[44px]">
            How Much Can You Save with Solar Energy?
          </h3>
        </div>
      </div>

      <div className="blog__text__container mx-auto mt-[2rem] mb-[4rem] w-full max-w-[1200px] p-2">
        <p>
          Switching to solar energy isn't just about sustainability—it's also a
          smart financial move. With rising electricity costs and frequent power
          outages in many regions, investing in solar can significantly cut your
          energy bills. But how much can you actually save? Let's break it down.
        </p>

        <ol className="ml-5 flex list-decimal flex-col gap-8 text-[#2266DE]">
          <li>
            Before calculating savings, you need to know:
            <div className="mt-5 text-black">
              <p>✅ Your current electricity bill (monthly or yearly).</p>
              <p>
                ✅ Your energy consumption (measured in kilowatt-hours, kWh).
              </p>
              <p>✅ The cost per kWh charged by your electricity provider.</p>
              <p className="mt-2">
                For example, if your home uses 500 kWh per month and your
                electricity provider charges ₦80 per kWh, your monthly
                electricity bill is: 👉 ₦40,000 per month (₦80 x 500 kWh).
              </p>
            </div>
          </li>
          <li>
            How Solar Cuts Your Electricity Costs
            <div className="mt-5 text-black">
              <p>
                A well-sized solar system can generate up to 100% of your home's
                energy needs, reducing or even eliminating your electricity
                bill. However, savings depend on:
              </p>
              <ul className="mt-2 ml-5 list-disc">
                <li>
                  The size of your solar system (number of panels and battery
                  capacity).
                </li>
                <li>
                  Your sunlight exposure (Nigeria and most African countries
                  receive ample sunlight).
                </li>
                <li>
                  Whether you have battery storage (helps store power for
                  nighttime use).
                </li>
              </ul>
              <p className="mt-4 font-semibold">Example of Solar Savings</p>
              <p>
                If a solar system covers 80% of your energy needs, your new bill
                would be:
              </p>
              <p>🚀 ₦8,000 instead of ₦40,000 per month!</p>
              <p>💰 That's a ₦32,000 monthly saving and ₦384,000 per year!</p>
            </div>
          </li>
          <li>
            How Long Does It Take To Break Even?
            <div className="mt-5 text-black">
              <p>
                A solar system for an average home may cost between ₦2 million
                to ₦5 million, depending on size and battery capacity.
              </p>
              <ul className="mt-2 ml-5 list-disc">
                <li>
                  If you save ₦384,000 per year, your system could pay for
                  itself in 5-7 years.
                </li>
                <li>
                  After that, you enjoy nearly free electricity for the next
                  15-20 years and above.
                </li>
              </ul>
            </div>
          </li>
          <li>
            Extra Savings & Benefits
            <div className="mt-5 text-black">
              <p>
                💰 Lower reliance on diesel & generators - No more expensive
                fuel and maintenance costs.
              </p>
              <p>
                🌱 Eco-friendly energy - Reduce carbon footprint while saving
                money.
              </p>
              <p>
                🔋 Power stability - No more worrying about blackouts or grid
                failures.
              </p>
              <p>
                📈 Increased property value - Homes with solar systems sell for
                more.
              </p>
            </div>
          </li>
          <li>
            Financing Options - Making Solar Affordable
            <div className="mt-5 text-black">
              <p>
                Worried about upfront costs? With Buy Now, Pay Later (BNPL) and
                solar leasing options, you can switch to solar with minimal
                initial investment while enjoying immediate savings
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
              👉 Curious to know your exact savings? Use our
              <span
                className="text-underline"
                onClick={() => navigate("/assessment-tool")}
              >
                Solar Savings Calculator
              </span>{" "}
              to find out today! 🌞
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

export default SolarEnergyBlog;
