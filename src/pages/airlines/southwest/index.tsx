
import AirlinesServices from '../../../components/airlines/AirlineServices'
import ContactAirlines from '../../../components/airlines/ContactAirlines'
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
     </div>
    </>
  )
}

export default SouthwestPage