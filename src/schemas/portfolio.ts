import { defineType, defineField } from "sanity";

export const portfolio = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wedding", value: "wedding" },
          { title: "Baby", value: "baby" },
          { title: "Events", value: "events" },
          { title: "Products", value: "products" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
    },
    prepare(selection) {
      const { title, category, media } = selection;
      return {
        title: title || "Untitled",
        subtitle: category ? `Category: ${category}` : "",
        media,
      };
    },
  },
});
