import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between w-full font-medium max-w-[1329px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-3 self-start px-5 mt-1.5 text-3xl tracking-wider text-black">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7215def0bb2b21f0848c38e12d9040c1a4b22e923c1c8cfda3da893618511844?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 self-start mt-1 aspect-[2.13] w-[43px]" alt="" />
        <div className="flex-auto">Website name</div>
      </div>
      <div className="flex gap-5 justify-between text-xl text-white whitespace-nowrap">
        <div className="flex gap-0 px-5">
          <div className="justify-center items-center px-3.5 bg-purple-300 rounded-full h-[42px] w-[42px]">G</div>
          <div className="justify-center items-center px-4 bg-teal-300 rounded-full h-[42px] w-[42px]">B</div>
          <div className="justify-center items-center px-4 bg-amber-200 rounded-full h-[42px] w-[42px]">J</div>
        </div>
        <div className="justify-center items-center px-4 bg-indigo-600 rounded-full h-[42px] w-[42px]">S</div>
      </div>
    </header>
  );
};

export default Header;