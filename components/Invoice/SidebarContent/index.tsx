"use client";

import { FilePlus, ArrowRightToLine, ArrowLeftToLine, SearchCheck, Printer, LogOut } from "lucide-react";
import SidebarItem from "@/components/Invoice/SidebarItem";
import React from "react";

const IvoiceSiderContainer = () => {
  return (
        <React.Fragment>
            <SidebarItem icon={<FilePlus className="text-[#757575]"/>} label="Add New Record" />
            <SidebarItem icon={<ArrowLeftToLine className="text-[#757575]"/>} label="Previous Record" />
            <SidebarItem icon={<ArrowRightToLine className="text-[#757575]"/>} label="Next Record" />
            <SidebarItem icon={<SearchCheck className="text-[#757575]"/>} label="Search" />
            <SidebarItem icon={<Printer className="text-[#757575]"/>} label="Print Record" />
            <SidebarItem icon={<LogOut className="text-[#757575]"/>} label="Close Call Screen" />
        </React.Fragment>
  );
};

export default IvoiceSiderContainer;
