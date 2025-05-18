import { articleSchema } from "./article-schema";
import { authorSchema } from "./author-schema";
import { tagType } from "./tag-schema";

export const schema = {
  types: [articleSchema, authorSchema, tagType],
};
