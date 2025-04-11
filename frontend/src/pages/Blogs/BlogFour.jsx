import { useNavigate } from "react-router-dom";
import aboutSolarBg from "../../assets/images/blogFour.png";
import sunKing from "../../assets/images/sunKingBg.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import Button from "../../components/ButtonComponent";

import "./blogs.css";

function AboutSolarEnergyBlog() {
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
            src={aboutSolarBg}
            alt="Solar Battery Blog"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[150px] bg-[#2266DE]/20"></div>
        </div>

        <div className="absolute bottom-[4rem] left-[3rem]">
          <h3 className="text-[44px]">
            Common Myths About Solar Energy (Debunked)
          </h3>
        </div>
      </div>

      <div className="blog__text__container mx-auto mt-[2rem] mb-[4rem] w-full max-w-[1200px] p-2">
        <p>
          Solar energy is becoming a popular choice for homes and businesses,
          yet many myths and misconceptions still prevent people from making the
          switch. In this article, we'll debunk some of the most common myths
          about solar power and reveal the truth behind them.
        </p>

        <div className="ml-5 flex flex-col gap-8 text-[#2266DE]">
          <div className="heading__text">
            Myth #1: Solar Panels Don't Work in Cloudy or Rainy Weather
            <div className="mt-5 text-black">
              <p className="pl-4">
                🔍 Fact: Solar panels work even when it's cloudy or raining!
              </p>
              <p>
                Solar panels don't need direct sunlight to generate power—they
                can still produce electricity from diffused sunlight. While they
                are most efficient in direct sunlight, they still operate at
                10-25% efficiency on cloudy days. Countries like Germany and the
                UK, which have less sunshine than Nigeria, are among the leading
                users of solar power.
              </p>
              <p className="pl-4">
                💡 Tip: If you live in an area with frequent cloudy weather,
                consider high-efficiency solar panels and a battery storage
                system to store excess energy.
              </p>
            </div>
          </div>
          <div className="heading__text">
            Myth #2: Solar Energy Is Too Expensive
            <div className="mt-5 text-black">
              <p classname="pl-4">
                🔍 Fact: Solar power is now more affordable than ever!
              </p>
              <p>
                While the initial cost of installing solar panels can be high,
                the long-term savings make it a smart investment. With financing
                options like Buy Now, Pay Later (BNPL), leasing, and government
                incentives, many homeowners and businesses can install solar
                systems with little to no upfront costs.
              </p>
              <p>💰 Potential Savings:</p>

              <ul className="mt-2 list-disc pl-2">
                <li>
                  Lower electricity bills—solar power reduces or even eliminates
                  your monthly electricity costs. Avoid generator fuel and
                  maintenance expenses.
                </li>
                <li>
                  Increased property value—homes with solar panels sell for
                  more.
                </li>
              </ul>
            </div>
          </div>
          <div className="heading__text">
            Myth #3: Solar Panels Will Damage My Roof
            <div className="mt-5 text-black">
              <p>
                🔍 Fact: Properly installed solar panels can protect and even
                extend the life of your roof.
              </p>
              <p>
                Solar panels are mounted with specialized racking systems that
                do not harm your roof. Instead, they act as a protective layer,
                reducing wear and tear from sun exposure, wind, and rain.
              </p>
              <p>
                💡 Tip: Always hire certified solar installers to ensure proper
                installation without damaging your roof.
              </p>
            </div>
          </div>
          <div className="heading__text">
            Myth #4: Solar Panels Require Too Much Maintenance
            <div className="mt-5 text-black">
              <ul className="mt-2">
                <li>
                  🔍 Fact: Solar panels require minimal maintenance and can last
                  25+ years.{" "}
                </li>
                <li>
                  Unlike generators, which need frequent repairs and fuel, solar
                  panels only need occasional cleaning to remove dust and dirt.
                  Most modern solar panels come with warranties of 20-25 years,
                  ensuring long-term reliability.{" "}
                </li>
                <li>
                  💡 Tip: If you live in a dusty area, cleaning your panels once
                  every 3-6 months can help maintain efficiency.
                </li>
              </ul>
            </div>
          </div>
          <div className="heading__text">
            Myth #5: Solar Power Can't Run Heavy Appliances
            <div className="mt-5 text-black">
              <p>
                🔍 Fact: A properly sized solar system can power everything in
                your home.
              </p>
              <p>
                With high-capacity solar panels and battery storage, you can run
                refrigerators, air conditioners, pumps, and even industrial
                equipment.
              </p>
              <p>
                The key is to calculate your energy needs and install the right
                system.
              </p>
              <p>
                {" "}
                💡 Solution: Use our Solar Needs Assessment Tool to find the
                perfect system size for your home
              </p>
            </div>
          </div>
        </div>

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

export default AboutSolarEnergyBlog;
