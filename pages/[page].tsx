import Link from "next/link";

import { ArticleMeta } from "components";

import config from "services/config";
import { Page, get, getAllSlug } from "services/pages";

type SingleProps = { post: Page };

export default function Single({ post }: SingleProps) {
  return (
    <>
      <article data-clarity-region="article">
        <h1 className="post-item post-title">
          <Link href={"/post/" + post.slug}>{post.title}</Link>
        </h1>
        <div className="post-item post-meta">
          <ArticleMeta
            slug={post.slug}
            publishedAt={new Date(post.publishedAt)}
            lastUpdatedAt={new Date(post.lastUpdatedAt ?? post.publishedAt)}
          />
        </div>
        <div
          className="post-content markdown-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  let paths = getAllSlug().map((x) => "/" + x);
  if (config.ssgPartially) {
    paths = paths.slice(0, config.ssgPrerender);
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  const post = get(params.page);
  return {
    props: {
      post,
    },
  };
}
