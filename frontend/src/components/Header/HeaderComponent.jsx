"use client";

import { MdMenu } from "react-icons/md";
import logo from "../../assets/logo.svg";
import Button from "../ButtonComponent";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState

export default function Header() {
  const [open, setOpen] = useState(false); // Add state for the sheet

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
        <img src={logo || "/placeholder.svg"} alt="Solar Wise logo" />
      </Link>

      <div className="flex items-center">
        {/* Mobile navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            {/* Replace Button with a simple button for testing */}
            <button className="flex items-center justify-center p-2 lg:hidden">
              <MdMenu className="h-6 w-6 cursor-pointer" />
              <span className="sr-only">Toggle header menu</span>
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-full max-w-xs">
            <HeaderNavLinks
              navItems={navItems}
              isMobile={true}
              closeSheet={() => setOpen(false)}
            />
          </SheetContent>
        </Sheet>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden lg:block">
          <HeaderNavLinks navItems={navItems} isMobile={false} />
        </div>
      </div>
    </header>
  );
}

function HeaderNavLinks({ navItems, isMobile, closeSheet }) {
  return (
    <nav
      className={`flex ${isMobile ? "w-full flex-col items-center gap-[2rem] pt-[6rem]" : "flex-row items-center gap-16"}`}
    >
      <ul
        id="primary-nav"
        className={`flex ${isMobile ? "mx-auto flex-col items-center justify-center gap-[2rem]" : "flex-row items-center gap-4"}`}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            {item.to.startsWith("#") ? (
              <a
                href={item.to}
                className="link"
                onClick={isMobile && closeSheet ? closeSheet : undefined}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-link link" : "link"
                }
                onClick={isMobile && closeSheet ? closeSheet : undefined}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <ul
        id="secondary-nav"
        className={`flex ${isMobile ? "flex-col gap-8" : "flex-row"} items-center gap-2`}
      >
        <li>
          <Button
            type="primary"
            link="sign-in"
            onClick={isMobile && closeSheet ? closeSheet : undefined}
          >
            Sign in
          </Button>
        </li>
        <li>
          <Button
            type="secondary"
            link="sign-up"
            onClick={isMobile && closeSheet ? closeSheet : undefined}
          >
            Sign up - It's free
          </Button>
        </li>
      </ul>
    </nav>
  );
}
