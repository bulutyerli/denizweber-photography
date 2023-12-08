import { getDictionary } from "@/lib/dictionary";
import Form from "../components/Form";

export default async function ContactPage({ params: { lang } }) {
  const { form, button } = await getDictionary(lang);

  return (
    <div className="max-w-full flex flex-col gap-20 justify-center items-center">
      <h1 className="text-4xl font-hand">{form.title}</h1>
      <Form translation={form} button={button} />
    </div>
  );
}
