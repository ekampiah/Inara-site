import {
  Title,
  Text,
  TextInput,
  Select,
  Checkbox,
  Button,
  List,
  ThemeIcon,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  identity: string;
  goals: string;
  consent: boolean;
}

export default function JoinBeta() {
  const initialFormState: FormFields = {
    name: "",
    email: "",
    age: AgeRange.Below24,
    identity: "",
    goals: "",
    consent: false,
  };

  const [data, setData] = useState<FormFields>(initialFormState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: initialFormState,
  });

  const handleSubmitForm = (data: FormFields) => {
    console.log(data);
  };

  return (
    <section id="join-beta" className="flex flex-col p-5 gap-1 w-full">
      <Title size="xl" className="text-center">
        Be the first to <span className="text-[#EC9377]"> heal </span>with Inara
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
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-5 md:w-[70%] w-full mx-auto"
      >
        <TextInput
          {...register("name", { required: "Name is required" })}
          label="Name"
          value={data?.name || ""}
          onChange={(event) =>
            setData({ ...data, name: event.currentTarget.value })
          }
          error={errors.name?.message}
        />
        <TextInput
          {...register("email", { required: "Email is required" })}
          label="Email"
          value={data?.email || ""}
          type="email"
          onChange={(event) =>
            setData({ ...data, email: event.currentTarget.value })
          }
          error={errors.email?.message}
        />

        <Select
          {...register("age", {
            required: "Age is required",
          })}
          label="Age"
          data={Object.entries(AgeRange).map(([value, label]) => ({
            value,
            label,
          }))}
          placeholder="Select your age range"
          onChange={(value) => setData({ ...data, age: value as AgeRange })}
          value={data.age || ""}
          error={errors.age?.message}
        />
        <Checkbox
          {...register("consent", {
            required: "Consent is required",
          })}
          label="I'm open to providing feedback after using Inara"
          checked={data.consent}
          onChange={(event) =>
            setData({ ...data, consent: event.currentTarget.checked })
          }
          error={errors.consent?.message}
        />
        <Button type="submit" className="bg-[#EC9377]">
          Join the Beta
        </Button>
      </form>
    </section>
  );
}
