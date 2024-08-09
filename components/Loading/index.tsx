"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from 'react-spinners/MoonLoader'

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#fcfcfc]">
      <MoonLoader
        color={"#1fcfac"}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading