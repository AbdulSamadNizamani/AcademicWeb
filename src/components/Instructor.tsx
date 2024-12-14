'use client'
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const Instructor = () => {
    const people = [
        {
          id: 1,
          name: "Elena Briggs",
          designation: "Vocal Coach",
          image:
            "/photo1.jpg",
        },
        {
          id: 2,
          name: "Marcus Reid",
          designation: "Guitar Instructor",
          image:
            "/photo2.jpg",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Drum Specialist",
          image:
            "/photo3.jpg",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "Piano Maestro",
          image:
            "/photo4.jpg",
        },
        {
          id: 5,
          name: "Dora",
          designation: "Music Theory Expert",
          image:
            "/photo5.jpg",
        },
        {
          id: 6,
          name: "Tyler Durden",
          designation: "Bass Guitar Instructor",
          image:
            "/photo6.jpg",
        },
      ];
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
        <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructor
