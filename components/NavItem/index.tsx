"use client";

import Link from "next/link";
import React from "react";

interface INavItemProps {
  Icon: React.ReactNode;
  label?: string;
  active?: boolean;
  href: string;
}

const NavItem = ({ Icon, label, active, href }: INavItemProps) => {
  return (
    <Link
      href={href || "#"}
      className={`flex hover:bg-[#2D31FA] pt-[20px] px-4 h-[47px] rounded-b-lg gap-2 transition duration-300 ease-in-out ${
        active && "bg-[#2D31FA]"
      }`}
    >
      {Icon}
      <span className="pt-[1px] hidden md:block text-[14px]">{label}</span>
    </Link>
  );
};

export default NavItem;
