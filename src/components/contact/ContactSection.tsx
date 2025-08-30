import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import ContactCard from "./ContactCard";

const ContactInfo: React.FC = () => {
  const infoData = [
    {
      title: "Phone Number",
      value: "987689768968",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968",  // phone clickable
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
    <section className="py-6 sm:py-16 flex justify-center w-full px-4 sm:px-10 bg-white">
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoData.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="block"
          >
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
