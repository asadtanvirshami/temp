"use client";

import { FilePlus, ArrowRightToLine, ArrowLeftToLine, SearchCheck, Printer, LogOut } from "lucide-react";
import SidebarItem from "@/components/Invoice/SidebarItem";

type SiderContainerProps = {
  children: React.ReactNode;
};

const SiderContainer : React.FC<SiderContainerProps> = ({ children }) => {
  return (
    <div className="w-[20%] hidden xl:flex p-4 pr-0 pl-6">
      <div className="flex-col w-full">
        {children}
      </div>
    </div>
  );
};

export default SiderContainer;
