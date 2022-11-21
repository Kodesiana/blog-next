/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').Link} Link
 */

import { visit } from "unist-util-visit";

/**
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function remarkImages() {
  return (tree, file) => {
    visit(tree, (node) => {
      // check if we are processing directive
      if (
        node.type !== "textDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "containerDirective"
      ) {
        return;
      }

      if (node.name !== "img") return;

      const data = node.data || (node.data = {});
      const attributes = node.attributes || {};
      const url = attributes.url;

      const isUnsplash = url.startsWith("https://source.unsplash.com");

      if (node.type === "textDirective")
        file.fail("Text directives for `img` is not supported", node);
      if (!url) file.fail("Missing image url", node);

      data.hName = "img";
      data.hProperties = {
        "data-src": url,
        class: "lazyload img-zoomable",
        alt: attributes.alt || "",
      };
    });
  };
}

export async function processUnsplash(/** @type {string} */ value) {
  // const imageId = value.split("/").pop();
  // const imageInfoResponse = await axios.get(
  //     `https://api.unsplash.com/photos/${imageId}`,
  //     {
  //         headers: {
  //             Accept: "application/json",
  //             "Accept-Version": "v1"
  //         }
  //     });
}
