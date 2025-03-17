import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex items-center h-[80px] w-full">
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
            <a
              href="#sign-in"
              className="text-primary-500 border-1 border-primary-500 rounded-lg font-semibold"
            >
              Sign in
            </a>
          </li>
          <li>
            <a
              href="#sign-up"
              className="text-neutral-50 border-1 border-primary-500 bg-primary-500 rounded-lg font-semibold hover:bg-primary-50 hover:text-primary-500 hover:border-primary-50 transition duration-300"
            >
              Sign up-It's free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
