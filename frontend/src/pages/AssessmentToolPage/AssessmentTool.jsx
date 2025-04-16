import appliances from "@/data/appliances";
import "./AssessmentTool.css";
import { useState } from "react";
import { generateRandomId } from "@/lib/utils";

export default function AssessmentTool() {
  const [applianceData, setApplianceData] = useState(
    appliances.map((appliance) => ({ ...appliance, id: generateRandomId() })),
  );
  const [results, setResults] = useState({
    totalLoad: 0,
    solarPanelCapacity: 0,
    inverterRating: 0,
    chargeController: 0,
    panelQuantity: 0,
    inverterBattery: 0,
  });

  // When user clicks on the appliance name, it will enable the input field for quantity
  function enableAppliance(id) {
    setApplianceData((prevData) =>
      prevData.map((appliance) =>
        appliance.id === id
          ? { ...appliance, isDisabled: !appliance.isDisabled }
          : appliance,
      ),
    );
  }

  // When user changes the quantity of the appliance, it will update the state
  function updateApplianceQuantity(id, quantity) {
    setApplianceData((prevData) =>
      prevData.map((appliance) =>
        appliance.id === id ? { ...appliance, quantity } : appliance,
      ),
    );
  }

  /* When user clicks on the calculate button, it will calculate the power consumption
  and update the state with the results */
  function calculatePower() {
    const totalLoad = applianceData.reduce(
      (total, appliance) =>
        total +
        (!appliance.isDisabled ? appliance.load * appliance.quantity : 0),
      0,
    );

    const solarPanelCapacity = totalLoad * 1.5; // Assuming a 50% buffer
    const inverterRating = solarPanelCapacity * 1.5; // Assuming a 50% buffer
    const batterySize = solarPanelCapacity * 2; // Assuming 2 days of autonomy
    const chargeController = Math.ceil(solarPanelCapacity / 100); // Assuming 100W per panel
    const panelQuantity = Math.ceil(solarPanelCapacity / 300); // Assuming 300W per panel
    const inverterBattery = Math.ceil(batterySize / 100); // Assuming 100Ah battery

    setResults((prevData) => ({
      ...prevData,
      totalLoad,
      solarPanelCapacity,
      inverterRating,
      chargeController,
      panelQuantity,
      inverterBattery,
    }));
  }

  // When user clicks on the add new appliance button, it will open/close a modal to add a new appliance
  function toggleAddApplianceModal() {
    const modal = document.querySelector(".add-appliance-modal");
    modal.classList.toggle("hidden");
  }

  // When user submits the form to add a new appliance, it will add the appliance to the state
  function addAppliance(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = parseInt(e.target.quantity.value) || 0;
    const load = parseInt(e.target.load.value) || 0;

    if (name && quantity && load) {
      setApplianceData((prevData) => [
        ...prevData,
        { id: generateRandomId(), name, quantity, load, isDisabled: false },
      ]);
      toggleAddApplianceModal();
    }
  }

  return (
    <>
      <div className="assessment-hero full-bleed flex h-[500px] items-end">
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
                    disabled={appliance.isDisabled}
                    value={appliance.quantity > 0 ? appliance.quantity : ""}
                    onChange={(e) =>
                      updateApplianceQuantity(
                        appliance.id,
                        parseInt(e.target.value) || 0,
                      )
                    }
                  />
                  <div>
                    {!appliance.isDisabled
                      ? appliance.load
                      : "Amount of Power (W)"}
                  </div>
                </div>
              ))}
            </div>

            <div className="appliance-table-footer flex w-full gap-6">
              <button onClick={toggleAddApplianceModal}>
                Add New Appliance
              </button>
              <button onClick={calculatePower}>Calculate Power</button>
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
                  <span>{results.totalLoad} watts</span>
                </div>
                <div>
                  <span>Solar Panel Capacity in Watt </span>
                  <span>{results.solarPanelCapacity} watts</span>
                </div>
                <div>
                  <span>Recommended inverter rating </span>
                  <span>{results.inverterRating} watts</span>
                </div>
              </div>
              <div className="calculation-result">
                <div>
                  <span>Solar Panel Quantity: </span>
                  <span>{results.panelQuantity}</span>
                </div>
                <div>
                  <span>Inverter Battery: </span>
                  <span>{results.inverterBattery}</span>
                </div>
                <div>
                  <span>Charge Controller: </span>
                  <span>{results.chargeController}</span>
                </div>
                <button className="bg-primary-500 hover:bg-primary-600 w-full cursor-pointer rounded-lg p-[0.5rem_1rem] text-center font-semibold text-white">
                  Contact a Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="add-appliance-modal fixed top-0 left-0 z-100 hidden h-full w-full">
        <div className="absolute top-0 left-0 z-100 h-full w-full bg-black opacity-80"></div>
        <div className="absolute top-[50%] left-[50%] z-100 m-auto w-full max-w-[997px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-12">
          <div className="flex justify-end">
            <button
              className="ml-auto flex w-fit cursor-pointer items-center justify-center"
              onClick={toggleAddApplianceModal}
            >
              <i className="bx bx-exit bx-sm"></i>
            </button>
          </div>
          <p className="text-center text-[2rem] text-neutral-900">
            Add your own appliance
          </p>
          <form action="" onSubmit={addAppliance}>
            <div className="add-appliance-form mb-8 flex flex-col gap-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter appliance name" />
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" placeholder="Enter quantity" />
              <label htmlFor="load">Load (W)</label>
              <input
                type="number"
                id="load"
                placeholder="Enter appliance load"
              />
            </div>
            <button
              className="bg-primary-500 hover:bg-primary-600 w-full cursor-pointer rounded-lg p-[0.5rem_1rem] text-center font-semibold text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
