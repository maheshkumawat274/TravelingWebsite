
import AirlinesServices from '../../../components/airlines/AirlineServices'
import ContactAirlines from '../../../components/airlines/ContactAirlines'
import DeltaFlights from '../../../components/airlines/delta/DeltaFlieghtDeals'
import DeltaTop from '../../../components/airlines/delta/DeltaTop'

const DeltaPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <DeltaTop/>
      <DeltaFlights/>
      <AirlinesServices/>
      <ContactAirlines/>
     </div>
    </>
  )
}

export default DeltaPage