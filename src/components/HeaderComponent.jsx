import logo from "../assets/logo.svg";
import Button from "./ButtonComponent";

export default function Header() {
  return (
    <header className="flex items-center h-[80px] w-full px-8 ">
      <img src={logo} alt="Solar Wise logo" className="mr-auto" />
      <nav className="flex items-center gap-16">
        <ul id="primary-nav" className="flex items-center gap-2">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#solar-hub">Solar Hub</a>
          </li>
          <li>
            <a href="#assessment-tool">Assessment Tool</a>
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
