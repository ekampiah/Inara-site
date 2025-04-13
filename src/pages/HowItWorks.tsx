import { ActionIcon, Group, Paper, Stepper, Title } from "@mantine/core";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HowItWorks() {
  const [active, setActive] = useState<number>(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const steps = [
    {
      label: "Intake Quiz",
      description: "About you",
      content:
        "Tell us about your emotional needs, cultural background, and healing goals",
    },
    {
      label: "Personalized Plan",
      description: "Tailored to you",
      content:
        "Our AI crafts a 30-day plan with daily prompts, activities, and reflections tailored to your life and culture.",
    },
    {
      label: "Receive Daily Support",
      description: "We check in",
      content:
        "Through affirmations, journaling cues, and voice guidance — you'll feel seen, supported, and centered.",
    },
    {
      label: "Coaching and Events",
      description: "Join live events or 1:1 coaching",
      content:
        "Choose to go deeper with live group sessions or reflection calls with real people who understand you.",
    },
  ];

  return (
    <section
      id="hero"
      className="flex flex-col p-5 gap-1 w-full text-center items-center"
    >
      <Title size="xl" className="text-center">
        Your<span className="text-[#EC9377]"> Plan. </span>Your
        <span className="text-[#EC9377]"> Pace. </span>Your
        <span className="text-[#EC9377]"> Peace.</span>
      </Title>
      <Title size="sm" className="text-center">
        Our team includes wellness practitioners, therapists, and culturally
        aligned AI builders. We design with care and evidence-based practice.
      </Title>
      <div className="flex flex-col gap-5 p-10 w-[80%]">
        <Group justify="center" mt="xl">
          <ActionIcon
            size={42}
            variant="default"
            aria-label="Previous step"
            radius="xl"
            onClick={prevStep}
            disabled={active === 0}
          >
            <IoIosArrowBack />
          </ActionIcon>
          <ActionIcon
            size={42}
            aria-label="Next step"
            radius="xl"
            onClick={nextStep}
            disabled={active === 4}
          >
            <IoIosArrowForward />
          </ActionIcon>
        </Group>
        <Stepper active={active} onStepClick={setActive} orientation="vertical">
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              label={step.label}
              description={step.description}
            >
              <Paper p="xl" radius="lg" bg="rgba(255, 255, 255, 0.5)">
                {step.content}
              </Paper>
            </Stepper.Step>
          ))}
          <Stepper.Completed>
            <Paper p="xl" radius="lg" bg="rgba(255, 255, 255, 0.5)">
              Simple as that! Inara is your companion for healing, growth, and
              personalized wellness.
            </Paper>
          </Stepper.Completed>
        </Stepper>
      </div>
    </section>
  );
}
