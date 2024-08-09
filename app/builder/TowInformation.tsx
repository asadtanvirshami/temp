import React from 'react';

const TowInformation: React.FC = () => {
  return (
    <section className="flex flex-col pr-20 pl-5 mt-2.5 max-md:pr-5 max-md:max-w-full">
      <label htmlFor="towedFrom" className="text-base text-black max-md:max-w-full">Towed From</label>
      <input
        id="towedFrom"
        type="text"
        className="justify-center items-start px-3.5 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5 max-md:max-w-full"
        placeholder="Towed From"
      />
      <label htmlFor="towedTo" className="mt-2.5 text-base text-black max-md:max-w-full">Towed To</label>
      <input
        id="towedTo"
        type="text"
        className="justify-center items-start px-4 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5 max-md:max-w-full"
        placeholder="Towed To"
      />
      <label htmlFor="retowTo" className="mt-3 text-base text-black max-md:max-w-full">Retow To</label>
      <input
        id="retowTo"
        type="text"
        className="justify-center items-start px-4 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5 max-md:max-w-full"
        placeholder="Retow To"
      />
      <div className="flex gap-5 mt-1.5 text-base text-black max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <label htmlFor="lotSection">Lot Section</label>
        <label htmlFor="callType">Call Type</label>
        <label htmlFor="haveKey">Have Key?</label>
        <label htmlFor="holdNote">Hold Note</label>
      </div>
      <div className="flex gap-2 mt-1.5 text-sm text-center text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        <input
          id="lotSection"
          type="text"
          className="shrink-0 h-12 rounded-md border-2 border-solid border-zinc-300 w-[215px]"
        />
        <input
          id="callType"
          type="text"
          className="shrink-0 h-12 rounded-md border-2 border-solid border-zinc-300 w-[215px]"
        />
        <select
          id="haveKey"
          className="justify-center items-start px-2.5 py-5 rounded-md border-2 border-solid border-zinc-300 max-md:pr-5"
        >
          <option>Have Key</option>
        </select>
        <input
          id="holdNote"
          type="text"
          className="justify-center items-start px-3.5 py-5 rounded-md border-2 border-solid border-zinc-300 max-md:pr-5"
          placeholder="Hold Note"
        />
      </div>
      <label htmlFor="note" className="mt-4 text-base text-black max-md:max-w-full">Note</label>
      <textarea
        id="note"
        className="items-start px-4 pt-5 pb-28 mt-3 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5 max-md:max-w-full"
        placeholder="05/03/2024 Fri 11:26-"
      ></textarea>
    </section>
  );
};

export default TowInformation;