import HomeHeader from "./../components/HomePage/HomeHeader/HomeHeader";
import HomeSpecialization from './../components/HomePage/HomeSpecialization/HomeSpecialization';
import UniversitiesMarquee from './../components/HomePage/UniversitiesMarquee/UniversitiesMarquee';
import HomeAcc from './../components/HomePage/HomeAcc/HomeAcc';
import HomeAbout from './../components/HomePage/HomeAbout/HomeAbout';
import HomeTestimonial from './../components/HomePage/HomeTestimonial/HomeTestimonial';
import HomeWhy from './../components/HomePage/HomeWhy/HomeWhy';
import HomeWhyMain from './../components/HomePage/HomeWhy/HomeWhyMain';

export default function Homepage() {
  return (
    <div>
      <HomeHeader />
      <HomeAcc/>
      <HomeSpecialization/>
      <UniversitiesMarquee/>
      <HomeWhyMain/>
      <HomeAbout/>
      <HomeTestimonial/>
    </div>
  );
}
