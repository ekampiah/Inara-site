import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mantine/core";
import { IoArrowBack } from "react-icons/io5";
import { events } from "./Events";

export default function EventDetails() {
  const { id } = useParams();
  console.log("Event ID:", id);
  if (!id) return;
  const event = events.filter((event) => event.id === parseInt(id))[0];
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-10 px-6 py-12 w-full h-full items-center">
      {event.detailsComponent}
      <Button onClick={() => navigate(-1)} variant="outline">
        <IoArrowBack /> Back
      </Button>
    </section>
  );
}
