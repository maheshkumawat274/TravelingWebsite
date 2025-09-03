import { motion } from "framer-motion";
import { FaGlobeAsia, FaSuitcase, FaMapMarkerAlt, FaUmbrellaBeach, FaUserTie, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { PiAirplaneTilt } from "react-icons/pi";
const AdvantagesSection = () => {
  return (
    <section className="relative bg-white py-6 sm:py-16 px-4 overflow-hidden">
      {/* Floating background icons */}
      <motion.div
        className="absolute top-10 left-10 text-sky-400 text-4xl opacity-30"
        animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaGlobeAsia />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-orange-400 text-4xl opacity-30"
        animate={{ x: [0, 25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaSuitcase />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-20 text-green-500 text-3xl opacity-30"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaMapMarkerAlt />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/3 text-yellow-500 text-4xl opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <FaUmbrellaBeach />
      </motion.div>

      {/* Airplane flying across screen */}
   {/* Airplane flying diagonally across section */}
{/* Airplane flying diagonally across section */}
<motion.div
  className="absolute text-[#1A3E72] text-6xl opacity-70 z-50"
  initial={{ x: -1, y: 400 }}   // left-bottom ke thoda bahar se start
  animate={{ x: 1200, y: -200 }}  // right-top ke thoda bahar chale jaaye
  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
>
  <PiAirplaneTilt className="rotate-12" />  {/* halka tilt diya */}
</motion.div>





      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-[#1A3E72] font-semibold italic">Why Choose Us</h3>
          <h2 className="text-4xl font-bold mb-6 text-gray-700">What are our Advantages</h2>
          <p className="text-gray-600">
            There are numerous versions of placeholder text, yet most have undergone modifications.
          </p>

           <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <FaUserTie className="text-[#1A3E72] text-xl mt-1" />
              <div>
                <span className="text-[#1A3E72] font-bold">Professional Assistance</span>
                <p className="text-gray-600 text-sm">
                  Knowledgeable local guides reveal cultural insights, historical stories, and hidden gems often overlooked by solo travelers.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaMoneyBillWave className="text-[#1A3E72] text-xl mt-1" />
              <div>
                <span className="text-[#1A3E72] font-bold">Affordable Travel</span>
                <p className="text-gray-600 text-sm">
                  Joining group tours unlocks special discounts, helping you save on accommodations, transportation, and other travel necessities.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-[#1A3E72] text-xl mt-1" />
              <div>
                <span className="text-[#1A3E72] font-bold">Enhanced Safety</span>
                <p className="text-gray-600 text-sm">
                  Traveling in groups reduces potential risks when exploring unfamiliar or remote locations, ensuring peace of mind throughout your journey.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Images */}
        <div className="relative w-full px-10 flex justify-center items-center">
            {/* Large Image */}
          <img
            src="/imgs/advantage1.png"
            alt="Big"
            className="rounded-2xl shadow-lg w-3/4 relative left-18 md:left-10"
          />

          {/* Small Image (overlap) */}
          <img
            src="/imgs/67f76b196e4c61744268057.png"
            alt="Small"
            className="absolute left-0 md:-left-4 bottom-0 sm:bottom-4 w-1/2 rounded-2xl shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
