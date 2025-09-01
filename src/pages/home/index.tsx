import AboutSection from "../../components/about/AboutSection"
import AdvantagesSection from "../../components/home/AdvantageSection"
import Locations from "../../components/home/Destination"
import NumbersSection from "../../components/home/NumbersSection"
import HomeSearchSection from "../../components/home/SeachSection"
import TestimonialCarousel from "../../components/home/Testimonial"
import TravelGuide from "../../components/home/TravelGuide"
import PremiumServices from "../../components/services/ServicesSection"

const HomePage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <div>
        <HomeSearchSection/>
      </div>
      <AboutSection/>
      <PremiumServices/>
        <AdvantagesSection/>
        <Locations/>
        <TravelGuide/>
        <NumbersSection/>
        <TestimonialCarousel/>
        
     </div>
    </>
  )
}

export default HomePage