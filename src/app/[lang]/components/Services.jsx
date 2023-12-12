import client from "../../../lib/client";
import { groq } from "next-sanity";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import imageUrlBuilder from "@sanity/image-url";
import NextImage from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export default async function Services({ lang }) {
  const { serviceSection, navigation } = await getDictionary(lang);
  const builder = imageUrlBuilder(client);
  const services = await client.fetch(
    groq`
      *[_type == "serviceItem"]{
        category,
        "description": description.${lang},
        "title": title.${lang},
        "subtitle": subtitle.${lang},
        "imageUrl": image.asset->url,
        category,
      }`
  );

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <section className="flex flex-col gap-28">
      {services.map((service, i) => {
        const isReverse = i % 2;
        return (
          <Link
            className="group relative"
            href={`/${lang}/portfolio/${service.category}`}
            key={i}
          >
            <Card className="p-4 max-w-5xl group-hover:blur-sm">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4
                  className={`font-bold text-large tracking-wide text-foreground-700 whitespace-normal w-full ${
                    isReverse ? "text-right" : "text-left"
                  }`}
                >
                  {service.title}
                </h4>
                <small
                  className={`text-default-500 w-full ${
                    isReverse ? "text-right" : "text-left"
                  }`}
                >
                  {service.subtitle}
                </small>
              </CardHeader>
              <div className="overflow-visible py-2 gap-3">
                <div
                  className={`min-w-max md:self-center ${
                    isReverse ? "float-right" : "float-left"
                  } p-2`}
                >
                  <Image
                    as={NextImage}
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={urlFor(service.imageUrl).width(200).height(200).url()}
                    width={150}
                    height={150}
                  />
                </div>
                <p className="max-w-full px-3 text-foreground-600">
                  {service.description}
                </p>
              </div>
            </Card>
            <div className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden group-hover:block">
              <p className="text-center text-foreground-800">
                {serviceSection.link}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
