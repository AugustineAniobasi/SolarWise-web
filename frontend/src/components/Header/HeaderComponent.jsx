import logo from "../../assets/logo.svg";
import Button from "../ButtonComponent";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header({ btnName }) {
 const navItems = [
   { to: "/", label: "Home" },
   { to: "/about-us", label: "About Us" },
   { to: "/solar-hub", label: "Solar Hub" },
   { to: "/assessment-tool", label: "Assessment Tool" },
   { to: "#register", label: "Register" },
 ];
  return (
    <header className="sticky top-0 z-[100] flex h-[80px] w-full items-center bg-white px-8">
      <Link to="/" className="mr-auto block">
        <img src={logo} alt="Solar Wise logo" />
      </Link>

      <nav className="flex items-center gap-16">
        <ul id="primary-nav" className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.to.startsWith("#") ? (
                <a href={item.to} className="link">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.to}
                  activeClassName="nav-link"
                  className="link"
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <ul id="secondary-nav" className="flex items-center gap-2">
          <li>
            <Button type="primary" link="sign-in">
              Sign in
            </Button>
          </li>
          <li>
            <Button type="secondary" link="sign-up">
              {btnName || "Sign up-It's free"}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
