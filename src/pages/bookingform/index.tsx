
import BookingProcess from '../../components/bookingform/BookingProcess'
import ContactInfo from '../../components/contact/ContactSection'
import ContactTop from '../../components/contact/ContactTop'

const BookingProcessPage = () => {
  return (
    <>
     <div className='mt-14 md:mt-22'>
      <ContactTop/>
      <BookingProcess/>
      <ContactInfo/>
     </div>
    </>
  )
}

export default BookingProcessPage