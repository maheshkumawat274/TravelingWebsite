
import AirlinesServices from '../../../components/airlines/AirlineServices'
import ContactAirlines from '../../../components/airlines/ContactAirlines'
import SouthwestFlightsGuide from '../../../components/airlines/southwest/SouthwestBookingGuide'
import SouthwestConclusion from '../../../components/airlines/southwest/SouthwestConclusion'
import SouthwestDeals from '../../../components/airlines/southwest/SouthwestDeals'
import SouthwestTop from '../../../components/airlines/southwest/SouthwestTop'

const SouthwestPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <SouthwestTop/>
      <SouthwestDeals/>
      <AirlinesServices/>
      <ContactAirlines/>
      <SouthwestFlightsGuide/>
      <SouthwestConclusion/>
     </div>
    </>
  )
}

export default SouthwestPage