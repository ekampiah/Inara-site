import { Button, List, Text, Title } from "@mantine/core";

export default function Coaches() {
  return (
    <div className="flex flex-col p-5 gap-15 w-full">
      <section id="hero" className="text-center items-center">
        <Title size="xl" className="text-center">
          Join the Inara Marketplace
        </Title>
        <Title size="lg" className="text-[#EC9377]">
          Where Your Healing Practice Meets Real Reach
        </Title>
      </section>
      <section className="flex flex-col gap-5">
        <Title>Premium Coaches Marketplace</Title>
        <Text>
          You've built a practice grounded in authenticity, culture, and care.
          Now imagine offering your services through a platform made for people
          who actually need and value your approach.
        </Text>
        <Text>
          Inara's Premium Coaches Marketplace is launching soon — and we're
          hand-selecting founding coaches, therapists, and facilitators who
          embody culturally rooted, spiritually aligned, and emotionally
          intelligent wellness.
        </Text>
        <Title size="md">As a Premium Coach, you can:</Title>
        <List listStyleType="disc">
          <List.Item>Offer 1:1 paid coaching sessions within the app</List.Item>
          <List.Item>
            Lead specialized group healing containers and challenges
          </List.Item>
          <List.Item>
            Monetize your practices, meditations, or courses via in-app
            purchases
          </List.Item>
          <List.Item>
            Be featured in AI-generated healing plans as a trusted expert
          </List.Item>
          <List.Item>
            Earn revenue while being part of something purpose-driven
          </List.Item>
        </List>
        <Text>
          This is more than a listing — it's an aligned ecosystem built with
          soul.
        </Text>
        <Button style={{ width: "fit-content" }}>
          Apply to Become a Premium Coach
        </Button>
      </section>
      <section className="flex flex-col gap-5">
        <Title size="lg">
          New to coaching and want to grow your practice with support?
        </Title>
        <Text>
          Inara is not just a platform — it's a learning ground. If you're
          passionate about healing, boundaries, self-worth, and community
          wellness but are still gaining experience, we invite you to apply to
          our In-House Coaching Track.
        </Text>
        <Title size="md">This is a guided opportunity to:</Title>
        <List listStyleType="disc">
          <List.Item>Support users through 1:1 Reflection Calls</List.Item>
          <List.Item>
            Receive feedback, mentorship, and templates from our lead wellness
            team
          </List.Item>
          <List.Item>
            Be featured in group workshops and learn facilitation through
            co-hosting
          </List.Item>
          <List.Item>
            Build your confidence, voice, and toolkit — without pressure
          </List.Item>
        </List>
        <Title size="md">This is ideal for:</Title>
        <List listStyleType="disc">
          <List.Item>
            Aspiring life coaches, peer supporters, therapists-in-training, or
            spiritual workers
          </List.Item>
          <List.Item>Wellness advocates from underserved communities</List.Item>
          <List.Item>
            Individuals who want hands-on experience within a heart-led team
          </List.Item>
        </List>
        <Text>
          Start here. Grow with us. Then launch into the Inara Marketplace when
          you're ready.
        </Text>
        <Button style={{ width: "fit-content" }}>
          Apply to In-House Coaching Track
        </Button>
      </section>
      <section className="flex flex-col gap-5">
        <Title size="lg">Still developing your practice?</Title>
        <Text>
          We welcome up-and-coming facilitators, wellness workers, and peer
          supporters too. Start by applying to our Coach Waitlist — and grow
          alongside us.
        </Text>
        <Button style={{ width: "fit-content" }}>
          Join the Coach Waitlist
        </Button>
      </section>
    </div>
  );
}
