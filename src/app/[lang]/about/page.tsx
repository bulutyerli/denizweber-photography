import Image from 'next/image';
import client from '../../../lib/client';
import { groq } from 'next-sanity';
import FadeInItem from '../components/FadeInItem';
import { Link } from '@nextui-org/react';
import Instagram from '../components/Instagram';

interface Bio {
  title: string;
  content: string;
  imageUrl: string;
}

export default async function BioPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const data: Bio = await client.fetch(
    groq`
    *[_type == "aboutMe"][0]{
      title,
      "content": content.${lang},
      "imageUrl": image.asset->url,
    }`
  );

  const text = data.content.split('\n');

  return (
    <section className="flex flex-col items-center justify-between h-full gap-10 pt-16 px-6">
      <div className="flex flex-col xl:flex-row gap-5 items-center h-full">
        <div>
          <Image
            className="rounded-[50%] border border-secondary"
            src={data.imageUrl}
            alt="Deniz Weber Portfolio"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex flex-col gap-1 max-w-3xl items-center justify-center text-primary">
          <h1 className="text-4xl font-whisper pb-5 text-secondary">
            {data.title}
          </h1>
          <FadeInItem duration={'0.5s'}>
            {text.map((p, i) => {
              return (
                <p className="text-foreground-500 leading-loose pt-2" key={i}>
                  {p}
                </p>
              );
            })}
          </FadeInItem>
        </div>
      </div>
      <FadeInItem duration={'1.5s'}>
        <Link href={`/${lang}/contact`}>
          <p className="tracking-widest border-b-2 border-secondary pb-2 border-opacity-70 text-foreground-400">
            CONTACT ME
          </p>
        </Link>
      </FadeInItem>
      <FadeInItem duration={'1.5s'}>
        <Instagram />
      </FadeInItem>
    </section>
  );
}
