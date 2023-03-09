// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the blog post",
      required: true
    },
    overview: {
      type: "string",
      description: "A brief description of the blog post's content",
      required: true
    },
    date: {
      type: "date",
      description: "The blog post's publication date",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      description: "The blog post's slug, e.g. whats-new-in-javascript",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [BlogPost]
});
export {
  BlogPost,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BM67WXI3.mjs.map
