import React from 'react';

const DispatchDetails: React.FC = () => {
  return (
    <section className="flex z-10 flex-col mt-0 ml-48 max-w-full w-[193px] max-md:mt-0 max-md:ml-2.5">
      <div className="flex gap-5 justify-between self-end max-w-full w-[143px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b401f9ec9b5fbd9b063ef310c2a3c5a768955a484a4dabe3edc7b6aebc438f0?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 w-4 aspect-[0.53]" alt="" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ae1701aa23f4aeda5c117739f7def1e2d67b37314f9fafb1d82ff03fdeba17?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 w-4 aspect-[0.53]" alt="" />
      </div>
      <div className="mt-7 text-base text-black">Driver #</div>
      <div className="flex gap-1.5 mt-2.5 text-sm text-center text-black whitespace-nowrap">
        <input type="text" className="shrink-0 h-12 rounded-md border-2 border-solid border-zinc-300 w-[114px]" />
        <button className="justify-center px-6 py-5 rounded-md border-2 border-solid bg-zinc-300 border-zinc-300 max-md:px-5">2nd</button>
      </div>
      <div className="mt-4 text-base text-black">Tag #</div>
      <input type="text" className="shrink-0 mt-1.5 h-12 rounded-md border-2 border-solid border-zinc-300" />
      <div className="mt-4 text-base text-black">Exp</div>
    </section>
  );
};

export default DispatchDetails;