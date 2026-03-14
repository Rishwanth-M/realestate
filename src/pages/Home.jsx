import Header from "../components/Header/Header";
import Hero from "../components/Header/Hero";
import JobCategories from "../components/JobCategories/JobCategories";
import CityJobs from "../components/CityJobs/CityJobs";
import Stats from "../components/Stats/Stats";
import Recruiters from "../components/Recruiters/Recruiters";
import CityCards from "../components/CityCards/CityCards";
import RecruitmentServices from "../components/RecruitmentServices/RecruitmentServices";
import ExclusiveServices from "../components/ExclusiveServices/ExclusiveServices";
import CertificationPrograms from "../components/CertificationPrograms/CertificationPrograms";
import Footer from "../components/Footer/Footer";

function Home(){
  return(
    <>
      <Header/>
      <div className="hero-wrapper">
        <Hero/>
      </div>

      <JobCategories/>
      <CityJobs />
      <Stats />
      <Recruiters/>
      <CityCards />
      <RecruitmentServices/>
      <ExclusiveServices/>
      <CertificationPrograms/>
      <Footer />
    </>
  )
}

export default Home;