import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import HomeWhyMain from "../../components/HomePage/HomeWhy/HomeWhyMain";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";

export default function TopUniversities() {
  return (
    <div>
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhyMain />
    </div>
  );
}
