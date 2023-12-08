"use client";

import { useForm } from "react-hook-form";
import { Input, Textarea, Button } from "@nextui-org/react";

export default function Form({ translation, button }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-5 bg-neutral-200 p-5 rounded-xl w-72 sm:w-96"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        variant="faded"
        type="text"
        label={translation.name}
        placeholder={translation.enterName}
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <Input
        variant="faded"
        type="text"
        label={translation.surname}
        placeholder={translation.enterSurname}
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <Input
        variant="faded"
        type="text"
        label={translation.email}
        placeholder={translation.enterEmail}
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <Textarea
        variant="faded"
        {...register("Message", { required: true, min: 1 })}
        label={translation.message}
        placeholder={translation.enterMessage}
      />
      <Button className="w-10 self-end" color="default">
        {button.send}
      </Button>
    </form>
  );
}
