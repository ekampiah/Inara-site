import { ActionIcon, Menu } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="flex flex-row justify-between items-center p-5">
      <div>
        <Link to="/" className="flex items-center">
          <img
            src="./assets/logo.png"
            alt="Inara Logo"
            className="h-15 w-auto"
          />
        </Link>
      </div>
      <div className="hidden md:flex md:flex-row gap-5 ">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/how-it-works"
          className={location.pathname === "/how-it-works" ? "active-link" : ""}
        >
          How it works
        </Link>
        <Link to={""}>Features and Plans</Link>
        <Link to={""}>Events and Experiences</Link>
        <Link to={""}>Join the Beta</Link>
      </div>
      <div className="md:hidden flex flex-row space-x-15">
        <Menu>
          <Menu.Target>
            <ActionIcon variant="default">
              <RxHamburgerMenu />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>How it works</Menu.Item>
            <Menu.Item>Features and Plans</Menu.Item>
            <Menu.Item>Events and Experiences</Menu.Item>
            <Menu.Item>Join the Beta</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );
}
