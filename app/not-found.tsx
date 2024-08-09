"use client";
import Image from "next/image";

import Compass from "@/public/icons/compass.svg";
import Route from "@/public/icons/routes.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex gap-x-10">
        <div className="h-full">
          <div className="text-[96px] font-bold flex gap-x-5">
            Error 404 <Image alt="compass" src={Compass} />
          </div>
          <div className="text-[24px] text-[#4c566a]">
            The content you are looking for was not found
          </div>
          <div className="w-full justify-center mt-2">
            <Button onClick={() => router.push("/")}>
              Return to Dashboard
            </Button>
          </div>
        </div>
        <Image alt="Route" src={Route} />
      </div>
    </div>
  );
};

export default NotFound;
