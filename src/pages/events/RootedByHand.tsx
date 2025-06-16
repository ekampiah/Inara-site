import { Link } from "react-router-dom";
import { Button, Paper, Text, Title } from "@mantine/core";

export default function RootedByHand() {
  return (
    <section
      id="rooted-by-hand"
      className="flex flex-col gap-10 px-6 py-12 md:p-16 text-gray-800"
    >
      <div className="text-center flex flex-col gap-3">
        <Title size="xl" className="text-[#EC9377]">
          🌿 Rooted by Hand
        </Title>
        <Text size="lg">A Clay & Reflection Experience by Inara</Text>
        <Text className="italic text-sm text-gray-500">
          Limited to 10 guests &middot; June 23 (Monday) · 6:00 PM
        </Text>
      </div>

      <Paper
        shadow="md"
        p="xl"
        radius="xl"
        className="bg-white/70 backdrop-blur-md"
      >
        <div className="flex flex-col gap-8">
          <section>
            <Title size="lg" className="text-[#EC9377]">
              ✨ About the Experience
            </Title>
            <Text>
              This is where the journey lands. A soft ending. A soulful
              beginning. A return to the self you’ve been writing your way back
              to.
              <br />
              <br />
              <strong>Rooted by Hand</strong> is a ceremonial closing for
              Inara’s 30-Day Journaling Challenge and a featured gathering in
              our <em>Bloom Series</em>. Through hand-built clay forms,
              grounding rituals, and reflective journaling, this is a sacred
              space to express all that has bloomed within you.
            </Text>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              🖌 What to Expect
            </Title>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Grounding breathwork & stillness practice</li>
              <li>Guided journaling to reflect on your 30-day journey</li>
              <li>
                Hands-on clay work — intention bowls, story vessels, symbolic
                forms
              </li>
              <li>
                Closing circle with collective affirmation & gentle release
                ritual
              </li>
            </ul>
            <Text className="mt-2 text-sm italic">
              No art experience needed — just a willingness to be present. All
              materials provided.
            </Text>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              🌱 Why Clay?
            </Title>
            <Text>
              Because healing is a tactile process. Because the body remembers.
              Because creating with your hands is another way to write your
              truth.
            </Text>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              🌸 The Inara Bloom Series
            </Title>
            <Text>
              A seasonal collection of intentional experiences to support
              emotional rest, creative expression, and culturally rooted
              healing. Each gathering — from brunch to movement to clay —
              invites you to let go and let something new grow.
            </Text>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              📓 Journal Prompt Teasers
            </Title>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>“What did I reclaim during these 30 days?”</li>
              <li>“What part of me am I ready to shape with intention?”</li>
            </ul>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              🕯 What to Bring
            </Title>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A heart ready to release and renew</li>
              <li>Clothes you don’t mind getting messy</li>
              <li>Yourself, as you are</li>
            </ul>
          </section>

          <section>
            <Title size="md" className="text-[#EC9377]">
              🎁 Keepsake
            </Title>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Your hand-built clay piece</li>
              <li>A handwritten Inara affirmation</li>
            </ul>
          </section>

          <div className="text-center">
            <Button
              component={Link}
              to="/events"
              size="md"
              className="bg-[#EC9377] text-white hover:bg-[#ec8060] transition"
            >
              Reserve Your Spot
            </Button>
          </div>
        </div>
      </Paper>
    </section>
  );
}
