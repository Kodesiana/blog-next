import Link from "next/link";

import { ArticleMeta } from "components";

import config from "services/config";
import { Article, get, getAllSlug, getRelatedPosts } from "services/posts";

type SingleProps = { post: Article };

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
            tags={post.tags}
            readingTime={post.readingTime}
            publishedAt={new Date(post.publishedAt)}
            lastUpdatedAt={new Date(post.lastUpdatedAt ?? post.publishedAt)}
          />
        </div>
        <div
          className="post-content markdown-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div
        className="post-content markdown-body"
        style={{ marginBottom: "20px" }}
      >
        <h3>Lihat Juga</h3>
        <ul>
          {getRelatedPosts(post.slug).map((post) => (
            <li key={post.slug}>
              <Link href={"/post/" + post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  let paths = getAllSlug().map((x) => "/post/" + x);
  if (config.ssgPartially) {
    paths = paths.slice(0, config.ssgPrerender);
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = get(params.slug);
  return {
    props: {
      post,
    },
  };
}
