"use client";
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Master the art of music`;
const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='p-4 relative z-10 w-full text-center'>
      
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'><TextGenerateEffect  words={words} /></h1>  
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.</p>
        <div className='mt-4'>
            <Link href={"/Courses"}>
            <Button className='bg-white dark:bg-black text-black  dark:text-white border-neutral-200 dark:border-slate-800'>
            Explore courses 
            </Button>
            </Link>
        </div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </div>
  )
}

export default HeroSection
