import { Paper, Title, Button } from "@mantine/core";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface EventDetails {
  title: string;
  date: string;
  location: string;
  moreUrl?: string;
}

export default function EventComponent({
  title,
  date,
  location,
  moreUrl,
}: EventDetails) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center text-center">
      <Paper p="xl" radius="xl" bg="rgba(255, 255, 255, 0.6)">
        <Title size="md"> {title}</Title>
        <div className="flex flex-row gap-4 justify-center items-center">
          <IoCalendarOutline />
          {date}
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <IoLocationOutline /> {location}
        </div>
        <Button
          style={{ width: "fit-content" }}
          to={moreUrl || "/"}
          component={Link}
        >
          Learn more
        </Button>
      </Paper>
    </div>
  );
}
