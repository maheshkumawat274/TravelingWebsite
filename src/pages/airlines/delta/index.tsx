
import AirlinesServices from '../../../components/airlines/AirlineServices'
import ContactAirlines from '../../../components/airlines/ContactAirlines'
import DeltaBookingGuide from '../../../components/airlines/delta/DeltaBookingGuide'
import DeltaConclusion from '../../../components/airlines/delta/DeltaConclusion'
import DeltaFlights from '../../../components/airlines/delta/DeltaFlieghtDeals'
import DeltaSkyMilesProgram from '../../../components/airlines/delta/DeltaSkyMilesProgram'
import DeltaTips from '../../../components/airlines/delta/DeltaTips'
import DeltaTop from '../../../components/airlines/delta/DeltaTop'

const DeltaPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <DeltaTop/>
      <DeltaFlights/>
      <AirlinesServices/>
      <ContactAirlines/>
      <DeltaBookingGuide/>
      <DeltaTips/>
      <DeltaSkyMilesProgram/>
      <DeltaConclusion/>
     </div>
    </>
  )
}

export default DeltaPage