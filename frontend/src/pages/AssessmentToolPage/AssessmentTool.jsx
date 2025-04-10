import appliances from "@/data/appliances";
import "./AssessmentTool.css";
import { useState } from "react";

export default function AssessmentTool() {
  const [applianceData, setApplianceData] = useState(appliances);

  function enableAppliance(id) {
    setApplianceData((prevData) =>
      prevData.map((appliance) =>
        appliance.id === id
          ? { ...appliance, isEnabled: !appliance.isEnabled }
          : appliance,
      ),
    );
  }

  return (
    <>
      <div className="assessment-hero flex h-[500px] items-end">
        <h1 className="mb-10 ml-28 text-[44px] font-bold text-white">
          <span className="block">Assessment Tool</span>{" "}
          <span>Calculate your power consumption</span>
        </h1>
      </div>

      <div className="calculator-container relative bg-[url(./src/assets/images/bg-vector.png)] bg-cover bg-center bg-no-repeat py-24">
        <div className="absolute top-0 left-0 z-1 h-full w-full bg-white opacity-80"></div>

        <div className="relative z-2">
          <p className="text-primary-500 m-auto mb-[70px] max-w-[900px] text-center text-[44px] font-normal">
            Calculate the amount of power your appliance would require
          </p>

          <div className="m-auto w-full max-w-[1046px]">
            <div className="appliance-table-header bg-primary-500 flex w-full items-center justify-between rounded-lg font-bold text-white">
              <span>Appliance</span>
              <span>Quantity</span>
              <span>Load</span>
            </div>

            <div className="appliance-table-body mt-11 flex w-full flex-col gap-4">
              {applianceData.map((appliance) => (
                <div
                  key={appliance.id}
                  className="appliance-table-row flex justify-between"
                >
                  <button
                    className="border-primary-400 hover:ring-primary-300 cursor-pointer border-2 font-bold hover:ring-2"
                    onClick={() => enableAppliance(appliance.id)}
                  >
                    {appliance.name}
                  </button>
                  <input
                    type="number"
                    placeholder="Amount of Appliances?"
                    disabled={appliance.isEnabled}
                  />
                  <div>
                    {!appliance.isEnabled
                      ? appliance.load
                      : "Amount of Power (W)"}
                  </div>
                </div>
              ))}
            </div>

            <div className="appliance-table-footer flex w-full gap-6">
              <button>Add New Appliance</button>
              <button>Calculate Power</button>
            </div>
          </div>

          <div className="bg-primary-500 m-auto mt-[5rem] w-full max-w-[997px] rounded-lg px-12 py-[80px]">
            <p className="text-center text-[2rem] text-white">
              Your result from the calculation
            </p>

            <div className="mt-4 flex gap-10">
              <div className="calculation-result">
                <div>
                  <span>Total Load: </span>
                  <span>0 watts</span>
                </div>
                <div>
                  <span>Solar Panel Capacity in Watt </span>
                  <span>0 watts</span>
                </div>
                <div>
                  <span>Recommended inverter rating </span>
                  <span>0 watts</span>
                </div>
              </div>
              <div className="calculation-result">
                <div>
                  <span>Solar Panel Quantity: </span>
                  <span>0</span>
                </div>
                <div>
                  <span>Inverter Battery: </span>
                  <span>0</span>
                </div>
                <div>
                  <span>Charge Controller: </span>
                  <span>0</span>
                </div>
                <button
                  className="bg-primary-500 w-full rounded-lg p-[0.5rem_1rem] text-center font-semibold text-white"
                  id="contact-vendor-button"
                >
                  Contact a Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
