import Image from "next/image";
import client from "../client/client";
import { groq } from "next-sanity";

export default async function BioPage({ params: { lang } }) {
  const data = await client.fetch(
    groq`
    *[_type == "aboutMe"][0]{
      title,
      "content": content.${lang},
      "imageUrl": image.asset->url,
    }`
  );

  const text = data.content.split("\n");

  return (
    <section className="flex flex-col md:flex-row gap-20 items-center h-full">
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
        <h1 className="text-4xl font-hand pb-5 text-secondary">{data.title}</h1>
        {text.map((p, i) => {
          return (
            <p className="indent-3" key={i}>
              {p}
            </p>
          );
        })}
      </div>
    </section>
  );
}
