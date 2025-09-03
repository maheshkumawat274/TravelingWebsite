import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesPage from "./pages/services";
import ScrollTop from "./components/ScrollTop";
import BookingProcessPage from "./pages/bookingform";
import AlaskaPage from "./pages/airlines/alaska";
import DeltaPage from "./pages/airlines/delta";
import FrontierPage from "./pages/airlines/frontier";
import SouthwestPage from "./pages/airlines/southwest";
import CancelChangesPage from "./pages/cancelchanges";

function App() {
  return (
    <Router>
      <ScrollTop/>
      <Header/>
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/aboutus" element={<AboutPage />} />
       <Route path="/services" element={<ServicesPage/>}/>
       <Route path="/contactus" element={<ContactPage />} />
       <Route path="/search-flight" element={<BookingProcessPage/>}/>
       <Route path="/airlines-al" element={<AlaskaPage/>}/>
       <Route path="/airlines-da" element={<DeltaPage/>}/>
       <Route path="/airlines-f9" element={<FrontierPage/>}/>
       <Route path="/airlines-sa" element={<SouthwestPage/>}/>
       <Route path="/cancel-changes" element={<CancelChangesPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
