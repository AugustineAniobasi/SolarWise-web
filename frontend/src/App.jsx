import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import Banner from "@/components/Banner/BannerComponent";
import Header from "@/components/Header/HeaderComponent";
import Footer from "@/components/Footer/FooterComponent";
import Home from "@/pages/HomePage/Home";
import AboutUs from "@/pages/AboutUsPage/AboutUs";
import SolarHub from "@/pages/SolarHub/SolarHub";
import AssessmentTool from "@/pages/AssessmentToolPage/AssessmentTool";
import VendorPage from "@/pages/VendorPage/vendorPage";
import RegisterPage from "./pages/Register";
// Layouts

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solar-hub" element={<SolarHub />} />
          <Route path="/assessment-tool" element={<AssessmentTool />} />
          <Route path="/vendor-page" element={<VendorPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
