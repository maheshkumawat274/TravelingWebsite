import AboutSection from "../../components/about/AboutSection"
import AboutTop from "../../components/about/AboutTop"
import AdvantagesSection from "../../components/home/AdvantageSection"


const AboutPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <AboutTop/>
      <AboutSection/>
      <AdvantagesSection/>
     </div>
    </>
  )
}

export default AboutPage