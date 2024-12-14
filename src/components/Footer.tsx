import React from 'react'
import Link from 'next/link'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4 sm:px-6 lg:px-8'>
        <div>
            <h1 className='text-2xl flex justify-center items-center sm:text-3xl lg:text-4xl font-bold text-gray-100'>About Us</h1>
            <p className='text-xs px-4 md:px-0 sm:text-sm lg:text-xl text-gray-400'>We are passionate about empowering musicians to unlock their full potential. From mastering instruments to perfecting live performances, we provide the tools, guidance, and inspiration to bring your musical dreams to life.</p>
        </div>
        <div className='flex flex-col px-4 sm:px-0'>
            <h1 className='text-sm sm:text-xl lg:text-2xl font-bold'>Quick Links</h1>
            <div className='sm:pl-8 pl-4 pt-4 flex flex-col gap-4'>
                <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={'/'}>Home</Link>
                <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={'/'}>About</Link>
                <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={'/FeaturedCourses'}>Courses</Link>
                <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={'/'}>ContactUS</Link>
            </div>
        </div>
        <div>
          <h1 className='text-sm sm:text-xl lg:text-2xl font-bold'>Follow US</h1>
          <div className='mt-4 flex items-center gap-6'>
            <Link href={"#"}>
          <MdFacebook className='text-2xl sm:text-3xl lg:text-4xl text-blue-700 hover:scale-110 transition-all duration-300 ease-in'/>
          </Link>
            <Link href={"#"}>
            <FaTwitter className='text-2xl sm:text-3xl lg:text-4xl text-indigo-700 hover:scale-110 transition-all duration-300 ease-in' />
          </Link>
            <Link href={"#"}>
            <FaInstagram className='text-2xl sm:text-3xl lg:text-4xl text-orange-700 hover:scale-110 transition-all duration-300 ease-in' />
          </Link>
          </div>
        </div>
        <div className=''>
          <h1 className='text-sm sm:text-xl lg:text-2xl font-bold'>Contact US</h1>
          <div className='flex flex-col mt-3'>
            <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={"/Contact"}>Contact</Link>
            <Link className='text-xs sm:text-sm lg:text-xl text-gray-400 hover:text-slate-300 transition-all duration-300 ease-in' href={"#"}>nizamaniqaiserkhan323@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
