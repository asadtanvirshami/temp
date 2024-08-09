"use client";

import NavItem from "@/components/NavItem";

import NavData from "@/consts/nav";
import { House } from "lucide-react";

const NavbarContainer = () => {
  return (
    <div className="w-full flex bg-[#051367] h-[60px] text-white lg:px-12 px-6 cursor-pointer gap-1">
      <div className={`pt-[20px] h-[47px] mr-3`}>
        <House className="w-[16px]" />
      </div>
      {NavData.map((nav, index) => (
        <NavItem
          key={index}
          Icon={nav.Icon}
          label={nav.label}
          active={nav.active}
          href={nav.href}
        />
      ))}
    </div>
  );
};

export default NavbarContainer;
