import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    // TODO: Add image field
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/ /g, "-"),
      },
    },
  ],
});
