import React from 'react';

const AccountInformation: React.FC = () => {
  return (
    <section className="flex flex-col pr-20 pl-5 mt-0 max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[591px]">
        <label htmlFor="accountName" className="text-base text-black max-md:max-w-full">Account Name</label>
        <input
          id="accountName"
          type="text"
          className="justify-center items-start px-2.5 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Account Name"
        />
      </div>
      <div className="flex z-10 flex-col mt-4 max-w-full text-base text-black w-[193px]">
        <label htmlFor="whoCalled">Who Called?</label>
        <input
          id="whoCalled"
          type="text"
          className="justify-center items-start px-3 py-5 mt-2.5 text-sm text-center rounded-md border-2 border-solid border-zinc-300 text-neutral-500 max-md:pr-5"
          placeholder="Who Called"
        />
        <label htmlFor="type" className="mt-4">Type</label>
        <input
          id="type"
          type="text"
          className="shrink-0 mt-1.5 h-12 rounded-md border-2 border-solid border-zinc-300"
        />
        <label htmlFor="body" className="mt-4">Body</label>
        <input
          id="body"
          type="text"
          className="shrink-0 mt-1.5 h-12 rounded-md border-2 border-solid border-zinc-300"
        />
        <label htmlFor="odometer" className="mt-6">Odometer</label>
      </div>
    </section>
  );
};

export default AccountInformation;