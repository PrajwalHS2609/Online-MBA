import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import OnlineMbaHeader from "../../components/OnlineMba/OnlineMbaHeader/OnlineMbaHeader";
import OnlineMbaUniversities from "../../components/OnlineMba/OnlineMbaUniversities/OnlineMbaUniversities";

export default function OnlineMba() {
  return (
    <div>
      <OnlineMbaHeader />
      <OnlineMbaUniversities />
      <HomeSpecialization />
      <UniversitiesMarquee />
      <HomeWhy />
    </div>
  );
}
