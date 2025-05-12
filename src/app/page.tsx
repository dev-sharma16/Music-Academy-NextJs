import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import { InfiniteScrollCardSection } from "@/components/InfiniteScrollCardSection";
import UpcomingWebniars from "@/components/UpcomingWebinars";
import Insstructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (

      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.2]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <InfiniteScrollCardSection/>
        <UpcomingWebniars/>
        <Insstructors/>
        <Footer/>
      </main>
  );
}
