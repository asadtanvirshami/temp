"use client";

import HeaderContainer from "@/containers/HeaderContainer";
import NavbarContainer from "@/containers/NavbarContainer";
import SiderContainer from "@/containers/SidebarContainer";
import DispatchContainer from "@/containers/DispatchContainer";
import DispatchSiderContainer from "@/components/dispatch/SidebarContent";

const Dispatch = () => {
    return ( 
    <div className="flex-row">
      <HeaderContainer />
    <div>
        <NavbarContainer />
    </div>
    <div className="flex gap-x-1 justify-center">
        {/* <SiderContainer >
          <DispatchSiderContainer />
        </SiderContainer>
         */}
        <DispatchContainer />
      </div>
    </div>
     );
}
 
export default Dispatch;