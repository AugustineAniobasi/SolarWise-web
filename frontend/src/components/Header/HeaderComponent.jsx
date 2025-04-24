import logo from "@/assets/logo.svg";
import { Menu, X } from "lucide-react";
import Button from "../ButtonComponent";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/solar-hub", label: "Solar Hub" },
  { to: "/assessment-tool", label: "Assessment Tool" },
];

const linkStyles = "cursor-pointer text-lg font-medium text-neutral-900";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between p-4 md:p-8">
      <img src={logo} alt="Solarwise logo" />

      <nav>
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} className={`${linkStyles}`}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative z-100 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {
          /* Mobile menu */
          isOpen && (
            <ul className="fixed inset-[0_0_0_30%] z-30 flex basis-full flex-col items-center justify-center gap-8 bg-white">
              <li>
                <NavLink to="/signup" className={`${linkStyles}`}>
                  Get Started
                </NavLink>
              </li>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.to} className={`${linkStyles}`}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )
        }
      </nav>

      <div className="hidden md:block">
        <Button type="secondary" link="/signup">
          Get Started
        </Button>
      </div>
    </header>
  );
}
