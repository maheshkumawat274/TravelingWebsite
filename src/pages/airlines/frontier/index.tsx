import AirlinesServices from "../../../components/airlines/AirlineServices"
import ContactAirlines from "../../../components/airlines/ContactAirlines"
import FlightDeals from "../../../components/airlines/frontier/Flightdeals"
import FrontierBookingGuide from "../../../components/airlines/frontier/FrontierBookingGuide"
import FrontierTop from "../../../components/airlines/frontier/FrontierTop"


const FrontierPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <FrontierTop/>
      <FlightDeals/>
      <AirlinesServices/>
      <ContactAirlines/>
      <FrontierBookingGuide/>
     </div>
    </>
  )
}

export default FrontierPage