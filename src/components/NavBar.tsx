import { ActionIcon, Menu } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function NavBar() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/plans", label: "Plans" },
    { to: "", label: "Events and Experiences" },
    { to: "", label: "Join the Beta" },
  ];

  return (
    <nav className="flex flex-row justify-between items-center mr-5">
      <div>
        <Link to="/" className="flex items-center">
          <img
            src="./assets/logo.png"
            alt="Inara Logo"
            className="h-15 w-auto"
          />
        </Link>
      </div>
      <div className="hidden md:flex md:flex-row">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={classNames("px-5", {
              "active-link": location.pathname === link.to,
            })}
          >
            {link.label}
          </Link>
        ))}
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
