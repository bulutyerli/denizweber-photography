import { getDictionary } from '@/lib/dictionary';
import Form from '../components/Form';
import Instagram from '../components/Instagram';
import FadeInItem from '../components/FadeInItem';

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { form, button } = await getDictionary(lang);

  return (
    <div className="max-w-full flex flex-col gap-20 justify-center items-center pt-16 px-6">
      <h1 className="text-4xl font-whisper">{form.title}</h1>
      <Form translation={form} button={button} />
      <FadeInItem duration={'1.5s'}>
        <Instagram />
      </FadeInItem>
    </div>
  );
}
