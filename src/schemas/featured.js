import { defineType, defineField } from "sanity";

export const featuredImageType = defineType({
  title: "Featured Images",
  name: "featured",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
