import ProgramCourses from "../../components/ProgramPage/ProgramCourses/ProgramCourses";
import ProgramHeader from "../../components/ProgramPage/ProgramHeader/ProgramHeader";
import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import HomeWhyMain from "../../components/HomePage/HomeWhy/HomeWhyMain";
import UniversitiesFees from "@/components/HomePage/UniversitiesFees/UniversitiesFees";
export const metadata = {
  title: "Online MBA Programs for Working Professional at Affordable Fees",
  description:
    " Advance your career with Online MBA Programs for Working Professionals — flexible, industry-relevant, and affordable for your career growth.",
  alternates: {
    canonical:
      "https://onlinembaadmission.co.in/online-mba-programs-for-working-professionals",
  },
};
export default function Programs() {
  return (
    <div>
      <ProgramHeader />
      <ProgramCourses />
      <UniversitiesFees />
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhyMain />
    </div>
  );
}
