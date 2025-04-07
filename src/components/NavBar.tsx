import { ActionIcon, Menu, NavLink } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export const SiteLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/plans", label: "Plans" },
  // { to: "/events", label: "Events and Experiences" },
  { to: "/join-beta", label: "Join the Beta" },
];
export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="flex flex-row justify-between items-center m-2">
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
        {SiteLinks.map((link) => (
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
            {SiteLinks.map((link) => (
              <Menu.Item
                key={link.label}
                className={classNames("px-5", {
                  "mobile-active-link": location.pathname === link.to,
                })}
              >
                <NavLink
                  href={link.to}
                  label={link.label}
                  active={location.pathname === link.to}
                />
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </div>
    </nav>
  );
}
