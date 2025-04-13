import {
  Title,
  Text,
  TextInput,
  Select,
  Checkbox,
  Button,
  List,
  ThemeIcon,
  MultiSelect,
} from "@mantine/core";
import CulturalIdentities from "../data/cultural-identities.json";
import WellnessGoals from "../data/wellness-goals.json";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RiStarSLine } from "react-icons/ri";

enum AgeRange {
  Below24 = "18-24",
  Below34 = "25-34",
  Below44 = "35-44",
  Below54 = "45-54",
  Over55 = "55+",
}

interface FormFields {
  name: string;
  email: string;
  age: AgeRange;
  culturalIdentity: string;
  goals: string[];
  consent: boolean;
}

export default function JoinBeta() {
  const initialFormState: FormFields = {
    name: "",
    email: "",
    age: AgeRange.Below24,
    culturalIdentity: "",
    goals: [],
    consent: false,
  };

  const [data, setData] = useState<FormFields>(initialFormState);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: initialFormState,
  });
  const [submitting, setSubmitting] = useState(false);

  const culturalIdentityOptions = CulturalIdentities.map(
    ({ value, label }) => ({
      value,
      label,
    })
  );

  const goalsOptions = WellnessGoals.map(({ value, label }) => ({
    value,
    label,
  }));

  const handleSubmitForm = () => {
    const action =
      "https://script.google.com/macros/s/AKfycbynNHtNCH43H4L6nDWW4pKgyfJci7loJiCkx5yV2G7nXRTq5uJ6AlO4rTEaSUB_zLPP/exec";
    const form = document.getElementById("signup-form");

    if (!form) return;
    setSubmitting(true);
    fetch(action, {
      method: "POST",
      body: new FormData(form as HTMLFormElement),
    })
      .then(() => {
        alert("We have received your submission! We'll be in touch soon.");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the form. Please try again later.");
      })
      .finally(() => {
        setSubmitting(false);
        setData(initialFormState);
        reset();
      });
  };

  return (
    <section id="join-beta" className="flex flex-col p-5 gap-1 w-full">
      <Title size="xl" className="text-center">
        Be the first to <span className="text-[#EC9377]"> heal </span>with{" "}
        <span className="text-[#EC9377]">Inara</span>
      </Title>
      <Text className="text-center">
        We're building something powerful — and personal. As a beta user, you'll
        shape the future of healing for our communities.
      </Text>
      <section id="beta-benefits" className="my-10 gap-5 flex flex-col">
        <Title size="lg">As a beta user, you will get:</Title>
        <List
          icon={
            <ThemeIcon radius="xl">
              <RiStarSLine />
            </ThemeIcon>
          }
          className="flex flex-col gap-3"
        >
          <List.Item>Early access to the app</List.Item>
          <List.Item>Free 30-day healing plan</List.Item>
          <List.Item>Invitation to our online user community</List.Item>
          <List.Item>Entry to monthly giveaways + expert sessions</List.Item>
        </List>
      </section>
      <form
        id="signup-form"
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-5 md:w-[70%] w-full mx-auto m-10"
      >
        <TextInput
          {...register("name", { required: "Name is required" })}
          label="Name"
          name="Name"
          value={data?.name || ""}
          onChange={(event) => {
            setData({ ...data, name: event.currentTarget.value });
            setValue("name", event.currentTarget.value);
            trigger("name");
          }}
          error={errors.name?.message}
        />
        <TextInput
          {...register("email", { required: "Email is required" })}
          label="Email"
          name="Email"
          value={data?.email || ""}
          type="email"
          onChange={(event) => {
            setData({ ...data, email: event.currentTarget.value });
            setValue("email", event.currentTarget.value);
            trigger("email");
          }}
          error={errors.email?.message}
        />
        <Select
          {...register("age", {
            required: "Age is required",
          })}
          label="Age"
          name="Age"
          data={Object.entries(AgeRange).map(([value, label]) => ({
            value,
            label,
          }))}
          placeholder="Select your age range"
          onChange={(value) => {
            setData({ ...data, age: value as AgeRange });
            setValue("age", value as AgeRange);
            trigger("age");
          }}
          value={data.age || ""}
          error={errors.age?.message}
        />
        <Select
          {...register("culturalIdentity", {
            required: "Cultural identity is required",
          })}
          label="Cultural Identity"
          name="Cultural Identity"
          data={culturalIdentityOptions.map(({ value, label }) => ({
            value,
            label,
          }))}
          placeholder="Select your cultural identity"
          onChange={(value) => {
            setData({ ...data, culturalIdentity: value as string });
            setValue("culturalIdentity", value as string);
            trigger("culturalIdentity");
          }}
          value={data.culturalIdentity || ""}
          error={errors.culturalIdentity?.message}
        />
        <Controller
          name="goals"
          control={control}
          rules={{ required: "Wellness goals is required" }}
          render={({ field }) => (
            <MultiSelect
              label="Wellness Goals (up to 3)"
              name="Wellness Goals"
              data={goalsOptions.map(({ value, label }) => ({
                value,
                label,
              }))}
              placeholder="Select your wellness goals"
              onChange={(value: string[]) => {
                if (value.length > 3) return;
                field.onChange(value);
                setData({ ...data, goals: value });
              }}
              value={field.value}
              error={errors.goals?.message}
            />
          )}
        />
        <Checkbox
          {...register("consent", {
            required: "Consent is required",
          })}
          label="I'm open to providing feedback after using Inara"
          checked={data.consent}
          onChange={(event) => {
            setData({ ...data, consent: event.currentTarget.checked });
            setValue("consent", event.currentTarget.checked);
            trigger("consent");
          }}
          error={errors.consent?.message}
        />
        <Button type="submit" className="bg-[#EC9377]" disabled={submitting}>
          {submitting ? "Submitting..." : "Join the Beta"}
        </Button>
      </form>
    </section>
  );
}
