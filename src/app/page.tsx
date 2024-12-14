import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] scroll-smooth w-[100%]">
      <div className="w-full flex items-center justify-center sticky top-0 z-50 bg-gradient-to-tr from-purple-800 to-pink-800 lg:bg-none overflow-hidden ">
        <Navbar />
        </div>
      <HeroSection  />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
