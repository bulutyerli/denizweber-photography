'use client';

import { useForm } from 'react-hook-form';
import { Input, Textarea, Button } from '@nextui-org/react';
import { ButtonText, Translation, FormData } from '@/types/form.type';

interface FormProps {
  translation: Translation;
  button: ButtonText;
}

export default function Form({ translation, button }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

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
        {...register('firstName', { required: true, maxLength: 80 })}
      />
      <Input
        variant="faded"
        type="text"
        label={translation.surname}
        placeholder={translation.enterSurname}
        {...register('lastName', { required: true, maxLength: 100 })}
      />
      <Input
        variant="faded"
        type="text"
        label={translation.email}
        placeholder={translation.enterEmail}
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <Textarea
        variant="faded"
        {...register('message', { required: true, min: 1 })}
        label={translation.message}
        placeholder={translation.enterMessage}
      />
      <Button className="w-10 self-end" color="default">
        {button.send}
      </Button>
    </form>
  );
}
