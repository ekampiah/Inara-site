import { Button, Title } from "@mantine/core";
import FlipCard from "../components/FlipCard";

interface PlanDetails {
  caption: string;
  imageSrc: string;
  bulletPoints: string[];
  cta: { text: string; url: string };
}

export default function Plans() {
  const plans: PlanDetails[] = [
    {
      caption: "Free",
      imageSrc: "./assets/images/faint-red-sun.png",
      bulletPoints: [
        "Free to use",
        "1 mini plan per quarter",
        "5 AI prompts/month",
        "Limited meditations",
        "1 expert workshop/year",
      ],
      cta: { text: "Start for free", url: "/" },
    },
    {
      caption: "Starter - $4.99/month",
      imageSrc: "./assets/images/natty-lady.png",
      bulletPoints: [
        "Full access to all plans",
        "8 AI prompts/month",
        "Forum access",
        "15% off workshops",
      ],
      cta: { text: "Coming soon", url: "/" },
    },
    {
      caption: "Premium - $9.99/month or $69.99/year",
      imageSrc: "./assets/images/premium.png",
      bulletPoints: [
        "Unlimited access to all features",
        "Monthly group therapy sessions",
        "One free reflection call/month",
        "Workshop discounts",
        "Surprise perks",
      ],
      cta: { text: "Join Premium Waitlist", url: "/" },
    },
  ];

  return (
    <section
      id="plans"
      className="flex flex-col p-5 gap-1 w-full text-center items-center"
    >
      <Title size="xl" className="text-center">
        Designed for where <span className="text-[#EC9377]"> You </span>are
      </Title>
      <div className="flex flex-col md:flex-row gap-20 p-10">
        {plans.map((plan) => (
          <FlipCard
            key={plan.caption}
            imageSrc={plan.imageSrc}
            caption={plan.caption}
            detail={
              <div className="flex flex-col gap-5">
                <div>
                  <ul>
                    {plan.bulletPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <Button className="text-[#EC9377]">{plan.cta.text}</Button>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
