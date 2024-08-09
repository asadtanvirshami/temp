"use client";

// import Loading from '@/components/lo'
import Loading from '@/components/Loading'
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/lib/features/authSlice";
import { useEffect } from "react";
import { setDriverState } from "@/lib/features/invoiceSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await fetch("/api/invoice", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the body as JSON
      const data = await res.json();
      dispatch(setDriverState(data?.docs))
    };
    fetchDrivers();
  }, []);
  const state = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Loading />
    </>
  );
}
