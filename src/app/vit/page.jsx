import UniversityHeader from "../../components/UniversityPages/UniversityHeader/UniversityHeader";
import VitAbout from "../../components/UniversityPages/VITPage/VitAbout";
import VitHighlights from "../../components/UniversityPages/VITPage/VitHighlights";
import VitKey from "../../components/UniversityPages/VITPage/VitKey";

export default function VitPage() {
  return (
    <div>
      <UniversityHeader />
      <VitAbout/>
      <VitKey/>
      <VitHighlights/>
    </div>
  );
}
