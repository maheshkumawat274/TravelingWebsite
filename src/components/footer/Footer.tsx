import { Link } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#1A3E72] text-gray-800 py-12">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section */}
        

        {/* Bottom Section */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div>
            <h1 className="text-4xl font-bold text-indigo-100 mb-4">Reservation of flights</h1>
            <p className="text-md font-semibold text-gray-300">
              Reservation Of flights is a leading travel platform dedicated to helping you find the best deals on flights, hotels, and vacation packages worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-indigo-100 text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:underline"><Link to="/">Home</Link></li>
              <li className="hover:underline"><Link to="/aboutus">About Us</Link></li>
              <li className="hover:underline"><Link to="/services">Services</Link></li>
              <li className="hover:underline"><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-indigo-100 text-lg mb-4">Airlines</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:underline"><Link to='/airlines-f9'>Frontier Airlines</Link></li>
              <li className="hover:underline"><Link to='/airlines-sa'>Southwest Airlines</Link></li>
              <li className="hover:underline"><Link to='/airlines-da'>Delta Airlines</Link></li>
              <li className="hover:underline"><Link to='/airlines-al'>Alaska Airlines</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-indigo-100 text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              
              <li className="flex items-center gap-2">
                <MdEmail className="text-[#C5A15C] text-xl" />
                <a 
                  href="mailto:Info@wellglobalinc.com" 
                  className="hover:underline text-gray-300"
                >
                  info@reservationflights.com
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <MdPhone className="text-[#C5A15C] text-xl" />
                <a 
                  href="tel:+13017558105" 
                  className="hover:underline text-gray-400"
                >
                  +1 (301)-755-8105
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className="text-[#C5A15C] text-xl" />
                <a 
                  href="tel:+13017558202" 
                  className="hover:underline text-gray-400"
                >
                  +1(301)-755-8202
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Copyright */}
        
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-400 pt-6">
          <p>©Reservation of flights. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p className="hover:underline">
              <Link to='/termsofuse'>Terms of use</Link>
            </p>
            <p className="hover:underline">
            <Link to='/privacypolicy'>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
