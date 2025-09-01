import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import ContactCard from "./ContactCard";

const ContactInfo: React.FC = () => {
  const infoData = [
    {
      title: "Phone Number",
      value: "987689768968",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // phone clickable
    },
    {
      title: "Email Address",
      value: "support@reservatinofflights.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      link: "mailto:support@Reservatinofflights.com", // email clickable
    },
    {
      title: "Address",
      value: "123 Travel St, Suite 100",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      link: "#", // optional
    },
    {
      title: "Support Team",
      value: "24/7 hours",
      icon: <FaHeadset className="w-5 h-5" />,
      link: "#", // optional
    },
  ];

  return (
    <section className="py-6 sm:py-16 flex flex-col items-center w-full px-4 sm:px-10 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Get in Touch With Us
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Have a question about your booking, flight details, or travel assistance? 
          Our support team is available 24/7 to help you. Call us now and let’s connect!
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoData.map((item, index) => (
          <a key={index} href={item.link} className="block">
            <ContactCard 
              title={item.title} 
              value={item.value} 
              icon={item.icon} 
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
