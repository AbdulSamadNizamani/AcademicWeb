"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
//Sticky Scroll Reveal
const content = [
    {
      title: "Collaborative Practice Sessions",
      description:
        "Join group practice sessions where students and instructors come together to make music. Collaborate with your peers, play in ensembles, and learn how to harmonize and perform as a team. Build confidence while creating something truly magical.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image src={'/course1.webp'} alt="Guitor" width={310} height={60}/>
        </div>
      ),
    },
    {
      title: "Immediate Instructor Feedback",
      description:
        "Experience live, one-on-one feedback from expert instructors during your lessons. Whether it’s fine-tuning your rhythm, improving technique, or hitting the right notes, get guidance in real time to elevate your musical skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image src={'/course2.jpg'} alt="Guitor" width={310} height={60}/>
        </div>
      ),
    },
    {
      title: "Personalized Progress Monitoring",
      description:
        "Keep track of your learning milestones with our progress tracking tools. From mastering scales to performing complete compositions, our music school helps you visualize your growth and stay motivated on your musical journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image src={'/course3.jpg'} alt="Guitor" width={310} height={60}/>
        </div>
      ),
    },
    {
      title: "Inspiration Around Every Corner",
      description:
        "Never lose your creative spark. Our music school offers workshops, masterclasses, and access to a diverse library of music to keep you inspired. Whether you’re exploring a new genre or refining your favorite piece, there’s always something new to discover.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image src={'/course4.jpg'} alt="Guitor" width={310} height={60}/>
        </div>
      ),
    },
  ];
  
const WhyChooseUs = () => {
    
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
