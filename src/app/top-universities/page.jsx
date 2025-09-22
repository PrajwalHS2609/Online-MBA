import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import HomeWhyMain from "../../components/HomePage/HomeWhy/HomeWhyMain";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import TopUniversitiesCard from "../../components/TopUniversities/TopUniversitiesCard/TopUniversitiesCard";
import TopUniversitiesHeader from "../../components/TopUniversities/TopUniversitiesHeader/TopUniversitiesHeader";

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
