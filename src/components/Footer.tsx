import { ActionIcon, Button, List, Text, TextInput } from "@mantine/core";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiteLinks } from "./NavBar";
import { Link } from "react-router-dom";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (to: string, e?: React.MouseEvent) => void;
}) {
  return (
    <div className="bottom-0 w-full bg-[#9f300e] p-5 text-white flex flex-col gap-5">
      <section className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-row gap-15 w-full justify-evenly ">
          <div className="flex flex-col text-center items-center gap-5">
            <Link to="/" className="flex items-center">
              <img
                src="./assets/images/logo.png"
                alt="Inara Logo"
                className="h-15 w-auto"
              />
            </Link>
            <div className="flex flex-row gap-5">
              <ActionIcon variant="white" radius="xl">
                <FaFacebook />
              </ActionIcon>
              <ActionIcon
                variant="white"
                radius="xl"
                component="a"
                target="_blank"
                href="https://www.instagram.com/inara.wellness?igsh=MWxjZnJ2ZDhxMXdjOA=="
              >
                <FaInstagram />
              </ActionIcon>
              <ActionIcon variant="white" radius="xl">
                <FaXTwitter />
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <List listStyleType="disc">
              {SiteLinks.map((link) => (
                <div>
                  {link.links ? (
                    <div className="flex flex-col gap-2">
                      <List.Item>
                        {link.label}
                        <List listStyleType="disc">
                          {link.links.map((sublink) => (
                            <List.Item key={sublink.label}>
                              <Link
                                key={sublink.label}
                                onClick={(e) =>
                                  onNavigate(`${link.to}${sublink.to}`, e)
                                }
                                to={`${link.to}${sublink.to}`}
                                className="text-white"
                              >
                                {sublink.label}
                              </Link>
                            </List.Item>
                          ))}
                        </List>
                      </List.Item>
                    </div>
                  ) : (
                    <List.Item>
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={(e) => onNavigate(link.to, e)}
                        className="text-white"
                      >
                        {link.label}
                      </Link>
                    </List.Item>
                  )}
                </div>
              ))}
            </List>
          </div>
        </div>
        <form className="flex flex-col gap-2 w-full md:w-1/2">
          <TextInput
            type="email"
            label="Receive affirmations, healing prompts, and early invites"
            placeholder="Enter your email"
            className="rounded-md"
          />
          <Button
            variant="white"
            type="submit"
            className="bg-white text-black p-2 rounded-md w-fit"
            style={{ width: "fit-content" }}
          >
            Subscribe
          </Button>
        </form>
      </section>
      <div className="flex flex-col gap-5 items-center text-center">
        <Text>
          Inara is where your healing begins — rooted in your culture, supported
          by tech, held by community.
        </Text>
      </div>
    </div>
  );
}
