import React from 'react';
import GeneralInformation from './GeneralInformation';
import DispatchDetails from './DispatchDetails';
import AccountInformation from './AccountInformation';
import VehicleInformation from './VehicleInformation';
import TowInformation from './TowInformation';
import InvoiceSection from './InvoiceSection';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pt-3.5 pb-20 w-full bg-white rounded-md shadow-sm max-md:mt-7 max-md:max-w-full">
        <div className="flex z-10 flex-col px-5 pb-20 max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col text-xl text-black max-md:max-w-full">
            <div className="max-md:max-w-full">Dispatch #123456</div>
            <div className="shrink-0 mt-1.5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
          </div>
          <GeneralInformation />
          <DispatchDetails />
          <AccountInformation />
          <VehicleInformation />
          <TowInformation />
          <InvoiceSection />
        </div>
      </div>
    </main>
  );
};

export default MainContent;