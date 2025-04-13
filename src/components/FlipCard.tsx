import { Card, Group, Image, Title, Text } from "@mantine/core";
import { isValidElement, ReactNode, useState } from "react";

interface CardState {
  imageSrc: string;
  caption: string;
  detail: string | ReactNode;
}

export default function FlipCard({ imageSrc, caption, detail }: CardState) {
  const [flipped, setFlipped] = useState<boolean>();
  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner ${flipped ? "rotate" : ""}`}>
        <div className="flip-card-front">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src={imageSrc} height={160} alt="card image" />
            </Card.Section>

            <Group justify="space-around" mt="md" mb="xs">
              <Title size="sm"> {caption}</Title>
            </Group>
          </Card>
        </div>
        <div className="flip-card-back h-full justify-center items-center flex overflow-y-auto">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            {isValidElement(detail) ? (
              detail
            ) : (
              <Text style={{ paddingTop: "2rem" }}>{detail}</Text>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
