import React from 'react';

const VehicleInformation: React.FC = () => {
  return (
    <section className="flex flex-col mt-0 ml-48 max-w-full text-base text-black w-[193px] max-md:mt-0 max-md:ml-2.5">
      <label htmlFor="phoneNumber">Phone #</label>
      <input
        id="phoneNumber"
        type="tel"
        className="justify-center items-start px-2.5 py-4 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5"
        placeholder="(---) --- ----"
      />
      <label htmlFor="year" className="mt-4">Year</label>
      <input
        id="year"
        type="text"
        className="shrink-0 mt-2.5 h-12 rounded-md border-2 border-solid border-zinc-300"
      />
      Continuing from where we left off:

      <div className="flex z-10 gap-5 justify-between self-center mt-0 ml-24 max-w-full text-base text-black w-[440px] max-md:flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="referenceNumber">Reference Number</label>
          <input
            id="referenceNumber"
            type="text"
            className="justify-center items-start px-3.5 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5"
            placeholder="Enter #"
          />
          <label htmlFor="make" className="mt-4">Make</label>
          <input
            id="make"
            type="text"
            className="shrink-0 mt-2.5 h-12 rounded-md border-2 border-solid border-zinc-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="model" className="self-end mt-20 max-md:mt-10">Model</label>
          <input
            id="model"
            type="text"
            className="shrink-0 mt-2.5 h-12 rounded-md border-2 border-solid border-zinc-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="self-end mt-20 max-md:mt-10">Color</label>
          <input
            id="color"
            type="text"
            className="shrink-0 mt-2.5 h-12 rounded-md border-2 border-solid border-zinc-300"
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleInformation;