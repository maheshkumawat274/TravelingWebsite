import ContactInfo from "../../components/contact/ContactSection"
import ContactTop from "../../components/contact/ContactTop"

const ContactPage = () => {
  return (
    <>
     <div className="mt-14 md:mt-22">
      <ContactTop/>
      <ContactInfo/>
     </div>
    </>
  )
}

export default ContactPage