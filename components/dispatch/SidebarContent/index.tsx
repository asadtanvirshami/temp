"use client";

import { Car, Phone } from "lucide-react";
import SidebarItem from "@/components/Invoice/SidebarItem";
import React from "react";

const DispatchSiderContainer = () => {
  return (
        <React.Fragment>
            <SidebarItem icon={<Phone className="text-[#757575]"/>} label="Quick-call" />
            <SidebarItem icon={<Car className="text-[#757575]"/>} label="Drivers" />
        </React.Fragment>
  );
};

export default DispatchSiderContainer;
