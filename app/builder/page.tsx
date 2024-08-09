import React from 'react';
import Header from './Header';
import Sidebar from './Siderbar';
import MainContent from './MainContent';

const DispatchLayout: React.FC = () => {
    return (
      <div className="flex flex-col items-center py-7 bg-white">
        <Header />
        <div className="flex gap-5 justify-between items-start self-stretch px-16 pb-2.5 mt-5 w-full text-sm text-white bg-blue-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <nav className="flex gap-5 justify-between items-end whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-2.5 items-end self-stretch">
              <div className="items-start self-stretch px-10 pt-6 pb-2.5 bg-indigo-600 rounded-none max-md:pl-5">Builder</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec668bc5aa67aa803f416cfbd9e5e97059a2df6d63cb0380a46d2b6a4a271ece?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 mt-6 w-4 aspect-square" alt="" />
              <div className="mt-6">Rules</div>
            </div>
            <div className="flex gap-2.5 mt-6">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfc4212977af20c84c8ae2bb814f3ad24a00bb33da749cbba4e5cf6f8131178?apiKey=53cdeb7461f5418a845e0e11ec8d6b5b&" className="shrink-0 w-4 aspect-square" alt="" />
              <div>Settings</div>
            </div>
            <div className="flex gap-5 justify-between mt-6">
              <div>Themes</div>
              <div>Share</div>
              <div>Integration</div>
              <div>Approvals</div>
            </div>
          </nav>
          <div className="flex gap-5 justify-between mt-2.5">
            <div className="flex gap-5 justify-between my-auto">
              <div className="underline">All Entries</div>
              <div>|</div>
            </div>
            <button className="justify-center px-8 py-4 whitespace-nowrap bg-indigo-600 rounded-md max-md:px-5">Publish</button>
          </div>
        </div>
        <div className="mt-6 w-full max-w-[1392px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    );
  };
  
  export default DispatchLayout;
  