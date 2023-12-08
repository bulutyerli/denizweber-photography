import Image from "next/image";
import client from "./client/client";
import { groq } from "next-sanity";

export default async function Home({ params: { lang } }) {
  const featuredImages = await client.fetch(
    groq`
    *[_type == "featured"] {
      "imageUrls": images[].asset->url
    }`
  );

  const { imageUrls: images } = featuredImages[0];
  const options = { direction: "rtl", loop: true };

  return (
    <div className="h-full relative">
      <div className="absolute left-0 w-full h-full"></div>
    </div>
  );
}
