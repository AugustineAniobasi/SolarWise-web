import appliances from "@/data/smp-appl";
import "./AssessmentTool.css";

export default function AssessmentTool() {
  return (
    <>
      <div className="assessment-hero flex h-[500px] items-end">
        <h1 className="mb-10 ml-28 text-[44px] font-bold text-white">
          <span className="block">Assessment Tool</span>{" "}
          <span>Calculate your power consumption</span>
        </h1>
      </div>

      <div className="calculator-container relative bg-[url(./src/assets/images/bg-vector.png)] bg-cover bg-center bg-no-repeat py-24">
        <div className="absolute top-0 left-0 z-1 h-full w-full bg-white opacity-70"></div>
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
              {appliances.map((appliance) => (
                <div
                  key={appliance.id}
                  className="appliance-table-row flex justify-between"
                >
                  <div>{appliance.name}</div>
                  <div>Amount of Appliances?</div>
                  <div>Amount of Power (W)</div>
                </div>
              ))}
            </div>
            <div className="appliance-table-footer flex w-full gap-6">
              <button>Add New Appliance</button>
              <button>Calculate Power</button>
            </div>
          </div>
          <div className="bg-primary-500 m-auto mt-[5rem] w-full max-w-[997px] px-12 py-[80px]">
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
