'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
import { useState } from 'react';
//Hyderation error
const UpcomingWebinars = () => {
    const [array, setArray] = useState(true)
    useEffect(()=>{
        if(!array==false)
            setArray(false)
    })
    const song = [
        {
            title: 'Live Performance Techniques',
            description: 'Enhance your live performance skills with experts tips and strategies.',
            slug: 'Live-Performance-Techniques',
            isFeatured: true,
        },
        {
            title: 'Mastering Stage Presence',
            description: 'Learn the secrets to captivate your audience and own the stage with confidence.',
            slug: 'Mastering-Stage-Presence',
            isFeatured: true,
        },
        {
            title: '"Perfecting Vocal Techniques',
            description: '"Develop powerful and versatile vocals with expert guidance and practical exercises.',
            slug: 'Perfecting-Vocal-Techniques',
            isFeatured: true,
        },
        {
            title: '"Instrumental Excellence',
            description: 'Refine your instrumental skills with advanced techniques and performance insights.',
            slug: 'Instrumental-Excellence',
            isFeatured: true,
        },
        {
            title: 'Building Audience Connection',
            description: 'Discover how to engage with your audience and create unforgettable live experiences.',
            slug: 'Building-Audience-Connection',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description: 'Unlock your creativity and craft memorable songs with proven songwriting strategies.',
            slug: 'The-Art-of-Songwriting',
            isFeatured: true,
        },
        
    ]
  return (
    <div className='p-12 bg-gray-900 w-full h-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
            <p className='mt-2 text-3xl leading-8 antialiased font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10 w-full h-full'>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={song.map(webinar=>(
        {
            title:webinar.title,
            description: webinar.description,
            link: `/${webinar.slug}`
        }
      ))} />
    </div>
        </div>
        <div className='mt-10 text-center'>
            <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View All Webinars</Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
