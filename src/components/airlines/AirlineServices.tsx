import React from "react";
import { FaPhoneAlt} from "react-icons/fa";
import Card from "../card/Card";

const AirlinesServices: React.FC = () => {
  const infoData = [
    {
      title: " New Bookings",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // phone clickable\
      value: "abc-abc-abc"
    },
    {
      title: " Flight Changes ",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // email clickable
      value: "abc-abc-abc"
    },
    {
      title: "Flight Cancellations",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // optional
      value: "abc-abc-abc"
    },
    {
      title: "Add Infant to Booking",
      icon: <FaPhoneAlt className="w-5 h-5" />, 
      link: "tel:987689768968", // optional
      value: "abc-abc-abc"
    },
     {
      title: "AAdvantage® Support",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // optional
      value: "abc-abc-abc"
    },
    {
      title: "Seat Selection ",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // optional
      value: "abc-abc-abc"
    },
    {
      title: "Upgrade Options",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      link: "tel:987689768968", // optional
      value: "abc-abc-abc"
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-10 bg-white">
      {/* Section Title */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A3E72]">
          Our Flight Services
        </h2>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoData.map((item, index) => (
          <a key={index} href={item.link} className="block">
            <Card
              title={item.title} 
              icon={item.icon} 
              value={item.value}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AirlinesServices;
