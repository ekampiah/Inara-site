import { Title, Text, Button, List, ThemeIcon } from "@mantine/core";
import { RiStarSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function JoinBeta() {
  return (
    <section id="join-beta" className="flex flex-col p-5 gap-1 w-full">
      <Title size="xl" className="text-center">
        Be the first to <span className="text-[#EC9377]"> heal </span>with{" "}
        <span className="text-[#EC9377]">Inara</span>
      </Title>
      <Text className="text-center">
        We're building something powerful — and personal. As a beta user, you'll
        shape the future of healing for our communities.
      </Text>
      <section id="beta-benefits" className="my-10 gap-5 flex flex-col">
        <Title size="lg">As a beta user, you will get:</Title>
        <List
          icon={
            <ThemeIcon radius="xl">
              <RiStarSLine />
            </ThemeIcon>
          }
          className="flex flex-col gap-3"
        >
          <List.Item>Early access to the app</List.Item>
          <List.Item>Free 30-day healing plan</List.Item>
          <List.Item>Invitation to our online user community</List.Item>
          <List.Item>Entry to monthly giveaways + expert sessions</List.Item>
        </List>
        <Button
          component={Link}
          to="https://docs.google.com/forms/d/1pZVGCz8lp8UXP7bwcNhCuqnZmIKT_lWUPvQ0lpBPst0/viewform?edit_requested=true"
          target="_blank"
          style={{ width: "fit-content" }}
        >
          Sign up for beta
        </Button>
      </section>
      <section id="donate" className="my-10 gap-5 flex flex-col">
        <Title size="lg">Support our mission</Title>
        <Text>
          Your donation will help us build Inara and support our mission to make
          healing accessible to all.
        </Text>
        <Button
          component={Link}
          to="https://www.gofundme.com/f/inara-wellness"
          target="_blank"
          style={{ width: "fit-content" }}
        >
          Donate
        </Button>
      </section>
    </section>
  );
}
