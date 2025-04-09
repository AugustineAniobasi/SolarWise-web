import React from "react";
import vendorBgImg from "../../assets/images/vendorBg.png";
import sunKingImg from "../../assets/images/sunKingBg.png";
import sealCheck from "../../assets/images/sealCheck.png";
import locationImg from "../../assets/images/locationBg.png";
import { Button } from "@/components/ui/button";
import productOne from "../../assets/images/vendorProductOne.png"
import productTwo from "../../assets/images/vendorProductTwo.png";
import productThree from "../../assets/images/vendorProductThree.png";
import "./vendorPage.css";

function VendorPage() {
  const vendorData = [
    {
      image: productOne,
      description: "Powerplay Pro"
    },
    {
      image: productTwo,
      description: "Power Hub"
    },
    {
      image: productThree,
      description: "Home 500X"
    },
  ]
  return (
    <>
      <div className="h-[320px]">
        <img className="h-full w-screen object-cover" src={vendorBgImg} />
      </div>

      <section className="vendor__section mx-auto mt-[-4.5rem] mb-[3rem] flex w-full max-w-[1200px] items-center gap-[4rem]">
        <div className="mt-[-2rem] flex items-center justify-center">
          <img className="h-[250px] w-[320px]" src={sunKingImg} alt="image" />
        </div>

        <div
          className="vendor__text__container mt-[4rem] flex w-full items-center justify-between"
          // style={{ border: "1px solid #E5E5E5" }}
        >
          <div className="">
            <h2 className="flex items-center gap-3">
              Sun King Solar Company{" "}
              <span>
                <img src={sealCheck} alt="" />
              </span>
            </h2>
            <p className="flex items-center gap-2 text-[14px] font-normal">
              <span>
                <img src={locationImg} alt="" />
              </span>
              Africa and Asia
            </p>
          </div>

          <div className="">
            <Button className="flex cursor-pointer items-center justify-center gap-3 bg-[#2266DE] text-white hover:bg-[#2267dee1]">
              Buy from Vendor{" "}
              <span>
                <i className="bx bx-right-arrow-alt"></i>
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section className="vendor__section mx-auto flex w-full max-w-[1200px] flex-col justify-center gap-[2rem]">
        <div className="">
          <h4 className="mb-4 text-2xl font-bold text-[#2266DE]">
            About the Brand
          </h4>
          <p className="">
            Sun King designs, distributes, installs, and finances solar energy
            solutions for the 1.8 billion people without reliable access to
            electricity. From cost-effective solar lanterns and home systems
            that provide entry-level access to electricity to powerful,
            multi-kilowatt-scale solar systems that offer power equity with the
            traditional electrical grid, Sun King's products meet diverse power
            and light needs across Africa and Asia.
          </p>
        </div>
        <div className="">
          <h4 className="mb-6 border-b py-6 text-2xl font-bold text-[#2266DE]">
            Browse Product
          </h4>

          <div className="mb-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {vendorData.map((item) => {
              return (
                <div
                  key={item.image}
                  className="flex h-fit flex-col justify-start gap-3"
                >
                  <div className="flex h-[250px] w-full max-w-[383px] items-center justify-center overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full object-contain py-2"
                      style={{ border: "2px solid #BAD0F5" }}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <p className="rounded bg-[#BAD0F5] p-2 text-[24px] text-[#0E2B5D] font-bold">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default VendorPage;
