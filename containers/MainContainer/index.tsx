"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import GeneralScreen from "./GeneralScreen";

const MainContainer = () => {
  return (
    <ScrollArea className="h-[calc(100vh-145px)] w-full">
      <div className="w-[100%] py-2 sm:px-4 px-1">
        <GeneralScreen />
      </div>
    </ScrollArea>
  );
};

export default MainContainer;
