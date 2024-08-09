import React from 'react';

const GeneralInformation: React.FC = () => {
  return (
    <section className="flex z-10 flex-col max-w-full text-base text-black w-[193px]">
      <div className="flex gap-1 px-px text-base">
        <h2 className="grow self-start mt-4">General Information</h2>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90bfcc6907d440d02fbe98dca2c881d5505db41f759eff9f36e94850d33fd3cd?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 w-4 aspect-[0.53]" alt="" />
      </div>
      <div className="mt-7">Driver</div>
      <select className="justify-center items-start px-4 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5">
        <option>Select a driver</option>
      </select>
      <div className="mt-4">Date</div>
      <input type="date" className="justify-center items-start px-5 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500" />
      <div className="mt-4">Member #</div>
      <input type="text" className="justify-center items-start px-4 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5" placeholder="Member #" />
    </section>
  );
};

export default GeneralInformation;