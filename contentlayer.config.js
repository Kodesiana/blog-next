import readingTime from "reading-time";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkOembed from "remark-oembed";
import remarkDirective from "remark-directive";
import remarkImage from "./.remark/image";

import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.md`,
  contentType: "markdown",
  fields: {
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    lastUpdatedAt: { type: "date", required: false },
    tags: { type: "list", required: true, of: { type: "string" } },
    draft: { type: "boolean", required: false },
    math: { type: "boolean", required: false },
    mermaid: { type: "boolean", required: false },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    summary: {
      type: "string",
      resolve: (doc) => {
        const cleanHtml = doc.body.html.replace(/<[^>]*>?/gm, "");
        let index = cleanHtml.indexOf(" ");
        for (let i = 0; i < 50; i++) {
          index = cleanHtml.indexOf(" ", index + 1);
        }

        return cleanHtml.substring(0, index);
      },
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.md`,
  contentType: "markdown",
  fields: {
    slug: { type: "string", required: true },
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    lastUpdatedAt: { type: "date", required: true },
    showInNavbar: { type: "boolean", required: true },
    draft: { type: "boolean", required: false },
    rss: { type: "boolean", required: false },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Page],
  date: { timezone: "Asia/Jakarta" },
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkOembed,
      remarkDirective,
      remarkImage,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
      rehypeKatex,
    ],
  },
});
