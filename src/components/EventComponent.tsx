import { Paper, Title, Button, List, Badge } from "@mantine/core";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { isPast, parse } from "date-fns";

interface EventDetails {
  title: string;
  description?: string[];
  date: string;
  location: string;
  moreUrl?: string;
  moreText?: string;
  highlights?: string[];
}

export default function EventComponent({
  title,
  description,
  highlights,
  date,
  location,
  moreUrl,
  moreText,
}: EventDetails) {
  const parsedDate = parse(date, "MM-dd-yyyy", new Date());
  const isPastEvent = isPast(parsedDate);

  return (
    <Paper
      p="md"
      radius="xl"
      bg="rgba(255, 255, 255, 0.6)"
      className="w-full relative flex flex-col md:flex-row justify-center text-center max-h-[400px] overflow-y-auto"
    >
      {isPastEvent && (
        <div className="absolute -top-[-1] -left-[-1] z-10">
          <Badge variant="filled" radius="xl" size="sm" color="#EC9377">
            Past
          </Badge>
        </div>
      )}
      <section id="event-basics">
        <Title size="md"> {title}</Title>
        <div className="flex flex-row gap-4 justify-center items-center">
          <IoCalendarOutline />
          {date}
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <IoLocationOutline /> {location}
        </div>
      </section>
      {(description || highlights) && (
        <section id="event-details" className="text-left mt-5">
          {description && (
            <div className="text-sm text-gray-500 mt-2 text-justify">
              {description.map((desc, index) => (
                <p key={index} className="mb-5">
                  {desc}
                </p>
              ))}
            </div>
          )}
          {highlights && (
            <div className="flex flex-col gap-2 mt-5 mb-5">
              <Title className="text-center" size="sm">
                Highlights
              </Title>
              <List listStyleType="disc" className="text-sm text-gray-500">
                {highlights?.map((highlight, index) => (
                  <List.Item key={index}>{highlight}</List.Item>
                ))}
              </List>
            </div>
          )}
        </section>
      )}
      <Button
        style={{ width: "fit-content" }}
        target={moreUrl?.startsWith("http") ? "_blank" : "_self"}
        to={moreUrl?.startsWith("/") ? moreUrl : `/${moreUrl}`}
        component={Link}
      >
        {moreText || "Learn More"}
      </Button>
    </Paper>
  );
}
