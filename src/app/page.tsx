import HomeHeader from "./../components/HomePage/HomeHeader/HomeHeader";
import HomeSpecialization from "./../components/HomePage/HomeSpecialization/HomeSpecialization";
import UniversitiesMarquee from "./../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import HomeAcc from "./../components/HomePage/HomeAcc/HomeAcc";
import HomeAbout from "./../components/HomePage/HomeAbout/HomeAbout";
import HomeTestimonial from "./../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhyMain from "./../components/HomePage/HomeWhy/HomeWhyMain";
import HomeContent from "./../components/HomePage/HomeContent";
import HomePartner from "./../components/HomePage/HomePartner/HomePartner";
import UniversitiesFees from './../components/HomePage/UniversitiesFees/UniversitiesFees';
import BlogPage from "@/components/BlogPage/BlogPage"
export const metadata = {
  title:"Online MBA Course from India’s Top University at Affordable Fees",
  description:
    "Advance your career with a flexible Online MBA Course designed for working professionals. Gain leadership, management, and strategic business skills anytime, anywhere.",
  canonical: "https://onlinembaadmission.co.in/",
  keywords: [],
}
export default function Homepage() {
  return (
    <div>
      <HomeHeader />
      <HomeAcc />
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhyMain />
      <HomeAbout />
      <UniversitiesFees/>
      <HomeTestimonial />
      <HomePartner />
      <BlogPage/>
      <HomeContent />
      
    </div>
  );
}
