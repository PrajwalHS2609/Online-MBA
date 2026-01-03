import HomeSpecialization from "../../components/HomePage/HomeSpecialization/HomeSpecialization";
import HomeWhyMain from "../../components/HomePage/HomeWhy/HomeWhyMain";
import UniversitiesMarquee from "../../components/HomePage/UniversitiesMarquee/UniversitiesMarquee";
import OnlineMbaHeader from "../../components/OnlineMba/OnlineMbaHeader/OnlineMbaHeader";
import OnlineMbaUniversities from "../../components/OnlineMba/OnlineMbaUniversities/OnlineMbaUniversities";
import OnlineMbaFaq from "../../components/OnlineMba/OnlineMbaFaq/OnlineMbaFaq";
import OnlineMbaAbout from "../../components/OnlineMba/OnlineMbaAbout/OnlineMbaAbout";
import OnlineMbaReason from "../../components/OnlineMba/OnlineMbaReason/OnlineMbaReason";
import OnlineMbaProcess from "../../components/OnlineMba/OnlineMbaProcess/OnlineMbaProcess";
import OnlineMbaEligibility from "../../components/OnlineMba/OnlineMbaEligibility/OnlineMbaEligibility";
import OnlineMbaWhy from "../../components/OnlineMba/OnlineMbaWhy/OnlineMbaWhy";
import UniversitiesFees from "@/components/HomePage/UniversitiesFees/UniversitiesFees";
export const metadata = {
  title: "2026 Online MBA Course Admission | Online MBA Course at Lowest Fees",
  description:
    "Apply for 2026 Online MBA Course Admission! Enhance your career with flexible learning, expert faculty, and globally recognized business management skills.",
  alternates: {
    canonical: "https://onlinembaadmission.co.in/online-mba-course-admission",
  },
};

export default function OnlineMba() {
  return (
    <div>
      <OnlineMbaHeader />
      <OnlineMbaAbout />
      <OnlineMbaUniversities />
      <OnlineMbaReason />
      <UniversitiesFees />
      <OnlineMbaEligibility />
      <HomeSpecialization />
      <OnlineMbaProcess />
      <UniversitiesMarquee />
      <OnlineMbaWhy />
      <HomeWhyMain />
      <OnlineMbaFaq />
    </div>
  );
}
