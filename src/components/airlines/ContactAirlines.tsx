// import React from "react";

// const ContactAirlines: React.FC = () => {
//   return (
//     <section className="w-full bg-white px-4 md:px-36 py-10">
//       <div className="w-full mx-auto bg-green-100 border-l-4 border-[#1A3E72] flex flex-col md:flex-row items-center md:items-stretch gap-6 p-4 rounded-lg">
        
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 flex items-center">
//           <p className="text-gray-800 text-sm md:text-base leading-relaxed">
//             <span className="font-bold">Call Us:</span>{" "}
//             <a
//               href="tel:+11234567890"
//               className="text-blue-600 hover:underline"
//             >
//               +1 (123) 456 7890
//             </a>{" "}
//             and connect directly with our dedicated support team for exclusive
//             flight discounts, personalized booking assistance, and complete
//             Mileage Plan® guidance. Our experts are available to help you find
//             the best fares, redeem rewards, and ensure a smooth travel experience
//             from start to finish.
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src="/imgs/flight.jpg"
//             alt="Support"
//             className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded-md shadow"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactAirlines;



const ContactAirlines = () => {
  return (
    <section className="pt-8 px-4 md:px-36 bg-white">
      <div className="container mx-auto bg-green-100 border-l-4 border-[#1A3E72]  grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Content Side */}
        <div className="px-2 flex justify-center items-center">
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">Call Us:</span>{" "}
            <a
              href="tel:+11234567890"
              className="text-blue-600 hover:underline"
            >
              +1 (123) 456 7890
            </a>{" "}
            and connect directly with our dedicated support team for exclusive
            flight discounts, personalized booking assistance, and complete
            Mileage Plan® guidance. Our experts are available to help you find
            the best fares, redeem rewards, and ensure a smooth travel experience
            from start to finish.
          </p>
        </div>

        {/* Image Side */}
        <div className="flex">
          <img
            src="/imgs/flight.jpg" // yaha apna image daalna
            alt="Support"
            className="w-full h-76 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactAirlines;
