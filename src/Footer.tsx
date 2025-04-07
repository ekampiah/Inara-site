import { ActionIcon, Button, List, Text, TextInput } from "@mantine/core";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiteLinks } from "./components/NavBar";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-[#9f300e] p-5 text-white text-center flex flex-col gap-5">
      <section className="flex flex-row justify-between">
        <div className="flex flex-col text-center items-center gap-5">
          <Link to="/" className="flex items-center">
            <img
              src="./assets/logo.png"
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
        <div>
          <List>
            {SiteLinks.map((link) => (
              <List.Item>
                <Link key={link.label} to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              </List.Item>
            ))}
          </List>
        </div>
        <form className="flex flex-col gap-2 items-end">
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
      <Text>
        Inara is where your healing begins — rooted in your culture, supported
        by tech, held by community.
      </Text>
    </div>
  );
}
