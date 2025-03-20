import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/BannerComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SolarHub from "./pages/SolarHub";
import AssessmentTool from "./pages/AssessmentTool";

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solar-hub" element={<SolarHub />} />
        <Route path="/assessment-tool" element={<AssessmentTool />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
