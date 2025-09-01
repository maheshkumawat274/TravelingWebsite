import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesPage from "./pages/services";
import ScrollTop from "./components/ScrollTop";

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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
