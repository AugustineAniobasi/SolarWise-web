import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Banner from "./components/Banner/BannerComponent";
import Header from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import SolarHub from "./pages/SolarHub/SolarHub";
import AssessmentTool from "./pages/AssessmentToolPage/AssessmentTool";
import VendorPage from "./pages/VendorPage/vendorPage";
import SolarEnergyBlog from "./pages/Blogs/BlogOne";
import SolarPanelBlog from "./pages/Blogs/BlogTwo";
import SolarBatteryBlog from "./pages/Blogs/BlogThree";
import AboutSolarEnergyBlog from "./pages/Blogs/BlogFour";
import SolarPanelMaintainaceBlog from "./pages/Blogs/BlogFive";
import SolarPanelFAQBlog from "./pages/Blogs/BlogSix";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solar-hub" element={<SolarHub />} />
          <Route path="/assessment-tool" element={<AssessmentTool />} />
          <Route path="/vendor-page" element={<VendorPage />} />
        </Route>
        <Route path="/solar-energy-blog" element={<SolarEnergyBlog />} />
        <Route path="/solar-panel-blog" element={<SolarPanelBlog />} />
        <Route path="/solar-battery-blog" element={<SolarBatteryBlog />} />
        <Route path="/about-solar-blog" element={<AboutSolarEnergyBlog />} />
        <Route path="/solar-maintaince-blog" element={<SolarPanelMaintainaceBlog />} />
        <Route path="/solar-faq-blog" element={<SolarPanelFAQBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

function Layout() {
  return (
    <>
      <Banner />
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}
