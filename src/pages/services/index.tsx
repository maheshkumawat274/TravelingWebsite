import Locations from "../../components/home/Destination"
import PremiumServices from "../../components/services/ServicesSection"

const ServicesPage = () => {
  return (
    <> 
     <div className="mt-22">
      <PremiumServices/>
      <Locations/>
     </div>
    </>
  )
}

export default ServicesPage