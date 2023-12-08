import { defineType, defineField } from "sanity";

export const featuredImageType = defineType({
  title: "Featured Images",
  name: "featured",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "images.0",
    },
  },
});
