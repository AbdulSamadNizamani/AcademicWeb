"use client";
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { SignedIn,SignedOut, SignIn, SignInButton } from '@clerk/nextjs';
const Courses = () => {
    const courses = [
        {
            title: "Guitar Fundamental",
            description: "Learn the basics of playing guitar with our comprehensive beginners course",
            image: '/guitarplaying.jpg',
            button: 'Join Now!'
        },
        {
            title: "Piano Essentials",
            description: "Master the foundations of piano playing with our step-by-step beginner course",
            image: '/piano.jpg',
            button: 'Join Now!'
        },
        {
            title: "Yoga for Beginners",
            description: "Explore the basics of yoga and unlock the path to a healthier you",
           image: '/youga.jpg',
            button: 'Join Now!'
        },
        {
            title: "Digital Photography",
            description: "Learn to capture stunning photos with our beginner-friendly photography course",
            image: '/photography.avif',
            button: 'Join Now!'
        },
        {
            title: "Coding Basics",
            description: "Dive into programming with our simple and interactive coding lessons",
            image: '/coding.jpg',
            button: 'Join Now!'
        },
        {
            title: "Creative Writing Workshop",
            description: "Unleash your creativity and learn storytelling fundamentals with this course",
            image: '/writing.jpg',
            button: 'Join Now!'
        },
        {
            title: "Fitness Foundations",
            description: "Build a solid fitness routine and achieve your goals with our beginner course",
            image: '/fitness.jpg',
            button: 'Join Now!'
        },
        {
            title: "Public Speaking Confidence",
            description: "Conquer your fear of public speaking with our effective training program",
            image: '/publicspeaking.jpg',
            button: 'Join Now!'
        },
        {
            title: "Basic Drawing Skills",
            description: "Learn to draw with confidence through our beginner's art classes",
            image: '/drawing.jpg',
            button: 'Join Now!'
        },
        {
            title: "Meditation 101",
            description: "Discover the peace of mind and relaxation with our meditation basics course",
            image: '/mediator.jpg',
            button: 'Join Now!'
        },
    ]
  return (
    <>
    <SignedIn>
    <div className='min-h-screen pt-36 py-12 px-6'>
        <div className="relative w-full flex items-center justify-center">
        <Navbar />
        </div>
        <div>
      <h1 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold'>All Courses(10)</h1>
      </div>
      <div className='flex flex-wrap justify-around'>
        {
            courses.map((course,index)=>(
                <CardContainer key={index} className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            <div>
          <h1 className='sm:text-2xl text-xl lg:text-3xl  font-semibold text-center'>{course.title}</h1>
          <p className='text-lg sm:text-xl lg:text-2xl mt-4 font-thin'>{course.description}</p>
          <img className='mt-4' src={`${course.image}`} alt="" />
          <button type='submit' className='bg-white text-gray-700 py-1 px-6 rounded-lg mt-4 hover:bg-slate-300  transition-all duration-300 ease-in'>{course.button}</button>
          </div>
        </CardItem>
                    </CardBody>
                </CardContainer>
            ))
        }
        <Footer/>
      </div>
    </div>
    </SignedIn>
    <SignedOut>
        <div className='fixed top-0 left-0 w-[100%] h-[100%] bg-black flex justify-center items-center'>
        <SignIn routing='hash'/>
        </div>
    </SignedOut>
    </>
  )
}

export default Courses
