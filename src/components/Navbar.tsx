// 'use client'
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// const Navbar = ({ className }: { className?: string }) => {
//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 md:flex md:justify-around md:items-center md:w-full w-auto overflow-hidden", className)}>
//        <Menu setActive={setActive}>
//         <Link href={'/'}>
//         <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
//         </Link>
        
//         <MenuItem setActive={setActive} active={active} item="Courses">
//   <div className="relative group">
//     <span className="cursor-pointer">Courses</span>
//     <div className="absolute hidden group-hover:flex flex-col space-y-4 text-sm bg-white p-4 shadow-lg">
//       <HoveredLink href="/Courses">All Courses</HoveredLink>
//       <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
//       <HoveredLink href="/courses">Advanced Composition</HoveredLink>
//       <HoveredLink href="/courses">Songwriting</HoveredLink>
//       <HoveredLink href="/courses">Music Production</HoveredLink>
//     </div>
//   </div>
// </MenuItem>

//         <Link href={"/Contact"}>
//         <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
//         </Link>
//         <div className='flex w-32 justify-end gap-3'>
//                 <SignedIn>
//                     <UserButton/>
//                 </SignedIn>
//                 <SignedOut>
//                 <div className="bg-blue-800 px-4 text-xl rounded-2xl hover:bg-blue-900 transition-all duration-300 ease-in">
//                         {/* <SignInButton mode='modal'/> */}
//                         <SignInButton mode='modal'>Login</SignInButton>
                        
//                         </div>
                    
//                 </SignedOut>
//             </div>
//        </Menu>
//     </div>
//   )
// }

// export default Navbar
'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const bar = (()=>{
    setIsopen((prev)=>(!prev))
  })
  return (
      <div className=' sticky top-0 z-50'>
        <nav className='bg-gradient-to-tr from-purple-800 to-pink-800 w-[35vw] mt-8 h-10 z-50 rounded-lg  hidden lg:block'>
          <ul className='flex justify-around items-center w-full'>
            <li>
              <Link href={'/'} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Home</Link>
            </li>
            <li>
              <Link href={"/Courses"} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Courses</Link>
            </li>
            <li>
              <Link href={'/Contact'} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Contact</Link>
            </li>
            <li>
              <SignedIn>
                <UserButton/>
              </SignedIn>
              <SignedOut>
                <div className='bg-gradient-to-tr from-blue-800 to-yellow-700 px-6 text-xl text-white py-1 rounded-md'>
                <SignInButton mode='modal'>Login</SignInButton>
                </div>
              </SignedOut>
              </li>
          </ul>
        </nav>
        {/* Code For Mobile Screens */}
        <nav className='lg:hidden w-full overflow-hidden'>
          
          <div className='flex justify-between items-center gap-24 sm:gap-36 md:gap-52 flex-row-reverse w-full'>
            <button type='button' onClick={bar} className='bg-white'>
              <span className={`w-10 h-1 bg-white text-white absolute top-2 transition-all duration-500 ease-in ${isopen ? 'rotate-45 translate-y-1.5':'-translate-y-1.5'}`}></span>
              <span className={`w-10 h-1 bg-white text-white absolute top-4 transition-all duration-500 ease-in ${isopen?'opacity-0':'opacity-100'}`}></span>
              <span className={`w-10 h-1 bg-white text-white absolute top-6 transition-all duration-500 ease-in ${isopen?'-rotate-45 -translate-y-1.5':'translate-y-1.5'}`}></span>
              </button>
              <div>
              <SignedIn>
                <UserButton/>
              </SignedIn>
              <SignedOut>
                <div className='bg-gradient-to-tr from-blue-800 to-yellow-700 px-6 text-xl text-white py-1 rounded-md'>
                <SignInButton mode='modal'>Login</SignInButton>
                </div>
              </SignedOut>
              </div>
          
          
              </div>
          <ul className={`flex flex-col justify-around items-center w-full h-[100vh] ${isopen?'max-h-60':'max-h-0'} overflow-hidden`}>
            <li>
              <Link href={'/'} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Home</Link>
            </li>
            <li>
              <Link href={"/Courses"} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Courses</Link>
            </li>
            <li>
              <Link href={'/Contact'} className='text-2xl text-white transition-all duration-300 ease-in font-semibold hover:text-gray-400 cursor-pointer' >Contact</Link>
            </li>
            
          </ul>
        </nav>
      </div>  
  )
}

export default Navbar
