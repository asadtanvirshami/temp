"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BgLogin from "@/public/login.jpg";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";

export default function Component() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswod = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/invoice");
        setIsLoading(false);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className="bg-gray-1000 w-full min-h-screen flex items-center py-12 px-4 md:px-6 shadow-lg justify-end">
      <Image
        alt="background"
        src={BgLogin}
        className="w-screen h-screen left-[-300px] top-0 opacity-70 absolute object-fit"
      />
      <div className="w-[600px] h-screen bg-white z-10 top-0 fixed right-0 shadow-lg px-8 py-4 items-center">
        <div className="w-full flex items-center h-[60px] justify-start">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" className="w-[43px] h-[21px]" />
            <div className="font-bold text-[32px] pl-2 text-[#356aeb]">
              FoxTow
            </div>
          </div>
        </div>
        <div className="flex-col gap-y-2  mt-[230px]">
          <div className="space-y-4">
            <div className="text-[24px]/[36px] font-bold w-full text-center">
              {`We’ve been expecting you!`}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-[14px] font-normal underline text-[#356aeb]"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswod}
                required
              />
            </div>
          </div>
          <div className="flex-col gap-x-4">
            <Button
              type="submit"
              className="w-full mt-6 bg-[#356aeb] hover:bg-[#3267ee] gap-x-3"
              onClick={() => handleLogin(email, password)}
            >
              Login
              <ClipLoader
                color={"#ffffff"}
                loading={isLoading}
                size={18}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Button>
            <div className="text-center text-sm font-medium mt-3 ">
              {`Don't have an account?`}
              <Link href="#" prefetch={false} className="text-[#356aeb]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
