
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import { GiTicket, GiAirBalloon} from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";

export default function AboutSection() {
  return (
    <section className="relative bg-[#fdfdfd] overflow-hidden px-4 py-6 sm:py-24">
      {/* Left Background Icons */}
      <div className="absolute left-0 top-20 h-[50vh] flex flex-col justify-between py-10">
        <motion.div
          className="w-20 h-20 opacity-40 text-blue-900 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <FaCamera />
        </motion.div>
      
        {/* Ticket Icon */}
        <motion.div
          className="w-20 h-20 relative left-14 opacity-40 text-amber-400 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <GiTicket />
        </motion.div>
      
        {/* Balloon Icon */}
        <motion.div
          className="w-20 h-20 opacity-40 text-cyan-600 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <GiAirBalloon/>
        </motion.div>
      </div>

      {/* right Background Icons */}
      <div className="absolute right-0 top-20 h-[50vh] flex flex-col justify-between py-10">
        <motion.div
          className="w-20 h-20 opacity-40 text-blue-900 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <FaCamera />
        </motion.div>
      
        {/* Ticket Icon */}
        <motion.div
          className="w-20 h-20 relative right-14 opacity-40 text-amber-400 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <GiTicket />
        </motion.div>
      
        {/* Balloon Icon */}
        <motion.div
          className="w-20 h-20 opacity-40 text-cyan-600 flex items-center justify-center text-5xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <GiAirBalloon/>
        </motion.div>
      </div>

      {/* Right Background Decorations */}
      <GiPalmTree className="absolute bottom-80 text-gray-200 md:bottom-0 left-90 w-40 h-40 opacity-80"/>
      <GiPalmTree className="absolute bottom-80 text-gray-200 md:bottom-0 right-20 w-40 h-40 opacity-80"/>
      <motion.img
        src="/imgs/ballon.png"
        alt="surf2"
        className="absolute bottom-20 right-0 w-11 h-15 object-cover"
        animate={{
          x: [0, -1400, -1000, 0, 100, 0],  // horizontal movement within section
          y: [0, -500, -100, -500, 0, 0],  // vertical movement within section
          rotate: [0, 45, -45, 0, 30, 0]  // optional rotation while moving
        }}
        transition={{
          duration: 60,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div>
          <p className="text-[#1A3E72] font-semibold italic">About Us</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Our Story</h2>
          <p className="text-gray-600 mb-6">
            Reservation of Flights is a global online travel platform committed to providing exceptional travel experiences. Our skilled team ensures seamless journeys by offering reliable guidance and tailored travel solutions. We provide competitive pricing, customized itineraries, round-the-clock customer support, and effortless booking options. No matter your destination, we’re dedicated to making your trip smooth, enjoyable, and unforgettable.
          </p>

        </div>

        {/* Right Images */}
        <div className="relative">
          {/* Large Image */}
          <img
            src="/imgs/67f796f87c9bd1744279288.png"
            alt="main"
            className="rounded-2xl w-3/4 shadow-lg relative left-10 sm:left-20"
          />

          {/* Top Small Image (Floating Animation) */}
          <motion.img
            src="/imgs/67f796f8741141744279288.png"
            alt="surf"
            className="absolute top-10 w-32 h-32 object-cover rounded-xl shadow-md"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Bottom Small Image (Floating Animation) */}
          <motion.img
            src="/imgs/67f796f89ec1d1744279288.png"
            alt="surf2"
            className="absolute bottom-10 right-0 lg:-right-10 w-32 h-32 object-cover rounded-xl shadow-md"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
