import { defineType, defineField } from "sanity";

export const greetType = defineType({
  title: "Greeting",
  name: "greeting",
  type: "document",
  fields: [
    defineField({
      name: "greet",
      type: "localeTitle",
      title: "Greet Message",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
  },
});
