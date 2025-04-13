import { Button, List, Text, ThemeIcon, Title } from "@mantine/core";
import { RiStarSLine } from "react-icons/ri";

export default function Partners() {
  return (
    <div className="flex flex-col p-5 gap-15 w-full">
      <section
        id="hero"
        className="flex flex-col p-5 gap-1 w-full text-center items-center"
      >
        <Title size="xl" className="text-center">
          <span className="text-[#EC9377]">Culturally</span> Rooted Mental
          Wellness
        </Title>
        <Title size="lg">
          Built for <span className="text-[#EC9377]">Community</span>, Scaled
          for <span className="text-[#EC9377]">Impact</span>
        </Title>
      </section>
      <section className="flex flex-col gap-5">
        <Title size="md">
          What if your university, company, or community space could offer
          personalized mental health support — not just access to a hotline?
        </Title>
        <Text>Inara is a culturally rooted wellness app that offers: </Text>
        <List
          icon={
            <ThemeIcon size="sm" radius="xl">
              <RiStarSLine />
            </ThemeIcon>
          }
          className="flex flex-col gap-3"
        >
          <List.Item>
            AI-generated mental health plans tailored to each user's cultural
            identity, goals, and emotional needs
          </List.Item>
          <List.Item>
            Guided reflections, meditations, and daily support from a
            trauma-aware and inclusive lens
          </List.Item>
          <List.Item>
            Live workshops and expert sessions led by practitioners your people
            can see themselves in
          </List.Item>
          <List.Item>
            Optional faith-affirming practices, spiritual integration, and
            seasonal rituals
          </List.Item>
        </List>
      </section>
      <section className="flex flex-col gap-5">
        <div>
          <Title size="lg">For Universities</Title>
          <Text>
            Offer support that actually reflects your students' lived
            experiences. From burnout and boundaries to identity and healing —
            Inara becomes their pocket-sized support system.
          </Text>
        </div>
        <div>
          <Title size="lg">For Startups & Organizations</Title>
          <Text>
            Prioritize real emotional wellness for your team. Reduce burnout.
            Create a culture of inner alignment and collective healing — without
            adding more pressure to HR.
          </Text>
        </div>
        <div>
          <Title size="lg">For Nonprofits & Mission-Led Institutions</Title>
          <Text>
            Use Inara to support survivors, youth, or staff with tools that
            combine science, spirit, and soul — all designed for people of color
            and culturally diverse groups.
          </Text>
        </div>
        <Title size="lg">Why does it all matter?</Title>
        <List
          icon={
            <ThemeIcon size="sm" radius="xl">
              <RiStarSLine />
            </ThemeIcon>
          }
          className="flex flex-col gap-3"
        >
          <List.Item>
            70% of culturally rooted communities report not feeling seen in
            traditional mental health tools
          </List.Item>
          <List.Item>
            Inara bridges that gap — with language, visuals, practices, and tech
            that actually resonates
          </List.Item>
          <List.Item>
            You don't need a full counseling center to make a deep impact — just
            the right partner.
          </List.Item>
        </List>
      </section>
      <section className="flex flex-col gap-5 w-fit">
        <Title size="lg">Ready to partner with us?</Title>
        <Button>Download the Inara B2B Partner Kit</Button>
        <Button>Book a discovery call with our founders</Button>
        <Button>Sign up to pilot Inara with Your community</Button>
      </section>
    </div>
  );
}
