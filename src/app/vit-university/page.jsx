import UniversityHeader from "../../components/UniversityPages/UniversityHeader/UniversityHeader";
import VitAbout from "../../components/UniversityPages/VITPage/VitAbout";
import VitHighlights from "../../components/UniversityPages/VITPage/VitHighlights";
import VitKey from "../../components/UniversityPages/VITPage/VitKey";
import VitProgramme from '../../components/UniversityPages/VITPage/VitProgramme';
import VitCurriculum from '../../components/UniversityPages/VITPage/VitCurriculum';
import VitAlumin from '../../components/UniversityPages/VITPage/VitAlumin';
import VitSupport from '../../components/UniversityPages/VITPage/VitSupport';
import VitContact from '../../components/UniversityPages/VITPage/VitContact';
import VitContent from './../../components/UniversityPages/VITPage/VitContent';

export default function VitPage() {
  return (
    <div>
      <UniversityHeader />
      <VitAbout/>
      <VitProgramme/>
      <VitKey/>
      <VitHighlights/>
      <VitCurriculum/>
      <VitAlumin/>
      <VitSupport/>
      <VitContact/>
      <VitContent/>
    </div>
  );
}
