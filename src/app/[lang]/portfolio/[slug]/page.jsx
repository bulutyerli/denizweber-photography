import client from "@/app/[lang]/client/client";
import { groq } from "next-sanity";
import Portfolio from "@/app/[lang]/components/Portfolio";
import { getDictionary } from "@/lib/dictionary";

export default async function Page({ params, params: { lang } }) {
  const { slug } = params;
  const { categories } = await getDictionary(lang);

  const images = await client.fetch(
    groq`
          *[_type == "portfolioItem" && category == $slug]{
            title,
            "imageUrl": image.asset->url,
            category,
          }`,
    { slug }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-hand">{categories[slug]}</h1>
      <Portfolio images={images} />
    </div>
  );
}
