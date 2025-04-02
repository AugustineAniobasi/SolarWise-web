import logo from "../../assets/logo-white.svg";
import fb from "../../assets/icons/fb-icon.svg";
import ig from "../../assets/icons/ig-icon.svg";
import x from "../../assets/icons/x-icon.svg";
import yt from "../../assets/icons/yt-icon.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-700 rounded-t-[3rem] text-white">
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between">
          <div className="max-w-sm text-left">
            <Link to="/" className="block">
              <img src={logo} alt="Solar Wise logo" />
            </Link>
            <p className="mt-5">
              SolarWise is more than just a platform—it’s a movement.
            </p>
          </div>
          <div className="flex gap-14">
            <ul className="footer-nav">
              <li>Company</li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>

            <ul className="footer-nav">
              <li>Other Links</li>
              <li>
                <a href="#calculator">Solar Calculator</a>
              </li>
              <li>
                <a href="#hub">Solar Hub</a>
              </li>
              <li>
                <a href="#vendors">Vendors</a>
              </li>
            </ul>

            <ul className="footer-nav">
              <li>Legal</li>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#cookies">Cookies Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6 p-2">
          <div className="bg-primary-100 h-[1px]"></div>
        </div>

        <div className="flex justify-between">
          <small>&copy; 2025 Solar Wise. All rights reserved</small>

          <div className="social-link flex items-center gap-2.5">
            <a href="#facebook">
              <img src={fb} alt="" />
            </a>
            <a href="#instagram">
              <img src={ig} alt="" />
            </a>
            <a href="#twitter">
              <img src={x} alt="" />
            </a>
            <a href="#youtube">
              <img src={yt} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
