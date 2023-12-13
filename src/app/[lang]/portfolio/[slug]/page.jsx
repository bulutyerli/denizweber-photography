import client from "@/lib/client";
import { groq } from "next-sanity";
import Portfolio from "@/app/[lang]/components/Portfolio";
import { getDictionary } from "@/lib/dictionary";

export default async function Page({ params, params: { lang } }) {
  const { slug } = params;
  const { categories, button } = await getDictionary(lang);

  const images = await client.fetch(
    groq`
          *[_type == "portfolioItem" && category == $slug]{
            title,
            "imageUrl": image.asset->url,
            category,
          }`,
    {
      next: {
        revalidate: 10,
      },
    },
    { slug }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">
      <h1 className="text-4xl font-whisper text-foreground-600">
        {categories[slug]}
      </h1>
      <Portfolio
        translate={button}
        images={images.filter((image) => image.imageUrl)}
      />
    </div>
  );
}
