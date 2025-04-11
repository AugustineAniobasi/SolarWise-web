import { useNavigate } from "react-router-dom";
import solarPanelBg from "../../assets/images/blogFive.png";
import sunKing from "../../assets/images/sunKingBg.png";
import lumos from "../../assets/images/lumos.png";
import solynta from "../../assets/images/solynta.png";
import Button from "../../components/ButtonComponent";

import "./blogs.css";

function SolarPanelMaintainaceBlog() {
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
            src={solarPanelBg}
            alt="Solar Battery Blog"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[150px] bg-[#2266DE]/20"></div>
        </div>

        <div className="absolute bottom-[4rem] left-[3rem]">
          <h3 className="text-[44px]">
            How to Maintain Your Solar Panels for Maximum Efficiency
          </h3>
        </div>
      </div>

      <div className="blog__text__container mx-auto mt-[2rem] mb-[4rem] w-full max-w-[1200px] p-2">
        <p>
          Solar panels are a long-term investment that can provide clean and
          reliable energy for 25 years or more. However, to get the best
          performance and savings from your system, proper maintenance is
          essential. In this guide, we'll cover the key steps to keep your solar
          panels operating at peak efficiency.
        </p>

        <div className="ml-5 flex flex-col gap-8 text-[#2266DE]">
          <div className="heading__text list-decimal">
            Regular Cleaning: Keep Panels Free from Dust and Dirt
            <div className="mt-5 text-black">
              <p className="mb-5">
                Dirt, dust, bird droppings, and debris can block sunlight from
                reaching your solar panels, reducing their efficiency. Regular
                cleaning ensures maximum energy production.
              </p>
              <p>How to Clean Your Solar Panels:</p>
              <p>✅ Use a soft cloth or sponge with mild soap and water.</p>
              <p> ✅ Avoid abrasive materials that can scratch the surface.</p>
              <p>✅ Rinse with clean water and let it air dry.</p>
              <p className="mb-4">
                ✅ For hard-to-reach panels, use a long-handled brush or hose.
              </p>
              <p>
                💡 Tip: If you live in a dusty area, clean your panels every 2-3
                months. In rainy regions, natural rainwater can help clean them,
                reducing the need for frequent washing.
              </p>
            </div>
          </div>

          <div className="heading__text list-decimal">
            Inspect for Physical Damage
            <div className="mt-5 text-black">
              <p>
                Regularly check your panels for cracks, loose wiring, or
                corrosion.
              </p>
              <p>Damaged panels can lose efficiency and pose a safety risk.</p>
              <p>🔍 What to Look For:</p>
              <p>✔ Cracks or chips in the glass.</p>
              <p>✔ Loose or exposed wiring. </p>
              <p> ✔ Discoloration (signs of overheating).</p>
              <p>✔ Rust or corrosion on mounting structures.</p>
              <p>
                💡 Solution: If you notice any damage, contact a professional
                solar technician for repairs.
              </p>
            </div>
          </div>
          <div className="heading__text">
            Monitor Your Solar System's Performance
            <div className="mt-5 text-black">
              <p>
                Most modern solar systems come with monitoring apps or software
                that track performance in real time.
              </p>
              <p>Check for These Warning Signs:</p>
              <p>
                ⚠ Lower than usual power output (indicates a fault or dirt
                buildup).
              </p>
              <p>⚠ Frequent system shutdowns or error messages.</p>
              <p>
                {" "}
                ⚠ Inconsistent battery charging (if you have solar batteries).
              </p>
              <p>
                💡 Tip: Track your daily and monthly energy production to detect
                any sudden drops in efficiency.
              </p>
            </div>
          </div>

          <div className="heading__text">
            Trim Nearby Trees and Remove Obstructions
            <div className="mt-5 text-black">
              <ul className="mt-2 list-disc pl-2">
                <li>
                  Solar panels work best in direct sunlight. Trees, buildings,
                  or accumulated leaves can cast shadows, reducing energy
                  generation.
                </li>
                <li>
                  🌳 Maintenance Tips:
                  <div>
                    <p>
                      {" "}
                      ✅ Trim overhanging branches that may block sunlight.
                    </p>
                    <p>
                      ✅ Remove leaves or debris that collect on the panels.
                    </p>
                    <p>
                      ✅ Check for new structures (e.g., satellite dishes) that
                      might cast shadows.
                    </p>
                  </div>
                </li>
                <li>
                  💡 Tip: If shade is unavoidable, consider repositioning the
                  panels or using microinverters, which help individual panels
                  function independently.
                </li>
              </ul>
            </div>
          </div>

          <div className="heading__text">
            Schedule Professional Maintenance & Servicing
            <div className="mt-5 text-black">
              <p>
                While basic cleaning and inspection can be done by homeowners, a
                yearly professional 
                checkup ensures all system components are
                functioning properly.
              </p>
              <p>👷 A Solar Technician Will:</p>
              <p>✔ Inspect and tighten electrical connections.</p>
              <p> ✔ Test the inverter and battery system (if applicable).</p>
              <p>
                ✔ Check the mounting structure for stability and corrosion.
              </p>
              <p>✔ Ensure proper grounding and safety compliance.</p>
              <p>
                💡 Tip: Some solar providers offer annual maintenance
                services—check with your installer for support.
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

export default SolarPanelMaintainaceBlog;
