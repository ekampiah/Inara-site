import { Title, Text, Button, Paper } from "@mantine/core";
import FlipCard from "../components/FlipCard";
import EventComponent from "../components/EventComponent";
import { Link } from "react-router-dom";

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
        <Button
          size="md"
          style={{ width: "fit-content" }}
          component={Link}
          to="/join-beta"
        >
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
                finding peace, Inara walks with you.We're not just another
                wellness platform. Inara was built from the ground up to center
                cultural context, emotional safety, and real human connection —
                while still leveraging cutting-edge AI. That balance of tech and
                tenderness is what sets us apart.
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
              detail="Most wellness platforms speak to a general audience. Inara speaks to people with specific lived experiences — whether you're navigating the weight of generational expectations, code-switching at work, or unlearning shame tied to your spirituality. We honor the intersection of identity, emotional wellbeing, and culture with content and AI messaging that reflects that."
            />
            <FlipCard
              imageSrc="./assets/flowing-mountain.png"
              caption="Self-paced mental health plans"
              detail="Inara's AI isn't just about efficiency — it's about empathy. Our onboarding is designed to understand not just what you're going through, but who you are. From that, it generates a personalized 30-day wellness plan tailored to your emotional state, goals, and lifestyle — evolving with you over time."
            />
            <FlipCard
              imageSrc="./assets/male-coach.png"
              caption="Live support from trained coaches"
              detail="We know that sometimes, wellness needs a voice you can feel. That's why we offer expert-led live workshops on topics like boundaries, self-worth, and grief. Real-time coaching sessions for deeper reflection. Reflection Calls that pair real-life insight with AI-supported progress. We're building a model where technology supports you, not replaces connection."
            />
          </div>
        </section>
      </section>
      <section id="events" className="flex flex-col p-10 gap-5 items-center">
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
