import Locations from "../../components/home/Destination"
import PremiumServices from "../../components/services/ServicesSection"
import ServicesTop from "../../components/services/ServicesTop"

const ServicesPage = () => {
  return (
    <> 
     <div className="mt-14 md:mt-22">
      <ServicesTop/>
      <PremiumServices/>
      <Locations/>
     </div>
    </>
  )
}

export default ServicesPage