import { defineType, defineField } from "sanity";

export const reviewsType = defineType({
  title: "Client Reviews",
  name: "reviews",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Client Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "localeString",
      title: "Review",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
  },
});
