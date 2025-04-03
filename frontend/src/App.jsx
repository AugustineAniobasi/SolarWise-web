import { Routes, Route, Outlet } from "react-router-dom";
import Banner from "./components/BannerComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SolarHub from "./pages/SolarHub";
import AssessmentTool from "./pages/AssessmentTool";

// Layouts

function RootLayout() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solar-hub" element={<SolarHub />} />
          <Route path="/assessment-tool" element={<AssessmentTool />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
