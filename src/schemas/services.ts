import { defineType, defineField } from 'sanity';
import { portfolio } from './portfolio';

const categories = (portfolio.fields.find(
  (field) => field.name === 'category'
) as {
  options?: { list?: string[] };
}) || { options: { list: [] } };

export const services = defineType({
  name: 'serviceItem',
  title: 'Service Item',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: categories?.options?.list || [],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeTitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeTitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { category, media } = selection;
      return {
        title: category || 'Untitled',
        subtitle: category ? `Category: ${category}` : '',
        media,
      };
    },
  },
});
