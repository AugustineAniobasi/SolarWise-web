// import appliances from "../data/smp-appl";
import "./AssessmentTool.css";

export default function AssessmentTool() {
  return (
    <>
      <div className="assessment-hero flex h-[480px] items-end">
        <h1 className="mb-10 ml-28 text-[44px] font-bold text-white">
          <span className="block">Assessment Tool</span>{" "}
          <span>Calculate your power consumption</span>
        </h1>
      </div>

      <div className="py-10">
        <p className="text-primary-500 m-auto mb-[70px] max-w-[900px] text-center text-[44px] font-normal">
          Calculate the amount of power your appliance would require
        </p>

        <div className="m-auto w-full max-w-[1046px]">
          <div className="table-header bg-primary-500 flex w-full items-center justify-between rounded-lg font-bold text-white">
            <span>Appliance</span>
            <span>Quantity</span>
            <span>Load</span>
          </div>

          <form action=""></form>
        </div>
      </div>
    </>
  );
}
