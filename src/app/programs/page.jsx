import ProgramCourses from "../../components/ProgramPage/ProgramCourses/ProgramCourses";
import ProgramHeader from "../../components/ProgramPage/ProgramHeader/ProgramHeader";
import HomeSpecialization from "./../../components/HomePage/HomeSpecialization/HomeSpecialization";
import UniversitiesMarquee from './../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee';
import HomeWhyMain from './../../components/HomePage/HomeWhy/HomeWhyMain';

export default function Programs() {
  return (
    <div>
      <ProgramHeader />
      <ProgramCourses />
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhyMain />
    </div>
  );
}
