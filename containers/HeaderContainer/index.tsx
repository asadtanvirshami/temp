"use client";

import { logout } from "@/app/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderContainer = () => {
  const router = useRouter()
  const handleLogout = async () => {
    router.push('/')
    logout()
  }
  return (
    <div className="lg:px-12 px-6 w-full flex items-center h-[85px] justify-between bg-white">
      <div className="flex items-center">
        <img src="/logo.png" width={"43px"} height={"21px"} />
        <div className="font-bold text-[32px] pl-2 text-[#356aeb]">FoxTow</div>
      </div>
      <div className="flex items-center">
        <Bell className="mr-8 h-[24px] w-[24px] cursor-pointer"/>
        <Avatar onClick={handleLogout} className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HeaderContainer;
