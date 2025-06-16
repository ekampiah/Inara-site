import { Badge, Card, Group, Image, Text, Title } from "@mantine/core";
import { isSameMonth } from "date-fns";
import { useNavigate } from "react-router-dom";
import { InaraEvent } from "../event";
import RootedByHand from "./events/RootedByHand";

export const events: InaraEvent[] = [
  {
    id: 1,
    title: "Rooted: A Midseason Healing Circle",
    subtitle: "A quiet pause between blooms",
    date: "2025-06-22",
    location: "candle making room",
    description:
      "This intimate gathering (10 guests max) is for the ones in between — no longer who they were, not yet who they’re becoming. Through gentle breathwork, reflection prompts, and a candle-making experience, you’ll reconnect with your intentions and restore your emotional soil.",
    thumbnail: "./assets/gallery/pnb-la/img_5.jpg",
    detailsComponent: <div></div>,
    hidden: true,
  },
  {
    id: 2,
    title: "Rooted by Hand",
    subtitle: "A Clay & Reflection Experience by Inara",
    date: "2025-06-23",
    location: "In-person, New York City",
    description:
      "A weekend retreat focusing on the integration of faith and mental wellness practices.",
    thumbnail: "./assets/thumbnails/rooted-by-hand.jpg",
    detailsComponent: <RootedByHand />,
  },
  {
    id: 3,
    title: "Bloom & Brunch - Summer Edition",
    subtitle:
      "A sacred celebration of returning to yourself - stronger, softer, and more whole",
    date: "2025-07-21",
    location: "Minneapolis",
    description:
      "This midsummer Bloom & Brunch experience invites you into joy, rest, and reconnection. Come as you are — and leave with clarity, community, and creative healing tools.",
    thumbnail: "./assets/gallery/pnb-la/img_1.jpg",
    detailsComponent: <div></div>,
    hidden: true,
  },
  {
    id: 4,
    title: "Rich Aunties: Pilates and brunch",
    subtitle:
      "For the woman stepping into her voice, her power, and her truth.",
    date: "2025-08-24",
    location: "Minneapolis (in partnership with rich aunties and lululemon)",
    description:
      "This movement-forward edition of inaras series combines breath, embodiment, and boldness. Grounded in spiritual wellness and community sisterhood, this Pilates & Brunch experience is designed to awaken your body and align your spirit.",
    thumbnail: "./assets/gallery/pnb-la/img_4.jpg",
    detailsComponent: <div></div>,
    hidden: true,
  },
  {
    id: 5,
    title: "Bloom: The Becoming",
    subtitle:
      "An embodied arrival. This is the harvest of your healing — fully seen, fully rooted.",
    date: "2025-09-14",
    location: "Minneapolis",
    description:
      "An embodied arrival. This is the harvest of your healing — fully seen, fully rooted. The final Bloom & Brunch of the season honors the wholeness you’ve cultivated. With reflection calls, a vision board activation, and an Inara beta showcase, this experience bridges intention with embodiment.",
    thumbnail: "./assets/gallery/pnb-la/img_2.jpg",
    detailsComponent: <div></div>,
    hidden: true,
  },
  {
    id: 6,
    title: "Inara Beta Festival - Official Launch",
    date: "2025-10-04",
    location: "Minneapolis",
    description:
      "Celebrate the launch of the Inara app at our first-ever Beta Festival. This weekend experience brings our platform to life with themed wellness activations, expert panels, sacred spaces for stillness, and a community that knows the weight — and the beauty — of healing together.",
    thumbnail: "./assets/gallery/pnb-la/img_3.jpg",
    detailsComponent: <div></div>,
    hidden: true,
  },
];

export default function Events() {
  const navigate = useNavigate();
  const goToEventDetails = (index: number) => () => {
    navigate(`/events/${index}`);
  };

  return (
    <section id="events" className="flex flex-col p-5 gap-8 w-full">
      <section id="hero" className="text-center items-center mb-8">
        <Title size="xl" className="text-center">
          Where <span className="text-[#EC9377]"> healing </span>meets{" "}
          <span className="text-[#EC9377]"> life </span>
        </Title>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events
          ?.filter((event) => !event.hidden)
          .map((event, index) => (
            <Card
              shadow="sm"
              radius="md"
              withBorder
              onClick={goToEventDetails(event.id)}
              key={index}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <Card.Section>
                <Image
                  src={event.thumbnail}
                  h={400}
                  alt={`${event.title} thumbnail`}
                />
              </Card.Section>
              <Group justify="space-between" mt="md">
                <div className="flex flex-col">
                  <Text fw="bolder" size="lg">
                    {event.title}
                  </Text>
                  <Text size="sm">{event.subtitle}</Text>
                </div>
                {isSameMonth(new Date(event.date), new Date()) && (
                  <Badge color="pink">This month!</Badge>
                )}
              </Group>
            </Card>
          ))}
      </section>
    </section>
  );
}
