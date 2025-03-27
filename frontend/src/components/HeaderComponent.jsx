import logo from "../assets/logo.svg";
import Button from "./ButtonComponent";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-[80px] w-full items-center px-8">
      <Link to="/" className="mr-auto block">
        <img src={logo} alt="Solar Wise logo" />
      </Link>

      <nav className="flex items-center gap-16">
        <ul id="primary-nav" className="flex items-center gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/solar-hub">Solar Hub</Link>
          </li>
          <li>
            <Link to="/assessment-tool">Assessment Tool</Link>
          </li>
          <li>
            <a href="#register">Register</a>
          </li>
        </ul>

        <ul id="secondary-nav" className="flex items-center gap-2">
          <li>
            <Button type="primary" link="sign-in">
              Sign in
            </Button>
          </li>
          <li>
            <Button type="secondary" link="sign-up">
              Sign up-It's free
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
