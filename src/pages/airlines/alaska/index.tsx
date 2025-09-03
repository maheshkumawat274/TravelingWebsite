import AirlinesServices from "../../../components/airlines/AirlineServices"
import AlaskaBookingInfo from "../../../components/airlines/alaska/AlaskaBookingsInfo"
import AlaskaConclusion from "../../../components/airlines/alaska/AlaskaConclusion"
import AlaskaFareOptions from "../../../components/airlines/alaska/AlaskaFareOptions"
import AlaskaFlightDeals from "../../../components/airlines/alaska/AlaskaFlightDeals"
import BookFlightsGuide from "../../../components/airlines/alaska/AlaskaFlightGuide"
import AlaskaPartnership from "../../../components/airlines/alaska/AlaskaPartnership"
import AlaskaTipsAndLoyalty from "../../../components/airlines/alaska/AlaskaTipsAndLoyaltyg"
import AlaskaTop from "../../../components/airlines/alaska/AlaskaTop"
import ContactAirlines from "../../../components/airlines/ContactAirlines"

const AlaskaPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <AlaskaTop/>
      <AlaskaFlightDeals/>
      <AirlinesServices/>
      <ContactAirlines/>
      <BookFlightsGuide/>
      <AlaskaFareOptions/>
      <AlaskaBookingInfo/>
      <AlaskaPartnership/>
      <AlaskaTipsAndLoyalty/>
      <AlaskaConclusion/>
     </div>
    </>
  )
}

export default AlaskaPage