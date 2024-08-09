"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HeaderContainer from "@/containers/HeaderContainer";
import NavbarContainer from "@/containers/NavbarContainer";
import SiderContainer from "@/containers/SidebarContainer";
import MainContainer from "@/containers/MainContainer";
import IvoiceSiderContainer from "@/components/Invoice/SidebarContent";
import {
  setDriverState,
  setTrucksState,
  setDispatchState,
} from "@/lib/features/invoiceSlice";
import { RootState } from "@/lib/store";

const Invoice = () => {
  const dispatch = useDispatch();

  // const page = useSelector((state: RootState) => state.invoice.page);

  // useEffect(() => {
  //   const fetchDrivers = async () => {
  //     const res = await fetch("/api/invoice", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();
  //     dispatch(setDriverState(data?.docs));
  //   };
  //   const fetchTrucks = async () => {
  //     const res = await fetch("/api/truck", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();
  //     dispatch(setTrucksState(data?.docs))
  //   };
  //   const fetchTomast = async () => {
  //     const res = await fetch(`/api/invoice/towmast`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(page)

  //     });
  //     const data = await res.json();
  //     dispatch(setDispatchState(data?.docs[0]))
  //   };
  //   fetchDrivers();
  //   fetchTrucks();
  //   fetchTomast();
  // }, []);
  return (
    <div className="flex-row">
      <HeaderContainer />
      <div>
        <NavbarContainer />
      </div>
      <div className="flex gap-x-1 justify-center">
        <SiderContainer>
          <IvoiceSiderContainer />
        </SiderContainer>

        <MainContainer />
      </div>
    </div>
  );
};

export default Invoice;
