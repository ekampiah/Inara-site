import { ActionIcon } from "@mantine/core";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bottom-0 h-[15vh] w-full bg-[#9f300e] text-white">
      <section className="flex flex-row space-x-5">
        <ActionIcon variant="default">
          <FaFacebook />
        </ActionIcon>
        <ActionIcon>
          <FaInstagram />
        </ActionIcon>
        <ActionIcon>
          <FaXTwitter />
        </ActionIcon>
      </section>
    </div>
  );
}
