import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Required to provide tag name`),
    }),
  ],
});
