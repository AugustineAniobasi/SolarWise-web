import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import Banner from "@/components/Banner/BannerComponent";
import Header from "@/components/Header/HeaderComponent";
import Footer from "@/components/Footer/FooterComponent";
import Home from "@/pages/HomePage/Home";
import AboutUs from "@/pages/AboutUsPage/AboutUs";
import SolarHub from "@/pages/SolarHub/SolarHub";
import AssessmentTool from "@/pages/AssessmentToolPage/AssessmentTool";
import VendorPage from "@/pages/VendorPage/vendorPage";
import SolarEnergyBlog from "@/pages/Blogs/BlogOne";
import SolarPanelBlog from "@/pages/Blogs/BlogTwo";
import SolarBatteryBlog from "@/pages/Blogs/BlogThree";
import AboutSolarEnergyBlog from "@/pages/Blogs/BlogFour";
import SolarPanelMaintainaceBlog from "@/pages/Blogs/BlogFive";
import SolarPanelFAQBlog from "@/pages/Blogs/BlogSix";

function App() {
  return (
      <Routes>
        <Route path="/" element={<RootLayout />}>
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
        <Route
          path="/solar-maintaince-blog"
          element={<SolarPanelMaintainaceBlog />}
        />
        <Route path="/solar-faq-blog" element={<SolarPanelFAQBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;

function RootLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signup";
  return (
    <>
      {!isAuthPage && <Banner />}
      {!isAuthPage && <Header />}
      <main className="wrapper">
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}

// 404 Page not found

function NotFound() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">404 | Page not found</h1>
        <Link
          to="/"
          className="bg-primary-500 mt-4 block w-fit rounded-lg p-[0.5rem_1rem] text-white"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
