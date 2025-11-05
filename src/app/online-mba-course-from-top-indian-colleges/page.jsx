import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import HomeWhyMain from "../../components/HomePage/HomeWhy/HomeWhyMain";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import TopUniversitiesCard from "../../components/TopUniversities/TopUniversitiesCard/TopUniversitiesCard";
import TopUniversitiesHeader from "../../components/TopUniversities/TopUniversitiesHeader/TopUniversitiesHeader";
export const metadata = {
  title:"Online MBA Course Admission from Top Indian Colleges ",
  description:
    "Apply for Online MBA Course Admission from Top Indian Colleges — flexible, affordable, and designed for professionals aiming for career growth.",
  canonical: "https://onlinembaadmission.co.in/online-mba-course-from-top-indian-colleges",
  keywords: [],
}
export default function TopUniversities() {
  return (
    <div>
      <TopUniversitiesHeader />
      <TopUniversitiesCard/>
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhyMain />
    </div>
  );
}
