import client from "../../lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import ImageCarousel from "./components/ImageCarousel";
import ClientReview from "./components/ClientReview";
import Services from "./components/Services";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }) {
  const { reviewsSection, serviceSection } = await getDictionary(lang);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const featuredImages = await client.fetch(
    groq`
    *[_type == "featured"] {
      title,
      "imageUrl": image.asset->url
    }`
  );

  const images = featuredImages.map((image) => ({
    title: image.title,
    imageUrl: urlFor(image.imageUrl).width(1200).height(1600).url(),
  }));

  const reviews = await client.fetch(
    groq`
    *[_type == "reviews"] {
      title, 
      "content": content.${lang},
    }`
  );

  const greetMessage = await client.fetch(
    groq`
    *[_type == "greeting"][0] {
      "greet": greet.${lang}
    }`
  );

  return (
    <div className="flex flex-col gap-10 md:gap-5 md:grid md:grid-cols-12 justify-center">
      <div className="md:col-start-1 md:col-end-5">
        <ImageCarousel images={images}></ImageCarousel>
      </div>
      <div className="flex flex-col gap-32 m-2 md:col-start-5 md:col-end-13">
        <h1 className="flex flex-col justify-center text-5xl md:text-7xl md:h-96 lg:text-9xl text-center font-whisper text-foreground-800 mx-20">
          {greetMessage.greet}
        </h1>
        <div className="md:mx-auto">
          <h2 className="text-4xl font-whisper text-foreground-600 pb-6">
            {serviceSection.title}
          </h2>
          <Services lang={lang} />
        </div>
        <div className="md:max-w-xl lg:max-w-4xl cursor-pointer md:mx-auto mb-32">
          <h2 className="text-4xl font-whisper text-foreground-600 pb-6">
            {reviewsSection.title}
          </h2>
          <ClientReview reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
