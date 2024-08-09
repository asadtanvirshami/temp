'use client'

import { Button } from "@/components/ui/button";

interface ISidebarItemProps {
  icon?: React.ReactNode;
  label: string;
}

const SidebarItem = ({icon, label}: ISidebarItemProps) => {
    return (
        <Button variant={'outline'} className="flex justify-start items-center gap-2 w-full px-5 py-2 bg-[#f8f8fc] border border-[#e0e0e0] rounded-sm mb-1 text-[#757575] text-[15px] font-medium">
            {icon}
            {label}
        </Button>
    )
}

export default SidebarItem