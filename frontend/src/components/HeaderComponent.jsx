import logo from "../assets/logo.svg";
import Button from "./ButtonComponent";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-[80px] w-full items-center px-8">
      <Link to="/" className="mr-auto block">
        <img src={logo} alt="Solar Wise logo" />
      </Link>

      <nav className="flex items-center gap-16">
        <ul id="primary-nav" className="flex items-center gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/solar-hub">Solar Hub</NavLink>
          </li>
          <li>
            <NavLink to="/assessment-tool">Assessment Tool</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
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
