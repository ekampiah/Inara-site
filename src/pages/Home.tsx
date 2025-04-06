import { Title, Text, Button, Paper } from "@mantine/core";
import FlipCard from "../components/FlipCard";
import EventComponent from "../components/EventComponent";

export default function Home() {
  return (
    <section id="content" className="flex flex-col h-full overflow-scroll">
      <section
        id="hero"
        className="flex flex-col p-5 gap-1 w-full text-center items-center"
      >
        <Title size="xl" className="text-center">
          <span className="text-[#EC9377]">Healing</span> rooted in your{" "}
          <span className="text-[#EC9377]">culture</span>
        </Title>
        <Text size="md">
          Inara offers self-paced wellness plans, AI coaching, and real-life
          support designed for culturally rooted communities.
        </Text>
        <Button size="md" style={{ width: "fit-content" }}>
          Join the Beta!
        </Button>
      </section>
      <section id="details" className="flex flex-col mt-[3rem] items-center">
        <section className="p-10 ">
          <Paper p="xl" radius="xl" bg="rgba(255, 255, 255, 0.3)">
            <div className="flex flex-col gap-5">
              <Title size="lg">What is Inara?</Title>
              <Text>
                Inara is a wellness app designed to support your healing with
                compassion, cultural awareness, and tech-powered coaching.
                Whether you're deconstructing trauma, setting boundaries, or
                finding peace, Inara walks with you.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </div>
          </Paper>
        </section>
        <section className="w-full flex flex-col p-10 gap-5 items-center">
          <Title size="lg">Why we're different</Title>
          <Title size="sm">click each card for more info...</Title>
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <FlipCard
              imageSrc="./assets/male-meditation.png"
              caption="Culturally aware AI guidance"
              detail="some detail"
            />
            <FlipCard
              imageSrc="./assets/flowing-mountain.png"
              caption="Self-paced mental health plans"
              detail="some detail"
            />
            <FlipCard
              imageSrc="./assets/male-coach.png"
              caption="Live support from trained coaches"
              detail="some detail"
            />
          </div>
        </section>
      </section>
      <section id="events" className="flex flex-col p-10 gap-5">
        <Title size="lg">Events</Title>
        <div className="flex flex-col md:flex-row gap-10 overflow-x-scroll">
          <EventComponent
            title="Bloom & Brunch"
            date="May 4, 2025"
            location="Minneapolis"
          />
          <EventComponent
            title="Bloom & Brunch"
            date="May 4, 2025"
            location="Minneapolis"
          />
          <EventComponent
            title="Bloom & Brunch"
            date="May 4, 2025"
            location="Minneapolis"
          />
        </div>
      </section>
    </section>
  );
}
