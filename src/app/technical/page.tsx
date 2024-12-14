"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <>
    <SignedIn>
      <div className="hidden lg:block overflow-hidden">
        <div className="flex justify-around items-center w-full h-full pt-32 flex-wrap ">
          <PinContainer
            className="hidden lg:block"
            title="Advance Vocal Techniques"
            href="/Courses"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-[40vw] h-full bg-black ">
              <Image
                className=" bg-cover object-cover"
                src={"/computerskill.webp"}
                alt="Web COurse"
                width={1000}
                height={1000}
              />
            </div>
          </PinContainer>
          <div className=" hidden lg:block">
            <h1 className="text-white font-bold md:text-xl sm:text-lg text-xs">
            Unlock Your Voice: A Comprehensive Course in Vocal Techniques
            </h1>
            <br />
            <p>
              🎸 The Vocal Techniques Course is designed to enhance your
              understanding and <br /> of mastery vocal performance, whether for
              singing, speaking, or public presentation. <br /> his course
              provides foundational knowledge and practical skills for
              developing <br /> vocal strength, clarity, and versatility.
              Through interactive lessons and guided, <br /> exercises,
              participants will explore the mechanics of the voice, breathing{" "}
              <br /> techniques, resonance, articulation, and emotional
              expression. <br />{" "}
            </p>
            <div className="pt-6">
              <Link href={"#"}>
                <button className="text-white py-3 rounded-2xl bg-blue-800 hover:bg-indigo-900 transition-all duration-300 ease-in px-6">
                  Join Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Another Procees Starts From Here */}
      <div className=" lg:hidden flex justify-around items-center w-full h-full pt-24 flex-wrap overflow-hidden">
        <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-[40vw] h-full bg-black ">
          <Image
            className=" bg-cover object-cover"
            src={"/guitar.jpg"}
            alt="Guitar"
            width={1000}
            height={1000}
          />
        </div>
        <div className="">
          <h1 className="text-white font-bold md:text-xl sm:text-lg text-xl text-center">
          Unlock Your Voice: A Comprehensive <br />Course in Vocal Techniques!
          </h1>
          <br />
          <p className="text-base px-10">
            The Vocal Techniques Course is designed to enhance your
            understanding and mastery of vocal performance, whether for singing,
            speaking, or public presentation. This course provides foundational
            knowledge and practical skills for developing vocal strength,
            clarity, and versatility. Through interactive lessons and guided
            exercises, participants will explore the mechanics of the voice,
            breathing techniques, resonance, articulation, and emotional
            expression.
          </p>
          <Link href={"#"} className="flex justify-center items-center pt-4">
            <button className="text-white py-3 rounded-2xl bg-blue-800 hover:bg-indigo-900 transition-all duration-300 ease-in px-6">
              Join Now!
            </button>
          </Link>
        </div>
      </div>
      </SignedIn>
      <SignedOut>
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center">
          <SignIn routing="hash"/>
        </div>
      </SignedOut>
    </>
  );
};

export default page;
