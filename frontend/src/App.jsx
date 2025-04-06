import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/BannerComponent";
import Header from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import SolarHub from "./pages/SolarHub/SolarHub";
import AssessmentTool from "./pages/AssessmentToolPage/AssessmentTool";

function App() {
  return (
    <Router>
      <Banner />
      <Header btnName="Sign up as a Vendor" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solar-hub" element={<SolarHub />} />
          <Route path="/assessment-tool" element={<AssessmentTool />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
