"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { MdCancel } from "react-icons/md";
import { Redirect } from "next";
import Home from "../page";
// import Home from "../page";
const Page = () => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  const handler = () => {
    setIsVisible(false); // Hide the content
  };

  const checkout = async () => {
    try {
      const products = [
        {
          name: "Guitar Course",
          price: 4999,
          quantity: 1,
        },
      ];
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        console.error("Error creating Stripe checkout session:", error);
        return;
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Stripe session URL is missing");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  return (
    <>
      {isVisible ? (
        <SignedIn>
          <div className="hidden lg:block overflow-hidden">
            <MdCancel
              className="text-6xl cursor-pointer"
              onClick={handler}
            />
            <div className="flex justify-around items-center w-full h-full pt-32 flex-wrap ">
              <PinContainer className="hidden lg:block" title="Guitar-Course" href="/Courses">
                <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[40vw] h-full bg-black ">
                  <Image
                    className="bg-cover object-cover"
                    src={"/guitar.jpg"}
                    alt="Guitar"
                    width={1000}
                    height={1000}
                  />
                </div>
              </PinContainer>
              <div className="hidden lg:block">
                <h1 className="text-white font-bold md:text-xl sm:text-lg text-xs">
                  Master the Guitar: Your Musical Journey Starts Here!
                </h1>
                <br />
                <p>
                  🎸 Unlock your musical potential with our engaging guitar course!
                  Whether <br /> you're a beginner picking up a guitar for the
                  first time or an intermediate <br /> player looking to refine
                  your skills, our step-by-step lessons are designed <br /> to
                  make learning fun and easy. With expert guidance, interactive
                  exercises, <br /> and the chance to play your favorite songs,
                  you'll be strumming with <br /> confidence in no time. Join now
                  and take the first step towards <br /> becoming the guitarist
                  you've always dreamed of! 🎶
                </p>
                <div className="pt-6">
                  
                    <button onClick={checkout} className="text-white py-3 rounded-2xl bg-blue-800 hover:bg-indigo-900 transition-all duration-300 ease-in px-6">
                      Join Now!
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
          {/* Another Process Starts From Here */}
          <div className="lg:hidden flex justify-around items-center w-full h-full pt-24 flex-wrap overflow-hidden">
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[40vw] h-full bg-black ">
              <Image
                className="bg-cover object-cover"
                src={"/guitar.jpg"}
                alt="Guitar"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h1 className="text-white font-bold md:text-xl sm:text-lg text-xl text-center">
                Master the Guitar: Your Musical <br /> Journey Starts Here!
              </h1>
              <br />
              <p className="text-base px-10">
                🎸 Unlock your musical potential with our engaging guitar course!
                Whether you're a beginner picking up a guitar for the first time
                or an intermediate player looking to refine your skills, our
                step-by-step lessons are designed to make learning fun and easy.
                With expert guidance, interactive exercises, and the chance to
                play your favorite songs, you'll be strumming with confidence in
                no time. Join now and take the first step towards becoming the
                guitarist you've always dreamed of! 🎶
              </p>
              <div className="flex justify-center items-center">
                <button onClick={checkout} className="text-white py-3 rounded-2xl bg-blue-800 hover:bg-indigo-900 transition-all duration-300 ease-in px-6">
                  Join Now!
                </button>
                </div>
  
            </div>
          </div>
        </SignedIn>
      ) : (
        <div className="flex justify-center items-center">
          {/* <h1 className="text-3xl">Your Page has been closed</h1> */}
          {/* <Link href={'/'}/> */}
          <Home/>
        </div>
      )}
      <SignedOut>
        <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
          <SignIn routing="hash" />
        </div>
      </SignedOut>
    </>
  );
};

export default Page;